import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1%;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`