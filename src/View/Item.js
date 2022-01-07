import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Item = ({ item, editEnable }) => {
    const { Author_Name, Email, Phone } = item;

    // here just add delete api url 
    const deleteBill = async (id) => {
        try {
            await axios.delete(`url/${id}`);
            toast.success("Delete SuccessFully");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <tr>
            <td data-label="Billing Name">{Author_Name}</td>
            <td data-label="Phone">{Phone}</td>
            <td data-label="Email">{Email}</td>

            <td>
                <Button onClick={() => editEnable(item)}>Edit</Button>
                <Button
                    onClick={() => deleteBill(item._id)}
                    className="btn btn-danger m-1"
                >
                    Delete
                </Button>
            </td>
        </tr>
    );
};

export default Item;
