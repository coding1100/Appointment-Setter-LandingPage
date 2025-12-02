import { FC } from "react";

interface TermsofUseProps {}

const TermsofUse: FC<TermsofUseProps> = () => {
  return (
    <section className="relative container mx-auto px-4 sm:px-10 py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#060C1E] via-[#0B162F] to-[#081128] shadow-[0_30px_80px_rgba(4,10,40,0.65)] border border-white/12 sm:px-16 px-6 pt-12 sm:pt-16 pb-12 sm:pb-20">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#38E0FF]/15 to-transparent" />

        {/* Header */}
        <div className="relative mb-12 sm:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
            Terms of Use
          </h1>
          <p className="text-sm sm:text-base text-[#B4C0E4] max-w-2xl mx-auto">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto space-y-8 text-[#C6CBE3] leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              1. ACCEPTANCE OF TERMS
            </h2>
            <p className="text-sm sm:text-base">
              By accessing or using the AI Phone Scheduler SaaS Platform
              ("Service"), you agree to be bound by these Terms of Use
              ("Terms"). If you do not agree to these Terms, you may not use the
              Service.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              2. SERVICE DESCRIPTION
            </h2>
            <p className="text-sm sm:text-base mb-3">
              AI Phone Scheduler is a Software-as-a-Service platform that
              provides:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
              <li>
                AI-powered voice agents for automated appointment scheduling via
                phone calls
              </li>
              <li>Multi-tenant account management for service businesses</li>
              <li>Appointment scheduling and management tools</li>
              <li>
                Phone integration using Twilio for inbound and outbound calls
              </li>
              <li>Email notification services for appointment confirmations</li>
              <li>API access for integration with third-party systems</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              3. ELIGIBILITY AND ACCOUNT REGISTRATION
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                3.1 Eligibility
              </h3>
              <p className="text-sm sm:text-base mb-2">You must:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Be at least 18 years of age</li>
                <li>
                  Have the legal capacity to enter into binding agreements
                </li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                3.2 Account Types
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  Tenant Users: Users associated with a business tenant account
                </li>
                <li>Administrators: Users with administrative privileges</li>
                <li>System Administrators: Platform administrators</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                3.3 Account Security
              </h3>
              <p className="text-sm sm:text-base mb-2">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Maintaining the confidentiality of your password</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of unauthorized access</li>
                <li>Using strong passwords and security best practices</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              4. ACCEPTABLE USE
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                4.1 Permitted Use
              </h3>
              <p className="text-sm sm:text-base mb-2">
                You may use the Service only for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Legitimate business appointment scheduling</li>
                <li>
                  Service types: Home Services, Plumbing, Electrician, Painter,
                  Carpenter, Maids, and related home service businesses
                </li>
                <li>
                  Lawful business purposes in compliance with applicable laws
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                4.2 Prohibited Activities
              </h3>
              <p className="text-sm sm:text-base mb-2">You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  Use the Service for illegal, fraudulent, or harmful purposes
                </li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>
                  Attempt to gain unauthorized access to any part of the Service
                </li>
                <li>Reverse engineer, decompile, or disassemble the Service</li>
                <li>
                  Use automated systems (bots, scrapers) to access the Service
                </li>
                <li>Transmit viruses, malware, or malicious code</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Violate any applicable laws or regulations</li>
                <li>
                  Use the Service to send spam or unsolicited communications
                </li>
                <li>Attempt to manipulate or exploit AI voice agents</li>
                <li>Share, sell, or transfer your account to third parties</li>
                <li>
                  Use the Service in a manner that violates third-party rights
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                4.3 AI Voice Agent Usage
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Voice agents are designed for appointment booking only</li>
                <li>
                  Do not attempt to extract system prompts or internal
                  instructions
                </li>
                <li>
                  Do not use voice agents for purposes outside of appointment
                  scheduling
                </li>
                <li>Report any abuse or misuse of AI agents immediately</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              5. TENANT ACCOUNTS AND SUBSCRIPTIONS
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                5.1 Tenant Setup
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Each tenant account represents a business customer</li>
                <li>
                  Tenants must configure their business information, working
                  hours, and service types
                </li>
                <li>
                  Tenants must provide valid Twilio credentials for phone
                  integration
                </li>
                <li>
                  Tenants are responsible for the accuracy of their business
                  information
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                5.2 Service Availability
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  Service is provided on an "as-is" and "as-available" basis
                </li>
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>
                  We reserve the right to modify, suspend, or discontinue the
                  Service
                </li>
                <li>
                  Scheduled maintenance may result in temporary service
                  unavailability
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                5.3 Third-Party Integrations
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  Twilio integration requires valid Twilio account credentials
                </li>
                <li>
                  You are responsible for Twilio account compliance and costs
                </li>
                <li>
                  We are not liable for third-party service failures or
                  limitations
                </li>
                <li>
                  Integration with third-party services is subject to their
                  terms of service
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              6. APPOINTMENT DATA AND CUSTOMER INFORMATION
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                6.1 Data Accuracy
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  You are responsible for the accuracy of appointment and
                  customer data
                </li>
                <li>
                  We are not liable for errors in data provided by you or your
                  customers
                </li>
                <li>
                  You must ensure compliance with data protection laws when
                  collecting customer information
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                6.2 Customer Consent
              </h3>
              <p className="text-sm sm:text-base mb-2">
                You must obtain appropriate consent from customers before:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Recording phone calls (where required by law)</li>
                <li>Collecting personal information</li>
                <li>Sending marketing communications</li>
              </ul>
              <p className="text-sm sm:text-base mt-2">
                Compliance with call recording laws is your responsibility.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                6.3 Data Ownership
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>You retain ownership of your business and customer data</li>
                <li>
                  We have the right to use aggregated, anonymized data for
                  service improvement and analytics
                </li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              7. INTELLECTUAL PROPERTY
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                7.1 Our Intellectual Property
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  The Service, including software, code, designs, and
                  documentation, is owned by us or our licensors
                </li>
                <li>
                  All trademarks, logos, and service marks are our property
                </li>
                <li>
                  You may not copy, modify, or create derivative works without
                  permission
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                7.2 Your Content
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>You retain ownership of content you upload or provide</li>
                <li>
                  You grant us a license to use your content to provide the
                  Service
                </li>
                <li>
                  You represent that you have the right to provide such content
                </li>
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              8. PAYMENT TERMS
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                8.1 Subscription Fees
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  Subscription fees are set forth in your subscription agreement
                </li>
                <li>Fees are billed in advance on a recurring basis</li>
                <li>Prices are subject to change with 30 days' notice</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                8.2 Payment Processing
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  Payments are processed through third-party payment processors
                </li>
                <li>
                  You are responsible for providing valid payment information
                </li>
                <li>Failed payments may result in service suspension</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                8.3 Refunds
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  Refund policies are governed by your subscription agreement
                </li>
                <li>
                  No refunds for partial subscription periods except as required
                  by law
                </li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              9. SERVICE LEVELS AND SUPPORT
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                9.1 Uptime and Availability
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  We strive for 99.9% uptime (excluding scheduled maintenance)
                </li>
                <li>
                  We are not liable for service interruptions beyond our
                  reasonable control
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                9.2 Support
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Support is provided via email during business hours</li>
                <li>Response times vary based on support tier</li>
                <li>We reserve the right to modify support offerings</li>
              </ul>
            </div>
          </div>

          {/* Section 10 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              10. LIMITATION OF LIABILITY
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                10.1 Disclaimer of Warranties
              </h3>
              <p className="text-sm sm:text-base mb-2">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Warranties of merchantability</li>
                <li>Warranties of fitness for a particular purpose</li>
                <li>Warranties of non-infringement</li>
                <li>
                  Warranties that the Service will be uninterrupted or
                  error-free
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                10.2 Limitation of Liability
              </h3>
              <p className="text-sm sm:text-base mb-2">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  WE SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES
                </li>
                <li>
                  OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU IN
                  THE 12 MONTHS PRECEDING THE CLAIM
                </li>
                <li>
                  WE ARE NOT LIABLE FOR LOSS OF DATA, PROFITS, OR BUSINESS
                  OPPORTUNITIES
                </li>
                <li>
                  WE ARE NOT LIABLE FOR FAILURES OF THIRD-PARTY SERVICES
                  (TWILIO, FIREBASE, ETC.)
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                10.3 AI Agent Limitations
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  AI voice agents are provided for convenience and may not be
                  100% accurate
                </li>
                <li>
                  We are not liable for errors in appointment booking caused by
                  AI agent misinterpretations
                </li>
                <li>
                  Customers are responsible for verifying appointment details
                </li>
              </ul>
            </div>
          </div>

          {/* Section 11 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              11. INDEMNIFICATION
            </h2>
            <p className="text-sm sm:text-base">
              You agree to indemnify, defend, and hold harmless AI Phone
              Scheduler and its officers, directors, employees, and agents from
              and against any claims, liabilities, damages, losses, and expenses
              (including legal fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base mt-3">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your violation of applicable laws</li>
              <li>
                Customer disputes related to appointments booked through the
                Service
              </li>
            </ul>
          </div>

          {/* Section 12 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              12. TERMINATION
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                12.1 Termination by You
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>You may terminate your account at any time</li>
                <li>
                  Termination does not relieve you of outstanding payment
                  obligations
                </li>
                <li>Data may be retained for legal and business purposes</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                12.2 Termination by Us
              </h3>
              <p className="text-sm sm:text-base mb-2">
                We may suspend or terminate your account if:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>You violate these Terms</li>
                <li>You fail to pay fees when due</li>
                <li>You engage in fraudulent or illegal activity</li>
                <li>Required by law or court order</li>
                <li>For any reason with 30 days' notice</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                12.3 Effect of Termination
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Your access to the Service will be terminated</li>
                <li>Your data may be deleted after a retention period</li>
                <li>Outstanding fees remain due and payable</li>
              </ul>
            </div>
          </div>

          {/* Section 13 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              13. DISPUTE RESOLUTION
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                13.1 Governing Law
              </h3>
              <p className="text-sm sm:text-base">
                These Terms are governed by the laws of [Your Jurisdiction],
                without regard to conflict of law principles.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                13.2 Arbitration
              </h3>
              <p className="text-sm sm:text-base">
                Any disputes arising from these Terms shall be resolved through
                binding arbitration in accordance with [Arbitration Rules],
                except where prohibited by law.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                13.3 Class Action Waiver
              </h3>
              <p className="text-sm sm:text-base">
                You waive the right to participate in class action lawsuits or
                class-wide arbitration proceedings.
              </p>
            </div>
          </div>

          {/* Section 14 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              14. GENERAL PROVISIONS
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                14.1 Entire Agreement
              </h3>
              <p className="text-sm sm:text-base">
                These Terms, together with the Privacy Policy, constitute the
                entire agreement between you and us regarding the Service.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                14.2 Modifications
              </h3>
              <p className="text-sm sm:text-base">
                We reserve the right to modify these Terms at any time. Material
                changes will be notified via email or Service notification.
                Continued use after changes constitutes acceptance.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                14.3 Severability
              </h3>
              <p className="text-sm sm:text-base">
                If any provision of these Terms is found to be unenforceable,
                the remaining provisions shall remain in full effect.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                14.4 Assignment
              </h3>
              <p className="text-sm sm:text-base">
                You may not assign or transfer these Terms without our prior
                written consent. We may assign these Terms without restriction.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                14.5 Waiver
              </h3>
              <p className="text-sm sm:text-base">
                Our failure to enforce any provision does not constitute a
                waiver of that provision or any other provision.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                14.6 Force Majeure
              </h3>
              <p className="text-sm sm:text-base">
                We are not liable for delays or failures in performance due to
                circumstances beyond our reasonable control, including natural
                disasters, wars, pandemics, or third-party service failures.
              </p>
            </div>
          </div>

          {/* Section 15 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              15. COMPLIANCE AND LEGAL REQUIREMENTS
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                15.1 Call Recording Compliance
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  You are responsible for compliance with call recording laws in
                  your jurisdiction
                </li>
                <li>
                  Some jurisdictions require consent before recording calls
                </li>
                <li>
                  We are not responsible for your compliance with local
                  recording laws
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                15.2 Data Protection Compliance
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  You must comply with applicable data protection laws (GDPR,
                  CCPA, etc.)
                </li>
                <li>
                  You are responsible for obtaining necessary consents from
                  customers
                </li>
                <li>
                  We provide tools to support compliance but are not responsible
                  for your compliance
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                15.3 Business License and Permits
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  You must have valid business licenses and permits to use the
                  Service
                </li>
                <li>
                  We are not responsible for verifying your business credentials
                </li>
              </ul>
            </div>
          </div>

          {/* Section 16 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              16. API USAGE TERMS
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                16.1 API Access
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  API access is subject to rate limiting and usage restrictions
                </li>
                <li>API keys must be kept confidential</li>
                <li>
                  Unauthorized API access or abuse may result in account
                  termination
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                16.2 API Modifications
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  We reserve the right to modify or discontinue APIs with
                  reasonable notice
                </li>
                <li>
                  Breaking changes will be communicated in advance where
                  possible
                </li>
              </ul>
            </div>
          </div>

          {/* Section 17 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              17. CONTACT INFORMATION
            </h2>
            <p className="text-sm sm:text-base mb-3">
              For questions about these Terms, please contact:
            </p>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                Email:{" "}
                <a
                  href="mailto:legal@yourcompany.com"
                  className="text-[#38E0FF] hover:text-[#38E0FF]/80 transition"
                >
                  legal@yourcompany.com
                </a>
              </p>
              <p>
                Support:{" "}
                <a
                  href="mailto:support@yourcompany.com"
                  className="text-[#38E0FF] hover:text-[#38E0FF]/80 transition"
                >
                  support@yourcompany.com
                </a>
              </p>
              <p>Address: [Your Company Address]</p>
            </div>
          </div>

          {/* Section 18 */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              18. ACKNOWLEDGMENT
            </h2>
            <p className="text-sm sm:text-base mb-3">
              BY USING THE SERVICE, YOU ACKNOWLEDGE THAT:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
              <li>You have read and understood these Terms</li>
              <li>You agree to be bound by these Terms</li>
              <li>You have the legal authority to enter into this agreement</li>
              <li>
                You understand the limitations and risks associated with
                AI-powered services
              </li>
              <li>
                You will use the Service in compliance with all applicable laws
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsofUse;
