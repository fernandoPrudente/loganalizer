import DomainError from "../exceptions/DomainError";
import { CategoryRepository } from "../ports/driven/CategoryRepository";
import { LogRepository } from "../ports/driven/LogRepository";
import { ToLogsTraductor } from "../ports/driven/ToLogsTraductor";

export class ExtractLogsFromExternalLogFileUserCase {

    constructor(readonly categoryRepository: CategoryRepository, readonly logRepository: LogRepository, readonly logsTraductor: ToLogsTraductor) {
        
    }

    async extract(categoryCode: string, fileContent: string[]) {
        const category = await this.categoryRepository.getByCode(categoryCode)
        if(!(!!category))
            throw new DomainError('categoria informada não existe')

        const logs = this.logsTraductor.GetLogs(category, fileContent)
        await this.logRepository.createMany(logs)        
    }
}