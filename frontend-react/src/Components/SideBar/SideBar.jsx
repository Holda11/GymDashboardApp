import React from 'react'
import style from './SideBar.module.scss'

const Sidebar = () => {
  return (
    <aside className={style["Nav"]}>
      <header>
        <nav>
          {/*Split to 4 ul for each section*/}
          <ul>
            {/*Logo Section*/}
            <li>
              <a href='/'>Logo</a>
            </li>
            {/*MainLinks Section*/}
            <li>
            <div>
                <ul>
                  <li>Dashboard</li>
                  <li>CashBox</li>
                  <li>Inventory</li>
                  <li>Vacation</li>
                </ul>
              </div>
            </li>
            {/*Clases Section*/}
            <li>
              <div>
                <ul>
                  <li>Box</li>
                  <li>Cardio</li>
                </ul>
              </div>
            </li>
            {/*Help&Settings Section*/}
            <li>
              <div>
                <ul>
                  <li>Help</li>
                  <li>Settings</li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </aside>
  )
}

export default Sidebar