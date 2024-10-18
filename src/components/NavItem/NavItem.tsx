interface Props {
    item: {
        label: string,
        anchor: string
    }
}


const NavItem: React.FC<Props> = ({ item }) => {
    return (
        <li>
            <a href={item.anchor} title={item.label}>
                {item.label}
            </a>
        </li>
    )
};

export default NavItem;
