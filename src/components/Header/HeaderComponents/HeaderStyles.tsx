import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    header: {
        display: "none",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        maxWidth: "100%",
        [`@media (max-width: 1000px)`]: {
            display: "flex",
        },
    },

    links: {
        width: "50%",
        marginRight: "12%",
        display: "flex",
        justifyContent: "center",
        [theme.fn.smallerThan("md")]: {
            display: "none",
        },
    },

    link: {
        display: "block",
        lineHeight: 1,
        padding: "8px 12px",
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).color,
        },
    },
    title: {
        fontSize: 30,
        color:
            theme.colorScheme === "dark"
                ? theme.colors.blue[4]
                : theme.colors.blue[7],
        fontWeight: 800,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        "&:hover": {
            background: "none",
        },
    },
    icon: {
        [theme.fn.smallerThan("xs")]: {
            display: "none",
        },
    },
}));
