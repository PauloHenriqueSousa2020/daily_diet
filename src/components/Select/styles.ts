import styled from "styled-components/native";

export type DietContentVariantStyleProps = 'PRIMARY' | 'SECONDARY'

interface Props {
  variant: DietContentVariantStyleProps;
  select?: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  min-width: 50%;
  height: 52px;
  border-radius: 6px;

  background-color: ${({ theme, select, variant }) => !select ? theme.COLORS.GRAY_600 : variant === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border: 1px solid ${({ theme, select, variant }) => !select ? 'transparent' : variant === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Dot = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  
  background-color: ${({ theme, variant }) => variant === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`