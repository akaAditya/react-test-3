import React from 'react'
import ChocolateInventory from './ChocolateInventory';

const ChocolateHouse = (props) => {
    if(props.items.length === 0){
        return <p>Empty Inventory</p>;
    }
    else if(props.items.length >= 1)
    console.log(props.items)
    return (
        <ul>
          {props.items.map((chocolate) => {
            return (
              <ChocolateInventory
                key={chocolate.id}
                id={chocolate.id}
                title={chocolate.title}
                description={chocolate.description}
                price={chocolate.price}
              />
            );
          })}
        </ul>
      );
}

export default ChocolateHouse