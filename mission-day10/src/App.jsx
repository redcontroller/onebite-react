import './App.css';
import Welcome from './components/Welcome';

function App() {
  const welcomeProps = {
    name: '홍길동',
    isMember: false,
  };

  return (
    <>
      <Welcome {...welcomeProps} />
    </>
  )
}

export default App
