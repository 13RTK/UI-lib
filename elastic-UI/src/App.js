import React, { useState } from "react";
import "@elastic/eui/dist/eui_theme_dark.css";
import Form from "./Form";
import ToggleButton from "./ToggleButton";

import { EuiProvider, EuiText } from "@elastic/eui";

const MyApp = () => {
    const [colorMode, setColorMode] = useState("light");
    const toggleColorMode = () => {
        setColorMode(colorMode === "light" ? "dark" : "light");
    };

    return (
        <>
            <EuiProvider colorMode={colorMode}>
                <EuiText>
                    <p>Hello World!</p>
                </EuiText>
            </EuiProvider>

            <Form></Form>

            <ToggleButton onClick={toggleColorMode}></ToggleButton>
        </>
    );
};

export default MyApp;
