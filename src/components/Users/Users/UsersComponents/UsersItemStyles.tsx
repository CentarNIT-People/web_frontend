import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  item: {
    width: "20%",
    height: "380px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    "&:hover": {
      scale: "1.02",
      cursor: "pointer",
    },
    transition: "scale 0.3s ease",
    margin: "2% 2%",
    [`@media (max-width: 1275px)`]: {
      width: "47%",
    },
    [theme.fn.smallerThan("md")]: {
      width: "70%",
      margin: "5% 0%",

      transition: "scale ease-in-out 0.3s",
    },
  },
  avatar: {
    borderRadius: 120,
    margin: "auto",
    width: 80,
    height: 80,
    [theme.fn.smallerThan("md")]: {
      width: 130,
      height: 130,
    },
  },
  name: {
    textAlign: "center",
    fontSize: theme.fontSizes.lg,
    fontWeight: 600,
    marginTop: theme.spacing.md,
  },
  desc: {
    textAlign: "center",
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
  },
  skills: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  skillswrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    padding: theme.spacing.xs,
    [theme.fn.smallerThan("md")]: {
      padding: "0% 20%",
    },
  },
  skillstext: {
    color: theme.colors.gray[6],
  },
  button: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
    marginTop: 20,
    width: "100%",
  },
  info: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 30,
  },
  skillsWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "41%",
  },
  skillsTitle: {
    color: "#FF0000",
    marginTop: "50px",
  },
}));
