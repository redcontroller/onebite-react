import './App.css';
import Welcome from './components/Welcome';

function App() {
  const welcomeProps = {
    name: '홍길동',
    isMember: true,
  };

  return (
    <>
      <Welcome {...welcomeProps} />
    </>
  )
}

export default App
