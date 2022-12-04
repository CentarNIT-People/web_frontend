import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({

    inner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "110px",
    },

    content: {
        maxWidth: "50%",

        [theme.fn.smallerThan("md")]: {
            maxWidth: "100%",
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 40,
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan("xs")]: {
            fontSize: 28,
        },
    },

    control: {
        fontSize: theme.spacing.md,
        borderRadius: theme.radius.xl,
        [theme.fn.smallerThan("xs")]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,

        [theme.fn.smallerThan("md")]: {
            display: "none",
        },
    },

    highlight: {
        position: "relative",
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.fn.variant({
                      variant: "filled",
                      color: theme.primaryColor,
                  }).background
                : theme.fn.variant({
                      variant: "light",
                      color: "blue",
                  }).hover,
        borderRadius: theme.radius.sm,
        padding: "4px 10px",
        margin: "0px 5px",
    },
    wrapper: {
        width: "100%",
    }
}));