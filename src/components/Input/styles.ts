import styled from "styled-components/native";

export const Container = styled.View`
  row-gap: 8px;
  min-width: 50%;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Input = styled.TextInput.attrs(props => ({
  textAlignVertical: props.multiline ? 'top' : 'center',
})) <{ multiline?: boolean }>`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 12px 16px;
  
`;