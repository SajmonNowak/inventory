import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Amount, InventoryTable, ItemName, Type, Price, Total, Item, MainPage } from './styles/Home.styled';
import { Button } from './styles/Button.styled';

const Home = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() =>{
      axios.get('/home')
        .then((resp) =>{
        let data = resp.data;
        setInventory(data)
        })    
    }, [])
  
console.log(inventory);
    return (
        <MainPage>
        <InventoryTable>
            {inventory.map((item, key) => {
                return (<Item odd={key%2 === 0}>
                    <ItemName>{item.name}</ItemName>
                    <Amount>{item.amount}</Amount>
                    <Type>{item.type}</Type>
                    <Price>{item.price}</Price>
                    <Total>{item.price*item.amount}</Total>
                    </Item>)
            })}
        </InventoryTable>
        <Button>Add Items</Button>
        </MainPage>
    )
}

export default Home
