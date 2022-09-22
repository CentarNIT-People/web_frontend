import { Header } from "../Header/Header";

interface LayoutInterface {
    children: React.ReactNode;
}

export const Layout = (props: LayoutInterface) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
};
