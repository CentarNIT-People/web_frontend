import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        maxWidth: "100%",
        [theme.fn.smallerThan("md")]: {
            justifyContent: "space-between",
        },
    },

    links: {
        width: "50%",
        marginRight: "11.5%",
        display: "flex",
        justifyContent: "center",
        [theme.fn.smallerThan("md")]: {
            display: "none",
        },
    },

    burger: {
        [theme.fn.largerThan("xs")]: {
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
}));
