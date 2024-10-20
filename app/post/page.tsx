"use client";
import { useCreateProduct } from "app/_features/product/form/hooks";
import React from "react";
import { Controller } from "react-hook-form";

// TODO: めんどいけどここリファクタする
// TODO: UseStateからReact Hook Formに変更する
const Page = () => {
  const {
    isLoading,
    handleSubmit,
    errors,
    control,
    upload,
  } = useCreateProduct();

  return (
    <div>
      <h1>商品アップロード</h1>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, value } }) => (
          <input
            id="title"
            type="text"
            placeholder="タイトル"
            value={value}
            onChange={onChange}
          />
        )}
      />
      {
        errors.title && <div>{errors.title.message}</div>
      }
      <Controller
        control={control}
        name="subtitle"
        render={({ field: { onChange, value } }) => (
          <input
            id="subtitle"
            type="text"
            placeholder="サブタイトル"
            value={value}
            onChange={onChange}
          />
        )}
      />
      {
        errors.subtitle && <div>{errors.subtitle.message}</div>
      }
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <input
            id="description"
            type="text"
            placeholder="説明"
            value={value}
            onChange={onChange}
          />
        )}
      />
      {
        errors.description && <div>{errors.description.message}</div>
      }
      <Controller
        control={control}
        name="developer"
        render={({ field: { onChange, value } }) => (
          <input
            id="developer"
            type="text"
            placeholder="開発者（カンマ区切り）"
            value={value}
            onChange={onChange}
          />
        )}
      />
      {
        errors.developer && <div>{errors.developer.message}</div>
      }
      <Controller
        control={control}
        name="skills"
        render={({ field: { onChange, value } }) => (
          <input
            id="skills"
            type="text"
            placeholder="スキル（カンマ区切り）"
            value={value}
            onChange={onChange}
          />
        )}
      />
      {
        errors.skills && <div>{errors.skills.message}</div>
      }
      <Controller
        control={control}
        name="developType"
        render={({ field: { onChange, value } }) => (
          <select value={value} onChange={onChange}>
            <option value="individual">個人開発</option>
            <option value="team">チーム開発</option>
          </select>
        )}
      />
      {
        errors.developType && <div>{errors.developType.message}</div>
      }
      <Controller
        control={control}
        name="productURL"
        render={({ field: { onChange, value } }) => (
          <input
            id="productURL"
            type="text"
            placeholder="プロダクトのURL(こいつはnullable)"
            value={value}
            onChange={onChange}
          />
        )}
      />
      {
        errors.productURL && <div>{errors.productURL.message}</div>
      }
      <Controller
        control={control}
        name="file"
        render={({ field: { onChange, value } }) => (
          <input
            id="file"
            type="file"
            onChange={(e) => onChange(e.target.files)}
          />
        )}
      />
      {
        errors.file && <div>{errors.file.message}</div>
      }

      <button onClick={handleSubmit(upload)} disabled={isLoading}>
        {isLoading ? "アップロード中..." : "アップロード"}
      </button>
    </div>
  );
};

export default Page;
