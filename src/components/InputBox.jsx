import React from 'react'

let allCurrencies;

const InputBox = ({
    amount,
    setAmount,
    label,
    disabled,
    currency,
    setCurrency,
    data
}) => {
    allCurrencies = Object.keys(data)

    return (
        <div className=' w-full bg-white p-3 rounded-lg flex justify-between mb-4'>
            <div className='flex flex-col gap-5 '>
                <label className=' text-lg text-slate-500 text-center max-w-fit' htmlFor='inputed'>{label}</label>
                <input className='outline-none' type='number' value={amount} id='inputed' disabled={disabled} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className='flex flex-col gap-5 items-center'>
                <span className=' text-lg text-slate-500'>Currency Type</span>

                <select className=' bg-slate-300 py-1  px-2 outline-none border-none rounded-md' value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {
                        allCurrencies.map((curr) => (
                            <option key={curr} value={curr}>{curr}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default InputBox;
