// App.jsx
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import MyComponent from "./MyComponent";

setBasePath(
    "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.11.2/cdn/"
);

function App() {
    return (
        <div className="App container">
            <MyComponent />
        </div>
    );
}

export default App;
