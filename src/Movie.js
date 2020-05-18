import React from 'react'

class Movie extends React.Component{
    
    constructor(props){
        super(props);
        this.state.title = props.title
    }

    componentDidMount(){

    }

    componentWillMount(){

    }

    render(){
        return (
        <div>
            movie
        <div/>
        )
    }
} 
export default Movie