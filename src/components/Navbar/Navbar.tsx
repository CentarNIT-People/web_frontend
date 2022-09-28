import { useState } from "react";
import { Navbar, Group } from "@mantine/core";
import { ToggleTheme } from "./ToggleTheme/ToggleTheme";
import { useStyles } from "./NavbarComponents/NavbarStyles";
import { data } from "./NavbarComponents/NavbarData";
import { NavbarItem } from "./NavbarComponents/NavbarItem";
import { useLocation } from "react-router-dom";

export function AppNavbar() {
    const { classes } = useStyles();
    const [active, setActive] = useState(useLocation().pathname);

    const links = data.map((item) => (
        <NavbarItem
            active={active}
            setActive={setActive}
            item={item}
            key={item.label}
        />
    ));

    return (
        <Navbar width={{ sm: 250 }} className={classes.wrapper}>
            <Navbar.Section grow>
                <Group className={classes.header} position="center">
                    <ToggleTheme />
                </Group>
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <></>
            </Navbar.Section>
        </Navbar>
    );
}
