// libs
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

// components
import { Button, DayListMeal, EmptyList } from "components";
import { Header } from "./components/Header";

// assets
import { Plus } from "phosphor-react-native";

// storage
import { mealsGetAll } from "storage/Meal/mealsGetAll";

// interfaces
import { GetAllMeals } from "interfaces/MealType";

// styles
import * as S from "./styles";

export function Home() {
  const [meals, setMeals] = useState<GetAllMeals[]>([]);
  const [onDietPercentage, setOnDietPercentage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  async function fetchMeals() {
    setIsLoading(true);
    try {
      const data = await mealsGetAll();
      setMeals(data.meals);
      setOnDietPercentage(data.onDietPercentage);
    } catch (error) {
      console.log(error);
      Alert.alert("Grupos", "Não foi possível carregar os grupos.")
    }
    setIsLoading(false);
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
  }, []));

  return (
    <S.Container>
      <FlatList
        data={meals}
        ListHeaderComponent={() => (
          <>
            <Header onDietPercentage={onDietPercentage} />

            <S.Text>Refeições</S.Text>
            <Button
              text="Nova refeição"
              icon={<Plus />}
              variant="PRIMARY"
              onPress={() => navigation.navigate('register')}
            />
          </>
        )}
        renderItem={({ item }) => <DayListMeal dayListMeal={item} />}
        keyExtractor={(item) => item.date}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100, marginTop: 20 },
          meals.length === 0 && { flex: 1 }
        ]}
        ListEmptyComponent={() => <EmptyList message="Nenhuma refeição cadastrada até o momento." />}
      />
    </S.Container>
  )
}