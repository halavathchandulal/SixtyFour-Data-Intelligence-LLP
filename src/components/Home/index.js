import {Component} from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import Content from '../Content'
import './index.css'
class Home extends Component {
  render() {
    return (
      <div className='container'>
        <SideBar />
        <div className='container2'>
          <Header />
          <Content />
        </div>
      </div>
    )
  }
}
export default Home
