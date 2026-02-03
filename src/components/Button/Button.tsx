import "./Button.css";

type Variant = "solid" | "outline" | "raised";
type Intent = "primary" | "secondary" | "success" | "warning" | "danger";
type Shape = "basic" | "pill";

type Props = {
    /** The style of the button */
    variant?: Variant;
    /** The intent or severity of the button */
    intent?: Intent;
    /** The shape of the button */
    shape?: Shape;
    /** Style classes for the button */
    className?: string;
    /** The contents of the button */
    children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/** UI component for user interaction with forms, dialogs, and more. */
export const Button = ({
    type = "button",
    variant = "solid",
    intent = "primary",
    shape = "basic",
    className = "",
    children,
    ...props
}: Props) => {
    return (
        <button
            type={type}
            className={["btn", `btn-${intent}`, `btn-${variant}`, `btn-${shape}`, className].join(" ")}
            {...props}
        >
            {children}
        </button>
    );
};
