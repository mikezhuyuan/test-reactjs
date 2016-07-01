import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { LeftSideBar } from './LeftSideBar'
import { RightSideBar } from './RightSideBar'
import { TextField } from './TextField'
import { PageTitle } from './PageTitle'
import { SearchPanel } from './SearchPanel'
import { SearchByChars } from './SearchByChars'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <PageTitle title="Workflow Designer" />
        <SearchPanel>
          <SearchByChars />
        </SearchPanel>
        <LeftSideBar />        
        <RightSideBar />
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <LeftSideBar />
    <div id="main" className="collapsed">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <App />
          </div>
        </div>
      </div>
    </div>
    <RightSideBar />
  </div>,
  document.getElementById('root')
)