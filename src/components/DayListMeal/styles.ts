import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  margin-top: 20px;
`

export const Day = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

  margin-bottom: 12px;
`