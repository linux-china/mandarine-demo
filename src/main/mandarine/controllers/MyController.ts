import {Controller, GET, Inject, Model, Render, ViewModel} from "../deps.ts";
import {ManualInjectionService} from "../services/ManualInjectionService.ts";

@Controller()
export class MyController {
    @Inject()
    public manualInjectionService: ManualInjectionService;

    @GET('/welcome')
    public async welcome() {
        return Promise.resolve("Welcome to Mandarine.TS!");
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
