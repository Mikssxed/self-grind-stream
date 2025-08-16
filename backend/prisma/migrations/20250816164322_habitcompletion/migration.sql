-- AlterTable
ALTER TABLE "public"."Habit" ALTER COLUMN "weekdays" SET DEFAULT ARRAY[]::"public"."Weekdays"[];

-- CreateTable
CREATE TABLE "public"."HabitCompletion" (
    "id" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HabitCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HabitCompletion_habitId_completedAt_key" ON "public"."HabitCompletion"("habitId", "completedAt");

-- AddForeignKey
ALTER TABLE "public"."HabitCompletion" ADD CONSTRAINT "HabitCompletion_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "public"."Habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
