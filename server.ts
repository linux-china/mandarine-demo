import {MandarineCore, Controller, GET} from "./deps.ts";

@Controller()
export class MyController {

    @GET('/welcome')
    public async httpHandler() {
        return Promise.resolve("Welcome to MandarineTS Framework!");
    }

}

new MandarineCore().MVC().run();
