import React from 'react'
import { shallow } from 'enzyme'
import MovieList from './MovieList.js'
import App from './App'

describe ('MovieLists are displayed', () => {

  function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
  }

    test('get movies data - for browsing movies', async () => {
        //setup
        const sampleMovies = [{
               movieId: 1,
               poster:"https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"
        }]
        //const movieId = 123
        const fetchMock = jest.fn()
        const oldFetch = global.fetchMock
        global.fetch = fetchMock
        fetchMock.mockImplementation(() => {
          return Promise.resolve({
            json: () =>{
              return Promise.resolve ({
                moviesList: sampleMovies
              })
            }
          })
        })
        const wrapper = shallow (<MovieList/>)
        //exercise
        await flushPromises()

        wrapper.update

        //assert
        expect(fetchMock).toHaveBeenCalledWith("http://localhost:3001/movies")
        expect(wrapper.state('moviesList').movieId).toBe(sampleMovies.movieId)
        expect(wrapper.state('moviesList').poster).toBe(sampleMovies.poster)

        //teardown
        global.fetch = oldFetch
      })

      
})