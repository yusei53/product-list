import { createUseStyles } from "react-jss";

export const useGlobalStyles = createUseStyles({
  "@global": {
    h3: {
      marginBottom: 0,
    },
    p: {
      marginBottom: 0,
      fontSize: "13px",
    },
  },
});
