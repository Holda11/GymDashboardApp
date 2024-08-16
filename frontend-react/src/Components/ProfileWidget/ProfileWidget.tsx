import React from 'react'
import style from './ProfileWidget.module.scss'
import { IInformation } from '../../Supports/Interfaces/IProfileWidget'

const ProfileWidget = () => {
    const Information = ({heading, information,styles}:IInformation):JSX.Element =>{
        return(
            <div className={style[`Information${styles}`]}>
                <h5>{heading}</h5>
                <strong>{information}</strong>
            </div>
        )
    }

  return (
    <div className={style["ProfileWidget"]}>
        <div className={style["ProfileWidget__Row"]}>
            <h3>Profile</h3>
            <button>Přejít</button>
        </div>
        <div className={style["ProfileWidget__ImageContainer"]}>
            <div className={style["ProfileWidget__ImageContainer--Image"]}>
                <img src="/Img/Person.jfif" alt="" />
            </div>
            <strong>Joe Doe</strong>            
        </div>
        <div className={style[`ProfileWidget__Row`]}>
            <Information styles='__left' heading='Pozice' information='Brigádník' />
            <Information styles='__center' heading='Pozice' information='Brigádník' />
            <Information styles='__right' heading='Pozice' information='Brigádník' />
        </div>
    </div>
  )
}

export default ProfileWidget