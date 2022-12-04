import React, { useState } from "react";
import { HeaderItem } from "./HeaderItem";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";
import { useStyles } from "./HeaderStyles";
import { useLocation } from "react-router-dom";
import { Header, Container, Group} from "@mantine/core";


interface HeaderSimpleProps {
    links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
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
                <HeaderMenu/>
            </Container>
        </Header>
    );
}
