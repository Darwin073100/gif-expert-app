import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

function GifExpertApp() {

    const [categories, setCategories] = useState(['Mushoku Tensei']);

    const addCategory = ( category )=>{
        
        if(categories.includes(category)) return ;

        setCategories([
            category,
            ...categories
        ]);
    }

    // const onSubmitForm = (event)=>{
    //     event.preventDefault();
    // }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            addCategory={ addCategory } 
            />
            
        { categories?.map( category => (
            <GifGrid 
                category={ category }
                key={ category } />
        ))}
    </>
  )
}

export { GifExpertApp }