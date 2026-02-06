import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "./Card";
import { Button } from "../Button/Button";
import sample from "./sample.jpg";

const meta = {
    component: Card,
    argTypes: {
        className: {
            control: "text"
        },
        height: {
            control: "text",
        },
        intent: {
            control: "radio",
            options: ["none", "primary", "secondary", "success", "warning", "danger"],
            table: {
                type: { summary: "none | primary | secondary | success | warning | danger"}
            }
        },
        width: {
            control: "text"
        }
    }
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Default Card */
export const Default: Story = {
    render: (args) => <Card {...args}></Card>,
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

/** Primary Card example */
export const Primary: Story = {
    args: {
        width: "400px"
    },
    render: (args) => (
        <Card id="card" {...args}>
            <img src={sample} alt="sample image" width={args.width} />
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
                <Button intent="success" style={{flex: 1}}>Yes</Button>
                <Button intent="danger" style={{flex: 1}}>No</Button>
            </Card.Footer>
        </Card>
    ),
    parameters: {
        docs: {
            source: {
                code: `
<Card id="card" width="400px">
    <img src={sample} alt="sample image" width="400px" />
    <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>The subtitle or tagline</Card.Subtitle>
    </Card.Header>
    <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum.
    </Card.Content>
    <Card.Footer style={{ display: "flex", gap: "10px" }}>
        <Button intent="success" style={{flex: 1}}>Yes</Button>
        <Button intent="danger" style={{flex: 1}}>No</Button>
    </Card.Footer>
</Card>                
                `,
            },
        },
    },
};

/** A simple card with only content */
export const Simple: Story = {
    render: (args) => (
        <Card {...args}>
            <Card.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </Card.Content>
        </Card>
    ),
    parameters: {
        docs: {
            source: {
                code: `
<Card>
    <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.
    </Card.Content>
</Card>                
                `
            }
        }
    }
};

/** A basic card with a header and footer */
export const HeaderFooter: Story = {
    name: "Header / Footer",
    argTypes: {
        intent: {
            table: {
                disable: true
            }
        },
        className: {
            table: {
                disable: true
            }
        }
    },
    render: (args) => (
        <Card {...args}>
            <Card.Header style={{background: "lightgray"}}>
                <Card.Title>Card Title</Card.Title>
            </Card.Header>
            <Card.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </Card.Content>
            <Card.Footer style={{background: "lightgray"}}>
                #card&nbsp;&nbsp;#footer
            </Card.Footer>
        </Card>
    ),
    parameters: {
        docs: {
            source: {
                code:`
<Card>
    <Card.Header style={{background: "lightgray"}}>
        <Card.Title>Card Title</Card.Title>
    </Card.Header>
    <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.
    </Card.Content>
    <Card.Footer style={{background: "lightgray"}}>
        #card&nbsp;&nbsp;#footer
    </Card.Footer>
</Card>                
                ` 
            }
        }
    }
}

/** Cards with intents or severities */
export const Severity: Story = {
    render: () => (
        <div style={{display: "flex", gap: "10px"}}>
            <Card width="150px" intent="primary">
                <Card.Header>
                    <Card.Title>Card Title</Card.Title>
                </Card.Header>
                <Card.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Card.Content>
            </Card>
            <Card width="150px" intent="secondary">
                <Card.Header>
                    <Card.Title>Card Title</Card.Title>
                </Card.Header>
                <Card.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Card.Content>
            </Card>
            <Card width="150px" intent="success">
                <Card.Header>
                    <Card.Title>Card Title</Card.Title>
                </Card.Header>
                <Card.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Card.Content>
            </Card>
            <Card width="150px" intent="warning">
                <Card.Header>
                    <Card.Title>Card Title</Card.Title>
                </Card.Header>
                <Card.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Card.Content>
            </Card>
            <Card width="150px" intent="danger">
                <Card.Header>
                    <Card.Title>Card Title</Card.Title>
                </Card.Header>
                <Card.Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Card.Content>
            </Card>
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
/* Primary */
<Card width="150px" intent="primary">
    <Card.Header>
        <Card.Title>Card Title</Card.Title>
    </Card.Header>
    <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.
    </Card.Content>
</Card>

/* Secondary */
<Card width="150px" intent="secondary">
    <Card.Header>
        <Card.Title>Card Title</Card.Title>
    </Card.Header>
    <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.
    </Card.Content>
</Card>

/* Success */
<Card width="150px" intent="success">
    <Card.Header>
        <Card.Title>Card Title</Card.Title>
    </Card.Header>
    <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.
    </Card.Content>
</Card>

/* Warning */
<Card width="150px" intent="warning">
    <Card.Header>
        <Card.Title>Card Title</Card.Title>
    </Card.Header>
    <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.
    </Card.Content>
</Card>

/* Danger */
<Card width="150px" intent="danger">
    <Card.Header>
        <Card.Title>Card Title</Card.Title>
    </Card.Header>
    <Card.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua.
    </Card.Content>
</Card>                
                `
            }
        }
    }
};
