import "./Divider.css";

type Variant = "horizontal" | "vertical";

type Props = {
    /** Orientation of the divider */
    variant?: Variant;
    /** Divider line color (accepts HEX, RGB(A), HSL(A), etc.)  */
    color?: string;
    /** Divider margins */
    margin?: string;
    /** Content of the divider */
    children?: React.ReactNode;
};

/**
 * The `<Divider>` component is used as a separator to group content
 * or represent a thematic break.
 */
export const Divider = ({ variant = "horizontal", color = "", margin = "", children }: Props) => {
    return (
        <div
            role="separator"
            aria-orientation={`${variant}`}
            className={`divider divider-${variant}`}
            style={{ margin: `${margin}` }}
        >
            <div className={`divider-line divider-line-${variant}`} style={{ borderColor: `${color}` }} />
            {children && (
                <>
                    {children}
                    <div className={`divider-line divider-line-${variant}`} style={{ borderColor: `${color}` }} />
                </>
            )}
        </div>
    );
};
