import {Input } from "@mantine/core";
import { useEffect, useState } from "react";
import { useStyles } from "./UsersComponents/HomeStyles";
import { IconSearch } from "@tabler/icons";
import { UsersItem } from "./UsersComponents/UsersItem";
import { useData } from "../../hooks/useData";
import { UsersHeaderIcons } from "./UsersComponents/UsersHeaderIcons";

export const UsersHome = () => {
  const { classes } = useStyles();
  const {data} = useData({category:"users"})
  const filteredUsers = [];
  const [searchValue, setSearchValue] = useState("");
  

  useEffect(() => {
    const searchedUser = data.filter(
      (user) =>
        user?.full_name
          ?.toLowerCase()
          ?.startsWith(searchValue?.toLowerCase()) ||
        user?.email?.toLowerCase()?.startsWith(searchValue?.toLowerCase())
    );
    filteredUsers.push(searchedUser)
  }, [searchValue]);

  return (
    <div className={classes.homeContent}>
      <div className={classes.headerWrapper}>
        <div className={classes.searchWrapper}>
          <Input
            icon={<IconSearch size={20} style={{ paddingTop: "4px" }} />}
            className={classes.input}
            placeholder="Search users"
            radius="xl"
            size="md"
            value={searchValue}
            onChange={(e:any) => setSearchValue(e.target.value)}
          />
          <UsersHeaderIcons/>
        </div>
      </div>
      <div className={classes.usersWrapper}>
        {data.map((user) =>
        user.is_active && (
          user.full_name.startsWith(searchValue) ||
          user.email.startsWith(searchValue) || user.username.startsWith(searchValue) ? (
            <UsersItem key={user.username} item={user} />
          ) : null
        ))}
      </div>
    </div>
  );
};
