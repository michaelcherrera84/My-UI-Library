import "./Card.css";

type Props = {
    height?: string;
    width?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function MainCard({ height = "150px", width = "100px", className = "", style, children, ...props }: Props) {
    return (
        <div className={`card ${className}`} style={{ height: height, width: width, ...style }} {...props}>
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

export const Card = Object.assign(MainCard, {
    Header: CardHeader,
    Title: CardTitle,
    Subtitle: CardSubtitle,
    Content: CardContent,
    Footer: CardFooter,
});
