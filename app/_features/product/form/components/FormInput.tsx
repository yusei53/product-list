import React from "react";
import { Controller } from "react-hook-form";
import { createUseStyles } from "react-jss";

export type FormValues = {
  title: string;
  subtitle: string;
  description: string;
  developer: string;
  skills: string;
  developType: "individual" | "team";
  productURL?: string;
  file: FileList;
};

type FormInputProps = {
  control: any;
  name: keyof FormValues;
  label: string;
  placeholder: string;
  errors: any;
  type?: string;
  textarea?: boolean;
};

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    marginBottom: "10px",
    "&:focus": {
      borderColor: "#007bff",
      outline: "none",
    },
  },
  inputFieldError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: "12px",
    marginTop: "4px",
    alignSelf: "flex-start",
  },
  label: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginBottom: "4px",
  },
});

const FormInput: React.FC<FormInputProps> = ({
  control,
  name,
  label,
  placeholder,
  errors,
  type = "text",
  textarea = false,
}) => {
  const classes = useStyles();
  const isError = Boolean(errors[name]); // エラーがあるか確認

  return (
    <div className={classes.container}>
      <label className={classes.label}>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          textarea ? (
            <textarea
              {...field}
              placeholder={placeholder}
              className={`${classes.inputField} ${
                isError ? classes.inputFieldError : ""
              }`}
              rows={4}
            />
          ) : (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`${classes.inputField} ${
                isError ? classes.inputFieldError : ""
              }`}
            />
          )
        }
      />
      {isError && (
        <div className={classes.errorText}>{errors[name].message}</div>
      )}
    </div>
  );
};

export default FormInput;
