import React from "react";
import { Form, Button } from "react-bootstrap";

function AuthorEditor({ action, info, setInfo }) {
    return (
        <Form onSubmit={action}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    value={info.FullName || ""}
                    onChange={(value) =>
                        setInfo((prev) => ({ ...prev, FullName: value.target.value }))
                    }
                    type="text"
                    placeholder="Enter Full Name"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    value={info.Email || ""}
                    onChange={(value) =>
                        setInfo((prev) => ({ ...prev, Email: value.target.value }))
                    }
                    type="text"
                    placeholder="Email"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    value={info.Phone || ""}
                    onChange={(value) =>
                        setInfo((prev) => ({ ...prev, Phone: value.target.value }))
                    }
                    type="text"
                    placeholder="Phone"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AuthorEditor;
