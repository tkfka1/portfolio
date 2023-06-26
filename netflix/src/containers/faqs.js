import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <Link to={ROUTES.SIGN_IN} style={{ textDecoration: 'none' }}>
            <OptForm.Button>Try it now</OptForm.Button>
            </Link>
        <OptForm.Break />
        <OptForm.Text>Thank you for visiting my portfolio website!</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
