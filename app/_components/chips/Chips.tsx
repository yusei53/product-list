import { createUseStyles } from "react-jss";
import { Product } from "@prisma/client";

type TProps = {
  developType?: Product["developType"];
  skills?: Product["skills"];
};

const useStyles = createUseStyles({
  card: {
    maxWidth: "380px",
    "@media (max-width: 600px)": {
      maxWidth: "320px",
    },
  },

  developtypeContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  developtype: {
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

const Chips: React.FC<TProps> = ({ developType = "", skills = [""] }) => {
  const classes = useStyles();

  const developTypes = developType.split(",").map((type) => type.trim());
  const skillList = skills
    .join(", ")
    .split(",")
    .map((skill) => skill.trim());

  return (
    <article className={classes.card}>
      <div className={classes.developtypeContainer}>
        {developTypes.map((type, index) => (
          <span key={`developType-${index}`} className={classes.developtype}>
            {type}
          </span>
        ))}
        {skillList.map((skill, index) => (
          <span key={`skill-${index}`} className={classes.developtype}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
};

export default Chips;
