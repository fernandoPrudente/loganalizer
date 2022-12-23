import { Log } from "../../../../domain/entities/Log";
import { LogRepository } from "../../../../domain/ports/driven/LogRepository";
import LogSchema from "../schemas/LogSchema";

export class LogDbRepository implements LogRepository {
    async create(log: Log): Promise<any> {
        await LogSchema.model.collection.insertOne(log)
    }

    async createMany(logs: Log[]): Promise<any> {
        await LogSchema.model.collection.insertMany(logs)
    }
}