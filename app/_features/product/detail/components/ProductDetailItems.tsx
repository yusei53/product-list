import { createUseStyles } from "react-jss";
import { DevelopType, Product } from "../endpoint";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type TProps = Omit<Product, "productCUID">;

const useStyles = createUseStyles({
  content: {
    wordWrap: "break-word",
    // ProductDetailのcssにmarginBottomを当てても効かないのでここで当てる
    marginBottom: "64px",
    maxWidth: "580px",
    "@media (max-width: 600px)": {
      maxWidth: "320px",
    },
  },
  image: {
    borderRadius: "10px",
    "@media (max-width: 600px)": {
      width: "320px",
      height: "180px",
    },
  },
});

const ProductDetailItems: FC<TProps> = ({
  image,
  title,
  subtitle,
  description,
  skills,
  developer,
  developType,
  productURL,
}) => {
  const classes = useStyles();

  const renderDevelopType = (developType: DevelopType): string => {
    if (developType === "individual") {
      return "個人開発";
    } else {
      return "チーム開発";
    }
  };

  return (
    <>
      <Image
        src={image}
        width={580}
        height={300}
        alt={`${title}の画像`}
        className={classes.image}
      />
      <div className={classes.content}>
        <h3>{title}</h3>
        <span>{renderDevelopType(developType)}</span>
        <h4>{subtitle}</h4>
        <h4>概要</h4>
        <p>{description}</p>
        <h4>技術スタック</h4>
        <p>{skills}</p>
        <h4>開発者</h4>
        <p>{developer}</p>
        {productURL && (
          <>
            <h4>URL</h4>
            <Link href={`${productURL}`}>{productURL}</Link>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetailItems;
