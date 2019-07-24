/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { getButtonCss, buttonInnerCss } from "./button.styles";

export const Button = ({ type, variant, disabled, label, ...rest }) => {
  const css = () => getButtonCss(variant, disabled);

  return (
    <button
      type={type}
      aria-disabled={disabled}
      disabled={disabled}
      css={css}
      {...rest}
    >
      <span css={buttonInnerCss}>
        <span>{label}</span>
      </span>
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  state: "default",
  variant: "primary"
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired
};
