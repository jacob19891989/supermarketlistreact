import React, { Component } from 'react';
import SupermarketListElement from '../supermarketListElement/SupermarketListElement';
class Home extends Component {
  state = {
    newItem: '',
    supermarketList: []
  }

  handleInput = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
  });
}
 
  handleAddItem = ()=> {
   const {supermarketList, newItem} = this.state;
   const newItemObj = {
     index: this.state.supermarketList.length,
     name: newItem
   }
   this.setState({supermarketList: supermarketList.concat(newItemObj)});
  }

  handleDeleteItem = (itemToDelete) => {
    const newArray = this.state.supermarketList.filter(elem => elem.index !== itemToDelete.index)
    let newSupermarketList = []
    let newIndex = 0;
    for (let item of newArray) {
      newSupermarketList.push({ name : item.name, index: newIndex });
      newIndex = newIndex + 1;
    }
    this.setState({
      supermarketList: newSupermarketList
    })
    console.log(newSupermarketList)
  }

  

  render() {
    console.log('input-value', this.state.newItem)
    console.log(this.state.supermarketList)
    return (
    <div>
       <p>Hola mundo</p>
       <input type="text" onChange={this.handleInput} name="newItem" value={this.state.newItem}/>
       <button onClick={this.handleAddItem}>Agregar elemento</button>
       {
        this.state.supermarketList.map((item,i) => 
        <SupermarketListElement
          key={i}
          item={item}
          handleDeleteItem={this.handleDeleteItem}
        />
    )}
    </div>
    );
  }
}



export default Home;

