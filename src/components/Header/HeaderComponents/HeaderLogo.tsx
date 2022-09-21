import { Anchor, Button } from "@mantine/core";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
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
}));

export const HeaderLogo = () => {
    const { classes } = useStyles();
    return (
        <Anchor href="/">
            <Button variant="subtle" size="lg" className={classes.title}>
                CentarNIT
            </Button>
        </Anchor>
    );
};
