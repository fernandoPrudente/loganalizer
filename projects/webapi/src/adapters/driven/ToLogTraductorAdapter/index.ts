import { Category } from "../../../domain/entities/Category";
import { Log } from "../../../domain/entities/Log";
import { ToLogsTraductor } from "../../../domain/ports/driven/ToLogsTraductor";
import LogFactoriesMap from "./LogFactory/LogFactoriesMap";

export class ToLogsTraductorAdapter implements ToLogsTraductor {

    GetLogs(category: Category, externalFileContent: string[]): Log[] {
        const factory = LogFactoriesMap.find(x => x.categoryCode === category.code)
        const logs = externalFileContent.map(line => {
            factory.setFileLine(line)
            const log = factory.getLog()

            log.category = category

            return log
        })

        return logs
    }
}