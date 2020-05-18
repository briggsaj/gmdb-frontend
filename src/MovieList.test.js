import React from 'react'
import { shallow } from 'enzyme'
import MovieList from 'MovieList.js'
import App from './App'

describe ('MovieLists are displayed', () => {
    test('loads movies to display', () => {
        //setup
        const movieTitle = "Star Wars"
        const movieId = 123
        const fetchMock = jest.fn()
        const oldFetch = global.fetchMock
        global.fetch = fetchMock
        fetchMock.mockImplementation(() => {
          return Promise.resolve({
            json: () =>{
              return Promise.resolve ({
                name: movieTitle,
                movieId: movieTitle
              })
            }
          })
        })
        const wrapper = await shallow (<MovieList/>)
        //exercise
        await wrapper.update

        //assert
        expect(fetchMock).toHaveBeenCalledWith("https://localhost:3001/movies")
        expect(wrapper.state('name')).toBe(movieTitle)

        //teardown
        global.fetch = oldFetch
      })

      
})