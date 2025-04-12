// styles
import * as S from "./styles";

export function EmptyList({ message }: { message: string }) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>
    </S.Container>
  )
}