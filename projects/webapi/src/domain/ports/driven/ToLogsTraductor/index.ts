import { Category } from "../../../entities/Category";
import { Log } from "../../../entities/Log";

export interface ToLogsTraductor {
    GetLogs(category: Category,  externalFileContent: string[]): Log[]   
}