import {MandarineCore} from "./deps.ts";

import {AppConfiguration} from "./configurations.ts";
import {ManualInjectionService} from "./services/ManualInjectionService.ts"
import {MyController} from "./controllers/MyController.ts"

const env = Deno.env.toObject();

// Mandarine.TS Components Map to load all components
// noinspection JSUnusedLocalSymbols
const componentsMap = {
    configurations: [AppConfiguration],
    repositories: [],
    services: [ManualInjectionService],
    middlewares: [],
    components: [],
    controllers: [MyController]
};

function main(args: string[]) {
    console.log("MY_KEY: " + env["MY_KEY"]);
    console.log("nick: " + env["nick"]);
    new MandarineCore().MVC().run();
}

main(Deno.args);
