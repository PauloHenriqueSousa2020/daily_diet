// libs
import { useNavigation, useRoute } from '@react-navigation/native';

// components
import { Button } from 'components';

// styles
import * as S from './styles';

interface RouteParamsProps {
  dietType: string;
}

export function RegisterConfirm() {
  const route = useRoute();
  const navigation = useNavigation();

  const { dietType } = route.params as RouteParamsProps;

  const variant = dietType === 'ON_DIET' ? 'PRIMARY' : 'SECONDARY';

  function handleBackToHome() {
    navigation.navigate('home');
  }

  return (
    <S.Container>
      <S.Title variant={variant}>
        {variant === 'PRIMARY' ? "Continue assim!" : "Que pena!"}
      </S.Title>
      <S.Subtitle>
        {variant === 'PRIMARY'
          ? "Você continua dentro da dieta. Muito bem!"
          : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
      </S.Subtitle>

      <S.Image
        source={variant === 'PRIMARY' ? require('../../assets/keep_going.png') : require('../../assets/keep_trying.png')}
      />

      <Button
        text='Ir para a página inicial'
        onPress={handleBackToHome}
        style={{
          width: 202,
          marginTop: 20
        }}
      />
    </S.Container>
  )
}