import { useState } from "react";
import { Header, Container, Group} from "@mantine/core";
import { useStyles } from "./HeaderStyles";
import { HeaderItem } from "./HeaderItem";
import { HeaderLogo } from "./HeaderLogo";
import { useLocation } from "react-router-dom";
import { ToggleTheme } from "../HeaderToggle/HeaderToggle";
import { HeaderMenu } from "./HeaderMenu";

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
                <ToggleTheme />
                <HeaderMenu/>
            </Container>
        </Header>
    );
}
