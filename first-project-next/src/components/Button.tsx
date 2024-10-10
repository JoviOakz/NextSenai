const Button = ({ children }: { children: string }) => {
    return (
        <button className="flex justify-center items-center w-44 h-12 bg-[#031927] text-xl text-white rounded-full">
            {children}
        </button>
    )
}

export default Button;