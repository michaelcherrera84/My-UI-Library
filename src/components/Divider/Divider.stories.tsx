import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";
import { Card } from "../Card/Card";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { SignInWithGoogle } from "../Assets/Google/SignInWithGoogle";

const meta = {
    component: Divider,
    tags: ["!autodocs"],
    argTypes: {
        variant: {
            control: "radio",
            description: "Orientation of the divider",
            table: {
                type: { summary: "horizontal | vertical" },
            },
        },
        color: {
            control: "text",
            description: "Divider line color (accepts HEX, RGB(A), HSL(A), etc.)",
            table: {
                type: { summary: "string" },
            },
        },
        children: {
            control: "text",
            description: "The contents of the divider",
            table: {
                type: { summary: "ReactReactNode" },
            },
        },
    },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default divider */
export const Default: Story = {
    render: (args) => (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "200px",
                width: "500px",
                border: "1px solid black",
            }}
        >
            <Divider {...args}>{args.children}</Divider>
        </div>
    ),
};

/** Primary divider */
export const Primary: Story = {
    args: {
        variant: "horizontal",
        margin: "0",
        color: "darkgray",
        children: "Divider",
    },
    render: (args) => (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "200px",
                width: "500px",
                border: "1px solid black",
            }}
        >
            <Divider {...args}>{args.children}</Divider>
        </div>
    ),
};

/** Vertical divider with contents */
export const Vertical: Story = {
    args: {
        variant: "vertical",
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "200px",
                width: "500px",
                border: "1px solid black",
            }}
        >
            <Divider {...args}>
                <div style={{ height: "20px", width: "5px", backgroundColor: "darkgray", borderRadius: "5px" }} />
            </Divider>
        </div>
    ),
};

/** Example of a divider in use with a color, a margin, and styled content */
export const Form: Story = {
    render: () => (
        <Card width="fit-content">
            <Card.Content style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "50px" }}>
                <Card.Title style={{ textAlign: "center" }}>Sign In</Card.Title>
                <Input variant="floating" placeholder="username" />
                <Input type="password" variant="floating" placeholder="password" />
                <Button>Sign In</Button>
                <Divider color="var(--severity-primary)" margin="15px 0">
                    <span style={{ color: "var(--severity-primary)" }}>or</span>
                </Divider>
                <SignInWithGoogle />
            </Card.Content>
        </Card>
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
<Card width="fit-content">
    <Card.Content style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "50px" }}>
        <Card.Title style={{textAlign: "center"}}>Sign In</Card.Title>
        <Input variant="floating" placeholder="username" />
        <Input type="password" variant="floating" placeholder="password" />
        <Button>Sign In</Button>

        /* divider with color, margin, and styled content */
        <Divider color="var(--severity-primary)" margin="15px 0">
            <span style={{ color: "var(--severity-primary)" }}>or</span>
        </Divider>

        <SignInWithGoogle />
    </Card.Content>
</Card>
                `.trim(),
            },
        },
    },
};
