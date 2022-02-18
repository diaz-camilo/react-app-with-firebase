import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'



export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setError('')
    setLoading(true);

    resetPassword(emailRef.current.value)
      .then((result) => {
        debugger;
        setLoading(false);
        navigate("/change-password-with-code")
      })
      .catch(err => {
        setLoading(false);
        setError(err.message)
      })
  }

  return (
    <div className='w-100' style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Forgot Password</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Button disabled={loading} className='w-100' type='submit'>
                Reset Password
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? <Link to="/login">Login</Link>
      </div>
      <div className='w-100 text-center mt-2'>
        don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

