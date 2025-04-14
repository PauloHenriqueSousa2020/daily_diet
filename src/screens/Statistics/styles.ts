import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type DietContentVariantStyleProps = 'PRIMARY' | 'SECONDARY'

interface Props {
  variant: DietContentVariantStyleProps
}

export const Container = styled.View``

export const Header = styled(SafeAreaView) <Props>`
  position: relative;
  
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme, variant }) => variant === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  min-height: 168px;
  max-height: 168px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.G}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-bottom: 2px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const NavigateContainer = styled.TouchableOpacity`
  position: absolute;
  left: 24;
  top: 64px;

  width: 24px;
  height: 24px;

  align-items: center;
  justify-content: center;
`

export const StatisticsContent = styled.View`
  height: 100%;
  padding: 24px 20px 0px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const StatisticsContentText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  text-align: center;
  margin-bottom: 22px;
`

export const StatisticsContentBlock = styled.View`
  align-items: center;
  justify-content: center;

  padding: 16px;
  margin-bottom: 12px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;
`

export const StatisticsContentBlockTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin-bottom: 8px;
`

export const StatisticsContentBlockSubtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const StatisticsContentBlockVariantContainer = styled.View`
  flex-direction: row;

  gap: 8px;
`

export const StatisticsContentBlockVariant = styled(StatisticsContentBlock) <Props>`
  background-color: ${({ theme, variant }) => variant === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const NavigateIcon = styled(ArrowLeft).attrs<Props>(({ theme, variant }) => ({
  size: 18,
  color: variant === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  weight: 'bold'
}))``;

