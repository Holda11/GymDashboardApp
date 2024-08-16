import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../../Supports/Data/Chart'
import style from './Counting.module.scss'

const Counting = () => {
  return (
    <div className={style['Counting']}>
      <div className={style['Counting__Row']}>
        <h3>Přehled</h3>
        <button>Srpen</button>
      </div>
      <div className={style['Counting__Chart']}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Counting