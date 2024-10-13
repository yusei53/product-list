import Image from "next/image";
import { createUseStyles } from "react-jss";
import { Product } from "../endpoint";

type TProps = Omit<Product, "productCUID" | "description">;

const useStyles = createUseStyles({
  card: {
    maxWidth: "400px",
    "@media (max-width: 1200px)": {
      maxWidth: "350px",
    },
    "@media (max-width: 600px)": {
      maxWidth: "320px",
    },
  },
  image: {
    borderRadius: "10px",
    "@media (max-width: 1200px)": {
      width: "350px",
      height: "210px",
    },
    "@media (max-width: 600px)": {
      width: "320px",
      height: "180px",
    },
  },
  content: {
    marginLeft: "4px",
  },
  subtitle: {
    fontSize: "12px",
    marginTop: "2px",
    marginBottom: "4px",
  },
});

const ProductCard: React.FC<TProps> = ({
  image,
  title,
  subtitle,
  department,
  developer,
  skills,
}) => {
  const classes = useStyles();

  return (
    <article className={classes.card}>
      <Image
        src={image}
        alt={`画像`}
        width={400}
        height={240}
        priority
        className={classes.image}
      />
      <div className={classes.content}>
        <h3>{title}</h3>
        <p className={classes.subtitle}>{subtitle}</p>
        <p>
          {department} {developer}
        </p>
        <p>{skills.join(", ")}</p>
      </div>
    </article>
  );
};

export default ProductCard;
