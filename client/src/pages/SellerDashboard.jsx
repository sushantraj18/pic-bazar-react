import React from 'react'
import DashboardSidebar from '../components/DashboardSidebar'
import Photomanagment from '../components/seller/Photomanagment'

function SellerDashboard() {
  return (
    <div className="flex flex-col sm:flex-row">
      <DashboardSidebar/>
      <div>
        <Photomanagment/>
      </div>
    </div>
  )
}

export default SellerDashboard