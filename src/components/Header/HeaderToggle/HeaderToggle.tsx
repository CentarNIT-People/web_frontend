import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { useStyles } from "../HeaderComponents/HeaderStyles";

export function ToggleTheme() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const { classes } = useStyles();

    return (
        <ActionIcon
            variant="outline"
            color={"blue"}
            onClick={() => toggleColorScheme()}
            className={classes.icon}
        >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={17} />}
        </ActionIcon>
    );
}
