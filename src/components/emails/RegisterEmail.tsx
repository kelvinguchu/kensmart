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

export interface RegisterEmailProps {
  firstName: string
  lastName: string
  phone: string
  email: string
  idNumber: string
  kraPin: string
  county: string
  location: string
  buildingType: string
  utilityType: string
  motherMeter: string
  initialReading: string
  paymentMode: string
  installationType: string
  billPayer: string
  suppliesOther?: boolean
  techName?: string
  techPhone?: string
  subMeters?: Array<string>
}

export const RegisterEmail = ({
  firstName,
  lastName,
  phone,
  email,
  idNumber,
  kraPin,
  county,
  location,
  buildingType,
  utilityType,
  motherMeter,
  initialReading,
  paymentMode,
  installationType,
  billPayer,
  suppliesOther,
  techName,
  techPhone,
  subMeters = [],
}: RegisterEmailProps) => {
  const previewText = `New Meter Registration: ${firstName} ${lastName}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Heading style={h1}>New Meter Registration</Heading>
            <Text style={text}>
              A new customer has submitted their meter registration details via
              the website.
            </Text>

            <Section style={section}>
              <Heading as="h3" style={h3}>
                Personal Information
              </Heading>
              <Row>
                <Column>
                  <Text style={label}>Name:</Text>
                  <Text style={value}>
                    {firstName} {lastName}
                  </Text>
                </Column>
                <Column>
                  <Text style={label}>Phone:</Text>
                  <Text style={value}>{phone}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text style={label}>Email:</Text>
                  <Text style={value}>{email}</Text>
                </Column>
                <Column>
                  <Text style={label}>ID Number:</Text>
                  <Text style={value}>{idNumber}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text style={label}>KRA PIN:</Text>
                  <Text style={value}>{kraPin}</Text>
                </Column>
              </Row>
            </Section>

            <Hr style={hr} />

            <Section style={section}>
              <Heading as="h3" style={h3}>
                Property & Utility Details
              </Heading>
              <Row>
                <Column>
                  <Text style={label}>County:</Text>
                  <Text style={value}>{county}</Text>
                </Column>
                <Column>
                  <Text style={label}>Location:</Text>
                  <Text style={value}>{location}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text style={label}>Building Type:</Text>
                  <Text style={value}>{buildingType}</Text>
                </Column>
                <Column>
                  <Text style={label}>Utility Type:</Text>
                  <Text style={value}>{utilityType}</Text>
                </Column>
              </Row>
            </Section>

            <Hr style={hr} />

            <Section style={section}>
              <Heading as="h3" style={h3}>
                Meter Configuration
              </Heading>
              <Row>
                <Column>
                  <Text style={label}>Mother Meter:</Text>
                  <Text style={value}>{motherMeter}</Text>
                </Column>
                <Column>
                  <Text style={label}>Initial Reading:</Text>
                  <Text style={value}>{initialReading}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text style={label}>Payment Mode:</Text>
                  <Text style={value}>{paymentMode}</Text>
                </Column>
                <Column>
                  <Text style={label}>Installation Type:</Text>
                  <Text style={value}>{installationType}</Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text style={label}>Bill Payer:</Text>
                  <Text style={value}>{billPayer}</Text>
                </Column>
                <Column>
                  <Text style={label}>Supplies Others:</Text>
                  <Text style={value}>{suppliesOther ? 'Yes' : 'No'}</Text>
                </Column>
              </Row>
            </Section>

            {subMeters.length > 0 && subMeters[0] !== '' && (
              <>
                <Hr style={hr} />
                <Section style={section}>
                  <Heading as="h3" style={h3}>
                    Sub-Meters
                  </Heading>
                  {subMeters.map((meter, index) => (
                    <Text key={index} style={value}>
                      • {meter}
                    </Text>
                  ))}
                </Section>
              </>
            )}

            {(techName || techPhone) && (
              <>
                <Hr style={hr} />
                <Section style={section}>
                  <Heading as="h3" style={h3}>
                    Technician Details
                  </Heading>
                  <Row>
                    <Column>
                      <Text style={label}>Name:</Text>
                      <Text style={value}>{techName || 'N/A'}</Text>
                    </Column>
                    <Column>
                      <Text style={label}>Phone:</Text>
                      <Text style={value}>{techPhone || 'N/A'}</Text>
                    </Column>
                  </Row>
                </Section>
              </>
            )}
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
  borderTop: '5px solid #1cb4e8', // Brand Primary
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

const h3 = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
  marginTop: '0',
}

const text = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#555',
}

const section = {
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

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}
