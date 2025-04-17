// libs
import { TouchableOpacityProps } from "react-native";

// styles
import * as S from "./styles";

interface Props extends TouchableOpacityProps {
  type: string;
  selected: boolean;
}

export function Select({ type, selected, ...rest }: Props) {
  return (
    <S.Container select={selected} variant={type === 'ON_DIET' ? "PRIMARY" : "SECONDARY"} {...rest}>
      <S.Dot variant={type === 'ON_DIET' ? "PRIMARY" : "SECONDARY"} />
      <S.Text>{type === 'ON_DIET' ? "Sim" : "Não"}</S.Text>
    </S.Container>
  )
}