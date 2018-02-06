import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import TodoList from './todo_list';
import AddForm from './add_form';
import todoData from '../assets/data';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: todoData
        }

        this.addItem = this.addItem.bind(this);
    }
    addItem(item){
        this.setState({
            list: [item, ...this.state.list]
        })
    }

    render(){
        return (
            <div className='container'>
                <h1 className="center-align">TODO LIST</h1>
                <AddForm add={this.addItem}/>
                <TodoList list={this.state.list} />
            </div>
        )
    }
} 

export default App;
