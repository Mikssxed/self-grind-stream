/*
  Warnings:

  - Changed the type of `repeat` on the `Habit` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."Weekdays" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateEnum
CREATE TYPE "public"."HabitRepetition" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- AlterTable
ALTER TABLE "public"."Habit" ADD COLUMN     "weekdays" "public"."Weekdays"[],
DROP COLUMN "repeat",
ADD COLUMN     "repeat" "public"."HabitRepetition" NOT NULL;
