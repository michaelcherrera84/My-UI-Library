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
    Content: CardContent,
    Footer: CardFooter,
});
