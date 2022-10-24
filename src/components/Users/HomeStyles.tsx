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
    width: "100%",
    height: "80px",
    marginLeft: "20px",
    border:
      theme.colorScheme === "light"
        ? "1px solid #D3D3D3"
        : `1px solid ${theme.colors.blue[6]}`,

    // opacity: "0.3",
    borderRadius: "10px 0 0 10px ",
    // backgroundColor:
    //   theme.colorScheme === "light"
    //     ? "rgba(231, 245, 255, 1)"
    //     : theme.colors.dark[5],

    position: "sticky",
  },
  searchWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "32%",
    height: "57px",
    borderRadius: "32px",
    color: "#228be6",
    marginTop: "30px",
    marginBottom: "30px",
    marginRight: "30px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
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
  selectedUser: {
    width: "40%",
    height: "500px",
    marginLeft: "20px",
    borderRadius: "13px",
    boxShadow: "1px 1px 10px 3px whitesmoke",
    padding: "25px",
  },
  selectedAvatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginLeft: "10px",
  },
  selectedFullname: {
    display: "inline-block",
    marginLeft: "70px",
    fontSize: "25px",
  },
  input: {
    width: "199px",
    marginLeft: "0",
    // backgroundColor: theme.fn.variant({
    //   variant: "light",
    //   color: theme.primaryColor,
    // }).background,
  },
}));
