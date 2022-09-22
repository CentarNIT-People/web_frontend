import { useState } from "react";
import { Header, Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useStyles } from "./HeaderStyles";
import { HeaderItem } from "./HeaderItem";
import { HeaderLogo } from "./HeaderLogo";
import { useLocation } from "react-router-dom";
import { ToggleTheme } from "../HeaderToggle/HeaderToggle";

interface HeaderSimpleProps {
    links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(useLocation().pathname);
    const { classes } = useStyles();

    const items = links.map((link) => (
        <HeaderItem
            key={link.label}
            link={link}
            active={active}
            setActive={setActive}
        />
    ));

    return (
        <Header height={60} mb={10}>
            <Container className={classes.header}>
                <HeaderLogo />
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>
                <ToggleTheme />
                <Burger
                    opened={opened}
                    onClick={toggle}
                    className={classes.burger}
                    size="sm"
                />
            </Container>
        </Header>
    );
}
