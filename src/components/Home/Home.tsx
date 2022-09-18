import { Hero } from "./Hero/Hero";
import { Layout } from "../Layout/Layout";
import { Users } from "./Users/Users";

export const Home = () => {
    return (
        <Layout>
            <Hero />
            <Users />
        </Layout>
    );
};
