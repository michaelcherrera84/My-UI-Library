import "./Card.css";

type Intent = "none" | "primary" | "secondary" | "success" | "warning" | "danger";

type Props = {
    /** The height of the card */
    height?: string;
    /** The width of the card */
    width?: string;
    /** The intent or severity of the card */
    intent?: Intent;
} & React.HTMLAttributes<HTMLDivElement>;

function MainCard({
    height = "fit-content",
    width = "250px",
    intent = "none",
    className = "",
    style,
    children,
    ...props
}: Props) {
    return (
        <div
            className={["card", `card-${intent}`, className].join(" ")}
            style={{ height: height, width: width, ...style }}
            {...props}
        >
            {children}
        </div>
    );
}

function CardHeader({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`card-header ${className}`} {...props}>
            {children}
        </div>
    );
}

function CardTitle({ className = "", children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 className={`card-title ${className}`} {...props}>
            {children}
        </h3>
    );
}

function CardSubtitle({ className = "", children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h5 className={`card-subtitle ${className}`} {...props}>
            {children}
        </h5>
    );
}

function CardContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`card-content ${className}`} {...props}>
            {children}
        </div>
    );
}

function CardFooter({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`card-footer ${className}`} {...props}>
            {children}
        </div>
    );
}

/**
 * The `<Card>` component is a flexible and extensible content container.
 */
export const Card = Object.assign(MainCard, {
    Header: CardHeader,
    Title: CardTitle,
    Subtitle: CardSubtitle,
    Content: CardContent,
    Footer: CardFooter,
});
