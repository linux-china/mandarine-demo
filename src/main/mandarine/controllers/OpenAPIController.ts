import {Controller, GET, Inject} from "../deps.ts";
import {Docket} from "../openapi/openapi.ts";

@Controller()
export class OpenAPIController {
    @Inject()
    public docket: Docket;

    @GET('/v3/openapi.json')
    public openAPI() {
        return {
            openapi: this.docket.openapi
        };
    }

    @GET('/swagger-ui.html')
    public swaggerUI() {
        return `<html></html>`
    }


}
