// libs
import { useNavigation } from "@react-navigation/native";

// styles
import * as S from "./styles";

export function Statistics() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Header variant="PRIMARY">
        <S.NavigateContainer onPress={() => navigation.navigate('statistics')}>
          <S.NavigateIcon variant={'PRIMARY'} />
        </S.NavigateContainer>

        <S.Title>90,86%</S.Title>
        <S.Subtitle>das refeições dentro da dieta</S.Subtitle>
      </S.Header>

      <S.StatisticsContent>
        <S.StatisticsContentText>Estatísticas gerais</S.StatisticsContentText>

        <S.StatisticsContentBlock>
          <S.StatisticsContentBlockTitle>
            22
          </S.StatisticsContentBlockTitle>
          <S.StatisticsContentBlockSubtitle>
            melhor sequência de pratos dentro da dieta
          </S.StatisticsContentBlockSubtitle>
        </S.StatisticsContentBlock>

        <S.StatisticsContentBlock>
          <S.StatisticsContentBlockTitle>
            109
          </S.StatisticsContentBlockTitle>
          <S.StatisticsContentBlockSubtitle>
            refeições registradas
          </S.StatisticsContentBlockSubtitle>
        </S.StatisticsContentBlock>

        <S.StatisticsContentBlockVariantContainer>
          <S.StatisticsContentBlockVariant variant="PRIMARY">
            <S.StatisticsContentBlockTitle>
              99
            </S.StatisticsContentBlockTitle>
            <S.StatisticsContentBlockSubtitle>
              refeições dentro da dieta
            </S.StatisticsContentBlockSubtitle>
          </S.StatisticsContentBlockVariant>

          <S.StatisticsContentBlockVariant variant="SECONDARY">
            <S.StatisticsContentBlockTitle>
              10
            </S.StatisticsContentBlockTitle>
            <S.StatisticsContentBlockSubtitle>
              fora dentro da dieta
            </S.StatisticsContentBlockSubtitle>
          </S.StatisticsContentBlockVariant>
        </S.StatisticsContentBlockVariantContainer>
      </S.StatisticsContent>
    </S.Container>
  )
}