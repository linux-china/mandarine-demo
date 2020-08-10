import {Service} from "../deps.ts";

@Service()
export class ManualInjectionService {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public helloWorld(): string {
        return `Hello ${this.name}`;
    }

}
