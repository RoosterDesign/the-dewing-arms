interface Props {
    children: React.ReactNode
}

const Button: React.FC<Props> = ({ children }) => {
    return (
        <span>{children}</span>
    )
}

export default Button;
