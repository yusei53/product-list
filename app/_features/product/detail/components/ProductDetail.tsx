"use client";
import Image from "next/image";
import { createUseStyles } from "react-jss";
import ProductDetailItems from "./ProductDetailItems";

const useStyles = createUseStyles({
  container: {
    marginTop: "64px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: "10px",
    "@media (max-width: 600px)": {
      width: "320px",
      height: "180px",
    },
  },
  content: {
    maxWidth: "580px",
    "@media (max-width: 600px)": {
      maxWidth: "320px",
    },
    lineHeight: "1.6",
    wordWrap: "break-word",
  },
});

const Page = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <article>
        <Image
          src="/test.jpg"
          width={580}
          height={300}
          alt=""
          className={classes.image}
        />
        <ProductDetailItems
          title={""}
          subtitle={""}
          description={""}
          skills={[]}
          department={""}
          developer={""}
        />
      </article>
    </section>
  );
};

export default Page;
