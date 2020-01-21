import React from 'react'
import './ToDo.css'
import List from './list'

class TodoApp extends React.Component {
    constructor(props){
        super(props)
      this.state = {
      shoppingItem : '',
      items: []
      
      }
this.changeHandler = this.changeHandler.bind(this)

    }
    
    changeHandler = (event) => {
    this.setState({
         shoppingItem: event.target.value
    })
    }
    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            shoppingItem: '',
            items: [...this.state.items, this.state.shoppingItem]
        })
     
    }
    
    render() {
      return (
        <div>
        <h4>Add items to the grocery list</h4>
        <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.shoppingItem} onChange={this.changeHandler} placeholder="enter the item" className="input-item" required/>
        <button>Add</button>
        </form>
        <div className="items-container">
       <List items={this.state.items} />
        </div>
        </div>
      )
    }
  }
  

  export default TodoApp 
  