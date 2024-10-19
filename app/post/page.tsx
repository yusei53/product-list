"use client";
import { DevelopType } from "app/_features/product/detail/endpoint";
import { supabase } from "app/_lib/supabase";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// TODO: めんどいけどここリファクタする
// TODO: UseStateからReact Hook Formに変更する
const Page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [developer, setDeveloper] = useState("");
  const [skills, setSkills] = useState("");
  const [productURL, setProductURL] = useState("");
  const [developType, setDevelopType] = useState<DevelopType>("individual");

  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleUpload = async () => {
    try {
      setUploading(true);
      if (!file) {
        alert("ファイルを選択してください");
        setUploading(false);
        return;
      }

      const uniqueFileName = `${Date.now()}_${file.name}`;

      const { data, error } = await supabase.storage
        .from("product-image-buckets")
        .upload(`thumbnail/${uniqueFileName}`, file);

      if (error) {
        throw error;
      } else {
        const { data: urlData } = supabase.storage
          .from("product-image-buckets")
          .getPublicUrl(`thumbnail/${uniqueFileName}`);

        await createProduct(urlData.publicUrl);
        router.push("/");
      }
    } catch (e: any) {
      console.error("アップロード中にエラーが発生しました:", e.message);
      alert(`アップロード中にエラーが発生しました: ${e.message}`);
    } finally {
      setUploading(false);
    }
  };

  const createProduct = async (imageUrl: string) => {
    try {
      const skillsArray = skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0);

      if (skillsArray.length === 0) {
        alert("少なくとも1つのスキルを入力してください");
        return;
      }

      const developerArray = developer
        .split(",")
        .map((developer) => developer.trim())
        .filter((developer) => developer.length > 0);

      if (developerArray.length === 0) {
        alert("少なくとも1つの開発者を入力してください");
        return;
      }

      // TODO: mutation関数を使う
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          subtitle,
          description,
          developer: developerArray,
          skills: skillsArray,
          developType,
          productURL,
          image: imageUrl,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "商品作成中にエラーが発生しました"
        );
      }
    } catch (error: any) {
      console.error("商品作成中にエラーが発生しました:", error.message);
      alert(`商品作成中にエラーが発生しました: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>商品アップロード</h1>
      <input
        type="text"
        placeholder="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="サブタイトル"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="説明"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="開発者（カンマ区切り）"
        value={developer}
        onChange={(e) => setDeveloper(e.target.value)}
      />
      <input
        type="text"
        placeholder="スキル（カンマ区切り）"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <select
        value={developType}
        onChange={(e) => setDevelopType(e.target.value as DevelopType)}
      >
        <option value="individual">個人開発</option>
        <option value="team">チーム開発</option>
      </select>
      <input
        type="text"
        placeholder="プロダクトのURL(こいつはnullable)"
        value={productURL}
        onChange={(e) => setProductURL(e.target.value)}
      />

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "アップロード中..." : "アップロード"}
      </button>
    </div>
  );
};

export default Page;
