import { useState } from "react";



export const AddCategory = ( { onNewCategory }) => {

    const [ inputValue, setInputValue] = useState('One Punch');

    const onInputchange = ({ target}) => {
        console.log(target.value);
        setInputValue(target.value);

    }

    const onSubmit = (event) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1 ) return;
        //setCategories(  categories => [inputValue, ...categories]);
        
        onNewCategory( inputValue.trim() );
        setInputValue('');
        
       // console.log( inputValue );
    }

    

  return (
    <form onSubmit={ onSubmit }>
        <input 
        type='text'
        placeholder='Buscar gifts'
        value={ inputValue }
        onChange={ onInputchange }
        />

    </form>



  )

// CON EVENT
//   const onInputchange = (event) => {
//     console.log(event.target.value);
//     setInputValue(event.target.value);

// }
// return (
// <input 
// type='text'
// placeholder='Buscar gifts'
// value={ inputValue }
// onChange={ (event) => onInputchange(event) }
// />


// )
}
