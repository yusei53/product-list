import { createUseStyles } from "react-jss";
import { Product } from "../endpoint";
import { FC } from "react";

type TProps = Omit<Product, "productCUID" | "image">;

const useStyles = createUseStyles({
  content: {
    maxWidth: "580px",
    "@media (max-width: 600px)": {
      maxWidth: "320px",
    },
    wordWrap: "break-word",
  },
});

const ProductDetailItems: FC<TProps> = ({
  title,
  subtitle,
  description,
  skills,
  department,
  developer,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <h4>概要</h4>
      <p>{description} </p>
      <h4>技術スタック</h4>
      <p>{skills} </p>
      <h4>開発者</h4>
      <p>
        {department} {developer}
      </p>
    </div>
  );
};

export default ProductDetailItems;
