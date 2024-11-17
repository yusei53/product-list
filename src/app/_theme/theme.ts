import { createUseStyles } from "react-jss";

export const useGlobalStyles = {
  "@global": {
    "h3, p": {
      marginBottom: 0,
    },
    h3: {
      fontSize: "18px",
    },
    p: {
      fontSize: "15px",
    },
  },
};

export const useRouteStyles = createUseStyles({
  ...useGlobalStyles,
});

export const useDetailStyles = createUseStyles({
  ...useGlobalStyles,
  "@global": {
    h4: {
      marginBottom: 0,
      fontSize: "16px",
    },
    p: {
      fontSize: "15px",
      letterSpacing: 0.6,
      lineHeight: 1.5,
      marginTop: 5,
    },
  },
});
