"use client";
import { useDetailStyles } from "app/_theme";
import Image from "next/image";
import { createUseStyles } from "react-jss";

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
    wordWrap: "break-word",
  },
  subtitle: {
    marginTop: "2px",
    marginBottom: "4px",
  },
});

const Page = () => {
  useDetailStyles();
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <article>
        <div>
          <Image
            src="/test.jpg"
            width={580}
            height={300}
            alt=""
            className={classes.image}
          />
          <div className={classes.content}>
            <h3>product</h3>
            <h4>概要</h4>
            <p>
              NaviTalkは、道案内をしながら目的地までの到達時間を計算する便利なアプリです。あいうえお、道案内をしながら目的地までの到達時間を計算する便利なアプリです。
            </p>
            <h4>概要</h4>
            <p>
              vnwsvkjnwnbvk;wgbnvd;rwgkp;nvdsrgprrnvsdw;vpbgw;jvnwsripugbnvs;jwbnv;swrpbnvj;wbms;kbnwripbnhsdkw;bkswr
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Page;
