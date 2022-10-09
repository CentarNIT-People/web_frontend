import { Anchor, Button } from "@mantine/core";
import { useStyles } from "./HeaderStyles";

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
