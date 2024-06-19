import React, { useState} from 'react';

export default function InputText() {
    const [text, setText] = useState('');

    const outputText = (event) => {
        setText(event.target.value);
    }

    return(
        <div>
        <input type="text" value={text} onChange={outputText}/>
        <p>{text}</p>
        </div>
    )

}