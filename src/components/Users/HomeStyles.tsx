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
  searchWrapper: {
    width: "36%",
    marginBottom: "30px",
    marginRight: "50px",
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
}));
