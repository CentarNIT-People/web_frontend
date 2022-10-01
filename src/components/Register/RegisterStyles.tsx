import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    wrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
    },
    child: {
        width: "45%",
    },
    email: {
        width: "100%",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "5% 10%",
        alignItems: "center",
    },
    button: {
        marginTop: 50,
        width: "20%",
    },
}));
