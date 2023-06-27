import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>본 사이트는 Netflix 플랫폼의 디자인을 모티브로 개발한 포트폴리오 사이트입니다.<br />영리를 목적으로 하지 않으며 저작권을 준수합니다.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="https://github.com/tkfka1">Github</Footer.Link>
          {/* <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link> */}
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="mailto:tkfka0502@gmail.com">Email</Footer.Link>
          {/* <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link> */}
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://trinityforce.tistory.com/">Tistory</Footer.Link>
          {/* <Footer.Link href="#">Redeem gift cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link> */}
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://velog.io/@tkfka">Velog</Footer.Link>
          {/* <Footer.Link href="#">Buy gift cards</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link> */}
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Kyoflix Republic of Korea</Footer.Text>
    </Footer>
  );
}
