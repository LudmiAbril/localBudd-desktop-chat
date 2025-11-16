interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string
    disabled?: boolean;
}

const Button = ({ children, onClick, className, disabled = false }: ButtonProps) => {
    return (
        <button disabled={disabled} onClick={onClick} className={`${className} ${disabled ? "cursor-not-allowed bg-[url('src/assets/disabled-btn.svg')] " : " bg-[url('src/assets/btn.svg')] cursor-pointer"}
      bg-no-repeat bg-contain bg-center
      w-30 h-14
      flex items-center justify-center
      text-xl drop-shadow-md 
      active:scale-95
      active:translate-y-[2px]
      active:drop-shadow-none
      drop-shadow-md
      hover:scale-105 `}>{children}</button>
    )
}

export default Button