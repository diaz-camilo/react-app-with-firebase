import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'



export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updateUserEmail,
    updateUserPassword, } = useAuth();
  const [error, setError] = useState([])
  const [outcome, setOutcome] = useState([])
  const [pwdLoading, setPwdLoading] = useState(false)
  const [emailLoading, setEmailLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setError([])
    setOutcome([])

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError(['passwords do not match'])
    }

    if (passwordRef.current.value !== '') {
      setPwdLoading(true)
      updateUserPassword(passwordRef.current.value)
        .then((res) => {
          setOutcome([...outcome, 'Password change successful'])
        })
        .catch((err) => {
          setError([...error, err.message])
        })
        .finally(() => setPwdLoading(false))
    }

    if (emailRef.current.value !== currentUser.email) {
      setEmailLoading(true);
      updateUserEmail(emailRef.current.value)
        .then(res => {
          setOutcome([...outcome, 'Email change successful'])
        })
        .catch(err => {
          setError([...error, err.message])
        })
        .finally(() => setEmailLoading(false))
    }
  }

  return (
    <div className='w-100' style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Update Profile</h2>
          {!!error.length && <Alert variant='danger'>{error.map(e => <p key={e}>{e}</p>)}</Alert>}
          {!!outcome.length && <Alert variant='success'>{outcome.map(o => <p key={o}>{o}</p>)}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} required />
            </Form.Group>
            <Form.Group className='mb-3' id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same" />
            </Form.Group>
            <Form.Group className='mb-3' id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same" />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Button disabled={pwdLoading || emailLoading} className='w-100' type='submit'>
                Update Profile
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}
