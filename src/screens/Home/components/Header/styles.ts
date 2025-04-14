// libs
import styled from "styled-components/native";

// assets
import { ArrowUpRight } from "phosphor-react-native";

export type DietContentVariantStyleProps = 'PRIMARY' | 'SECONDARY'

interface Props {
  variant: DietContentVariantStyleProps
}

export const Container = styled.View`
  width: 100%;
  min-height: 172px;
  max-height: 172px;

  margin-bottom: 40px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 36px;
`

export const UserPhoto = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 20px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
`

export const DietContent = styled.View<Props>`
  position: relative;

  padding: 20px 16px;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: ${({ theme, variant }) => variant === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const DietPercentage = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.G}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const DietAuxiliarText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const NavigateContainer = styled.TouchableOpacity`
  position: absolute;
  right: 12px;
  top: 12px;

  width: 24px;
  height: 24px;

  align-items: center;
  justify-content: center;
`

export const NavigateIcon = styled(ArrowUpRight).attrs<Props>(({ theme, variant }) => ({
  size: 18,
  color: variant === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  weight: 'bold'
}))``