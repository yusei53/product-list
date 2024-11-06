import React from "react";
import { useCreateProduct } from "app/_features/product/form/hooks";
import { createUseStyles } from "react-jss";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormFileInput from "./FormFileInput";

const useStyles = createUseStyles({
  formContainer: {
    maxWidth: 600,
    margin: "0 auto",
    marginTop: "40px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  },
  button: {
    width: "100%",
    maxWidth: 500,
    padding: "12px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
    "&:disabled": {
      backgroundColor: "#ccc",
      cursor: "not-allowed",
    },
  },
  title: {
    fontSize: "20px",
    marginBottom: "20px",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const ProductUploadForm: React.FC = () => {
  const classes = useStyles();
  const { isLoading, handleSubmit, errors, control, upload } =
    useCreateProduct();

  return (
    <div className={classes.formContainer}>
      <h2 className={classes.title}>成果物アップロード</h2>
      <FormInput
        control={control}
        name="title"
        label="タイトル"
        placeholder="タイトルを入力"
        errors={errors}
      />
      <FormInput
        control={control}
        name="subtitle"
        label="サブタイトル"
        placeholder="サブタイトルを入力"
        errors={errors}
      />
      <FormInput
        control={control}
        name="description"
        label="説明"
        placeholder="成果物の説明を入力"
        errors={errors}
        textarea
      />
      <FormInput
        control={control}
        name="developer"
        label="開発者"
        placeholder="開発者(カンマ区切り) 例: ゆせ,よっしー,ぴーなっつ"
        errors={errors}
      />
      <FormInput
        control={control}
        name="skills"
        label="スキル"
        placeholder="スキル(カンマ区切り) 例: React,TypeScript,Node.js"
        errors={errors}
      />
      <FormSelect
        control={control}
        name="developType"
        label="開発タイプ"
        errors={errors}
      />
      <FormInput
        control={control}
        name="productURL"
        label="プロダクトのURL"
        placeholder="プロダクトのURL（任意）"
        errors={errors}
      />
      <FormFileInput
        control={control}
        name="file"
        label="ファイルアップロード"
        errors={errors}
      />
      <button
        onClick={handleSubmit(upload)}
        disabled={isLoading}
        className={classes.button}
      >
        {isLoading ? "アップロード中..." : "アップロード"}
      </button>
    </div>
  );
};

export default ProductUploadForm;
