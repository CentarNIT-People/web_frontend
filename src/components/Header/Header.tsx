import React from "react";
import { data } from "./HeaderComponents/HeaderData";
import { HeaderSimple } from "./HeaderComponents/HeaderSimple";


export const Header = () => {
    return <HeaderSimple links={data} />;
};


