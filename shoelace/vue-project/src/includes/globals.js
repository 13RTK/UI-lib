import * as ShoelaceComponents from "@shoelace/shoelace.js";

export default {
    install(app) {
        Object.keys(ShoelaceComponents).forEach((componentName) => {
            if (componentName.startsWith("Sl")) {
                app.component(componentName, ShoelaceComponents[componentName]);
            }
        });
    },
};
