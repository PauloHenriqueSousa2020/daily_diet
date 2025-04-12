// libs
import { cloneElement } from "react";
import { useTheme } from "styled-components/native";

// styles
import * as S from "./styles";

interface Props {
  text: string;
  icon?: React.ReactElement;
  variant?: S.ButtonVariantStyleProps;
}

export function Button({ text, icon, variant = "PRIMARY" }: Props) {
  const { COLORS } = useTheme();
  return (
    <S.Container variant={variant} onPress={() => { }}>
      <>

        {icon &&
          <S.Icon>
            {cloneElement(icon, {
              size: 18,
              color: variant === 'PRIMARY' ? COLORS.WHITE : COLORS.GRAY_100
            })}
          </S.Icon>
        }
        <S.Text variant={variant}>{text}</S.Text>
      </>
    </S.Container>
  )
}