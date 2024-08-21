import React from 'react'
import Ctype from '../Supports/Data/Classes.js';
import style from './Styling/Classes.module.scss'
import { useParams } from 'react-router-dom'

const Classes = () => {
  let { id } = useParams();
  const selectedClass = Ctype.find(item => item.id.toString() === id);

  return (
    <div className={style['Classes']}>
      {selectedClass ? (
        <div className={style['Classes__Content']}>
          <h2>
            {selectedClass.name}
          </h2>
          <p>
            {selectedClass.description}
          </p>
        </div>
      ) : (<div>
        Chyba
      </div>)}
    </div>
  )
}

export default Classes