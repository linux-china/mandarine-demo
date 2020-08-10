import {Controller, GET, Inject} from "../deps.ts";
import {ManualInjectionService} from "../services/ManualInjectionService.ts";

@Controller()
export class MyController {
    @Inject()
    public manualInjectionService: ManualInjectionService;

    @GET('/welcome')
    public async httpHandler() {
        return Promise.resolve("Welcome to MandarineTS Framework!");
    }

    @GET('/helloWorld')
    public helloWorld() {
        return this.manualInjectionService.helloWorld("Jackie");
    }

}
