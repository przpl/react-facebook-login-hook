import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { ExampleWrapper } from "./Example";

export default {
    title: "Example",
    component: ExampleWrapper,
} as Meta<typeof ExampleWrapper>;

const Template: StoryFn<typeof ExampleWrapper> = (args) => <ExampleWrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    appId: "",
};
