import { Log } from "../../../../domain/entities/Log";
import { LogType } from "../../../../domain/entities/LogType";
import { LogFactory } from "./LogFactory";
import { FileColumn } from "./models/FileColumn";

export class AuthLogFactory extends LogFactory {
    constructor() {
        super('AUTH', 
        new FileColumn ( 
            'dateTime',
            0,
            15            
        ), new FileColumn ( 
            'ip',
            19,
            32            
        ), new FileColumn ( 
            'processId',
            38,
            43            
        ), new FileColumn ( 
            'text',
            46   
        )) 
    }
    
    setLogType(log: Log) {

        if(!log.text) {
            log.type = LogType.Info
            return
        }

        if(log.text.indexOf('critical') > -1) log.type = LogType.Critical
        else if(log.text.indexOf('warning') > -1) log.type = LogType.Warning
        else log.type = LogType.Info
    }
}