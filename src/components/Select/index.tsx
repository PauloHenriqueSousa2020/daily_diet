// styles
import * as S from "./styles";

interface Props {
  onDiet: boolean;
  selected: boolean;
}
export function Select({ onDiet, selected }: Props) {
  return (
    <S.Container select={selected} variant={onDiet ? "PRIMARY" : "SECONDARY"}>
      <S.Dot variant={onDiet ? "PRIMARY" : "SECONDARY"} />
      <S.Text>{onDiet ? "Sim" : "Não"}</S.Text>
    </S.Container>
  )
}