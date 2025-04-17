// libs
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, View } from "react-native";

// components
import { Button, Input, Select } from "components";

// storage
import { mealCreate } from "storage/Meal/mealCreate";

//utils
import { AppError } from "utils/AppError";

// interfaces
import { Meal, MealStatus } from "interfaces/MealType";

// styles
import * as S from "./styles";
import { formatedDate } from "utils/FormatedDate";
import { formatedHour } from "utils/FormatedHour";

export function Register() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [dietType, setDietType] = useState<MealStatus>();

  const navigation = useNavigation();

  async function handleSubmit() {
    const formData: Meal = {
      date,
      description,
      hour,
      name,
      status: dietType!
    }

    try {
      await mealCreate(formData);
      navigation.navigate('registerConfirm', { dietType });

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova refeição', error.message)
      } else {
        Alert.alert('Nova refeição', "Não foi possível criar uma nova refeição.")
        console.log(error);
      }
    }

  }

  function formatHour(text: string): import("react").SetStateAction<string> {
    throw new Error("Function not implemented.");
  }

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
          value={name}
          onChangeText={setName}
        />

        <Input
          label="Descrição"
          placeholder="Insira uma descrição"
          multiline={true}
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        <S.InputGrouped>
          <Input
            label="Data"
            placeholder="Insira uma data"
            value={date}
            onChangeText={(text) => setDate(formatedDate(text))}
            keyboardType="numeric"
          />

          <Input
            label="Hora"
            placeholder="Insira uma hora"
            value={hour}
            onChangeText={(text) => setHour(formatedHour(text))}
            keyboardType="numeric"
          />
        </S.InputGrouped>

        <View>
          <S.Label>Está dentro da dieta?</S.Label>
          <S.InputGrouped>
            <Select
              selected={dietType === 'ON_DIET'}
              type={'ON_DIET'}
              onPress={() => setDietType('ON_DIET')}
            />
            <Select
              selected={dietType === 'OFF_DIET'}
              type={'OFF_DIET'}
              onPress={() => setDietType('OFF_DIET')}
            />
          </S.InputGrouped>
        </View>
      </S.Content>

      <S.ButtonContent>
        <Button
          text="Cadastrar refeição"
          onPress={handleSubmit}
        />
      </S.ButtonContent>
    </S.Container>
  )
}