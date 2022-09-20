import { Hero } from "./Hero/Hero";
import { Users } from "./Users/Users";

export const Home = () => {
    return (
        <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
            <Hero />
            <Users />
        </div>
    );
};
