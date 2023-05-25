import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Switch} from "../components";

export default {
    title: "Common/Switch",
    component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = () => <Switch />;

export const StudyLounge = Template.bind({});