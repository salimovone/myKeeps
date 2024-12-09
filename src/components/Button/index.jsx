const Button = ({
    className,
    variant = "",
    onClick,
    disabled,
    children,
    ...args
}) => {
    let style = "";
    let off = "";

    switch (variant) {
        case "outlined":
            style =
                "border px-6 rounded-full py-1 text-white active:opacity-50 active:shadow-white outline-none";
            break;
        case "filled":
            style =
                "outline-none text-gray-600 px-6 rounded-full bg-white py-1 active:border-white active:bg-transparent border border-transparent";
            break;
        case "text":
            style =
                "outline-none text-white px-6 rounded-full active:bg-white py-1 active:bg-opacity-5";
            break;
        default:
            style =
                "outline-none text-gray-600 px-6 rounded-full bg-white py-1 active:border-white active:bg-transparent border border-transparent";
            break;
    }
    if (disabled) off = "opacity-5";
    return (
        <button
            {...args}
            onClick={onClick}
            disabled={disabled}
            className={`${className} ${style} ${off}`}
        >
            {children}
        </button>
    );
};

export default Button;
