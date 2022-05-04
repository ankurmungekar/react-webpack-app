import React, { useState } from 'react'
import Button from '../../components/Button'
import './site-perfomance.scss'

const SitePerformance = ({ data }) => {
  // const [loading, setLoading] = useState(false);
  // const startMonitoring = () => {
  //   console.log('test')
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000)
  // }
  return (
    <div className="site-performance-wrapper">
      <div className="heading-text">Site Performance Component</div>
      <div><Button /></div>
    </div>
  )
}

export default SitePerformance