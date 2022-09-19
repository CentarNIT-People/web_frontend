import {
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    Image,
    Anchor,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import { useStyles } from "./HeroStyles";

export function Hero() {
    const { classes } = useStyles();
    return (
        <div>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            A <span className={classes.highlight}>modern</span>{" "}
                            Student and Blog management
                        </Title>
                        <Text color="dimmed" mt="md">
                            Build fully functional accessible web applications
                            faster than ever – Mantine includes more than 120
                            customizable components and hooks to cover you in
                            any situation
                        </Text>

                        <List
                            mt={40}
                            spacing="sm"
                            size="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl">
                                    <IconCheck size={12} stroke={2.5} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                <b>TypeScript based</b> – build type safe
                                applications, all components and hooks export
                                types
                            </List.Item>
                            <List.Item>
                                <b>Free and open source</b> – all packages have
                                MIT license, you can use this app in any project
                            </List.Item>
                            <List.Item>
                                <b>Easy to use</b> – no annoying ads and no
                                stupid features, productivity on the first place
                            </List.Item>
                        </List>

                        <Group mt={30}>
                            <Anchor href="/users">
                                <Button className={classes.control}>
                                    Get started
                                </Button>
                            </Anchor>
                            <Anchor href="https://github.com/CentarNIT-People">
                                <Button
                                    variant="default"
                                    className={classes.control}
                                >
                                    Source code
                                </Button>
                            </Anchor>
                        </Group>
                    </div>
                    <Image
                        src="https://raw.githubusercontent.com/mantinedev/ui.mantine.dev/master/components/HeroBullets/image.svg"
                        className={classes.image}
                    />
                </div>
            </Container>
        </div>
    );
}
