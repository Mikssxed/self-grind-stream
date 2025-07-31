import type { Habit } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

function saveHabitsToLocalStorage(habits: Habit[]) {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function calculateStreak(habit: Habit, date: Date) {
  const today = new Date();
}

export const habitsStore = defineStore("habits", () => {
  const habitsStorage = localStorage.getItem("habits");
  const parsedHabits = habitsStorage ? JSON.parse(habitsStorage) : [];
  const habits = ref<Habit[]>(parsedHabits);
  const selectedDay = ref<Date>(new Date());

  function addHabit(habit: Habit) {
    const alreadyExists = habits.value.filter(
      (habitItem) => habitItem.title === habit.title
    );
    habits.value.push({
      ...habit,
      title:
        alreadyExists.length > 0
          ? `${habit.title} (${alreadyExists.length + 1})`
          : habit.title,
    });
    saveHabitsToLocalStorage(habits.value);
  }

  function removeHabit(index: number) {
    habits.value.splice(index, 1);
    saveHabitsToLocalStorage(habits.value);
  }

  function updateHabit(index: number, habit: Habit) {
    habits.value[index] = {
      ...habit,
      totalCount: habit.completedAt?.length || 0,
    };
    saveHabitsToLocalStorage(habits.value);
  }

  function setSelectedDay(date: Date) {
    selectedDay.value = date;
  }

  function getDayCompletion(day: Date) {
    let lengthCorrection = 0;
    const completion = habits.value.reduce((acc, habit) => {
      const shouldCount =
        habit.repeat === "daily" ||
        habit.weekdays?.includes(
          day.toLocaleString("en-US", { weekday: "short" })
        );

      if (new Date(habit.startDate) > new Date(day) || !shouldCount) {
        lengthCorrection++;
      }

      const isCompleted = habit.completedAt?.some(
        (completedDate) =>
          new Date(completedDate).toDateString() ===
          new Date(day).toDateString()
      );

      if (isCompleted) {
        return acc + 1;
      }

      return acc;
    }, 0);
    const correctedLength = habits.value.length - lengthCorrection;
    if (correctedLength === 0) {
      return 0;
    }

    return completion / correctedLength;
  }

  return {
    habits,
    addHabit,
    removeHabit,
    updateHabit,
    selectedDay,
    setSelectedDay,
    getDayCompletion,
  };
});
