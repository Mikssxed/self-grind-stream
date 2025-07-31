export type Habit = {
  title: string;
  description?: string;
  startDate: Date;
  startTime: string;
  duration?: number;
  repeat: string;
  weekdays?: string[];
  streakCount: number;
  totalCount: number;
  createdAt: Date;
  completedAt?: Date[];
};
