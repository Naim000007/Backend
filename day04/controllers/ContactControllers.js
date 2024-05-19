//@desc Get all Contact
//@route GET /api/contact
//@access Public

const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all Contact!" });
}

//@desc Create new Contact
//@route post /api/contact
//@access Public

const createContact = (req, res) => {

    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({ message: "All fields are required" });
    }
    console.log(req.body);
    res.status(201).json({ message: `create contact` });
}



//@desc GET  Contact
//@route GET /api/contact/:id
//@access Public

const getContact = (req, res) => {
    res.status(200).json({ message: `get contact ${req.params.id}` });
}


//@desc Update Contact 
//@route post /api/contact/:id
//@access Public

const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact ${req.params.id}` });
}

//@desc Delete Contact 
//@route delete /api/contact/:id
//@access Public

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact ${req.params.id}` });
}
module.exports = { getContacts, getContact, createContact, updateContact, deleteContact }