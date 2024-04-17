import { useState } from 'react';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';


const ContactList = ({ contacts, onDelete, onUpdate }) => {
    const [search, setSearch] = useState("");

    const onSearch = (e) => {
        setSearch(e.target.value)
    };

    const filteredData = () => {
        if (search === "") {
            return contacts;
        } else {
            return contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()));
        }
    };

    return (
        <ul className={styles.ul}>
            <h2>📒 Contact List</h2>
            <input
                placeholder='🔍 이름으로 검색할 수 있어요'
                value={search}
                onChange={onSearch}
            />
            {filteredData().map((contact) =>
                <ContactItem
                    key={contact.id}
                    {...contact}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            )}
        </ul>
    );
};

export default ContactList;