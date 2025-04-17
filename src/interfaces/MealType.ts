export type MealStatus = 'ON_DIET' | 'OFF_DIET';

export interface Meal {
  name: string;
  description: string;
  date: string;
  hour: string;
  status: MealStatus
}

export interface GetAllMeals {
  date: string;
  meals: Meal[];
}