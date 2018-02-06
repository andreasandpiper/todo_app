import React, { Component } from 'react';

class TodoList extends Component{
    render (props){
        const listItems = this.props.list.map(function(item, index){
            return <li key={index} className="collection-item">{item.title}</li>
        })
        return (
            <ul className='collection'>
                {listItems}
            </ul>
        )
    }
}

export default TodoList;