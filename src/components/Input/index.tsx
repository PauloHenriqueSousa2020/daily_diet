// libs
import { TextInputProps } from 'react-native';

// styles
import * as S from './styles';

interface Props extends TextInputProps {
  label: string;
}

export function Input({ label, ...inputRest }: Props) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...inputRest} />
    </S.Container>
  )
}