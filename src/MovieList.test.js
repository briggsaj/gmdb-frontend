import React from 'react'
import { shallow } from 'enzyme'
import MovieList from './MovieList.js'
import App from './App'

describe ('MovieLists are displayed', () => {

  function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
  }

    test('loads movies to display', async () => {
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
                title: movieTitle,
                movieId: movieId
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
        expect(wrapper.state('title')).toBe(movieTitle)

        //teardown
        global.fetch = oldFetch
      })

      
})