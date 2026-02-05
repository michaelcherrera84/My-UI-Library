import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";
import { Button } from "../Button/Button";

const meta = {
    component: Input,
    tags: ["!autodocs"],
    argTypes: {
        className: {
            control: "text",
            description: "Style classes for the input wrapper",
            table: {
                type: {summary: "string"}
            }
        },
        style: {
            control: "object",
            description: "Inline styles for the input wrapper",
            table: {
                type: {summary: "ReactCSSProperties"}
            }
        },
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default input */
export const Default: Story = {};

/** Primary input */
export const Primary: Story = {
    args : {
        id: "fname",
        name: "fname",
        variant: "floating",
        placeholder: "First Name",
        onChange: () => {}
    }
}

/** Input with a floating placeholder */
export const Floating: Story = {
    args: {
        variant: "floating",
        placeholder: "Placeholder",
    },
};

/** Example sign in form with required fields */
export const Form = {
    render: () => (
        <form
            id="login"
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
            <Input type="email" variant="floating" placeholder="Email" required />
            <Input type="password" variant="floating" placeholder="Password" required />
            <Button type="submit">Sign In</Button>
        </form>
    ),
    parameters: {
        docs: {
            source: {
                code: `
<form id="login" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
    <Input type="email" variant="floating" placeholder="Email" required />
    <Input type="password" variant="floating" placeholder="Password" required />
    <Button>Sign In</Button>
</form>
                `.trim(),
            },
        },
    },
};
