import type { Meta, StoryObj } from "@storybook/react-vite";

import { Spacer } from "./Spacer";

const meta = {
    component: Spacer,
    argTypes: {
        h: {
            control: "number",
        },
        w: {
            control: "number",
        },
    },
} satisfies Meta<typeof Spacer>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default Spacer */
export const Default: Story = {
    render: (args) => (
        <div style={{ border: "2px solid black" }}>
            <Spacer {...args} />
        </div>
    )
};

/** Primary spacer */
export const Primary: Story = {
    render: () => (
        <div style={{ display: "flex", flexWrap: "wrap", height: "300px", width: "600px", border: "2px solid black" }}>
            <div style={{ height: "100px", width: "200px", boxSizing: "border-box", border: "2px solid red" }} />
            <Spacer h={100} w={400} />

            <Spacer h={100} w={200} />
            <div style={{ height: "100px", width: "200px", boxSizing: "border-box", border: "2px solid red" }} />
            <Spacer h={100} w={200} />

            <Spacer h={100} w={400} />
            <div style={{ height: "100px", width: "200px", boxSizing: "border-box", border: "2px solid red" }} />
        </div>
    ),
    parameters: {
        controls: {
            disable: true,
        },
        actions: {
            disable: true,
        },
        docs: {
            source: {
                code: `
<div style={{ display: "flex", flexWrap: "wrap", height: "300px", width: "600px", border: "2px solid black" }}>
    /* First row */
    <div style={{ height: "100px", width: "200px", boxSizing: "border-box", border: "2px solid red" }} />
    <Spacer h={100} w={400} />

    /* Second row */
    <Spacer h={100} w={200} />
    <div style={{ height: "100px", width: "200px", boxSizing: "border-box", border: "2px solid red" }} />
    <Spacer h={100} w={200} />

    /* Third row */
    <Spacer h={100} w={400} />
    <div style={{ height: "100px", width: "200px", boxSizing: "border-box", border: "2px solid red" }} />
</div>                
                `,
            },
        },
    },
};
