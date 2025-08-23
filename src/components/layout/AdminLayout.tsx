import React from 'react'
import { Outlet } from 'react-router'

export default function AdminLayout() {
  return (
    <div>
        
        <h1>Admin layour here</h1>
        <Outlet />
    </div>
  )
}
