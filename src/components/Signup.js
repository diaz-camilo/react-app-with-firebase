import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'



export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setError('')

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('passwords do not match')
    }

    setLoading(true);
    signup(emailRef.current.value, passwordRef.current.value)
      .then(res => {
        setLoading(false);
        navigate("/");
      })
      .catch(err => {
        console.log(err);
        debugger;
        setError(err.message)
        setLoading(false);
      })

  }

  return (
    <div className='w-100' style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group className='mb-3' id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group className='mb-3' id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Button disabled={loading} className='w-100' type='submit'>
                Sign Up
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        already have an account? Log In
      </div>
    </div>
  )
}
