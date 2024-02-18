import React from 'react';
import AdminSidbar from './AdminSidbar';
import AdminMain from './AdminMain';
import './admin.css'
const AdminDashbourd = () => {
  return (
    <section className="admin-dashboard">
      <AdminSidbar/>
      <AdminMain/>

    </section>
  
  );
}

export default AdminDashbourd;
