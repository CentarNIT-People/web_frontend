import { useStyles } from "./HeaderStyles";

interface HeaderItemInterface {
    link: any;
    active: any;
    setActive: any;
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
            onClick={(event) => {
                props.setActive(props.link.link);
            }}
        >
            {props.link.label}
        </a>
    );
};
