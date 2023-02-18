import React, {useState} from 'react'

export default function Form( props) {

  const handleUpClick = ()=>{
    let newText= text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
    const [text, setText] = useState('');

  const handlelowClick=()=>{
    let newText = text.toLowerCase()
    setText(newText)
  }

  let count= text.split(" ").length
  let withoutWhitespace = count.rep
   
  return (
    <>
    <div className='container'>
        <h1>{props.heading} </h1>
        <div className="mb-3">
    
        <textarea className="form-control" value ={text} onChange= {handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className='button-primary mx-1' onClick={handleUpClick}>Covert to uppercase</button>
    <button className='button-primary mx-1' onClick={handlelowClick}>Covert to lowercase</button>
    </div>

    <div className='container my-3'></div>
    <h3>{text.split(" ").length} words {text.length} characters</h3>
    <p>{0.008* text.split(" ").length} minutes to complete</p>
    </>
  )
}
