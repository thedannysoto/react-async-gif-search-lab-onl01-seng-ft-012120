import React, {Component} from 'react';

export default class GifSearch extends Component {

    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    handleChange = event => {
        this.setState({
            query: event.target.value
        })
    }

    handleClick = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state.query);
    }

    render() {


        return(
            <form>
                <label>Search: </label>
                <input type="text" value={this.state.query} onChange={this.handleChange} />
                <button type="submit" onClick={this.handleClick}>Submit</button>
            </form>
        )
    }

}