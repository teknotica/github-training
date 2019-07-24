import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

import { StorySection } from "../../../../.storybook/decorators";
import { withReadme } from "../../../../.storybook/utils";

import { SecondaryButton } from ".";

import Readme from "./README.md";

storiesOf("Components | Atoms", module)
  .addDecorator(withKnobs)
  .addParameters(withReadme(Readme))
  .add("Secondary Button", () => (
    <Fragment>
      <StorySection title="Default">
        <SecondaryButton label="Click me" />
      </StorySection>
      <StorySection title="Disabled">
        <SecondaryButton disabled label="Click me" />
      </StorySection>
    </Fragment>
  ));
