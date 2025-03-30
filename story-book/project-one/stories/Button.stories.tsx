import Button from '../components/Button';

export default {
    title: 'Components/Button',
    component: Button,
};

export const Primary = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
    },
};

export const Secondary = {
    args: {
        children: 'Secondary Button',
        variant: 'secondary',
    },
};

export const Disabled = {
    args: {
        children: 'Disabled Button',
        variant: 'primary',
        disabled: true,
    },
};