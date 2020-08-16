import {Service, Value} from "../deps.ts";

@Service()
export class ManualInjectionService {

    @Value('welcome')
    public welcome: string;

    public helloWorld(name: string): string {
        return `${this.welcome} ${name}`;
    }

}
