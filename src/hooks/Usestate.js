import React, { useCallback, useEffect, useState } from 'react'

const Usestate = () => {
    const[count, setCount] = useState(0)

    useEffect(()=>{
        console.log(count)
    })

    const search = useCallback(()=>{
        setCount(prev => prev + 1)
    })
  return (
    <div>
        <p>{count}</p>
        <button onClick={search}>Add</button>
    </div>
  )
}

export default Usestate