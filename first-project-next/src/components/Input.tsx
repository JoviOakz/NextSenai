const Input = ({ title }: { title: string }) => {
    return (
        <div className="w-2/5 flex flex-col justify-center gap-2">
            <h1 className="ml-4 text-2xl text-white">{title}</h1>
            <div className="w-full h-20 bg-[#508AA8] rounded-full"></div>
        </div>
    )
}

export default Input;