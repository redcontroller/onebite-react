import { useReducer, useRef } from 'react';

function reducer (state, action) {
    switch (action.type) {
        case "EDIT":
            return {
                ...state,
                [action.target.name]: action.target.value
            };
        case "SUBMIT":
            return { name: "", contact: ""};
        default:
            return state;
    }
}

const ContactEditor = ({ onCreate }) => {
    const nameRef = useRef();
    const contactRef = useRef();
    const [info, dispatch] = useReducer(reducer, {
        name: "",
        contact: "",
    });

    const HandlerChange = (e) => {
        dispatch({
            type: "EDIT",
            target: e.target,
        });
    };

    const HandlerClick = (e) => {
        e.preventDefault();

        if (info.name && info.contact) {
            onCreate(info.name, info.contact);
            dispatch({
                type: "SUBMIT",
            });
        } else if (!info.name) {
            nameRef.current.focus();
        } else if (!info.contact) {
            contactRef.current.focus();
        }
    };

    return (
        <div>
            <h2>Add Contact</h2>
            <input
                ref={nameRef}
                name="name"
                placeholder="이름 ..." 
                value={info.name}
                onChange={HandlerChange}
            />
            <input
                ref={contactRef}
                name="contact"
                placeholder="연락처(이메일) ..."
                value={info.contact}
                onChange={HandlerChange}
            />
            <button
                type='submit'
                onClick={HandlerClick}
            >
                Add
            </button>
        </div>
    );
};

export default ContactEditor;