import React from "react";
import { Controller } from "react-hook-form";
import { FormValues } from "./FormInput";
import { createUseStyles } from "react-jss";

type FormSelectProps = {
  control: any;
  name: keyof FormValues;
  label: string;
  errors: any;
};

const options = [
  { key: "individual", value: "individual", text: "個人開発" },
  { key: "team", value: "team", text: "チーム開発" },
];

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  selectField: {
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
  selectFieldError: {
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

const FormSelect: React.FC<FormSelectProps> = ({
  control,
  name,
  label,
  errors,
}) => {
  const classes = useStyles();
  const isError = Boolean(errors[name]);

  return (
    <div className={classes.container}>
      <label className={classes.label}>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select
            {...field}
            className={`${classes.selectField} ${
              isError ? classes.selectFieldError : ""
            }`}
          >
            <option value="">選択してください</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        )}
      />
      {isError && (
        <div className={classes.errorText}>{errors[name].message}</div>
      )}
    </div>
  );
};

export default FormSelect;
