import "./Input.css";

type Props = {
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className = "", ...props }: Props) => {
    return <input className={`input ${className}`} {...props} />;
};
