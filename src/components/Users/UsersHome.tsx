import { Input, Table } from "@mantine/core";
import { useEffect, useState } from "react";
import api from "../../api";
import { useStyles } from "./HomeStyles";

export const UsersHome = () => {
  const { classes } = useStyles();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedUser, setSelctedUser] = useState(null);
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

  const rows = filteredUsers.map((user) => (
    <tr
      key={user.firstName}
      className={classes.userRow}
      style={{
        background: selectedUser?.full_name === user?.full_name && "whitesmoke",
      }}
      onClick={() => setSelctedUser(user)}
    >
      <td>
        <img src={user.avatar} className={classes.avatarImg} />
      </td>
      <td>{user.full_name}</td>
      <td>{user.email}</td>
    </tr>
  ));

  return (
    <div className={classes.home}>
      <div className={classes.searchWrapper}>
        <Input
          placeholder="Search users"
          radius="md"
          size="md"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.selectedUser}>
          <img src={selectedUser?.avatar} className={classes.selectedAvatar} />
          <h2 className={classes.selectedFullname}>
            {selectedUser?.full_name}
          </h2>
          <h3 style={{ textAlign: "center", margin: "35px 0 " }}>
            {selectedUser?.job}
          </h3>
          <h3 style={{ textAlign: "center", margin: "35px 0 " }}>
            {selectedUser?.phone_number}
          </h3>
          <h3 style={{ textAlign: "center", margin: "35px 0 " }}>
            {selectedUser?.email}
          </h3>
          <h3 style={{ textAlign: "center", margin: "35px 0 " }}>
            {selectedUser?.github}
          </h3>
        </div>
        <Table className={classes.table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Fullname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
};
