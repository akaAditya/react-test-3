import React from 'react'
import ChocolateEntriesForm from './ChocolateEntriesForm'

const NewChocolatesList = (props) => {
    const chocolatesDataHandler = (existingChocolatesList)=>{
        const chocolateData = {
            ...existingChocolatesList
        }
        props.onAddChocolates(chocolateData);
        
    }
  return (
    <div>
        <ChocolateEntriesForm onSaveChocolateData={chocolatesDataHandler}/>
        
    </div>
  )
}

export default NewChocolatesList;