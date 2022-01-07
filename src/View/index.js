import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Item from "./Item";
import "./style.css";
import Modal from "react-modal";
import AuthorEditor from "./BillEditor";
import { toast } from "react-toastify";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
    },
};

function View() {
    const [BillInfo, setBillInfo] = useState([]);
    const [addBillInfo, setAddBillInfo] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [filterText, setFilterText] = useState("");
    // fetching all Data from server
    useEffect(() => {
        axios
            .get(`https://infinite-reef-09004.herokuapp.com/get-bill/20`)
            .then((res) => {
                console.log(res);
                setBillInfo(res.data);
            });
    }, []);

    const saveAuthor = async (e) => {
        e.preventDefault();
        try {
            // converting to form data
            const form = new FormData();
            const a = Object.entries(addBillInfo);
            a.map((b) => form.append(b[0], b[1]));

            //if make edit request, it will be true and call edit option
            if (!isEdit) {
                axios
                    .post(`https://infinite-reef-09004.herokuapp.com/get-bill/20`, form, {
                        headers: {
                            "Custom-User-Agent": "gsdf#g3243F466$",
                        },
                    })
                    .then((res) => {
                        console.log(res);
                        toast.success(res.data.message);
                        setEdit(false);
                        setIsOpen(false);
                    });
            } else {
                axios
                    .put(
                        `https://care-box-backend.herokuapp.com/api/v1/applicant_test/update_blog/${addBillInfo.id}/`,
                        form,
                        {
                            headers: {
                                "Custom-User-Agent": "gsdf#g3243F466$",
                            },
                        }
                    )
                    .then((res) => {
                        console.log(res);
                        toast.success(res.data.message);
                        setEdit(false);
                        setIsOpen(false);
                    });
            }
        } catch (error) {
            console.log(error);
            toast.error("something want wrong, please try again");
        }
    };

    // work for edit enable
    const editEnable = (e) => {
        console.log(e);
        setIsOpen(true);
        setAddBillInfo(e);
        setEdit(true);
    };
    return (
        <div>
            <div
                className="bg-info d-flex justify-content-between p-2 align-items-center"
                style={{ height: "80px" }}
            >
                <img
                    alt="demo img"
                    style={{ height: "50px", width: "50px" }}
                    src="https://thumbs.dreamstime.com/b/demo-icon-189245721.jpg"
                />
                <h6>Paid Total {BillInfo.length}</h6>
            </div>
            <div className="m-3 rounded shadow">
                <div
                    className="bg-warning d-flex justify-content-between p-2 align-items-center"
                    style={{ height: "80px" }}
                >
                    <div className="d-flex ">
                        <h4>Billing</h4>
                        <input
                            onChange={(e) => setFilterText(e.target.value)}
                            className="form-control"
                            style={{ marginLeft: "25px" }}
                            placeholder="search..."
                        />
                    </div>
                    <Button onClick={() => setIsOpen(true)}>Add Bill</Button>
                </div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Full Name</th>

                            <th>Phone</th>
                            <th>Email</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BillInfo &&
                            BillInfo.filter(
                                (item) =>
                                    (item.Email &&
                                        item.Email.toLowerCase().includes(
                                            filterText.toLowerCase()
                                        )) ||
                                    (item.FullName &&
                                        item.FullName.toLowerCase().includes(
                                            filterText.toLowerCase()
                                        ))
                            ).map((bill) => (
                                <Item key={bill.id} item={bill} editEnable={editEnable} />
                            ))}
                    </tbody>
                </Table>
                {/* editor model */}
                <Modal
                    isOpen={modalIsOpen}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <AuthorEditor
                        info={addBillInfo}
                        setInfo={setAddBillInfo}
                        action={saveAuthor}
                    />
                    <Button
                        className="mt-4 btn btn-danger"
                        onClick={() => setIsOpen(false)}
                    >
                        Close
                    </Button>
                </Modal>
            </div>
        </div>
    );
}

export default View;
