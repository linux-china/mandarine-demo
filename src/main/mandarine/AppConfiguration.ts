import {Configuration, Injectable} from "./deps.ts";

export class UserService {

    public findNickById(id: number): string {
        return "nick: 1";
    }
}

@Configuration()
export class AppConfiguration {

    @Injectable()
    public UserService() {
        return new UserService();
    }

}
