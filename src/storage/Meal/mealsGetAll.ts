import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "storage/storageConfig";

import { GetAllMeals } from "interfaces/MealType";

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: GetAllMeals[] = storage ? JSON.parse(storage) : [];

    let total = 0;
    let onDiet = 0;

    meals.forEach(day => {
      total += day.meals.length;
      onDiet += day.meals.filter(meal => meal.status === 'ON_DIET').length;
    });

    const onDietPercentage = total > 0
      ? Number(((onDiet / total) * 100).toFixed(2))
      : 0;

    return {
      meals,
      onDietPercentage
    };
  } catch (error) {
    throw error;
  }
}