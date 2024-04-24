import './index.css'
import {RiComputerLine} from 'react-icons/ri'
import {FaRegQuestionCircle} from 'react-icons/fa'
import {FaCalendarDay} from 'react-icons/fa'
import {LuBuilding2} from 'react-icons/lu'
import {AiFillDollarCircle} from 'react-icons/ai'
import {FaHeadphones} from 'react-icons/fa6'
import {IoIosSettings} from 'react-icons/io'
import {CiSearch} from 'react-icons/ci'

const SideBar = () => {
  return (
    <div className='background'>
      <div className='card-icons'>
        <div className='profile-success-container'>
          <img
            src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-about-me-img.png'
            alt='profile'
            className='profile-img'
          />
        </div>
        <div className='icons'>
          <CiSearch className='nav-item-mobile-link' />
          <RiComputerLine className='nav-item-mobile-link' />
          <FaRegQuestionCircle className='nav-item-mobile-link' />
          <FaCalendarDay className='nav-item-mobile-link' />
          <LuBuilding2 className='nav-item-mobile-link' />
          <AiFillDollarCircle className='nav-item-mobile-link' />
          <FaHeadphones className='nav-item-mobile-link' />
        </div>
      </div>
      <IoIosSettings className='nav-item-mobile-link' />
    </div>
  )
}
export default SideBar
