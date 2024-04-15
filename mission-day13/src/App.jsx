import { useState } from 'react';
import './App.css';
import CurrencyInput from './components/CurrencyInput';

function App() {
  // const [krwInput, setKrwInput] = useState(0);
  // const [usdInput, setUsdInput] = useState(0);
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });
  const rate = 1300;
  // const props = {
  //   krwInput: krwInput,
  //   setKrwInput: setKrwInput,
  //   usdInput: usdInput,
  //   setUsdInput: setUsdInput,
  //   rate: rate,
  // };
  const onChange = (id, value) => {
    if (id === "krw") {
      setState({
        krw: value,
        usd: value / rate,
      });
    } else if (id === "usd") {
      setState({
        krw: value * rate,
        usd: value,
      })
    }
  };

  return (
    <main className='App'>
      <h1>환율 변환기 (KRW=USD)</h1>
      <h3 className='rate'>(적용 환율: {rate.toLocaleString()})</h3>
      <form className="form">
          <CurrencyInput
            id="krw"
            // {...props}
            value={state.krw}
            onChange={onChange}
          />
          <CurrencyInput 
            id="usd"
            // {...props}
            value={state.usd}
            onChange={onChange}
          />
      </form>
    </main>
  )
}

export default App
