import { UsersItem } from "./UsersComponents/UsersItem";
import { useStyles } from "./UsersStyles";
import { useData } from "../../../hooks/useData";

export const Users = () => {
    const { data } = useData({ category: "users" });

    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            {data.length > 0 &&
                data.map((item) => {
                    return <UsersItem key={item.key} item={item} />;
                })}
        </div>
    );
};
