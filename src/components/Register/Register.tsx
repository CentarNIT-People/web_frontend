import { useStyles } from "./RegisterStyles";
import { useForm } from "@mantine/form";
import { TextInput, NumberInput, Button,PasswordInput } from "@mantine/core";
import axios from "axios";
export const Register = () => {
    const { classes } = useStyles();
    const form = useForm({
        initialValues: {
            username: "",
            password: "",
            full_name: "",
            email: "",
            github: "",
            age: "",
            job: "",
            // --------------
            status:"on hold",
            role: "Student",
            avatar: "string",
            languages: ["string"],
            flag: "string",
            country: "string",
            city: "string",
            is_active: false,
        },
    });

    return (
        <div className={classes.form}>
            <div className={classes.wrapper}>
                <div className={classes.child}>
                    <TextInput
                        label="Username"
                        placeholder="Username"
                        {...form.getInputProps("username")}
                        size="md"
                        withAsterisk
                    />
                    <PasswordInput
                        mt={40}
                        label="Password"
                        placeholder="Password"
                        {...form.getInputProps("password")}
                        size="md"
                        withAsterisk
                    />
                    <TextInput
                        mt={40}
                        label="Full Name"
                        placeholder="John Doe"
                        {...form.getInputProps("full_name")}
                        size="md"
                        withAsterisk
                    />
                </div>
                <div className={classes.child}>
                    <TextInput
                        label="Github"
                        placeholder="@johndoe123"
                        {...form.getInputProps("github")}
                        size="md"
                        withAsterisk
                    />
                    <NumberInput
                        defaultValue={0}
                        mt={40}
                        placeholder="Your age"
                        label="Your age"
                        size="md"
                        {...form.getInputProps("age")}
                    />
                    <TextInput
                        mt={40}
                        withAsterisk
                        label="Job Title"
                        placeholder="Frontend Developer"
                        {...form.getInputProps("job")}
                        size="md"
                    />
                </div>
            </div>
            <TextInput
                mt={50}
                label="Email"
                placeholder="Email"
                {...form.getInputProps("email")}
                size="md"
                withAsterisk
                className={classes.email}
            />
            <Button
                className={classes.button}
                variant="outline"
                onClick={() => {
                    axios
                        .post("https://centarnit.deta.dev/users/", form.values)
                        .then((r) => {
                            window.location.assign("/");
                        });
                }}
            >
                Submit
            </Button>
        </div>
    );
};
