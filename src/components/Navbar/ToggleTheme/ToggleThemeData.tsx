import { IconSun, IconMoon } from "@tabler/icons";
import { Center, Box } from "@mantine/core";

export const data = [
    {
        value: "light",
        label: (
            <Center>
                <IconSun size={16} stroke={1.5} />
                <Box ml={10}>Light</Box>
            </Center>
        ),
    },
    {
        value: "dark",
        label: (
            <Center>
                <IconMoon size={16} stroke={1.5} />
                <Box ml={10}>Dark</Box>
            </Center>
        ),
    },
];
