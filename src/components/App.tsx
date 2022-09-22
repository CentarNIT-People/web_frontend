import {
    MantineProvider,
    ColorScheme,
    ColorSchemeProvider,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { AppRoutes } from "./routes";

export const App = () => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: "mantine-color-scheme",
        defaultValue: "light",
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    useHotkeys([["mod+J", () => toggleColorScheme()]]);
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{ colorScheme }}
            >
                <AppRoutes />
            </MantineProvider>
        </ColorSchemeProvider>
    );
};
