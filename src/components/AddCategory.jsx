import { useState } from "react";

function AddCategory({ addCategory }) {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    const onSubmitForm = (event)=>{
        event.preventDefault();
        // No deja insertar, si el size del texto es menor o igual a 1 cacter
        if( inputValue.trim().length <=1 ) return;
        addCategory( inputValue.trim() );
        console.log(inputValue)
    }

    
    return (
    <form onSubmit={ onSubmitForm }>
        <input 
        type="text"
        placeholder="Buscar gif" 
        value={ inputValue }
        onChange={ onInputChange }/>
    </form>
  )
}

export { AddCategory };