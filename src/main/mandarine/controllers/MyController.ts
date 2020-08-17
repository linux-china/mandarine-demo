import {Controller, GET, Inject, Model, Render, UserService, ViewModel} from "../deps.ts";
import {ManualInjectionService} from "../services/ManualInjectionService.ts";

@Controller()
export class MyController {

    @Inject()
    public manualInjectionService: ManualInjectionService;

    @Inject()
    public userService: UserService;

    @GET('/welcome')
    public async welcome() {
        return Promise.resolve("Welcome to Mandarine.TS!");
    }

    @GET('/nick')
    public async nick() {
        return this.userService.findNickById(1);
    }

    @GET('/env/nick')
    public async envNick() {
        return Promise.resolve(Deno.env.get("nick"));
    }

    @GET('/template1')
    @Render('template1.hbs')
    public httpHandler(@Model() model: ViewModel) {
        model.setAttribute("nick", "linux_china");
        return model;
    }

    @GET('/helloWorld')
    public helloWorld() {
        return this.manualInjectionService.helloWorld("Jackie");
    }

}
