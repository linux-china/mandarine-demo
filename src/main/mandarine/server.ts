import {Configuration, Injectable, MandarineCore} from "./deps.ts";

import {MyController} from "./controllers/MyController.ts";

@Configuration()
export class MainConfig {

    public MyController() {
        return new MyController();
    }

}

new MandarineCore().MVC().run();
