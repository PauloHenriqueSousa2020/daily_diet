// libs
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

// styles
import * as S from "./styles";
import { Button, Input, Select } from "components";

export function Register() {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Header>
        <S.NavigateContainer onPress={() => navigation.navigate('home')}>
          <S.NavigateIcon />
        </S.NavigateContainer>

        <S.HeaderTitle>Nova refeição</S.HeaderTitle>
        <View />
      </S.Header>

      <S.Content>
        <Input
          label="Nome"
          placeholder="Insira um nome"
        />

        <Input
          label="Descrição"
          placeholder="Insira uma descrição"
          multiline={true}
          numberOfLines={4}
        />

        <S.InputGrouped>
          <Input
            label="Data"
            placeholder="Insira uma data"
          />

          <Input
            label="Hora"
            placeholder="Insira uma hora"
          />
        </S.InputGrouped>

        <View>
          <S.Label>Está dentro da dieta?</S.Label>
          <S.InputGrouped>
            <Select selected={true} onDiet />
            <Select selected={false} onDiet={false} />
          </S.InputGrouped>
        </View>
      </S.Content>

      <S.ButtonContent>
        <Button
          text="Cadastrar refeição"
          title="registerMeal"
          onPress={() => { }}
        />
      </S.ButtonContent>
    </S.Container>
  )
}