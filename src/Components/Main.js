import React, { useEffect, useState } from 'react'
// import * as math from 'mathjs/number'
// import { evaluate } from 'mathjs'

function Main() {
    const [input, setInput] = useState('');
    
    // const handleClick = (event) => {
    //     const value = event.target.value;
    //     setInput((input + value).slice(0,2));
    // }

    const handleClick = (event) => {
        const value = event.target.value;
        const allowedOperations = ['+', '-', '*', '/'];
    
        // check if the input is an arithmetic operation
        if (allowedOperations.includes(value)) {
            // check if an arithmetic operation already exists
            if (input.includes('+') || input.includes('-') || input.includes('*') || input.includes('/')) {
                return;
            }
        }
    
        // check if the input is a number
        if (!isNaN(value)) {
            // check if the input length is less than or equal to 14
            if (input.length < 14) {
                setInput(input + value);
            }
        } else {
            // the input is an arithmetic operation
            setInput(input + value);
        }
    }
    
    useEffect(()=>{
        
    },[input])
    const calculate = () => {
        try {
        const result = eval(input);
        setInput('=' + result.toString());
        } catch (error) {
            // setInput('Error');
            if(error){
                setInput('Not Valid!')
            }
        }
    }
    
    const clearInput = () => {
        setInput('');
    }

  return (
    <div className='container '>
        <br /><br />
        <center>
        <section className="heading mb-4"><span> Calculator</span></section>
            {/* <label htmlFor="">Hey</label> */}
        {/* <form action='' className='form-control formClass'> */}
        <div className='form-control formClass'>
        <input className='mt-4 inputClass' maxLength={'2'} type="text" value={input} style={{textAlign:'right'}} /><br />

         <br />
        <div className="container d-flex justify-content-center ">
             <button className='numBtn btn btn-secondary me-2 ' value='7' onClick={handleClick} >7</button>&nbsp;&nbsp;
             <button className='numBtn btn btn-secondary me-2 ' value='8' onClick={handleClick} >8</button>&nbsp;&nbsp;
             <button className='numBtn btn btn-secondary me-2 ' value='9' onClick={handleClick} >9</button>&nbsp;&nbsp;
             <button className='btn btn-primary arithmeticBtn' value='+' onClick={handleClick}>+</button>
         </div><br />

         <div className="container d-flex justify-content-center ">
             <button className='numBtn btn btn-secondary me-2 ' value='4' onClick={handleClick} >4</button>&nbsp;&nbsp;
             <button className='numBtn btn btn-secondary me-2 ' value='5' onClick={handleClick} >5</button>&nbsp;&nbsp;
             <button className='numBtn btn btn-secondary me-2 ' value='6' onClick={handleClick} >6</button> &nbsp;&nbsp;
             <button className='btn btn-primary arithmeticBtn ' value='-' onClick={handleClick}>-</button>
         </div><br />

         <div className="container d-flex justify-content-center ">
             <button className='numBtn btn btn-secondary me-2 ' value='1' onClick={handleClick} >1</button>&nbsp;&nbsp;
             <button className='numBtn btn btn-secondary me-2 ' value='2' onClick={handleClick} >2</button>&nbsp;&nbsp;
             <button className='numBtn btn btn-secondary me-2 ' value='3' onClick={handleClick} >3</button> &nbsp;&nbsp;
             <button className='btn btn-primary arithmeticBtn ' value='*' onClick={handleClick}>*</button>
         </div><br />
            
         <div className="container d-flex justify-content-center mb-4">
             <button className='clearBtn btn  me-2' onClick={clearInput}>C</button>&nbsp;&nbsp;
             <button className='numBtn btn btn-secondary me-2 ' value='0' onClick={handleClick} >0</button>&nbsp;&nbsp;
             <button className='btn btn-primary arithmeticBtn me-2' onClick={calculate}>=</button>&nbsp;&nbsp;
             <button className='btn btn-primary arithmeticBtn ' value='/' onClick={handleClick} >/</button>
         </div>
             {/* <button value='C' onClick={handleClick}>Clear</button> */}
             {/* </form> */}
             </div> 
             </center>
             
     </div>
  )
}

export default Main