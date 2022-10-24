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
import { useData } from "../../hooks/useData";
import { UsersItem } from "./Users/UsersComponents/UsersItem";

export const UsersHome = () => {
  const { data } = useData({ category: "users" });
  const { classes } = useStyles();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedUser, setSelctedUser] = useState(null);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  useEffect(() => {
    api.getUsers().then((res) => {
      setFilteredUsers(res);
      setUsers(res);
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

  // const rows = filteredUsers.map((user) => (
  //   <tr
  //     key={user.firstName}
  //     className={classes.userRow}
  //     style={{
  //       background: selectedUser?.full_name === user?.full_name && "whitesmoke",
  //     }}
  //     onClick={() => setSelctedUser(user)}
  //   >
  //     <td>
  //       <img src={user.avatar} className={classes.avatarImg} />
  //     </td>
  //     <td>{user.full_name}</td>
  //     <td>{user.email}</td>
  //   </tr>
  // ));

  return (
    // <div className={classes.home}>
    <>
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

          <Group>
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
        </div>
      </div>
      {/* {data.map((user) =>
        user.is_active === true ? <UsersItem key={user.id} item={user} /> : null
      )} */}
      {data.map((user) => {
        return <h1>{user.full_name}</h1>;
      })}
    </>

    //   <div className={classes.wrapper}>
    //     <div className={classes.selectedUser}>
    //       <img src={selectedUser?.avatar} className={classes.selectedAvatar} />
    //       <h2 className={classes.selectedFullname}>
    //         {selectedUser?.full_name}
    //       </h2>
    //       <h3 style={{ textAlign: "center", margin: "35px 0 " }}>
    //         {selectedUser?.job}
    //       </h3>
    //       <h3 style={{ textAlign: "center", margin: "35px 0 " }}>
    //         {selectedUser?.phone_number}
    //       </h3>
    //       <h3 style={{ textAlign: "center", margin: "35px 0 " }}>
    //         {selectedUser?.email}
    //       </h3>
    //       <h3 style={{ textAlign: "center", margin: "35px 0 " }}>
    //         {selectedUser?.github}
    //       </h3>
    //     </div>
    //     <Table className={classes.table}>
    //       <thead>
    //         <tr>
    //           <th>Image</th>
    //           <th>Fullname</th>
    //           <th>Email</th>
    //         </tr>
    //       </thead>
    //       <tbody>{rows}</tbody>
    //     </Table>
    //   </div>
    // </div>
  );
};
