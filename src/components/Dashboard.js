import React, { useState } from 'react'
import { Card, Button, Toast, ToastBody } from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('')

  function handleLogout() {
    logout()
      .then(() => {
        navigate("/login")
      })
      .catch((err) => {
        setToastMessage(
          'you could not be logged out'
          + '\n'
          + err.message
        );
        setShowToast(true);
      })
  }

  // if (!currentUser) {
  //   return <Navigate to="/login" />
  // } else {
  return (
    <div className='w-100' style={{ maxWidth: "400px" }}>
      <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
        <Toast.Header>
          <strong className='me-auto'>Logout Result</strong>
        </Toast.Header>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Profile</h2>
          <strong>Email: </strong> {currentUser?.email}
          <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={handleLogout}>Log Out</Button>
      </div>
    </div>
  )
  // }
}
