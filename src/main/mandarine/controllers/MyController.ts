import {Controller, GET, Inject, Model, Render, RouteParam, ViewModel} from "../deps.ts";
import {ManualInjectionService} from "../services/ManualInjectionService.ts";
import {UserService} from "../configurations.ts";
import {Api, ApiOperation} from "../openapi/openapi.ts"

@Controller()
@Api("My controller ")
export class MyController {

    @Inject()
    public manualInjectionService: ManualInjectionService;

    @Inject()
    public userService: UserService;

    @GET('/welcome')
    public async welcome() {
        return Promise.resolve("Welcome to Mandarine.TS!");
    }

    @ApiOperation("Find nick by id")
    @GET('/nick/:id')
    public async nick(@RouteParam() id: number) {
        return this.userService.findNickById(id);
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
