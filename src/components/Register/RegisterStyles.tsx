import { createStyles,keyframes } from "@mantine/core";


export const bounce = keyframes({
    'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
    '40%, 43%': { transform: 'translate3d(0, -5px, 0)' },
    '70%': { transform: 'translate3d(0, -5px, 0)' },
    '90%': { transform: 'translate3d(0, -4px, 0)' },
  });


export const useStyles = createStyles((theme,_params,getRef) => ({
    
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
    notify:{
        position:"absolute",
        bottom:30,
        animation: `${bounce} 3s ease-in-out infinite`,
    },
    alert:{

        width:"60%"
    },

}));
