// libs
import { useNavigation } from "@react-navigation/native";

// styles
import * as S from "./styles";

interface Props {
  variant: S.DietContentVariantStyleProps;
}

export function Header({ variant }: Props) {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Header>
        <S.Logo
          source={require('../../../../assets/logo.png')}
        />

        <S.UserPhoto
          source={{ uri: 'https://avatars.githubusercontent.com/u/40511257?v=4' }}
        />
      </S.Header>

      <S.DietContent variant={variant}>
        <S.DietPercentage>90,86%</S.DietPercentage>
        <S.DietAuxiliarText>das refeições dentro da dieta</S.DietAuxiliarText>

        <S.NavigateContainer onPress={() => navigation.navigate('statistics')}>
          <S.NavigateIcon variant={variant} />
        </S.NavigateContainer>
      </S.DietContent>
    </S.Container>
  )
}