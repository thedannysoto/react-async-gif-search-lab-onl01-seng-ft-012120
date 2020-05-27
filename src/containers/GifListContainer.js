import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {

    constructor() {
        super();
        this.state = {
            gifs: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(query = "dogs") {
        const url = 'https://api.giphy.com/v1/gifs/search?q=' + `${query}` + '&api_key=fv9PBNPMbT3TFiijPjvkBjsa0DaUwSdz';
        fetch(url)
            .then(response => response.json())
            .then(data => {this.setState({
                gifs: [data.data[0].images.original.url, data.data[1].images.original.url, data.data[2].images.original.url ]
            })
            })
    }

    componentDidMount() {
        this.handleSubmit()
    }
    
    render() {
        
        
        
        return(
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
    

}