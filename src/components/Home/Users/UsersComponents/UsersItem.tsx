import { Avatar, Text, Paper, Space, Button } from "@mantine/core";
import { UserSkills } from "./ItemSkills";
import { useStyles } from "./UsersItemStyles";
interface UserInfoActionProps {
    avatar: string;
    name: string;
    email: string;
    job: string;
    skills: any;
}

export function UsersItem(props: UserInfoActionProps) {
    const { classes } = useStyles();
    return (
        <Paper withBorder className={classes.item}>
            <Avatar
                src={props.avatar}
                className={classes.avatar}
                color="blue"
            />
            <Text className={classes.name}>{props.name}</Text>
            <Text className={classes.desc}>
                {props.email} <Space /> {props.job}
            </Text>
            <UserSkills skills={props.skills} />
            <Button className={classes.button}>Visit Profile</Button>
        </Paper>
    );
}
