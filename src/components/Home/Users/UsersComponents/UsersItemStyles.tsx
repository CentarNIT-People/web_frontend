import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    item: {
        width: "32%",
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        padding: theme.spacing.lg,
        borderRadius: theme.radius.md,
        transition: "all ease-in-out 0.3s",
        margin: "3% 0%",
        [`@media (max-width: 1275px)`]: {
            width: "47%",
        },
        [`@media (max-width: 850px)`]: {
            width: "100%",
            margin: "5% 0%",
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
        [`@media (max-width: 850px)`]: {
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
        marginTop: 20,
    },
}));
