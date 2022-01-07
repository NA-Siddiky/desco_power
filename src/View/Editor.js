import React from 'react'
import { Form, Button } from 'react-bootstrap'

function Editor({ action, info, setInfo }) {
    return (
        <Form onSubmit={action}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Billing ID</Form.Label>
                <Form.Control
                    value={info.Title || ''}
                    onChange={(value) => setInfo(prev => ({ ...prev, Title: value.target.value }))}
                    type="text"
                    placeholder="Enter Title" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    value={info.Author_Name || ''}
                    onChange={(value) => setInfo(prev => ({ ...prev, Author_Name: value.target.value }))}

                    type="text"
                    placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    value={info.Email || ''}
                    onChange={(value) => setInfo(prev => ({ ...prev, Email: value.target.value }))}
                    type="Email"
                    placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    value={info.Phone || ''}
                    onChange={(value) => setInfo(prev => ({ ...prev, Phone: value.target.value }))}

                    type="text"
                    placeholder="Phone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Paid Amount</Form.Label>
                <Form.Control
                    value={info.Description || ''}
                    onChange={(value) => setInfo(prev => ({ ...prev, Description: value.target.value }))}

                    as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Editor
