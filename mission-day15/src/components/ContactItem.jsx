const ContactItem = ({id, name, contact, onDelete, onUpdate}) => {
    return (
        <li>
            <input type='checkbox' onChange={() => onUpdate(id)} />
            <span>{name}</span>
            <span>{contact}</span>
            <button onClick={() => onDelete(id)}>🗑 Remove</button>
        </li>
    );
};

export default ContactItem;