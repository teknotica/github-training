import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

import { StorySection } from "../../../../.storybook/decorators";
import { withReadme } from "../../../../.storybook/utils";

import { PrimaryButton } from ".";

import Readme from "./README.md";

storiesOf("Components | Atoms", module)
  .addDecorator(withKnobs)
  .addParameters(withReadme(Readme))
  .add("Primary Button", () => (
    <Fragment>
      <StorySection title="Default">
        <PrimaryButton label="Click me" />
      </StorySection>
      <StorySection title="Disabled">
        <PrimaryButton disabled label="Click me" />
      </StorySection>
    </Fragment>
  ));
