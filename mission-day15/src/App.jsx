import { useReducer, useRef } from 'react';
import './App.css';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';
import Chance from 'chance';

const chance = new Chance();
const mockData = [];
const startIdex = 6;
for (let i=0; i<startIdex; i++) {
  if (i%2 === 0) {
    mockData.push({
    id: i,
    favorite: false,
    name: chance.name({ prefix: true }),
    contact: chance.email({ domain: "naver.com"}),
    });
  } else {
    mockData.push({
    id: i,
    favorite: false,
    name: chance.name(),
    contact: chance.email({ domain: "gmail.com"}),
    });
  }
}

function reduce (state, action) {
  switch (action.type) {
    case "CREATE":
      return [ action.data, ...state ];
    case "DELETE":
      return state.filter((contact) => contact.id !== action.targetId);
    case "FAVORITE":
      return state.map((contact) => 
        contact.id === action.targetId
        ? {...contact, favorite: !contact.favorite}
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
  const [contacts, dispatch] = useReducer(reduce, mockData);
  const idRef = useRef(startIdex);

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
    dispatch({
      type: "UPDATE"
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
    });
  };

  return (
    <div className='App'>
      <h1>Contact List</h1>
      <ContactEditor onCreate={onCreate} />
      <ContactList
        contacts={contacts}
        onDelete={onDelete}
        onUpdate={onUpdate} />
    </div>
  )
}

export default App
