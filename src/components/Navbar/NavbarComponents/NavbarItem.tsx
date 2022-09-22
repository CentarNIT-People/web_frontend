import { useStyles } from "./NavbarStyles";

interface NavbarItemInterface {
    item: any;
    active: any;
    setActive: React.Dispatch<React.SetStateAction<string>>;
}

export const NavbarItem = (props: NavbarItemInterface) => {
    const { classes, cx } = useStyles();
    return (
        <a
            className={cx(classes.link, {
                [classes.linkActive]: props.item.link === props.active,
            })}
            href={props.item.link}
            key={props.item.label}
            onClick={(event) => {
                props.setActive(props.item.label);
            }}
        >
            <props.item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{props.item.label}</span>
        </a>
    );
};
