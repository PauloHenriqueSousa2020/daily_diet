// libs
import { cloneElement } from "react";
import { TouchableHighlightProps } from "react-native";
import { useTheme } from "styled-components/native";

// styles
import * as S from "./styles";

interface Props extends TouchableHighlightProps {
  text: string;
  icon?: React.ReactElement;
  variant?: S.ButtonVariantStyleProps;
}

export function Button({ text, icon, variant = "PRIMARY", ...rest }: Props) {
  const { COLORS } = useTheme();

  return (
    <S.Container variant={variant} {...rest}>
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