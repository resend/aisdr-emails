import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface AiSDREmailProps {}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const NotionMagicLinkEmail = ({}: AiSDREmailProps) => (
  <Html>
    <Head />
    <Preview>A user has done some action</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/logo.png`}
          width="166"
          height="40"
          alt="AiSDR Logo"
        />
        <Heading style={h1}>A user has done some action</Heading>
        <Text style={{ ...text, marginBottom: '14px' }}>
          AiSDR will help prospects book a call with you faster
        </Text>
        <code style={comment}>
          Let AiSDR know your most common objections and how you
          handled them in the past, and leave it to us to motivate prospects
          to book a call with your sales rep. Even if they are not interested,
          AiSDR will develop and assign a personalized nurturing sequence to
          them to help you reopen a conversation in the future.
        </code>
        <Button
          pX={10}
          pY={10}
          style={button}
          href="https://aisdr.com"
        >
          View more
        </Button>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '14px',
            marginBottom: '16px',
          }}
        >
          Create email campaigns – AiSDR will automatically create email campaigns for you.
        </Text>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '12px',
            marginBottom: '38px',
          }}
        >
          AiSDR will help you sort through your leads and move them down the ­sales funnel.
        </Text>
        <Text style={footer}>
          <br />
          2261 Market Street #5316
          <br />
          San Francisco, CA 94114
        </Text>
      </Container>
    </Body>
  </Html>
);

export default NotionMagicLinkEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const button = {
  backgroundColor: '#27A5FE',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  marginTop: '14px',
  display: 'block',
  width: '100%',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const comment = {
  display: 'block',
  padding: '16px 2.5%',
  width: '98%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};
