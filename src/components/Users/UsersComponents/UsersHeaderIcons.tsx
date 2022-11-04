import {
    IconBrandGithub,
    IconBrandTwitter,
    IconMoonStars,
    IconSun,
  } from "@tabler/icons";
import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { useStyles } from "./HomeStyles";


export const UsersHeaderIcons = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const icons = [
        {"link":"https://twitter.com/centarnit", "icon":IconBrandTwitter},
        {"link":"https://github.com/CentarNIT-People", "icon":IconBrandGithub}
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