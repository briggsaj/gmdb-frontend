import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('Movie data base', () => {

  test('basic test', () => {
    const wrapper = shallow(<App />)
  
    wrapper.update()
    expect(wrapper.state().testState).toBe('initialized')
  });

  
 

})

