import {IMyDate} from "./my-date.interface";

export interface IMyDay {
    dateObj: IMyDate;
    cmo: number;
    currDay: boolean;
    dayNbr: number;
    disabled: boolean;
}