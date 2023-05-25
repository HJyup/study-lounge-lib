import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Navbar} from "../components";

export default {
    title: "Common/NavBar",
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Standard = Template.bind({});
Standard.args = {
};

export const VariableIncluded = Template.bind({});
VariableIncluded.args = {
    text: "How to learn Storybook"
};