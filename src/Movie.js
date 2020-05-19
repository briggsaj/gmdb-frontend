import React from 'react'

export default class Movie extends React.Component{

    constructor(props){
        super(props);
        // this.state = {
        //     movieId: Number,
        //     poster: ''
        // }
    }

    componentDidMount(){

    }

    componentWillMount(){

    }

    render(){
        return (
        <div >
            movie
            <img 
                src={this.props.poster}
                alt="new"
                />
        </div>
        )
    }
} 
// export default {Movie}