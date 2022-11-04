import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
  home: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "30px",
    alignItems: "flex-end",
  },
  app: {
    display: "flex",
    [`@media (max-width: 1000px)`]: {
      flexDirection: "column",
    },
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "15px",
    width: "96.5%",
    height: "80px",
    marginLeft: "20px",
    border:
      theme.colorScheme === "light"
        ? "1px solid #D3D3D3"
        : `1px solid ${theme.colors.dark[5]}`,

    borderRadius: "10px",
    position: "sticky",
  },
  searchWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "40%",
    height: "57px",
    borderRadius: "32px",
    color: "#228be6",
    marginTop: "30px",
    marginBottom: "30px",
    marginRight: "30px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    '@media (max-width: 1290px)': {
      width:"40%",
      marginLeft:"30px"
    },
    '@media (max-width: 800px)': {
      width:"100%",
      marginLeft:"30px"
    },
  },
  avatarImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  userRow: {
    ":hover": {
      background: "whitesmoke",
    },
    height: "60px",
    cursor: "pointer",
  },
  table: {
    width: "40%",
    display: "inline-block",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  input: {
    width: "50%",
    marginLeft: "10px",
    marginRight:"10px",
    '@media (max-width: 800px)': {
      width:"100%"
  },
  },
  homeContent: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
  usersWrapper: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
    marginTop: "15px",
  },
  headerIcons:{
    width:"50%",
    justifyContent:"center",
    display:"flex"
  }
}));
