import {
    IconNews,
    IconAppWindow,
    IconNotebook,
} from "@tabler/icons";
import React from "react";
import { Burger,Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ToggleTheme } from "../../Navbar/ToggleTheme/ToggleTheme";

export const  HeaderMenu=()=> {
    const [opened, { toggle }] = useDisclosure(false);
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Burger
          opened={opened}
          onClick={toggle}
          size="md"
        />
        </Menu.Target>
        <Menu.Dropdown>
        <Menu.Label>CentarNIT</Menu.Label>
        <ToggleTheme/>
        <Menu.Item icon={<IconNews size={14} /> } component="a" href="/users">Users</Menu.Item>
        <Menu.Item icon={<IconNotebook size={14} />} component="a" href="/courses">Courses</Menu.Item>
        <Menu.Item icon={<IconNews size={14} /> } component="a" href="/news">News</Menu.Item>
        <Menu.Item icon={<IconAppWindow size={14} />} component="a" href="/projects">Projects</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
