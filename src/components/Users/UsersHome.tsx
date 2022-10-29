import { ActionIcon, Group, Input, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";
import api from "../../api";
import { useStyles } from "./HomeStyles";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconMoonStars,
  IconSearch,
  IconSun,
} from "@tabler/icons";
import { UsersItem } from "./Users/UsersComponents/UsersItem";
import { useMediaQuery } from "@mantine/hooks";

export const UsersHome = () => {
  const { classes } = useStyles();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedUser, setSelctedUser] = useState(null);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const matches = useMediaQuery("(min-width: 900px)");
  useEffect(() => {
    api.getUsers().then((res) => {
      setFilteredUsers(res);
      setUsers(res);
      console.log("UE", res);
    });
  }, []);

  useEffect(() => {
    const searchedUser = users.filter(
      (user) =>
        user?.full_name
          ?.toLowerCase()
          ?.startsWith(searchValue?.toLowerCase()) ||
        user?.email?.toLowerCase()?.startsWith(searchValue?.toLowerCase())
    );
    setFilteredUsers(searchedUser);
  }, [searchValue]);

  return (
    // <div className={classes.home}>
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
            onChange={(e) => setSearchValue(e.target.value)}
          />

          {matches && (
            <Group style={{ width: "135px" }}>
              <ActionIcon
                size="lg"
                component="a"
                href="https://github.com/CentarNIT-People"
                target="_blank"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                  color: theme.colors.blue[4],
                })}
              >
                {colorScheme === "dark" ? (
                  <IconBrandGithub size={18} />
                ) : (
                  <IconBrandGithub size={18} />
                )}
              </ActionIcon>
              <ActionIcon
                size="lg"
                component="a"
                href="https://twitter.com/centarnit"
                target="_blank"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                  color: theme.colors.blue[4],
                })}
              >
                {colorScheme === "dark" ? (
                  <IconBrandTwitter size={18} />
                ) : (
                  <IconBrandTwitter size={18} />
                )}
              </ActionIcon>
              <ActionIcon
                onClick={() => toggleColorScheme()}
                size="lg"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.yellow[5]
                      : theme.colors.blue[4],
                })}
              >
                {colorScheme === "dark" ? (
                  <IconSun size={18} />
                ) : (
                  <IconMoonStars size={18} />
                )}
              </ActionIcon>
            </Group>
          )}
        </div>
      </div>
      <div className={classes.usersWrapper}>
        {users.map((user) =>
          user.full_name.startsWith(searchValue) ||
          user.email.startsWith(searchValue) ? (
            <UsersItem key={user.id} item={user} />
          ) : null
        )}
      </div>
    </div>
  );
};
