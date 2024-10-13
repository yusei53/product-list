import { Grid } from "semantic-ui-react";
import ProductCard from "./ProductCard";
import { createUseStyles } from "react-jss";
import React from "react";
import { Product } from "../endpoint";

const useStyles = createUseStyles({
  container: {
    marginBlock: "72px !important",
    marginInline: "120px !important",
  },
  column: {
    display: "flex !important",
    alignItems: "center",
    justifyContent: "center",
    marginBlock: "24px !important",
  },
});

type TProps = {
  productList: Product[];
};

const ProductCardList: React.FC<TProps> = ({ productList }) => {
  const classes = useStyles();
  return (
    <Grid columns={2} stackable className={classes.container}>
      <Grid.Row>
        {productList.map((product) => (
          <React.Fragment key={product.productCUID}>
            <Grid.Column className={classes.column}>
              <ProductCard
                image={product.image}
                name={product.name}
                description={product.description}
                developer={product.developer}
              />
            </Grid.Column>
          </React.Fragment>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default ProductCardList;
