export const styleSheet = (theme) => ({
  root: {
    width: "100%",
  },
  subRoot: {
    [theme.breakpoints.up(767)]: {
      height: "calc(100vh - 90px)",
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down(767)]: {
      paddingTop: "40px",
      paddingBottom: "40px",
    },
  },
  cardsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  notificationGroup: {
    "& h2": {
      fontSize: "24px",
      marginBottom: "10px",
    },
  },
});
