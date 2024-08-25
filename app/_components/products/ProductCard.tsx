import { Product } from "@types";
import Image from "next/image";
import { createUseStyles } from "react-jss";

type TProps = Omit<Product, "id">;

const useStyles = createUseStyles({
  card: {
    maxWidth: "400px",
  },
  image: {
    borderRadius: "10px",
  },
  developer: {
    fontSize: "12px",
    marginTop: "2px",
    marginBottom: "4px",
  },
});

const ProductCard: React.FC<TProps> = ({
  name,
  description,
  developer,
  image,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <Image
        src={image}
        alt={`画像`}
        height={240}
        width={400}
        priority
        className={classes.image}
      />
      <div>
        <h3>{name}</h3>
        <p className={classes.developer}>{developer}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
