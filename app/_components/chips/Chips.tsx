import { createUseStyles } from "react-jss";

type TProps = {
  label: string;
  isDevelopType?: boolean;
};

const useStyles = createUseStyles({
  text: {
    display: "inline-block",
    paddingBlock: "5px",
    paddingInline: "12px",
    border: "1px solid",
    borderRadius: "30px",
    marginRight: "8px",
    borderColor: "gray",
    backgroundColor: "white",
    opacity: "0.7",
  },
  developType: {
    backgroundColor: "red",
  },
});

const Chips: React.FC<TProps> = ({ label, isDevelopType }) => {
  const classes = useStyles();

  return (
    <div
      className={`${classes.text} ${isDevelopType ? classes.developType : ""}`}
    >
      {label}
    </div>
  );
};

export default Chips;
