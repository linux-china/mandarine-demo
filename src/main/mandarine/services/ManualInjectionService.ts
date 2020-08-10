import {Service} from "../deps.ts";

@Service()
export class ManualInjectionService {

    public helloWorld(name: string): string {
        return `Hello ${name}`;
    }

}
