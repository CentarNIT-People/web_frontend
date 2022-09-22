import { Avatar, Text, Paper, Space, Button, Image } from "@mantine/core";
import { UserSkills } from "./ItemSkills";
import { useStyles } from "./UsersItemStyles";
interface UserInfoActionProps {
    avatar: string;
    name: string;
    email: string;
    job: string;
    skills: any;
    flag: string;
    city: string;
    country: string;
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
            <div className={classes.info}>
                <Text>{props.country}</Text>
                <Image
                    src={"https://countryflagsapi.com/svg/" + props.flag}
                    width={32}
                />
                <Text>{props.city}</Text>
            </div>
        </Paper>
    );
}
