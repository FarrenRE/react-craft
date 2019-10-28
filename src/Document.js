import React from 'react'
import ThemeContext from './ThemeContext'
import Child from './Child'
import ModuleFactory from './components/ModuleFactory'

class Document extends React.Component {
  static contextType = ThemeContext
  constructor() {
    super()
    this.modules = [
      { name: 'zergling', hp: '20' },
      { name: 'roach', hp: '40' }
    ]
  }

  componentDidMount() {
    const theme = this.context
    console.log('document theme')
    console.log(theme)
  }

  spawnModules(modules) {
    return modules.map((item) => ModuleFactory.spawn(item))
  }

  render() {
    const contents = this.spawnModules(this.modules)
    return (
      <div>
        {contents}
        {/* <Child /> */}
      </div>
    )
  }
}

export default Document 
