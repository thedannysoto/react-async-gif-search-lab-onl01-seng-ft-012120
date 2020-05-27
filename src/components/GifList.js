import React, {Component} from 'react';

export default class GifList extends Component {

    renderGifs() {
        return this.props.gifs.map((gif, idx) => {return <li><img key={idx} src={gif} alt="" /></li>})
    }

    render() {

        return(
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}