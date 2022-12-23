import { Log } from "../../entities/Log";

export interface LogRepository {
    create(log: Log): Promise<any>    
    createMany(logs: Log[]): Promise<any>
}