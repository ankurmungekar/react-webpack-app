import React from 'react'
import Button from '../../components/Button'
import './site-perfomance.scss'

const SitePerformance = ({ data }) => {
  console.log(data);
  return (
    <div className="site-performance-wrapper">
      <div className="heading-text">Site Performance</div>
      <div><Button /></div>
    </div>
  )
}

export default SitePerformance