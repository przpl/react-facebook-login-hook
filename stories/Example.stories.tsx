import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ExampleWrapper } from "./Example";

export default {
    title: "Example",
    component: ExampleWrapper,
} as ComponentMeta<typeof ExampleWrapper>;

const Template: ComponentStory<typeof ExampleWrapper> = (args) => <ExampleWrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    appId: "",
};
