import { Request, Response } from 'express';
import { LogService } from '../services/log.service';
import { LogModel, ILog } from '../databases/mongodb/log.model';

const logService = new LogService();

export const findLogById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const log = await logService.findLogById(id);
  if (!log) {
    res.status(404).json({ message: 'Log not found' });
  } else {
    res.status(200).json(log);
  }
};

export const findAllLogs = async (req: Request, res: Response) => {
  const logs = await logService.getAllLogs();
  if (!logs) {
    res.status(404).json({ message: 'Logs not found' });
  } else {
    res.status(200).json(logs);
  }
};

export const findAllLogsByUser = async (req: Request, res: Response) => {
  const logs = await logService.findAllLogByUserId(req.body.userId);
  if (!logs) {
    res.status(404).json({ message: 'Logs not found' });
  } else {
    res.status(200).json(logs);
  }
};

export const findAllLogsByAction = async (req: Request, res: Response) => {
    const logs = await logService.findAllLogByAction(req.body.action);
    if (!logs) {
        res.status(404).json({ message: 'Logs not found' });
    } else {
        res.status(200).json(logs);
    }
};

export const findAllLogsByObject = async (req: Request, res: Response) => {
    const logs = await logService.findAllLogByObject(req.body.object);
    if (!logs) {
        res.status(404).json({ message: 'Logs not found' });
    } else {
        res.status(200).json(logs);
    }
};

export const findAllLogsByActionAndObject = async (req: Request, res: Response) => {
    const logs = await logService.findAllLogByActionAndObject(req.body.action, req.body.object);
    if (!logs) {
        res.status(404).json({ message: 'Logs not found' });
    } else {
        res.status(200).json(logs);
    }
};
