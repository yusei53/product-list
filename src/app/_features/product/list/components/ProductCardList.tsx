import { Grid } from "semantic-ui-react";
import ProductCard from "./ProductCard";
import { createUseStyles } from "react-jss";
import { Product } from "../../detail/endpoint";

const useStyles = createUseStyles({
  container: {
    marginBlock: "56px !important",
    marginInline: "160px !important",
    "@media (max-width: 1200px)": {
      margin: "32px !important",
    },
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
    <section>
      <Grid columns={2} stackable className={classes.container}>
        <Grid.Row>
          {productList.map((product) => (
            <Grid.Column key={product.productCUID} className={classes.column}>
              <ProductCard
                productCUID={product.productCUID}
                image={product.image}
                title={product.title}
                subtitle={product.subtitle}
                developer={product.developer}
                skills={product.skills}
                developType={product.developType}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </section>
  );
};

export default ProductCardList;
