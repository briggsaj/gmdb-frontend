import React from 'react'
import { shallow } from 'enzyme'
import Movie from './Movie.js'

describe ('Movie is displayed', () => {

    test('set data from props', () => {

        const propMovieId = 1
        const propPoster = "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"
        //const sampleMovieData = {movieId: propMovieId, poster: propPoster}

        const movieWrapper = shallow(<Movie movieId={propMovieId} poster={propPoster}/>)
        console.log(movieWrapper.props())
        expect(movieWrapper.instance.props('movieId')).toEqual(propMovieId)
        expect(movieWrapper.props().poster).toEqual(propPoster)

    })
})