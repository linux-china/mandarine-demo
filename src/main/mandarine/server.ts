import {Configuration, Injectable, MandarineCore} from "./deps.ts";

import {MyController} from "./controllers/MyController.ts";
import {ManualInjectionService} from "./services/ManualInjectionService.ts";

@Configuration()
export class MainConfig {

    @Injectable()
    public ManualInjectionService() {
        return new ManualInjectionService("Bill");
    }

    @Injectable()
    public MyController() {
        return new MyController();
    }

}

new MandarineCore().MVC().run();
