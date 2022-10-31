import { RingProgress, Text, Space, Paper } from "@mantine/core";
import { useStyles } from "./UsersItemStyles";

interface SkillsInterface {
  skills: any;
}

export const UserSkills = (props: SkillsInterface) => {
  const { classes } = useStyles();
  return (
    <>
      {" "}
      {props.skills.length ? (
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
                    size={75}
                    thickness={5}
                    roundCaps
                    sections={[
                      {
                        value: item.percentage,
                        color: item.color,
                      },
                    ]}
                    label={
                      <Text
                        color={item.color}
                        weight={500}
                        align="center"
                        size={7}
                      >
                        {item.language ? item.language : "Undefined"}
                        <Space />
                        <Text
                          color={item.color}
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
      ) : (
        <div className={classes.skillsWrapper}>
          <h4 className={classes.skillsTitle}>This user has no skills</h4>
        </div>
      )}
    </>
  );
};
