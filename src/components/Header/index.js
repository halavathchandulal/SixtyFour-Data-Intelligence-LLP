import './index.css'
import {Component} from 'react'
import {BsCalendar} from 'react-icons/bs'
import {FaRegClock} from 'react-icons/fa'
import {IoMdNotificationsOutline} from 'react-icons/io'
import React from 'react'
class Header extends Component {
  state = {
    currentDate: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      currentDate: new Date(),
    })
  }

  getGreeting() {
    const currentHour = this.state.currentDate.getHours()

    if (currentHour >= 5 && currentHour < 12) {
      return 'Good morning'
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good afternoon'
    } else if (currentHour >= 18 && currentHour < 22) {
      return 'Good evening'
    } else {
      return 'Good night'
    }
  }

  render() {
    const dateOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
    const timeOptions = {hour: '2-digit', minute: '2-digit'}

    const formattedDate = this.state.currentDate.toLocaleDateString(
      'en-US',
      dateOptions,
    )
    const formattedTime = this.state.currentDate.toLocaleTimeString(
      'en-US',
      timeOptions,
    )
    const greeting = this.getGreeting()

    return (
      <nav className='nav-header'>
        <div className='nav-content'>
          <h1 className='nav-menu-heading'>{greeting}, Akshay</h1>
          <p className='nav-second-line'>You are subcribed to Retail plan.</p>
        </div>

        <div className='nav-time'>
          <BsCalendar className='nav-item-mobile-links' />
          <p className='nav-menu-heading'>{formattedDate} </p>
          <FaRegClock className='nav-item-mobile-links' />
          <p className='nav-menu-heading'>{formattedTime}</p>
          <IoMdNotificationsOutline className='nav-item-mobile-links' />
        </div>
      </nav>
    )
  }
}
export default Header
