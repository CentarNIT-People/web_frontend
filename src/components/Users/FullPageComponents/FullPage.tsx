import React from "react";
import { Image } from "@mantine/core";
import { useLocation } from "react-router-dom";

export const FullPage = () => {
    const location = useLocation();
    console.log(location.state.item);
    return (
        <div>
            <h1>{location.state.item.full_name}</h1>
            <Image src={location.state.item.avatar} width={180} />
        </div>
    );
};
