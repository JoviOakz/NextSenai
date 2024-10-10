import Button from "./Button";
import Input from "./Input";

const LoginForm = () => {
    return (
        <form className="flex flex-col w-full h-full gap-20 justify-center items-center">
            <h1 className="text-white text-5xl">Login</h1>
            <Input title="Login" />
            <Input title="Password" />
            <Button>Enter</Button>
        </form>
    )
}

export default LoginForm;