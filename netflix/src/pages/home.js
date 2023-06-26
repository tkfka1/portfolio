import React from 'react';
import { Link } from 'react-router-dom';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Stay hungry.<br />Stay foolish.</Feature.Title>
          <Feature.SubTitle>-Stive Jobs</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <Link to={ROUTES.SIGN_IN} style={{ textDecoration: 'none' }}>
            <OptForm.Button>Try it now</OptForm.Button>
            </Link>
            <OptForm.Break />
            <OptForm.Text>정한교의 포트폴리오 사이트에 오신것을 환영합니다!</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
