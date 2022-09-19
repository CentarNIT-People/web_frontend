import { Avatar, Text, Button, Paper } from "@mantine/core";
import { useStyles } from "./UsersItemStyles";

interface UserInfoActionProps {
    avatar: string;
    name: string;
    email: string;
    job: string;
}

export function UsersItem({ name, email, job, avatar }: UserInfoActionProps) {
    const { classes } = useStyles();
    return (
        <Paper withBorder className={classes.item}>
            <Avatar src={avatar} className={classes.avatar} color="blue" />
            <Text className={classes.name}>{name}</Text>
            <Text className={classes.desc}>
                {email} • {job}
            </Text>
            <Button variant="default" fullWidth mt="md">
                Send message
            </Button>
        </Paper>
    );
}
