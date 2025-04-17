// styles
import * as S from "./styles";

interface Props {
  meal: {
    hour: string,
    name: string,
    status: string
  }
}

export function Meal({ meal }: Props) {
  return (
    <S.Container>
      <S.MealHourText>{meal.hour}</S.MealHourText>
      <S.Divider />
      <S.MealText numberOfLines={1} ellipsizeMode="tail">{meal.name}</S.MealText>
      <S.MealStatus status={meal.status} />
    </S.Container>
  )
}