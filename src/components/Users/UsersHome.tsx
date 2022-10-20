import { Hero } from "./Hero/Hero";
import { useStyles } from "./HomeStyles";
import { Users } from "./Users/Users";

export const UsersHome = () => {
    const { classes } = useStyles();
    return (
        <div className={classes.home}>
            <Hero />
            <Users />
        </div>
    );
};
