import { Log } from "../../../../domain/entities/Log";
import { LogType } from "../../../../domain/entities/LogType";
import { FileColumn } from "./models/FileColumn";

export abstract class LogFactory {
    readonly columns: FileColumn[]
    fileLine: string

    constructor(readonly categoryCode: string, ...columns: FileColumn[]) {
        this.columns = columns
    }

    setFileLine(fileLine: string) {
        this.fileLine = fileLine
    }

    getLog(): Log {
        const log: any = {}

        this.columns.forEach(c => {
            let fileColumnValue: string = ''

            if(c.endPosition)
                fileColumnValue = this.fileLine.substring(c.startPosition, c.endPosition)
            else 
                fileColumnValue = this.fileLine.substring(c.startPosition, this.fileLine.length)
                
            log[c.name] = c.valueTranslate(fileColumnValue)
        })

        this.setLogType(log)

        return log
    }

    protected abstract setLogType(log: Log): void
}