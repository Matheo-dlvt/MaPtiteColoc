import { LogRepository } from "../repositories/log.repository";
import { ILog } from "../databases/mongodb/log.model";

export class LogService {

    private logRepository = new LogRepository();

    async createLog(log: ILog): Promise<ILog> {
        return await this.logRepository.createLog(log);
    }

    async findLogById(logId: string): Promise<ILog | null> {
        return await this.logRepository.findLogById(logId);
    }

    async findAllLogByUserId(userId: string): Promise<ILog | null> {
        return await this.logRepository.findAllLogByUserId(userId);
    }

    async findAllLogByAction(action: string): Promise<ILog | null> {
        return await this.logRepository.findAllLogByAction(action);
    }

    async findAllLogByObject(object: string): Promise<ILog | null> {
        return await this.logRepository.findAllLogByObject(object);
    }

    async findAllLogByDate(date: Date): Promise<ILog | null> {
        return await this.logRepository.findAllLogByDate(date);
    }

    async findAllLogByActionAndObject(action: string, object: string): Promise<ILog | null> {
        return await this.logRepository.findAllLogByActionAndObject(action, object);
    }

    async getAllLogs(): Promise<ILog | null> {
        return await this.logRepository.getAllLogs();
    }
}
