import React, { useState} from 'react';

export default function() {
const [count, setCount] = useState(0);

const updateCount = () => {
    setCount(count +1);
}

return(
     <>
     <p> {count}</p>
     <button onClick={updateCount}>Увеличить count</button>
     </>
)

}