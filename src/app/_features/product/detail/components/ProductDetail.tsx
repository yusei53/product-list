import { createUseStyles } from "react-jss";
import ProductDetailItems from "./ProductDetailItems";
import { Product } from "../endpoint";
import { FC } from "react";

type TProps = Omit<Product, "productCUID">;

const useStyles = createUseStyles({
  container: {
    marginTop: "64px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const ProductDetail: FC<TProps> = ({
  image,
  title,
  subtitle,
  description,
  skills,
  developType,
  productURL,
  developer,
}) => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <article>
        <ProductDetailItems
          image={image}
          title={title}
          subtitle={subtitle}
          description={description}
          skills={skills}
          developType={developType}
          productURL={productURL}
          developer={developer}
        />
      </article>
    </section>
  );
};

export default ProductDetail;
