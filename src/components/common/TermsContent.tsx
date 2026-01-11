export function TermsContent() {
  return (
    <>
      <p className="text-muted-foreground">Last updated: January 2026</p>
      <p className="text-muted-foreground mt-4 font-medium">
        These terms and conditions ("Terms") outline the agreement between
        K-smart and the property owner occupant ("Customer") for the
        installation of submeters.
      </p>

      <div className="space-y-6 mt-8">
        <div>
          <h3 className="text-lg font-bold mb-2">1. Secondary Meter Nature</h3>
          <p className="text-muted-foreground">
            This is a secondary meter and not a replacement for the main utility
            meter hence must be supplied from the main meter.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">2. Installation</h3>
          <p className="text-muted-foreground">
            The customer shall engage a qualified licensed technician to install
            the K-smart meters and is fully responsible for the installation of
            these meters. A list of licensed electricians can be found on the
            EPRA website on{' '}
            <a
              href="https://www.epra.go.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.epra.go.ke
            </a>
            .
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">3. Certification</h3>
          <p className="text-muted-foreground">
            For electrical meters, the customer shall submit an installation
            certificate to K-smart for record keeping.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">4. Warranty</h3>
          <p className="text-muted-foreground">
            K-smart provides one-year (1-yr) warranty on all meters effective
            from the date of installation. During this period, the Customer must
            report any meter malfunctions promptly to K-smart for
            troubleshooting or free replacement. However, if a fault is
            determined to be caused by customer mishandling or tampering, the
            Customer shall assume full responsibility for all associated repair
            or replacement costs.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">
            5. Commissioning Requirements
          </h3>
          <p className="text-muted-foreground">
            For KPLC postpaid accounts, the Customer shall share a digital photo
            of the current meter readings to ensure the accurate capture of the
            mother meter's consumption data. Additionally, the Customer agrees
            to provide a clear digital photo of the installed meters to K-smart
            prior to the commissioning of the system.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">
            6. Unbilled Units Liability
          </h3>
          <p className="text-muted-foreground">
            The customer is responsible for any unbilled units registered by the
            main meter which could arise from connecting directly from main
            meter bypassing the sub meters.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">7. Token Tariffs</h3>
          <p className="text-muted-foreground">
            Tokens shall be charged at the prevailing tariff approved by EPRA,
            check{' '}
            <a
              href="https://www.stimatracker.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              www.stimatracker.com
            </a>
            .
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">8. Service Fees</h3>
          <p className="text-muted-foreground">
            K-smart shall charge a service fee of 10% for token generation and
            administration on the total tokens unless advised otherwise by the
            landlord it shall be deducted to customers as meter vends.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">9. Payment Remittance</h3>
          <p className="text-muted-foreground">
            Depending on the agreement with the Landlord, K-smart shall ensure
            all funds received are paid to the utility provider twice monthly,
            specifically on the 15th and the last day of every month. Evidence
            of these payments shall be shared with the Landlord following each
            transaction.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">10. Liability Exclusion</h3>
          <p className="text-muted-foreground">
            K-smart is not liable for any loss, damage, or inconvenience caused
            by factors beyond its control, including but not limited to natural
            disasters, power outages, or M-pesa outage.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">
            11. Landlord Portal & Reporting
          </h3>
          <p className="text-muted-foreground">
            Upon meter registration, K-smart shall provide the Landlord with
            access to a dedicated customer portal via{' '}
            <a
              href="https://customer.ksmart.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://customer.ksmart.co.ke/
            </a>
            . Through this portal, the Landlord may view and download all
            transaction records, including daily, weekly, and monthly
            statements. Additionally, K-smart shall deliver a monthly summary
            statement via SMS to the Landlord’s registered phone number.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">
            12. Service Provider Status
          </h3>
          <p className="text-muted-foreground">
            K-smart offer metering solution and hence is not a utility provider.
          </p>
        </div>
      </div>
    </>
  )
}
