import { useState } from 'react'

export function Users() {
    const [input, setInput] = useState('s')

    return (
    <input value={input} onChange={(event) => {setInput(event.target.value)}}/>
     )
}