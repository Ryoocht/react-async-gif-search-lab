import React, { Component } from 'react';

class GifSearch extends Component {

    state = {
        query: ""
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetch(this.state.query)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={this.handleChange}></input>
            </form>
        )    
    }
}

export default GifSearch;