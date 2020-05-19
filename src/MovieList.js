import React from 'react'

export default class MovieList extends React.Component{
    state = {
        moviesList: []
        // title:'',
        // movieId: ''
    }

    // async componentDidMount() {
    //     const response = await fetch("https://localhost:3001/movies/")
    //     await response.json()
    //         .then((data) => {
    //             this.setState({moviesList : data})
    //         })

    // }
    componentDidMount() {
        fetch('http://localhost:3001/movies')
        .then(res => res.json())
        .then((data) => {
          this.setState({ moviesList: data })
        })
        .catch(console.log)
      }
    render () {
        return (
            <div>
                See Movies Below:
               <h1> The movies </h1>
               <section>
                   {
                       this.state.moviesList.map((movie) => (
                           <h2>{movie.title}</h2>
                       ))
                   }
               </section>
            </div>
        )
    }
}