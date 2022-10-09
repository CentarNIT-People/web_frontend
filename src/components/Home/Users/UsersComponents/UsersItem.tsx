import { Avatar, Text, Paper, Space, Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { UserSkills } from "./ItemSkills";
import { useStyles } from "./UsersItemStyles";

type UserInfoType = {
    username:string,
    name:string,
    email:string,
    job:string,
    avatar:string,
    languages:{language:string, percentage:number}[]
}

interface UserInfoActionProps {
    item: UserInfoType;
}

export function UsersItem(props: UserInfoActionProps) {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const handleClick = (username: string) => {
        navigate(`/${username}`, { state: { item: props.item } });
    };
    return (
        <Paper withBorder className={classes.item}>
            <Avatar
                src={props.item.avatar}
                className={classes.avatar}
                color="blue"
            />
            <Text className={classes.name}>{props.item.name}</Text>
            <Text className={classes.desc}>
                {props.item.email} <Space /> {props.item.job}
            </Text>
            <UserSkills skills={props.item.languages} />
            <Button
                className={classes.button}
                onClick={() => {
                    handleClick(props.item.username);
                }}
            >
                Visit Profile
            </Button>
        </Paper>
    );
}
