import { Input, Button } from "@nextui-org/react";

export default function LoginForm() {
    return (
        <form className="w-1/2 flex-wrap md:flex-nowrap gap-4 border-2 border-red rounded mx-auto my-2 text-center">
            <Input type="text" label="Username" />
            <br />
            <Input type="password" label="Password" />

            <br />
            <Button>Button</Button>
        </form>
    );
}
