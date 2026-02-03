import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";
import { fn } from "storybook/test";

const meta = {
    component: Button,
    tags: ["autodocs"],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        variant: 'solid',
        intent: 'primary',
        shape: 'basic',
        children: "Primary",
    },
};

export const Solid = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button intent="primary">Primary</Button>
    <Button intent="secondary">Secondary</Button>
    <Button intent="success">Success</Button>
    <Button intent="warning">Warning</Button>
    <Button intent="danger">Danger</Button>
  </div>
);

export const Outline = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button intent="primary" variant="outline">Primary</Button>
    <Button intent="secondary" variant="outline">Secondary</Button>
    <Button intent="success" variant="outline">Success</Button>
    <Button intent="warning" variant="outline">Warning</Button>
    <Button intent="danger" variant="outline">Danger</Button>
  </div>
);

export const Raised = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button intent="primary" variant="raised">Primary</Button>
    <Button intent="secondary" variant="raised">Secondary</Button>
    <Button intent="success" variant="raised">Success</Button>
    <Button intent="warning" variant="raised">Warning</Button>
    <Button intent="danger" variant="raised">Danger</Button>
  </div>
);

export const Pill = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button intent="primary" variant="raised" shape="pill">Primary</Button>
    <Button intent="secondary" variant="raised" shape="pill">Secondary</Button>
    <Button intent="success" variant="raised" shape="pill">Success</Button>
    <Button intent="warning" variant="raised" shape="pill">Warning</Button>
    <Button intent="danger" variant="raised" shape="pill">Danger</Button>
  </div>
);