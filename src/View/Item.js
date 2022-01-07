import React from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Item = ({ item, editEnable }) => {
    const { FullName, Email, Phone } = item;

    // here just add delete api url
    const deleteBill = async (id) => {
        try {
            await axios.get(
                `https://infinite-reef-09004.herokuapp.com/delete-billing/${id}`
            );
            toast.success("Delete SuccessFully");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <tr>
            <td data-label="Billing Name">{FullName}</td>
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
