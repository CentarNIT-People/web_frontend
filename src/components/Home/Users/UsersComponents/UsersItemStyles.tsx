import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    item: {
        width: "32%",
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        padding: theme.spacing.lg,
        borderRadius: theme.radius.md,
        margin: "2% 0%",
        [`@media (max-width: 1275px)`]: {
            width: "47%",
        },
        [`@media (max-width: 850px)`]: {
            width: "100%",
            margin: "5% 0%",
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
        boxShadow: theme.shadows.xs,
        padding: theme.spacing.xs,
    },
    skillstext: {
        color: theme.colors.gray[6],
    },
}));
