import { useReducer, useRef } from 'react';
import './App.css';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';
import Chance from 'chance';

function reduce (state, action) {
  const favoriates = [];

  switch (action.type) {
    case "CREATE":
      return [ action.data, ...state ];
    case "DELETE":
      return state.filter((contact) => contact.id !== action.targetId);
    case "FAVORITE":
      return state.map((contact) => 
        contact.id === action.targetId
        ? {...contact, favorite: !state.favorite}
        : contact
      );
    case "UPDATE":
      return [
        ...state.filter((contact) => contact.favorite),
        ...state.filter((contact) => !contact.favorite)
      ];
    default:
      return state;
  }
}

function App() {
  const chance = new Chance();
  const mockData = [
    {
      id: 0,
      favorite: false,
      name: chance.name({ prefix: true }),
      contact: chance.email({ domain: "naver.com"}),
    },
    {
      id: 1,
      favorite: false,
      name: chance.name(),
      contact: chance.email({ domain: "gmail.com"}),
    },
    {
      id: 2,
      favorite: false,
      name: chance.name(),
      contact: chance.email({ domain: "daum.net"}),
    },
  ];
  const [contacts, dispatch] = useReducer(reduce, mockData);
  const idRef = useRef(3);

  const onCreate = (name, contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        favorite: false,
        name: name,
        contact: contact,
      },
    });
  }

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "FAVORITE",
      targetId: targetId
    });
    dispatch({
      type: "UPDATE"
    })
  };

  return (
    <>
      <h1>Contact List</h1>
      <ContactEditor onCreate={onCreate} />
      <ContactList
        contacts={contacts}
        onDelete={onDelete}
        onUpdate={onUpdate} />
    </>
  )
}

export default App
