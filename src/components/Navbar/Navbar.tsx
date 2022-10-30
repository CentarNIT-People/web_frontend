import { useState } from "react";
import { Navbar, Group } from "@mantine/core";
import { useStyles } from "./NavbarComponents/NavbarStyles";
import { data } from "./NavbarComponents/NavbarData";
import { NavbarItem } from "./NavbarComponents/NavbarItem";
import { useLocation } from "react-router-dom";
import { IconPlus } from "@tabler/icons";

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
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <a href="/register" className={classes.link}>
                    <IconPlus className={classes.linkIcon} stroke={1.5} />
                    <span>Create account</span>
                </a>
            </Navbar.Section>
        </Navbar>
    );
}
