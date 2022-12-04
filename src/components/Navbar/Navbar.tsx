import { Navbar } from "@mantine/core";
import React, { useState } from "react";
import { IconPlus } from "@tabler/icons";
import { useLocation } from "react-router-dom";
import { data } from "./NavbarComponents/NavbarData";
import { NavbarItem } from "./NavbarComponents/NavbarItem";
import { useStyles } from "./NavbarComponents/NavbarStyles";
import { SegmentedToggle } from "./ToggleTheme/SegmentedToggle";

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
            <SegmentedToggle/>  
            <Navbar.Section grow className={classes.items}>
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
