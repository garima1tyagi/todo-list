import React from 'react'
import './ToDo.css'
import List from './list'

class TodoApp extends React.Component {
    constructor(props){
        super(props)
      this.state = {
      shoppingItem : '',
      items: [],
      
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
            items: [...this.state.items, this.state.shoppingItem],
        })
     
    }
    
    handleDelete = (index, event) => {
        const items =  this.state.items
        items.splice(index, 1)
        this.setState({items: items})

  };
    render() {
      return (
        <div>
        <h4>Add items to the grocery list</h4>
        <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.shoppingItem} onChange={this.changeHandler} placeholder="enter the item" className="input-item" required/>
        <button>Add</button>
        </form>
        <div className="items-container">
       {
           this.state.items.map((item, index)=> {
            return (
                   <List delEvent={this.handleDelete.bind(this,index)}>
                   {item}
                   </List>
           )
            
        }
    )

       }
       
        </div>
        </div>
      )
    }
  }
  

  export default TodoApp 
  