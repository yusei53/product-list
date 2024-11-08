import { createUseStyles } from "react-jss";

type TProps = {
  text: string | string[];
};

const useStyles = createUseStyles({
  Container: {
    display: "inline-flex",
    flexDirection: "row",
  },
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
});

const Chips: React.FC<TProps> = ({ text }) => {
  const classes = useStyles();
  const texts = String(text)
    .split(",")
    .map((type) => type.trim());
  return (
    <div className={classes.Container}>
      {texts.map((type, index) => (
        <div key={index} className={classes.text}>
          {type}
        </div>
      ))}
    </div>
  );
};

export default Chips;
