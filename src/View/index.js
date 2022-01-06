import React from 'react'

const index = () => {
    const [authorInfo, setAuthorInfo] = useState([]);
    const [addAuthorInfo, setAddAuthorInfo] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isEdit, setEdit] = useState(false);

    // fetching all Data from server
    useEffect(() => {
        axios.get(`https://care-box-backend.herokuapp.com/api/v1/applicant_test/`).then(res => setAuthorInfo(res.data))
    }, []);

    const saveAuthor = async (e) => {
        e.preventDefault()
        try {
            // converting to form data
            const form = new FormData()
            const a = Object.entries(addAuthorInfo);
            a.map(b => form.append(b[0], b[1]));

            //if make edit request, it will be true and call edit option
            if (!isEdit) {
                axios.post(`https://care-box-backend.herokuapp.com/api/v1/applicant_test/`, form, {
                    headers:
                    {
                        "Custom-User-Agent": "gsdf#g3243F466$",
                    }
                }).then(res => {
                    console.log(res)
                    toast.success(res.data.message);
                    setEdit(false)
                    setIsOpen(false)
                });
            } else {
                axios.put(`https://care-box-backend.herokuapp.com/api/v1/applicant_test/update_blog/${addAuthorInfo.id}/`, form, {
                    headers:
                    {
                        "Custom-User-Agent": "gsdf#g3243F466$",
                    }
                }).then(res => {
                    console.log(res)
                    toast.success(res.data.message);
                    setEdit(false)
                    setIsOpen(false)
                });
            }


        } catch (error) {
            console.log(error)
            toast.error('something want wrong, please try again')
        }
    }

    // work for edit enable
    const editEnable = (e) => {
        console.log(e)
        setIsOpen(true);
        setAddAuthorInfo(e)
        setEdit(true)
    }
    return (
        <div>

        </div>
    )
}

export default index
