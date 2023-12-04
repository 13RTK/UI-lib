import { Switch } from "@nextui-org/react";
import LoginForm from "./LoginForm";
import { useState } from "react";

export default function App() {
    const [isDark, setIsDark] = useState(false);

    return (
        <div
            className={
                isDark ? "dark mx-auto text-center" : "mx-auto text-center"
            }
        >
            <Switch
                aria-label="Automatic updates"
                onChange={() => setIsDark((isDark) => !isDark)}
            />
            <LoginForm />
        </div>
    );
}
