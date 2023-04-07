module.exports = {
    stories: ["../stories/**/*.stories.@(ts|tsx)"],
    addons: ["@storybook/addon-essentials", "@storybook/addon-mdx-gfm"],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: true,
    },
};
