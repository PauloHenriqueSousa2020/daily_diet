// components
import { Meal } from "components"

// interface
import { GetAllMeals } from "interfaces/MealType";

// styles
import * as S from "./styles";

interface Props {
  dayListMeal: GetAllMeals
}

export function DayListMeal({ dayListMeal }: Props) {
  return (
    <S.Container>
      <S.Day>{dayListMeal.date}</S.Day>

      {dayListMeal.meals.map(meal => (
        <Meal
          key={meal.hour}
          meal={meal}
        />
      ))}
    </S.Container>
  )
}