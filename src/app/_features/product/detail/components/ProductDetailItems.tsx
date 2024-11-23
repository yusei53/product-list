import { createUseStyles } from "react-jss";
import { DevelopType, Product } from "../endpoint";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Chips from "src/app/_components/chips/Chips";

type TProps = Omit<Product, "productCUID">;

const useStyles = createUseStyles({
  h1: {
    marginTop: "10px",
    fontSize: "24px",
    wordWrap: "break-word",
    // ProductDetailのcssにmarginBottomを当てても効かないのでここで当てる
    marginBottom: "10px",
    maxWidth: "580px",
    "@media (max-width: 600px)": {
      fontSize: "20px",
      maxWidth: "320px",
    },
  },
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

  // TODO: この関数は共通化しておきたい
  const parseDevelopType = (developType: DevelopType): string => {
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
      <h1 className={classes.h1}>{title}</h1>
      <div className={classes.content}>
        <h4>{subtitle}</h4>
        <h4>概要</h4>
        <p>{description}</p>
        <Chips label={parseDevelopType(developType)} isDevelopType />
        <h4>技術スタック</h4>
        {skills.map((skill) => (
          <Chips key={skill} label={skill} />
        ))}
        <h4>開発者</h4>
        <div>
          {developer.map((name) => (
            <span key={name}>
              {name}
              <br />
            </span>
          ))}
        </div>
        {productURL && (
          <>
            <h4>URL</h4>
            <Link
              href={`${productURL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {productURL}
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetailItems;
