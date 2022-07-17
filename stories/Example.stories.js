var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { ExampleWrapper } from "./Example";
export default {
    title: "Example",
    component: ExampleWrapper,
};
var Template = function (args) { return _jsx(ExampleWrapper, __assign({}, args)); };
export var Primary = Template.bind({});
Primary.args = {
    appId: "",
};
