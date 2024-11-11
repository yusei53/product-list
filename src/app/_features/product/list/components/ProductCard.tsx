import Image from "next/image";
import Link from "next/link";
import { createUseStyles } from "react-jss";
import { Product } from "../../detail/endpoint";
import Chips from "src/app/_components/chips/Chips";

type TProps = Omit<Product, "description" | "productURL">;

const useStyles = createUseStyles({
  card: {
    maxWidth: "380px",
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
  link: {
    color: "black",
    "&:hover": {
      color: "black",
      textDecoration: "underline",
    },
  },
  content: {
    marginLeft: "3px",
  },
  subtitle: {
    marginTop: "2px",
    marginBottom: "4px",
  },
});

const ProductCard: React.FC<TProps> = ({
  productCUID,
  image,
  title,
  subtitle,
  developer,
  developType,
  skills,
}) => {
  const classes = useStyles();

  const parseDevelopType = (developType: string) => {
    if (developType === "individual") {
      return "個人開発";
    } else return "チーム開発";
  };

  return (
    <article className={classes.card}>
      <Link href={`/product/${productCUID}`}>
        <Image
          src={image}
          alt={`画像`}
          width={380}
          height={220}
          priority
          className={classes.image}
        />
      </Link>
      <div className={classes.content}>
        <h3>
          <Link href={`/product/${productCUID}`} className={classes.link}>
            {title}
          </Link>
        </h3>
        <p className={classes.subtitle}>{subtitle}</p>
        <p>{developer}</p>
        <Chips label={parseDevelopType(developType)} isDevelopType />
        {skills.map((skill) => (
          <Chips key={skill} label={skill} />
        ))}
      </div>
    </article>
  );
};

export default ProductCard;
