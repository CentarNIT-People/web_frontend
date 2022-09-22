import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    item: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        padding: theme.spacing.lg,
        borderRadius: theme.radius.md,
        margin: "2% 0%",
    },
    avatar: {
        borderRadius: 120,
        margin: "auto",
        width: 130,
        height: 130,
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
}));
