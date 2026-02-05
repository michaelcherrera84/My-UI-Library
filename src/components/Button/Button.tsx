import "./Button.css";

type Variant = "solid" | "outline" | "raised";
type Intent = "primary" | "secondary" | "success" | "warning" | "danger";
type Shape = "basic" | "pill";

type Props = {
    /** The predefined style variant of the button */
    variant?: Variant;
    /** The intent or severity of the button */
    intent?: Intent;
    /** The shape of the button */
    shape?: Shape;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/** 
 * The `<Button>` component is an intereactive element that, once activated, 
 * performs an action, such as submitting a form or opening a dialog. 
 */
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
