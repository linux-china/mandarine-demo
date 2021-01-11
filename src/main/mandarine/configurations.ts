import {Configuration, Injectable} from "./deps.ts";
import {Docket} from "./openapi/openapi.ts";

export class UserService {

    public findNickById(id: number): string {
        return `nick: ${id}`;
    }
}

@Configuration()
export class AppConfiguration {

    @Injectable()
    public UserService() {
        return new UserService();
    }

    @Injectable()
    public docket() {
        console.log("init open api!!!")
        return new Docket();
    }

}
