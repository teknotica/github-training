import { css } from "@emotion/core";

import { rem } from "../../utils/convert-to-rem";

export const baseStyles = css`
  border: 0;
  display: inline-flex;
  justify-content: center;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 700;
  height: 40px;
  transition: background-color 0.5s;

  &:not(:disabled) {
    cursor: pointer;
  }

  svg {
    fill: currentColor;
  }
`;

const solidStyle = disabled => css`
  color: #ffffff;
  background-color: #b800aa;
  &:not(:disabled) {
    &:hover {
      color: #ffffff;
      background-color: #4a8bca;
    }
    &:active {
      color: #ffffff;
      background-color: #004f9c;
    }
  }
  ${disabled && `background-color: #F1F1F1; `}
`;

const outlineStyle = disabled => css`
  color: #005eb8;
  background-color: transparent;
  border: 2px solid #005eb8;
  &:not(:disabled) {
    &:hover {
      color: #ffffff;
      background-color: #4a8bca;
      border-color: #4a8bca;
    }
    &:active {
      color: #ffffff;
      background-color: #004f9c;
      border-color: #004f9c;
    }
  }
  ${disabled && `background-color: #F1F1F1;`}
`;

const styleStyles = {
  primary: solidStyle,
  secondary: outlineStyle
};

export const getButtonCss = (variant, disabled) => {
  return [baseStyles, styleStyles[variant](disabled)];
};

export const buttonInnerCss = css`
  padding: 0 ${rem(30)};
  align-items: center;
  display: flex;
`;
