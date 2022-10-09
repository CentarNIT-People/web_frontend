import React from "react";
import { useStyles } from "./HeaderStyles";

type HeaderLinkType = {
    link:string,
    label:string
}

interface HeaderItemInterface {
    link: HeaderLinkType;
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
}
export const HeaderItem = (props: HeaderItemInterface) => {
    const { classes, cx } = useStyles();
    return (
        <a
            key={props.link.label}
            href={props.link.link}
            className={cx(classes.link, {
                [classes.linkActive]: props.active === props.link.link,
            })}
            onClick={() => {
                props.setActive(props.link.link);
            }}
        >
            {props.link.label}
        </a>
    );
};
