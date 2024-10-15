"use client";
import { supabase } from "app/_lib/supabase";
import React, { useState } from "react";

const Page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // 状態変数をテーブル定義に合わせて修正
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [developer, setDeveloper] = useState("");
  const [skills, setSkills] = useState(""); // 新しい状態変数

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

      // ファイル名のユニーク化（オプション）
      const uniqueFileName = `${Date.now()}_${file.name}`;

      const { data, error } = await supabase.storage
        .from("product-image-buckets")
        .upload(`thumbnail/${uniqueFileName}`, file);

      if (error) {
        throw error;
      } else {
        // 画像の公開URLを取得
        const { data: urlData } = supabase.storage
          .from("product-image-buckets")
          .getPublicUrl(`thumbnail/${uniqueFileName}`);

        // 商品を作成
        await createProduct(urlData.publicUrl);
        alert("アップロードと商品作成が成功しました");
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
      // skillsをカンマ区切りの文字列から配列に変換
      const skillsArray = skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0);

      // バリデーション: スキルが少なくとも1つ以上存在するか
      if (skillsArray.length === 0) {
        alert("少なくとも1つのスキルを入力してください");
        return;
      }

      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          subtitle,
          description,
          department,
          developer,
          image: imageUrl,
          skills: skillsArray, // skillsを配列として送信
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
        placeholder="部門"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <input
        type="text"
        placeholder="開発者"
        value={developer}
        onChange={(e) => setDeveloper(e.target.value)}
      />
      <input
        type="text"
        placeholder="スキル（カンマ区切り）"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "アップロード中..." : "アップロード"}
      </button>
    </div>
  );
};

export default Page;
