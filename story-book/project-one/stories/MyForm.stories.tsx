import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Form from '../components/MyForm';

export default {
    title: 'Components/Form',
    component: Form,
} as Meta;

const Template: StoryFn = () => <Form />;

export const Default = Template.bind({});
