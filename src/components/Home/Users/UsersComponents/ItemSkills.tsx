import { RingProgress, Text, Space, Paper } from "@mantine/core";
import { useStyles } from "./UsersItemStyles";

interface SkillsInterface {
    skills: any;
}

export const UserSkills = (props: SkillsInterface) => {
    const { classes } = useStyles();
    return (
        <Paper className={classes.skillswrapper}>
            <Text className={classes.skillstext} size="xs">
                Top used:
            </Text>
            <Space h={5} />
            <div className={classes.skills}>
                {props.skills.length > 0 &&
                    props.skills.map((item: any) => {
                        return (
                            <RingProgress
                                key={item.language}
                                size={90}
                                thickness={5}
                                roundCaps
                                sections={[
                                    { value: item.percentage, color: "blue" },
                                ]}
                                label={
                                    <Text
                                        color="blue"
                                        weight={500}
                                        align="center"
                                        size={10}
                                    >
                                        {item.language
                                            ? item.language
                                            : "Undefined"}
                                        <Space />
                                        <Text
                                            color="blue"
                                            weight={800}
                                            align="center"
                                            size={10}
                                        >
                                            {item.percentage}%
                                        </Text>
                                    </Text>
                                }
                            />
                        );
                    })}
            </div>
        </Paper>
    );
};
