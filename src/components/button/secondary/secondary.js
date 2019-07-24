/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { Button } from "../button";

export const SecondaryButton = ({ type, disabled, label, ...rest }) => (
  <Button
    type={type}
    variant="secondary"
    disabled={disabled}
    label={label}
    {...rest}
  />
);

SecondaryButton.defaultProps = {
  type: "button",
  disabled: false
};

SecondaryButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired
};
