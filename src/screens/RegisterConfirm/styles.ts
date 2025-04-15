import styled from "styled-components/native";

type RegisterConfirmVariantStyledProps = 'PRIMARY' | 'SECONDARY'

interface Props {
  variant: RegisterConfirmVariantStyledProps;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Title = styled.Text<Props>`
  color: ${({ theme, variant }) => variant === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  max-width: 280px;
  text-align: center;
`

export const Image = styled.Image`
  width: 224px;
  height: 288px;
`