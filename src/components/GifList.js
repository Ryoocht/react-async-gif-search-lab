import React from 'react' 

class GifList extends React.Component{


    render(){
        return (
            <div>
                {this.props.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt="gif"/></li>)}
            </div>
          )
    }

}

export default GifList