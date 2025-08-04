export type Habit = {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  duration?: number;
  repeat: HabitRepeat;
  weekdays?: HabitWeekday[] | [];
  streakCount: number;
  totalCount: number;
  createdAt: Date;
  completedAt?: Date[];
  isCompleted: boolean;
};

export enum HabitRepeat {
  Daily = "DAILY",
  Weekly = "WEEKLY",
  Monthly = "MONTHLY",
  Yearly = "YEARLY",
}

export enum HabitWeekday {
  Sunday = "SUNDAY",
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
}
