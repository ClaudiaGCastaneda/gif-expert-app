
import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    console.log(categories);

    // const onAddCategory = () => {

    //     setCategories([...categories, 'Algo nuevo']);
    //     //setCategories(cat => [...categories, 'Algo nuevo']);

    // }

    const onAddCategory = ( newCategory ) => {
        console.log( newCategory);

        if( categories.includes( newCategory)) return ;

        setCategories([ newCategory, ...categories ]);

        //setCategories([...categories, 'Algo nuevo']);
        //setCategories(cat => [...categories, 'Algo nuevo']);

    }

  return (
    <>
     <div>GiftExpertApp</div>
     {/* <AddCategory setCategories={ setCategories }/> */}
     <AddCategory 
        onNewCategory= { event => onAddCategory(event) }
     />
     {/* <button onClick={ onAddCategory }> Agregar</button> */}
     
    {
        categories.map( category => (

            <GifGrid key={ category } category= { category } />
            // return <li key={ category }>{category}</li>
        ))
    }

    </>
   
  )
}

