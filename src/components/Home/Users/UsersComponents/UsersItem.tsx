import { Avatar, Text, Paper, Space, Button, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { UserSkills } from "./ItemSkills";
import { useStyles } from "./UsersItemStyles";
interface UserInfoActionProps {
    item: any;
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
                {props.item.email} <Space /> {props.item.status}
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
            <div className={classes.info}>
                <Text>{props.item.country}</Text>
                <Image
                    src={"https://countryflagsapi.com/svg/" + props.item.flag}
                    width={32}
                />
                <Text>{props.item.city}</Text>
            </div>
        </Paper>
    );
}
