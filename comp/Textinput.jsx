import React from 'react'

const Textinput = ({ labelName = "Text", placeHolder = "Enter your Text", handle, value, inputFor, name, classLabel, classInput }) => {
    return (
        <div >
            <label htmlFor={labelName} className={classLabel}>{inputFor}</label>
            <input type="text" name={labelName} id={labelName} placeholder={placeHolder} value={value}
                onChange={(e) => handle(e.target.value, name)}
                className={classInput}
            />
        </div>
    )
}

export default Textinput