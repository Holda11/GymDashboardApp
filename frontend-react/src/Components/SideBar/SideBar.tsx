import React from 'react'
import style from './SideBar.module.scss'
import { FaBorderAll, FaCashRegister, FaInbox, FaPlane, FaHandFist, FaPersonRunning, FaQuestion, FaWrench, FaRegMoneyBill1 } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className={style["Nav"]}>
      <header>
        <nav>
          {/*Split to 4 ul for each section*/}
          <ul className={style["Nav__Items"]}>
            {/*Logo Section*/}
            <li>
              <div>
                <li><Link className={style["Link"]} to="/"><h1>Gym <FaRegMoneyBill1/> </h1></Link></li>
              </div>
            </li>
            {/*MainLinks Section*/}
            <li>
              <div> 
                <li><Link className={style["Link"]} to="/"><FaBorderAll />Dashboard</Link></li>
                <li><Link className={style["Link"]} to="/cashbox"><FaCashRegister /> CashBox</Link></li>
                <li><Link className={style["Link"]} to="/inventory"><FaInbox /> Inventory</Link></li>
              </div>
            </li>
            {/*Clases Section*/}
            <li>
              <div>
                <li><Link className={style["Link"]} to="/classes/1"><FaHandFist /> Box</Link></li>
                <li><Link className={style["Link"]} to="/classes/2"><FaPersonRunning /> Cardio</Link></li>
              </div>
            </li>
            {/*Help&Settings Section*/}
            <li>
              <div>
                <li><FaQuestion /> Help</li>
                <li><FaWrench /> Settings</li>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </aside>
  )
}

export default Sidebar