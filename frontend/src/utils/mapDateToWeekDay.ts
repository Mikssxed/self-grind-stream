import { HabitWeekday, type HabitWeekday as HabitWeekdayType } from "@/types";
import { getDay } from "date-fns";

export function mapDateToWeekDay(date: Date = new Date()): HabitWeekdayType {
  const day = getDay(date);
  switch (day) {
    case 0:
      return HabitWeekday.Sunday;
    case 1:
      return HabitWeekday.Monday;
    case 2:
      return HabitWeekday.Tuesday;
    case 3:
      return HabitWeekday.Wednesday;
    case 4:
      return HabitWeekday.Thursday;
    case 5:
      return HabitWeekday.Friday;
    case 6:
      return HabitWeekday.Saturday;
    default:
      throw new Error("Invalid day");
  }
}
