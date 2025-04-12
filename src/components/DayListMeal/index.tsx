// components
import { Meal } from "components"

// styles
import * as S from "./styles";

interface Props {
  dayListMeal: {
    day: string;
    meals: {
      hour: string;
      meal: string;
      status: string;
    }[]
  }
}

export function DayListMeal({ dayListMeal }: Props) {
  return (
    <S.Container>
      <S.Day>{dayListMeal.day}</S.Day>

      {dayListMeal.meals.map(meal => (
        <Meal
          key={meal.hour}
          meal={meal}
        />
      ))}
    </S.Container>
  )
}