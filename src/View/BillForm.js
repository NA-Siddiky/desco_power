import React from 'react'
import { Table, Button } from 'react-bootstrap';
import Modal from 'react-modal/lib/components/Modal';
import Editor from './Editor';

function BillForm() {
    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>
                Add New Bill
            </Button>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Billing ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Paid Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {authorInfo && authorInfo.map(author => <Item key={author.id} item={author} editEnable={editEnable} />)}
                </tbody>
            </Table>
            {/* editor model */}
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Editor
                    info={addAuthorInfo}
                    setInfo={setAddAuthorInfo}
                    action={saveAuthor}
                />
                <Button className='mt-4' onClick={() => setIsOpen(false)}>
                    Close
                </Button>
            </Modal>
        </div>
    )
}

export default BillForm






