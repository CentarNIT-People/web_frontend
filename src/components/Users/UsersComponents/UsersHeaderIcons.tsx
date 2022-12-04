import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
  } from "@tabler/icons";
import React from "react";
import { ActionIcon, Group } from "@mantine/core";
import { useStyles } from "./HomeStyles";


export const UsersHeaderIcons = () => {
    const icons = [
        {"link":"https://twitter.com/centarnit", "icon":IconBrandTwitter},
        {"link":"https://github.com/CentarNIT-People", "icon":IconBrandGithub},
        {"link":"https://www.linkedin.com/company/centarnit/", "icon":IconBrandLinkedin},
    ]
    const {classes} = useStyles()


    return (
        <Group className={classes.headerIcons}>
            {icons.map((item)=>{
                return <ActionIcon
                    key={item.link}
                    size="lg"
                    component="a"
                    href={item.link}
                    target="_blank"
                    sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                    color: theme.colors.blue[4],
                    })}
                >
                    <item.icon size={18} />
                </ActionIcon>
            })}
    </Group>    
)}