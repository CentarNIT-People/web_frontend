import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    icon: {
        [theme.fn.smallerThan("xs")]: {
            display: "none",
        },
    },
}));

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
