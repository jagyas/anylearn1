export default interface IClientBinding {
    send(bindingName: string, operation: string, data: any, metadata?: object): Promise<object>;
}