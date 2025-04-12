import styled from "styled-components/native";

interface Props {
  status: string;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;
  height: 52px;
  padding: 14px 16px 14px 12px;
  margin-bottom: 8px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`

export const MealHourText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
`

export const Divider = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const MealText = styled.Text`
  flex: 1;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const MealStatus = styled.View<Props>`
  width: 14px;
  height: 14px;
  margin-left: 4px;

  border-radius: 7px;

  background-color: ${({ theme, status }) => status === "ON_DIET" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`