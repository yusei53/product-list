import { useState } from "react";
import { getImageUrl, postImage, postProduct } from "./endpoint";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevelopType } from "../detail/endpoint";
import { useRouter } from "next/navigation";

export const createProductSchema = z.object({
    title: z.string()
      .min(1, { message: "タイトルを入力してください。" }),
    subtitle: z.string(),
    description: z.string()
      .min(1, { message: "説明を入力してください。" }),
    developer: z.string()
      .min(1, { message: "開発者を入力してください。" })
      .refine((developers) => developers.split(",").length > 0, { message: "少なくとも一人の開発者を入力してください。" }),
    skills: z.string()
      .min(1, { message: "スキルを入力してください。" })
      .refine((skills) => skills.split(",").length > 0, { message: "少なくとも一つのスキルを入力してください。" }),
    developType: z.string()
      .min(1, { message: "開発タイプを選択してください。" }),
    productURL: z.string()
      .min(0),
    file: z.custom<FileList | undefined>() // 他にも細かく設定できそう ref: https://zenn.dev/kaz_z/articles/zod-image-file
      .refine((files) => files !== undefined && files.length !== 0, { message: "ファイルを選択してください。" })
      .transform((files) => files?.[0]),
})

export type CreateProductSchemaType = z.infer<typeof createProductSchema>;

export const useCreateProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateProductSchemaType>({
    resolver: zodResolver(createProductSchema),
    defaultValues: {
        title: "",
        subtitle: "",
        description: "",
        developer: "",
        skills: "",
        developType: "individual",
        productURL: "",
        file: undefined,
    },
  })

  const upload = async (data: CreateProductSchemaType) => {
    try {
      setIsLoading(true);
      if (!data.file) {
        throw new Error("File is undefined");
      }

      const uniqueFileName = `${Date.now()}_${data.file.name}`;

      const error = await postImage(data.file, uniqueFileName);
      if (error) {
        throw error;
      }

      const imageUrl = await getImageUrl(uniqueFileName);

      const skillsArray = data.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0);

        const developerArray = data.developer
        .split(",")
        .map((developer) => developer.trim())
        .filter((developer) => developer.length > 0);

      const ok = await postProduct({
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        developer: developerArray,
        skills: skillsArray,
        developType: data.developType as DevelopType,
        productURL: data.productURL,
        image: imageUrl,
      })
      
      if (!ok) {
          throw new Error("Failed to create product");
      }

      router.push("/");
    } catch (e: any) {
      console.error("Failed to upload:", e.message);
      alert(`Failed to upload: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    handleSubmit,
    errors,
    control,
    upload,
  }
}