import {Service, Value, ValueScopes} from "../deps.ts";

@Service()
export class ManualInjectionService {

    @Value('welcome', ValueScopes.ENVIRONMENTAL)
    public welcome: string;

    public helloWorld(name: string): string {
        return `${this.welcome} ${name}`;
    }

}
