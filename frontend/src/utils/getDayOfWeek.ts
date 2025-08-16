import { getDay } from "date-fns";

export const getDayOfWeek = (date: Date = new Date()) => getDay(date);
