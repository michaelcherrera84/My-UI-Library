import "./Input.css";
import { useId } from "react";

type Variant = "normal" | "floating";

type Props = {
    /** The predefined style variant of the input */
    variant?: Variant;
    /** Style classes for the input */
    inputClassName?: string;
    /** Inline styles for the input */
    inputStyle?: React.CSSProperties;
    /** Style classes for the floating label */
    floatingPlaceholderClassName?: string;
    /** Inline styles for the floating placeholder */
    floatingPlaceholderStyle?: React.CSSProperties;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * The `<Input>` component is used to create interactive controls for web-based
 * forms in order to accept data from the user.
 */
export const Input = ({
    id,
    variant = "normal",
    placeholder = "",
    className = "",
    style,
    inputClassName = "",
    inputStyle,
    floatingPlaceholderClassName = "",
    floatingPlaceholderStyle,
    ...props
}: Props) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
        <div className={`input-wrapper ${className}`} style={style}>
            <input
                id={inputId}
                placeholder={variant === "normal" ? placeholder : " "}
                className={["input", variant && `input-${variant}`, inputClassName].join(" ")}
                style={inputStyle}
                {...props}
            />
            {variant === "floating" && (
                <label
                    htmlFor={inputId}
                    className={`label-floating ${floatingPlaceholderClassName}`}
                    style={floatingPlaceholderStyle}
                    aria-hidden
                >
                    {placeholder}
                </label>
            )}
        </div>
    );
};
