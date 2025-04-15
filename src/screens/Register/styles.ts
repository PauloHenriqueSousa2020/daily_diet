import styled from "styled-components/native";
// assets
import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native";

export const Container = styled.View`
  flex: 1;
`

export const Header = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  min-height: 124px;
  max-height: 124px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 32px 20px 0;
`

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const NavigateContainer = styled.TouchableOpacity`
  width: 24px;
  height: 24px;

  align-items: center;
  justify-content: center;
`

export const Content = styled.View`
  flex: 1;
  gap: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;

  margin-top: -20px;
  padding: 40px 24px;
`

export const InputGrouped = styled.View`
  flex-direction: row;
  gap: 12px;
  width: 100%;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-bottom: 8px;
`

export const ButtonContent = styled.View`
  margin: 0 24px 40px 24px;
`

export const NavigateIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_200,
  weight: 'bold'
}))``;