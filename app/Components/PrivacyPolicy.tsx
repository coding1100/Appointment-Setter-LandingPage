import { FC } from "react";

interface PrivacyPolicyProps {}

const PrivacyPolicy: FC<PrivacyPolicyProps> = () => {
  return (
    <section className="relative container mx-auto px-4 sm:px-10 py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#060C1E] via-[#0B162F] to-[#081128] shadow-[0_30px_80px_rgba(4,10,40,0.65)] border border-white/12 sm:px-16 px-6 pt-12 sm:pt-16 pb-12 sm:pb-20">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#38E0FF]/15 to-transparent" />

        {/* Header */}
        <div className="relative mb-12 sm:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
            Privacy Policy
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
              1. INTRODUCTION
            </h2>
            <p className="text-sm sm:text-base">
              This Privacy Policy describes how AI Phone Scheduler ("we," "our,"
              or "us") collects, uses, discloses, and protects your personal
              information when you use our AI-powered phone appointment
              scheduling SaaS platform (the "Service"). By using the Service,
              you agree to the collection and use of information in accordance
              with this Privacy Policy.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              2. INFORMATION WE COLLECT
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                2.1 Account Information
              </h3>
              <p className="text-sm sm:text-base mb-2">
                When you register for an account, we collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Email address</li>
                <li>Username</li>
                <li>Password (hashed and encrypted)</li>
                <li>First name and last name</li>
                <li>Role (tenant user, admin, etc.)</li>
                <li>Tenant ID (for multi-tenant access)</li>
                <li>Account status and verification status</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                2.2 Appointment and Customer Data
              </h3>
              <p className="text-sm sm:text-base mb-2">
                When appointments are booked through our voice agents or API, we
                collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Customer full name</li>
                <li>Customer phone number</li>
                <li>Customer email address</li>
                <li>Service address (street, city, state, ZIP code)</li>
                <li>Service type and details</li>
                <li>Preferred appointment date and time</li>
                <li>Additional service-specific information</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                2.3 Phone Call and Voice Data
              </h3>
              <p className="text-sm sm:text-base mb-2">
                When you use our phone-based appointment scheduling:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  Call recordings and transcripts (processed through Deepgram
                  speech-to-text)
                </li>
                <li>Voice interactions with AI agents</li>
                <li>
                  Call metadata (caller number, called number, call duration,
                  timestamps)
                </li>
                <li>Call status and outcomes</li>
                <li>Conversation history and context</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                2.4 Business Information (for Tenant Accounts)
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Business name</li>
                <li>Contact information (email, phone, address)</li>
                <li>Industry and service type</li>
                <li>Working hours and availability</li>
                <li>Service area (ZIP codes or geographic regions)</li>
                <li>Appointment booking rules and policies</li>
                <li>Twilio integration credentials (encrypted)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                2.5 Usage and Technical Data
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>IP addresses</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Session data and authentication tokens</li>
                <li>API usage logs</li>
                <li>Error logs and diagnostic information</li>
                <li>Performance metrics</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                2.6 Cookies and Tracking Technologies
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Session cookies for authentication</li>
                <li>Redis session storage</li>
                <li>Authentication tokens (JWT)</li>
                <li>Analytics cookies (if applicable)</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              3. HOW WE USE YOUR INFORMATION
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                3.1 Service Provision
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>To provide and maintain the Service</li>
                <li>To process appointment bookings and scheduling</li>
                <li>To facilitate phone-based AI voice interactions</li>
                <li>
                  To send appointment confirmations and notifications via email
                  (SendGrid)
                </li>
                <li>To manage your account and tenant configuration</li>
                <li>To process your requests and transactions</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                3.2 AI Voice Agent Processing
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  To enable AI-powered voice conversations for appointment
                  booking
                </li>
                <li>
                  To transcribe phone calls using Deepgram (Speech-to-Text)
                </li>
                <li>
                  To generate voice responses using ElevenLabs (Text-to-Speech)
                </li>
                <li>To process natural language using Google Gemini AI</li>
                <li>To improve AI agent performance and accuracy</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                3.3 Communication
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  To send service-related emails (confirmations, updates,
                  alerts)
                </li>
                <li>To respond to your inquiries and support requests</li>
                <li>To notify you of important changes to the Service</li>
                <li>
                  To send marketing communications (with your consent, where
                  required)
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                3.4 Security and Fraud Prevention
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>To authenticate users and prevent unauthorized access</li>
                <li>
                  To detect and prevent fraud, abuse, and security threats
                </li>
                <li>To enforce our Terms of Use</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                3.5 Service Improvement
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  To analyze usage patterns and improve Service functionality
                </li>
                <li>To develop new features and capabilities</li>
                <li>To troubleshoot technical issues</li>
                <li>
                  To conduct research and analytics (aggregated and anonymized)
                </li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              4. THIRD-PARTY SERVICES AND DATA SHARING
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                4.1 Third-Party Service Providers
              </h3>
              <p className="text-sm sm:text-base mb-2">
                We share data with the following third-party services to operate
                the Service:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  Firebase/Firestore: Cloud database for storing user data,
                  appointments, and business information
                </li>
                <li>
                  Twilio: Phone number management and SIP trunk integration for
                  voice calls
                </li>
                <li>
                  LiveKit: Voice agent infrastructure and real-time
                  communication
                </li>
                <li>Deepgram: Speech-to-text transcription of phone calls</li>
                <li>
                  ElevenLabs: Text-to-speech voice generation for AI agents
                </li>
                <li>
                  Google Gemini: Natural language processing and AI conversation
                  management
                </li>
                <li>
                  SendGrid: Email delivery service for appointment confirmations
                </li>
                <li>Redis: Session management and caching</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                4.2 Data Processing by Third Parties
              </h3>
              <p className="text-sm sm:text-base mb-2">
                All third-party service providers are required to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  Process data only for the purpose of providing services to us
                </li>
                <li>Implement appropriate security measures</li>
                <li>Comply with applicable data protection laws</li>
                <li>
                  Not use your data for their own purposes without consent
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                4.3 Business Transfers
              </h3>
              <p className="text-sm sm:text-base">
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred to the acquiring entity, subject
                to the same privacy protections.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                4.4 Legal Requirements
              </h3>
              <p className="text-sm sm:text-base mb-2">
                We may disclose your information if required by law, court
                order, or governmental authority, or to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Comply with legal obligations</li>
                <li>Protect our rights and property</li>
                <li>Prevent or investigate wrongdoing</li>
                <li>Protect the safety of users or the public</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              5. DATA SECURITY
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                5.1 Security Measures
              </h3>
              <p className="text-sm sm:text-base mb-2">
                We implement industry-standard security measures to protect your
                information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  AES-128 encryption for sensitive data (Twilio credentials)
                </li>
                <li>Secure password hashing (bcrypt)</li>
                <li>JWT-based authentication with token expiration</li>
                <li>HTTPS/TLS encryption for data in transit</li>
                <li>Firestore database with access controls</li>
                <li>Redis session management with expiration</li>
                <li>Regular security audits and monitoring</li>
                <li>Rate limiting to prevent abuse</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                5.2 Data Retention
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  Account information: Retained for the duration of your account
                  and 30 days after account deletion
                </li>
                <li>
                  Appointment data: Retained for 7 years for business records
                  (unless otherwise requested)
                </li>
                <li>
                  Call recordings and transcripts: Retained for 90 days unless
                  longer retention is required by law
                </li>
                <li>Logs and analytics: Retained for 12 months</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                5.3 Data Deletion
              </h3>
              <p className="text-sm sm:text-base mb-2">
                You may request deletion of your personal information by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Contacting us at support@samai.com</li>
                <li>Using account deletion features (where available)</li>
                <li>
                  We will delete your data within 30 days, subject to legal
                  retention requirements
                </li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              6. YOUR RIGHTS AND CHOICES
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                6.1 Access and Correction
              </h3>
              <p className="text-sm sm:text-base mb-2">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Update your account preferences</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                6.2 Data Portability
              </h3>
              <p className="text-sm sm:text-base">
                You may request a copy of your data in a machine-readable
                format.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                6.3 Opt-Out Rights
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>
                  Email communications: Unsubscribe via email footer or account
                  settings
                </li>
                <li>
                  Phone calls: Contact us to opt out of phone-based appointment
                  booking
                </li>
                <li>
                  Cookies: Adjust browser settings to reject cookies (may affect
                  functionality)
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                6.4 California Privacy Rights (CCPA)
              </h3>
              <p className="text-sm sm:text-base mb-2">
                California residents have additional rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>
                  Right to opt-out of sale of personal information (we do not
                  sell data)
                </li>
                <li>
                  Right to non-discrimination for exercising privacy rights
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#38E0FF]">
                6.5 European Privacy Rights (GDPR)
              </h3>
              <p className="text-sm sm:text-base mb-2">
                EU residents have additional rights:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
                <li>Right to access, rectify, or erase personal data</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
                <li>Right to lodge a complaint with a supervisory authority</li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              7. CHILDREN'S PRIVACY
            </h2>
            <p className="text-sm sm:text-base">
              Our Service is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us to have
              it removed.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              8. INTERNATIONAL DATA TRANSFERS
            </h2>
            <p className="text-sm sm:text-base">
              Your information may be transferred to and processed in countries
              other than your country of residence. These countries may have
              different data protection laws. By using the Service, you consent
              to the transfer of your information to these countries. We ensure
              appropriate safeguards are in place for such transfers.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              9. CHANGES TO THIS PRIVACY POLICY
            </h2>
            <p className="text-sm sm:text-base mb-3">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-sm sm:text-base">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Sending an email notification</li>
              <li>Updating the "Last Updated" date</li>
            </ul>
            <p className="text-sm sm:text-base mt-3">
              Your continued use of the Service after changes constitutes
              acceptance of the updated Privacy Policy.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
              10. CONTACT US
            </h2>
            <p className="text-sm sm:text-base mb-3">
              If you have questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                Email:{" "}
                <a
                  href="mailto:privacy@samai.com"
                  className="text-[#38E0FF] hover:text-[#38E0FF]/80 transition"
                >
                  privacy@samai.com
                </a>
              </p>
              <p>
                Support:{" "}
                <a
                  href="mailto:support@samai.com"
                  className="text-[#38E0FF] hover:text-[#38E0FF]/80 transition"
                >
                  support@samai.com
                </a>
              </p>
              <p>Address: [Your Company Address]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
