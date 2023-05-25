import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Video} from "../components";

export default {
    title: "Common/Video",
    component: Video,
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const WithConstrols = Template.bind({});
WithConstrols.args = {
    source: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    hasControls: true
};

export const WithoutConstrols = Template.bind({});
WithoutConstrols.args = {
    source: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    hasControls: false
};