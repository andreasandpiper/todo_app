import React, { Component } from 'react';

class AddForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            details: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addItem = this.addItem.bind(this);

    }
    handleInputChange(event){
        const { name, value} = event.target;
        this.setState({
            [name]: value
        });
    }
    addItem(event){
        event.preventDefault();
        console.log(this.state)

        this.props.add(this.state);

        this.setState({
            title: '',
            details: ''
        })

    }
    render(){
        const {title, details} = this.state; 
        return (
            <div className='row'>
                <form className='col s12' onSubmit={this.addItem}>
                    <div className="row">
                        <div className="input-field col s5">
                            <input type="text" placeholder='Item Title' value={title} name='title' onChange={this.handleInputChange}/>
                        </div>
                        <div className="input-field col s5">
                            <input type="text" placeholder='Item details' value={details} name='details' onChange={this.handleInputChange}/>
                        </div>
                        <div className='right-align col s2'>
                            <button className="btn blue darken-2">                   
                                <i className="material-icons">add_circle</i>
                            </button>
                    </div>
                    </div>
                </form>
            </div> 
        )
    }
}

export default AddForm;