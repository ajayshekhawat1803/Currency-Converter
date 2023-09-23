import { useEffect, useState } from 'react'
import InputBox from './components/InputBox'


function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [amountDisabled, setAmountDisabled] = useState(true)
  const [currencyFrom, setCurrencyFrom] = useState("usd")
  const [currencyTo, setCurrencyTo] = useState("inr")
  const [data, setData] = useState({})

  const useCurrencyInfo = (currency) => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => {
        res.json()
          .then((dataaa) => setData(dataaa[currency]))
      })
  }
  const converter = () => {
    setConvertedAmount(amount * data[currencyTo])
    // console.log(amount, currencyFrom, currencyTo, data[currencyTo]);
  }
  const swap = () => {
    setCurrencyFrom(currencyTo);
    setCurrencyTo(currencyFrom);
    setAmount(0)
    setConvertedAmount(0)
  }

  useEffect(() => {
    useCurrencyInfo(currencyFrom);
  }, [currencyFrom, currencyTo])

  useEffect(() => {
    converter();
  }, [amount, currencyFrom, currencyTo])


  return (
    <div className=' w-6/12 p-7 rounded-lg backdrop-blur-sm ' id='main'>
      <div className='w-full relative flex flex-col  justify-center items-center'>
        <InputBox
          amount={amount}
          setAmount={setAmount}
          disabled={!amountDisabled}
          label="From"
          currency={currencyFrom}
          setCurrency={setCurrencyFrom}
          data={data} />


        <InputBox
          amount={convertedAmount}
          disabled={amountDisabled}
          label="To"
          currency={currencyTo}
          setCurrency={setCurrencyTo}
          data={data} />

        <button className='bg-blue-600 py-2 px-6 absolute' id='swapBtn' onClick={() => swap()}>Swap</button>

      </div>

      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
        onClick={converter}>
        Convert {currencyFrom.toUpperCase()} to {currencyTo.toUpperCase()}
      </button>



    </div>

  );
}

export default App