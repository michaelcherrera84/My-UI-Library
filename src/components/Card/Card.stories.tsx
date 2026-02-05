import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "./Card";
import { Button } from "../Button/Button";
import sample from "./sample.jpg";

const meta = {
    component: Card,
    tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default Card */
export const Default: Story = {
    render: () => <Card></Card>,
    parameters: {
        docs: {
            source: {
                code: `
<Card></Card>
                `.trim(),
            },
        },
    },
};

export const Primary: Story = {
    render: () => (
        <Card height="fit-content" width="400px">
            <img src={sample} alt="sample image" width="400px" />
            <Card.Header>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle>The subtitle or tagline</Card.Subtitle>
            </Card.Header>
            <Card.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
            </Card.Content>
            <Card.Footer style={{ display: "flex", gap: "10px" }}>
                <Button intent="success">Yes</Button>
                <Button intent="danger">No</Button>
            </Card.Footer>
        </Card>
    ),
    parameters: {
        docs: {
            source: {
                code: `
<Card height="fit-content" width="400px">
    <img src={sample} alt="sample image" width="400px" />
    <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>The subtitle or tagline</Card.Subtitle>
    </Card.Header>
    <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
    </Card.Content>
    <Card.Footer style={{ display: "flex", gap: "10px" }}>
        <Button intent="success">Yes</Button>
        <Button intent="danger">No</Button>
    </Card.Footer>
</Card>                
                `
            },
        },
    },
};
