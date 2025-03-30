import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import LandingPage from '../pages/LandingPage';

export default {
    title: 'Pages/LandingPage',
    component: LandingPage,
} as Meta;

const Template: StoryFn = () => <LandingPage />;

export const Default = Template.bind({});
