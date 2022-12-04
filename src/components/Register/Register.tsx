
import { useStyles } from "./RegisterStyles";
import { useForm } from "@mantine/form";
import { TextInput, Button,PasswordInput,Notification,Alert} from "@mantine/core";
import React, { useState } from "react";
import axios from "axios";
import { IconAlertCircle } from "@tabler/icons";

export const Register = () => {
    const { classes } = useStyles();
    const [success, setSuccess] = useState(null)
    const form = useForm({
        initialValues: {
            username: "",
            password: "",
            full_name: "",
            github: "",
            email: "",
            job: "",
            phone_number:"",           
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
            {success === false && <Alert icon={<IconAlertCircle size={16} />} title="Invalid Credentials" color="red" mb={50} className={classes.alert}>
      You have not sent valid credentials to the form. Please try again!
    </Alert>}
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
                    <TextInput
                        mt={40}
                        placeholder="+123 4567890"
                        label="Your phone number"
                        size="md"
                        {...form.getInputProps("phone_number")}
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
                            setSuccess(true)
                            setTimeout(()=>{
                                window.location.assign("/");
                            },2000)
                        })
                        .catch(()=>{
                            setSuccess(false)
                });

                }}

            >
                Submit
            </Button>
            {success === true && <Notification radius="md" title="Successfully created account" className={classes.notify} loading onClose={()=>{
                setSuccess(false)
                window.location.assign("/")
                
            }}>
                You are now obligated to freely use the power of this software
            </Notification>}
        </div>
    );
};
