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
  detailsCard: {
    backgroundColor: "#F4EBD7",
    padding: "30px",
    borderRadius: "16px",
    "& ul": {
      listStyle: "none",
      padding: 0,
    },
    "& > ul": {
      display: "flex",
      alignItems: "start",
      justifyContent: "space-between",
      "& li": {
        textDecoration: "none",
        "& h2": {
          fontSize: "24px",
          lineHeight: "38px",
        },

        "& p": {
          margin: 0,
          fontSize: "12px",
          color: "#23262",
          marginBottom: "5px",
          "& strong": {
            color: "#014235",
            fontWeight: "800",
          },
        },
        "& .detailName": {
          fontSize: "12px",
          fontWeight: "600",
        },
        "& .detailUsername": {
          fontSize: "12px",
        },
        "& .detailTwitter": {
          color: "#014235",
          fontWeight: "600",
        },
        "& .detailBittrex": {
          color: "#014235",
          fontWeight: "600",
        },
      },
    },
  },
});
