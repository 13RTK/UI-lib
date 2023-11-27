import { useState } from "react";
import SlInput from "@shoelace-style/shoelace/dist/react/input";
import SlButton from "@shoelace-style/shoelace/dist/react/button";

function MyComponent() {
    const [value, setValue] = useState("");

    return (
        <>
            <form>
                <SlInput
                    value={value}
                    onSlInput={(event) => setValue(event.target.value)}
                />
                <br />
                <SlInput
                    value={value}
                    onSlInput={(event) => setValue(event.target.value)}
                />
                <br />
                <SlButton>Click</SlButton>
            </form>
        </>
    );
}

export default MyComponent;
