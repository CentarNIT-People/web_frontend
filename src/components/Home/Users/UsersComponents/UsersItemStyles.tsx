import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    item: {
        width: "30%",
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        padding: theme.spacing.lg,
        borderRadius: theme.radius.md,
        margin: "2% 0%",
        [`@media (max-width: 1275px)`]: {
            width: "47%",
        },
        [theme.fn.smallerThan("sm")]: {
            width: "90%",
            margin: "5% 0%",

            transition: "scale ease-in-out 0.3s",

            "&:hover": {
                scale: "1.01",
                cursor: "pointer",
            },
        },

    },
    avatar: {
        borderRadius: 120,
        margin: "auto",
        width: 80,
        height: 80,
        [theme.fn.smallerThan("md")]: {
            width:130,
            height:130
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
        [`@media (max-width: 850px)`]: {
            padding: "0% 20%",
        },
    },
    skillstext: {
        color: theme.colors.gray[6],
    },
    button: {
        [theme.fn.smallerThan("md")]: {
            display:"none"
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
}));
