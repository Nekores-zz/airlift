import cover from "../../assets/cover1.png";

export const styleSheet = () => ({
  root: {
    backgroundImage: `url(${cover})`,
    height: "100vh",
    backgroundSize: "cover",
    position: "relative",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    "& h2": {
      color: "white",
      fontSize: "40px",
      fontWeight: "500",
      letterSpacing: "0",
      lineHeight: "48px",
      position: "relative",
    },
    "& .overlay": {
      backgroundColor: "#2356d438",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
  },
});
