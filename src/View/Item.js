import React from 'react'
import { Button } from 'react-bootstrap';
const Item = ({ item, editEnable }) => {
    const { Author_Name, Description, Email, Phone, Title } = item;
    return (
        <tr>
            <td data-label='Title'>{Title}</td>
            <td data-label='Billing Name'>{Author_Name}</td>
            <td data-label='Phone'>{Phone}</td>
            <td data-label='Email'>{Email}</td>
            <td data-label='Description'>{Description}</td>
            <td>
                <Button onClick={() => editEnable(item)}>
                    Edit
                </Button>
            </td>
        </tr>
    )
}

export default Item
