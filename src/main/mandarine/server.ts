import {MandarineCore} from "./deps.ts";

import {MyController} from "./controllers/MyController.ts"
import {ManualInjectionService} from "./services/ManualInjectionService.ts"

// Mandarine.TS Components Map to load all components
// noinspection JSUnusedLocalSymbols
const componentsMap = {
    configurations: [],
    repositories: [],
    services: [ManualInjectionService],
    middlewares: [],
    components: [],
    controllers: [MyController]
};

function main(args: string[]) {
    new MandarineCore().MVC().run();
}

main(Deno.args);
