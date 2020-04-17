import React, { Component } from 'react'
import {ThemeContext} from '../Context/ThemeContext'

export class ThemeToggle extends Component {
           static contextType=ThemeContext
           render() {
                      const {toggleTheme} =this.context
                      return (
                                 <div>
                                            <button onClick={toggleTheme}>Toggle the theme</button>
                                 </div>
                      )
           }
}

export default ThemeToggle
