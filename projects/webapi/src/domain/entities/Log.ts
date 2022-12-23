import { Category } from "./Category";
import { LogType } from "./LogType";

export class Log {
    dateTime: Date
    text: string    
    category: Category
    processId: string
    type: LogType    
}