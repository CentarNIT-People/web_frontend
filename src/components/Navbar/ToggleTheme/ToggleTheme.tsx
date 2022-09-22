import { useMantineColorScheme, SegmentedControl, Group } from "@mantine/core";
import { data } from "./ToggleThemeData";

export function ToggleTheme() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position="center">
            <SegmentedControl
                value={colorScheme}
                onChange={(value: "light" | "dark") => toggleColorScheme(value)}
                data={data}
            />
        </Group>
    );
}
