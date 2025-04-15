import { TouchableHighlight } from "react-native";
import styled from "styled-components/native";

export type ButtonVariantStyleProps = 'PRIMARY' | 'SECONDARY'

interface Props {
  variant: ButtonVariantStyleProps
}

export const Container = styled(TouchableHighlight).attrs<Props>(({ theme, variant }) => ({
  underlayColor: variant === 'PRIMARY' ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_500
}))`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;
  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, variant }) => variant === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
  border: 1px solid ${({ theme, variant }) => variant === 'PRIMARY' ? 'transparent' : theme.COLORS.GRAY_100};

  padding: 12px 24px;
  border-radius: 6px;
`

export const Icon = styled.View`
  align-items: center;
  justify-content: center;

  width: 18px;
  height: 18px;
`

export const Text = styled.Text<Props>`
  color: ${({ theme, variant }) => variant === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`