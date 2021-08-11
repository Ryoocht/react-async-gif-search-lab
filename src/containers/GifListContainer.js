import React, { Component } from 'react';
import Giflist from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    fetchGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=2MJzsSqaeu4RS8HQ8xXzVYu8O9px0ncN&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                gifs: data.data.slice(0, 3).map(gif=>gif.images.original.url)
            })
        })
    }

    componentDidMount(){
        this.fetchGifs()
    }

    render(){
        return(
            <div>
                <div>
                    <GifSearch fetch={this.fetchGifs} />
                </div>
                <div>
                    <Giflist gifs={this.state.gifs}/>
                </div>
            </div>
        )
    }
}

export default GifListContainer;