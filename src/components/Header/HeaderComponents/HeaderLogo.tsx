import React from "react";
import { useStyles } from "./HeaderStyles";
import { Anchor, Button } from "@mantine/core";


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
