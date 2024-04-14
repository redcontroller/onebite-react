import { useState } from 'react';
import './App.css';
import CurrencyInput from './components/CurrencyInput';

function App() {
  const [krwInput, setKrwInput] = useState(0);
  const [usdInput, setUsdInput] = useState(0);
  const rate = 1300;
  const props = {
    krwInput: krwInput,
    setKrwInput: setKrwInput,
    usdInput: usdInput,
    setUsdInput: setUsdInput,
    rate: rate,
  };

  return (
    <main className='App'>
      <h1>환율 변환기 (KRW=USD)</h1>
      <form className="form">
          <CurrencyInput
            id="krw"
            {...props}
          />
          <CurrencyInput 
            id="usd"
            {...props}
          />
      </form>
    </main>
  )
}

export default App
