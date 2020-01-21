import React, { Component } from 'react'


class List extends Component   {
    
    render() {
    return (
        <ul>
            <li><span>{this.props.children}</span>
                <button  onClick={this.props.delEvent} className="trash-icon"><i className="fa fa-trash"></i></button>

                </li>
                 </ul>
    )
}
}

export default List
