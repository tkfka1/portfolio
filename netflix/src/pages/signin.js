import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function SignIn() {
  const navigate = useNavigate();
  const { auth } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleGuestSignin = async (event) => {
    event.preventDefault();

    const gemail = 'test@test.com';  // 게스트 계정 이메일
    const gpassword = '123456';     // 게스트 계정 비밀번호

    try {
      await signInWithEmailAndPassword(auth, gemail, gpassword);
      // 로그인 성공
    } catch (error) {
      setError(error.message);
      // 에러 처리
    }
  };

  const handleSignin = (event) => {
    event.preventDefault();

    return signInWithEmailAndPassword(auth, emailAddress, password)
      .then(() => {
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
          <Form.Text>
            Guest account <br />
            Email: test@test.com <br />
            Passwd: 123456
          </Form.Text>
          <Form.Submit onClick={handleGuestSignin}>
              Guest Account Sign In
            </Form.Submit>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
