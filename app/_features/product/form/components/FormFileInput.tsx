import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { FormValues } from "./FormInput";
import { createUseStyles } from "react-jss";
import Image from "next/image";

type FormFileInputProps = {
  control: any;
  name: keyof FormValues;
  label: string;
  errors: any;
};

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    marginBlock: "20px",
  },
  fileInput: {
    display: "none",
  },
  label: {
    display: "inline-block",
    padding: "10px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "10px",
  },
  inputWrapper: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: "12px",
    marginTop: "4px",
    alignSelf: "flex-start",
  },
  previewImage: {
    maxWidth: "100%",
    maxHeight: "200px",
    marginTop: "10px",
    borderRadius: "8px",
  },
  buttonError: {
    backgroundColor: "red",
    borderColor: "red",
  },
  buttonNormal: {
    backgroundColor: "#007bff",
  },
});

const FormFileInput: React.FC<FormFileInputProps> = ({
  control,
  name,
  label,
  errors,
}) => {
  const classes = useStyles();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (files: FileList | null) => {
    if (files && files[0]) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <div className={classes.container}>
      <label
        htmlFor={name}
        className={`${classes.label} ${
          errors[name] ? classes.buttonError : classes.buttonNormal
        }`}
      >
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, ref } }) => (
          <input
            id={name}
            type="file"
            ref={ref}
            className={classes.fileInput}
            onChange={(e) => {
              handleFileChange(e.target.files);
              onChange(e.target.files);
            }}
          />
        )}
      />
      {previewUrl && (
        <Image src={previewUrl} alt="Preview" width={380} height={220} />
      )}
      {errors[name] && (
        <div className={classes.errorText}>{errors[name].message}</div>
      )}
    </div>
  );
};

export default FormFileInput;
