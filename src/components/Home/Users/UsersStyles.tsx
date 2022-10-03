import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    wrapper: {
        marginTop: "12%",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        padding: "0% 20px",
        marginBottom: "100px",
        justifyContent: "space-evenly",
        [`@media (max-width: 850px)`]: {
            padding: "0% 30px",
        },
    },
}));
