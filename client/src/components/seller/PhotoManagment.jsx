import React from 'react'
import DashboardHeader from '../DashboardHeader'
import ImageAdd from '../ImageAdd'

function Photomanagment() {
  return (
    <div className="flex flex-col  sm:flex-row">
        <div>
            {/* dashboard */}
            <DashboardHeader/>
            {/* image  */}
            <ImageAdd/>
        </div>
    </div>
  )
}

export default Photomanagment