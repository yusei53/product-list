import { createUseStyles } from "react-jss";
import { Product } from "@prisma/client";

type TProps = {
  developType: Product["developType"];
  skills: Product["skills"];
};

const useStyles = createUseStyles({
  developTypeContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  developType: {
    display: "inline-block",
    paddingBlock: "5px",
    paddingInline: "12px",
    border: "1px solid",
    borderRadius: "30px",
    borderColor: "gray",
    backgroundColor: "white",
    opacity: "0.7",
  },
  skill: {
    display: "inline-block",
    paddingBlock: "5px",
    paddingInline: "12px",
    border: "1px solid",
    borderRadius: "30px",
    borderColor: "gray",
    backgroundColor: "white",
    opacity: "0.7",
  },
});

const Chips: React.FC<TProps> = ({ skills = [""] }) => {
  const classes = useStyles();

  const skill = [...skills];

  return (
    <div className={classes.developTypeContainer}>
      {skill.map((skill, index) => (
        <span key={index} className={classes.skill}>
          {skill}
        </span>
      ))}
    </div>
  );
};

export default Chips;
