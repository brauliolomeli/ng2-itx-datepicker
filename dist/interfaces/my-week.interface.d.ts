import { IMyDay } from "./my-day.interface";
export interface IMyWeek {
    days: IMyDay[];
    weekNumber: number;
    start?: Date;
    end?: Date;
}
