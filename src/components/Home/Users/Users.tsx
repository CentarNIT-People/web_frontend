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
          return (
            <UsersItem
              key={item.key}
              name={item.full_name}
              avatar={item.avatar}
              email={item.email}
              job={item.status}
              skills={item.languages}
              flag={item.flag}
              city={item.city}
              country={item.country}
            />
          );
        })}
    </div>
  );
};
