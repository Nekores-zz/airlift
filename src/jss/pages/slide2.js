import cover from "../../assets/cover1.png";
import cursor from "../../assets/cursor.png";

export const styleSheet = () => ({
  root: {
    backgroundImage: `url(${cover})`,
    height: "100vh",
    backgroundSize: "cover",
    textAlign: "center",
    backgroundRepeat: "no-repeat",
    cursor: `url(${cursor}), auto`,
    "& h2": {
      color: "white",
      fontSize: "40px",
      fontWeight: "500",
      letterSpacing: "0",
      lineHeight: "48px",
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
