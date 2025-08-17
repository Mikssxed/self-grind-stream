export const getCurrentDateRanges = (currentDate: Date) => {
  const startOfDay = new Date(currentDate.setHours(0, 0, 0, 0));
  const endOfDay = new Date(currentDate.setHours(23, 59, 59, 999));
  return { startOfDay, endOfDay };
};
