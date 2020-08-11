import {MandarineCore} from "./deps.ts";

import {MyController} from "./controllers/MyController.ts"
import {ManualInjectionService} from "./services/ManualInjectionService.ts"

// Mandarine.TS Components Map to load all components
const componentsMap = {
    configurations: [],
    repositories: [],
    services: [ManualInjectionService],
    middlewares: [],
    components: [],
    controllers: [MyController]
};

new MandarineCore().MVC().run();
