import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
} from "@mantine/core";
import React from "react";
import { IconHeart, IconBookmark, IconShare } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    width: "22%",
    margin: "1% 1%",
    "&:hover": {
      scale: "1.02",
      cursor: "pointer",
    },
    transition: "scale 0.3s ease",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

interface ArticleCardFooterProps {
  username: string;
  name: string;
  email: string;
  job: string;
  avatar: string;
  languages: { language: string; percentage: number }[];
}
interface UserInfoActionProps {
  item: ArticleCardFooterProps;
}

export function ArticleCardFooter(props: UserInfoActionProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder p="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={props.item.avatar} height={180} />
      </Card.Section>

      <Text weight={700} className={classes.title} mt="xs">
        {props.item.username}
      </Text>

      <Group mt="lg">
        <Avatar src={props.item.avatar} radius="sm" />
        <div>
          <Text weight={500}>{props.item.name}</Text>
          <Text size="xs" color="dimmed">
            {props.item.job}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            {props.item.email}
          </Text>
          <Group spacing={0}>
            <ActionIcon>
              <IconHeart size={18} color={theme.colors.red[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon>
              <IconBookmark
                size={18}
                color={theme.colors.yellow[6]}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon>
              <IconShare size={16} color={theme.colors.blue[6]} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
