import React from 'react';
import '../styles/PolicyPage.css';

const PolicyPage = () => {

  // Get the current date
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="policypage">
      <div className="content">
        <h1>Nebula Terms of Service & Privacy Policy</h1>
        
        <section>
          <h2>Effective Date</h2>
          <p>{currentDate}</p>
        </section>

        <section>
          <h2>Introduction</h2>
          <p>
            Thank you for choosing Nebula (“we,” “our,” or “us”). This document outlines the Terms of Service and Privacy Policy governing your use of our Progressive Web App (PWA) and associated services. By accessing or using Nebula and Nebula PWA, you agree to be bound by these terms. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2>Terms of Service</h2>
          <ol>
            <li>
              <h3>Acceptance of Terms</h3>
              <p>
                By using Nebula and Nebula PWA, you acknowledge and agree to these Terms of Service. Your continued use of our services signifies your acceptance of any changes or updates to these terms. If you do not agree with any part of these terms, you must discontinue use of our services immediately.
              </p>
            </li>
            <li>
              <h3>User Eligibility</h3>
              <ul>
                <li><strong>Age Requirement:</strong> Nebula is intended for use by individuals who are 17 years of age or older. By using our services, you confirm that you meet this age requirement. If you are under 18, you must have the consent of a parent or guardian to use our services.</li>
              </ul>
            </li>
            <li>
              <h3>Account Responsibilities</h3>
              <ul>
                <li><strong>Account Creation:</strong> You must create an account to access certain features of Nebula. You agree to provide accurate, complete, and current information during registration and to update your information as necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
                <li><strong>Single Account Usage:</strong> Each user is allowed to create and maintain only one personal account for the purpose of listing a single property or room. Creating multiple accounts to list additional properties or rooms without subscribing to the appropriate service tier is strictly prohibited. Violations of this policy will result in additional charges, suspension, or termination of your account.</li>
                <li><strong>Responsibility for Listings:</strong> You are solely responsible for the content and accuracy of the property or room listings you post. Nebula is not liable for any inaccuracies, misrepresentations, or legal issues arising from user-generated content. You agree to comply with all applicable laws and regulations when posting listings.</li>
              </ul>
            </li>
            <li>
              <h3>Listing Policies</h3>
              <ul>
                <li><strong>Content Restrictions:</strong> Listings must not include any illegal, defamatory, obscene, or otherwise objectionable content. You agree not to use the platform for any unlawful purposes or to engage in fraudulent or deceptive practices.</li>
                <li><strong>Verification and Accuracy:</strong> While Nebula strives to ensure the accuracy of listings, we do not guarantee the accuracy or completeness of any information provided. It is your responsibility to verify the details of any property or room before entering into any agreements or transactions.</li>
              </ul>
            </li>
            <li>
              <h3>Fees and Charges</h3>
              <ul>
                <li><strong>Free Listings:</strong> Nebula offers free services for individual users with one listing. Additional listings or premium features require a subscription and will incur fees as detailed in our subscription plans. Users will be notified of any applicable fees before they incur charges.</li>
                <li><strong>Business Accounts:</strong> Entities representing businesses, apartment complexes, or similar organizations must use a business account and pay a monthly fee. Unauthorized use of personal accounts for business listings will result in a charge equivalent to two full years of business usage, and you may be required to pay for any additional costs associated with the misuse.</li>
              </ul>
            </li>
            <li>
              <h3>Limitation of Liability</h3>
              <ul>
                <li><strong>Service Provision:</strong> Nebula provides a platform for property listings and rental searches but is not responsible for any disputes, damages, or issues arising from transactions or interactions between users. We are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services.</li>
                <li><strong>User Conduct:</strong> Users are solely responsible for their actions while using Nebula. We are not liable for any harm, damages, or losses resulting from the use of our app, including personal injury, property damage, or financial loss.</li>
                <li><strong>No Endorsement:</strong> Nebula does not endorse or recommend any particular property, landlord, or renter. All interactions and agreements are solely between users, and Nebula is not a party to any such agreements.</li>
              </ul>
            </li>
            <li>
              <h3>Dispute Resolution</h3>
              <ul>
                <li><strong>Governing Law:</strong> These Terms of Service shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law principles.</li>
                <li><strong>Arbitration:</strong> Any disputes arising out of or related to these Terms of Service or your use of Nebula shall be resolved through binding arbitration in [Insert Jurisdiction], in accordance with the rules of the American Arbitration Association (AAA). The arbitration decision shall be final and binding.</li>
              </ul>
            </li>
            <li>
              <h3>Termination</h3>
              <ul>
                <li><strong>Termination Rights:</strong> We reserve the right to terminate or suspend your account and access to Nebula if you violate these terms or engage in conduct that we deem harmful, inappropriate, or in violation of our policies. Termination may result in the loss of access to all data and content associated with your account.</li>
                <li><strong>Effect of Termination:</strong> Upon termination, all licenses granted to you will immediately cease, and you must promptly destroy any copies of materials obtained from Nebula.</li>
              </ul>
            </li>
            <li>
              <h3>Indemnification</h3>
              <ul>
                <li><strong>User Responsibility:</strong> You agree to indemnify, defend, and hold harmless Nebula, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses (including reasonable attorneys' fees) arising out of or related to your use of Nebula, your content, or any violation of these Terms of Service.</li>
              </ul>
            </li>
            <li>
              <h3>Disclaimer of Warranties</h3>
              <ul>
                <li><strong>Service Availability:</strong> Nebula is provided on an "as is" and "as available" basis. We do not warrant that our services will be uninterrupted, error-free, or free of viruses or other harmful components. We disclaim all warranties, express or implied, to the fullest extent permitted by law.</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2>Privacy Policy</h2>
          <ol>
            <li>
              <h3>Information We Collect</h3>
              <ul>
                <li><strong>Contact Information:</strong> We collect your name, email address, phone number, and other contact details you provide.</li>
                <li><strong>Account Information:</strong> We collect your username, password, and other account-related information.</li>
                <li><strong>Payment Information:</strong> We collect payment information, such as credit card details and billing information, to process transactions.</li>
                <li><strong>Usage Information:</strong> We collect data on pages visited, interactions with the app, and other usage statistics.</li>
                <li><strong>Device Information:</strong> We collect information about your device, including IP address, browser type, operating system, and device identifiers.</li>
              </ul>
            </li>
            <li>
              <h3>How We Use Your Information</h3>
              <ul>
                <li><strong>Service Provision:</strong> We use your information to provide, maintain, and improve our services, including processing transactions and delivering customer support.</li>
                <li><strong>Personalization:</strong> We use your information to personalize your experience, including customizing content and recommendations.</li>
                <li><strong>Communication:</strong> We use your contact information to send newsletters, promotional materials, and respond to inquiries. You can opt-out of promotional communications at any time.</li>
                <li><strong>Analytics:</strong> We use data analytics to understand usage patterns and improve our services.</li>
                <li><strong>Legal Compliance:</strong> We may use your information to comply with legal obligations, enforce our policies, and protect our rights.</li>
              </ul>
            </li>
            <li>
              <h3>Information Sharing</h3>
              <ul>
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our services, such as payment processors and customer support providers. These third parties are bound by confidentiality agreements and are only permitted to use your information as necessary to provide their services.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, in response to legal processes, or to protect the rights, property, or safety of Nebula, its users, or others.</li>
              </ul>
            </li>
            <li>
              <h3>Cookies and Similar Technologies</h3>
              <ul>
                <li><strong>Usage:</strong> We use cookies and similar technologies to enhance functionality, analyze usage, and improve our services. Cookies help us remember your preferences and provide a more personalized experience.</li>
                <li><strong>Management:</strong> You can manage your cookie preferences through your browser settings. Disabling cookies may affect your ability to use certain features of our services.</li>
              </ul>
            </li>
            <li>
              <h3>Security</h3>
              <ul>
                <li><strong>Protection Measures:</strong> We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the absolute security of your information.</li>
                <li><strong>Data Breach:</strong> In the event of a data breach, we will notify affected users and take appropriate measures to mitigate any potential harm.</li>
              </ul>
            </li>
            <li>
              <h3>Your Choices</h3>
              <ul>
                <li><strong>Access and Update:</strong> You have the right to access, update, or delete your personal information through your account settings. If you wish to delete your account, we will take reasonable steps to remove your information from our systems.</li>
                <li><strong>Opt-Out:</strong> You can opt-out of receiving promotional emails by following the unsubscribe instructions provided in those emails. Note that you may still receive transactional communications related to your account.</li>
              </ul>
            </li>
            <li>
              <h3>Children's Privacy</h3>
              <ul>
                <li><strong>Age Restriction:</strong> Nebula is not intended for use by individuals under 17 years of age. We do not knowingly collect personal information from children under this age. If we become aware that we have collected information from a child under 17, we will take steps to delete such information.</li>
              </ul>
            </li>
            <li>
              <h3>Changes to This Policy</h3>
              <ul>
                <li><strong>Policy Updates:</strong> We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The effective date at the top of this page indicates the latest revision. We encourage you to review this Policy regularly to stay informed about how we protect your information.</li>
              </ul>
            </li>
            <li>
              <h3>Contact Us</h3>
              <ul>
                <li><strong>Questions and Concerns:</strong> If you have any questions or concerns regarding this Privacy Policy, please contact us at [Support Email Address] or through our contact form [Contact Form Link]. We are committed to addressing your concerns and providing support.</li>
              </ul>
            </li>
            <li>
              <h3>Data Retention</h3>
              <ul>
                <li><strong>Retention Period:</strong> We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. We may retain certain information in anonymized form for analytical purposes.</li>
              </ul>
            </li>
            <li>
              <h3>International Users</h3>
              <ul>
                <li><strong>Data Transfer:</strong> If you are accessing Nebula from outside [Insert Country], your information may be transferred to and processed in [Insert Country] where our servers are located. By using our services, you consent to the transfer and processing of your information in [Insert Country].</li>
              </ul>
            </li>
            <li>
              <h3>Third-Party Links</h3>
              <ul>
                <li><strong>External Sites:</strong> Nebula may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</li>
              </ul>
            </li>
            <li>
              <h3>Third-Party Advertising</h3>
              <ul>
                <li><strong>Ads and Analytics:</strong> We may use third-party advertising services and analytics providers to deliver advertisements and analyze user behavior. These third parties may use cookies and similar technologies to collect information about your interactions with Nebula and other sites.</li>
              </ul>
            </li>
          </ol>
        </section>

        
      </div>
    </div>
  );
};

export default PolicyPage;
