import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'

interface ContactEmailProps {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export const ContactEmail = ({
  name,
  email,
  phone,
  subject,
  message,
}: ContactEmailProps) => {
  const previewText = `New Inquiry: ${subject}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Heading style={h1}>New Website Inquiry</Heading>
            <Text style={text}>
              You have received a new message from the Kensmart website contact
              form.
            </Text>

            <Section style={infoBox}>
              <Row>
                <Column>
                  <Text style={label}>Name:</Text>
                  <Text style={value}>{name}</Text>
                </Column>
                <Column>
                  <Text style={label}>Email:</Text>
                  <Text style={value}>{email}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text style={label}>Phone:</Text>
                  <Text style={value}>{phone}</Text>
                </Column>
              </Row>
            </Section>

            <Hr style={hr} />

            <Heading as="h2" style={h2}>
              Subject: {subject}
            </Heading>
            <Text style={messageBox}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '40px auto',
  padding: '20px',
  borderTop: '5px solid #1cb4e8',
  borderRadius: '4px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  maxWidth: '600px',
}

const h1 = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#333',
  marginTop: '0',
}

const h2 = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#333',
}

const text = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#555',
}

const infoBox = {
  padding: '10px 0',
}

const label = {
  color: '#8898aa',
  fontSize: '12px',
  fontWeight: 'bold',
  marginBottom: '4px',
  textTransform: 'uppercase' as const,
}

const value = {
  color: '#333',
  fontSize: '14px',
  marginBottom: '16px',
}

const messageBox = {
  backgroundColor: '#f9f9f9',
  padding: '15px',
  borderRadius: '4px',
  fontSize: '15px',
  lineHeight: '24px',
  color: '#333',
  borderLeft: '4px solid #1dbcba', // Brand Secondary
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}
