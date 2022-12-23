import { Log } from "../../entities/Log";

export interface ConvertFileLineToLog {
    convert(data: string): Log
}