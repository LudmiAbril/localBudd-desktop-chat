interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string
    disabled?: boolean;
}

const Button = ({ children, onClick, className, disabled = false }: ButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`${className} ${disabled ? 'cursor-not-allowed bg-gray-300' : 'cursor-pointer bg-blue-200 hover:bg-blue-300'} px-6 py-2 rounded-lg transition`}>{children}</button>
    )
}

export default Button