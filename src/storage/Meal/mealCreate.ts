// libs
import AsyncStorage from "@react-native-async-storage/async-storage";

// storage
import { MEAL_COLLECTION } from "storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

// utils
import { AppError } from "utils/AppError";

// interface
import { Meal, GetAllMeals } from "interfaces/MealType";

export async function mealCreate(newMeal: Meal) {
  try {
    const storedMeals = await mealsGetAll();

    const filtered = storedMeals?.meals?.find((storedMeal) => storedMeal.date === newMeal.date);

    if (filtered?.meals?.some(meal => meal.hour === newMeal.hour)) {
      throw new AppError('Uma refeição já está cadastrada para esse dia e horário');
    }

    let updatedMealsList: GetAllMeals[] = [];

    if (filtered) {
      const updatedMeals = storedMeals.meals.map(item => {
        if (item.date === newMeal.date) {
          return {
            ...item,
            meals: [...item.meals, newMeal],
          };
        }
        return item;
      });

      updatedMealsList = updatedMeals;
    } else {
      updatedMealsList = [
        ...storedMeals.meals,
        {
          date: newMeal.date,
          meals: [newMeal],
        },
      ];
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMealsList));
  } catch (error) {
    throw error;
  }
}