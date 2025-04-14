// libs
import { useState } from "react";
import { FlatList } from "react-native";

// components
import { Button, DayListMeal, EmptyList } from "components";
import { Header } from "./components/Header";

// assets
import { Plus } from "phosphor-react-native";

// styles
import * as S from "./styles";

// constants
import { dayListMeals } from "./meals";

export function Home() {
  const [meals, setMeals] = useState<{
    day: string;
    meals: {
      hour: string;
      meal: string;
      status: string;
    }[]
  }[]>(dayListMeals);

  return (
    <S.Container>
      <FlatList
        data={meals}
        ListHeaderComponent={() => (
          <>
            <Header variant="PRIMARY" />

            <S.Text>Refeições</S.Text>
            <Button text="Nova refeição" icon={<Plus />} variant="PRIMARY" />
          </>
        )}
        renderItem={({ item }) => <DayListMeal dayListMeal={item} />}
        keyExtractor={(item) => item.day}
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