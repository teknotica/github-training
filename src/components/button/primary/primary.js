/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { Button } from "../button";

export const PrimaryButton = ({ type, disabled, label, ...rest }) => (
  <Button
    type={type}
    variant="primary"
    disabled={disabled}
    label={label}
    {...rest}
  />
);

PrimaryButton.defaultProps = {
  type: "button",
  disabled: false
};

PrimaryButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired
};
