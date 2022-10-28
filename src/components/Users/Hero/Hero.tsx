import {
  Container,
  Title,
  Button,
  Group,
  Text,
  Image,
  Anchor,
} from "@mantine/core";
import { useStyles } from "./HeroStyles";

export function Hero() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <span className={classes.highlight}>Centar NIT</span>
            </Title>
            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <Group mt={30}>
              <Anchor href="/register">
                <Button className={classes.control}>Get started</Button>
              </Anchor>
              <Anchor
                href="https://github.com/CentarNIT-People"
                target="_blank"
              >
                <Button variant="default" className={classes.control}>
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
