import React from 'react'

export default class Movie extends React.Component{
    
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
        </div>
        )
    }
} 
// export default {Movie}