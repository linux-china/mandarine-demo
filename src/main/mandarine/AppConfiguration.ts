import {Configuration, Injectable} from "./deps.ts";

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

}
