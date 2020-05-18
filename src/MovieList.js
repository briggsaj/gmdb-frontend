import React from 'react'

export default class MovieList extends React.Component{
    state = {
        moviesList: []
        // title:'',
        // movieId: ''
    }

    async componentDidMount() {
        const response = await fetch("https://localhost:3001/movies/")
        await response.json()
            .then(
                res => res.json())
            .then((data) => {
                this.setState({moviesList : data})
            })

    }
    render () {
        return (
            <div>
                See Movies Below:
               <h1> {this.state.title} </h1>
               <section>
                   {
                       this.state.moviesList.map((moviesList) => {
                           title = {title}
                       })
                   }
               </section>
            </div>
        )
    }
}