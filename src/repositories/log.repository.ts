import { ILog, LogModel } from "../databases/mongodb/log.model";

export class LogRepository{
    async createLog(log: ILog): Promise<ILog>{
        return await LogModel.create(log);
    }

    async findLogById(logId: string): Promise<ILog | null>{
        return await LogModel.findById(logId);
    }

    async findAllLogByUserId(userId: string): Promise<ILog | null>{
        return await LogModel.filter({ userId: userId });
    }

    async findAllLogByAction(action: string): Promise<ILog | null>{
        return await LogModel.filter({ action: action });
    }

    async findAllLogByObject(object: string): Promise<ILog | null>{
        return await LogModel.filter({ object: object });
    }

    async findAllLogByDate(date: Date): Promise<ILog | null>{
        return await LogModel.filter({ date: date });
    }

    async findAllLogByActionAndObject(action: string, object: string): Promise<ILog | null>{
        return await LogModel.filter({ action: action, object: object });
    }

    async getAllLogs(): Promise<ILog | null> {
        return await LogModel.find();
    }
} 
