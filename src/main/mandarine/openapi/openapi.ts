export class Docket {
    openapi: string = '3.0.0'
    info: { title: string, description: string, version: string }
    servers: any[]
    paths: {}
}

export function Api(value: string, notes?: string, tags?: string[]) {
    return (target: any) => {

    };
}

export function ApiOperation(value: string, notes?: string) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log(`propertyKey: ${propertyKey}`)
        console.log(`descriptor: ${descriptor}`)
    };
}


export function ApiParam(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
) {

}
