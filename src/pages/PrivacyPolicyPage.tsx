import React from 'react';

const PrivacyPolicyPage: React.FC = () => (
  <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-10 mb-10">
    <h2 className="text-2xl font-bold mb-4 text-[#0A4377]">Privacy Policy</h2>
    <div className="text-sm space-y-3">
      <p><b>Onlinevignan.in</b> is a dedicated educational platform offering counseling services to help students explore online and distance education options. We are not affiliated with Vignan or any university and we only provide guidance to assist your academic journey.</p>
      <p>By using our website, including our mobile applications, you legally accept all our Terms and Conditions listed under all headers on this platform.</p>
      <p>We recognize the importance of maintaining your privacy and the confidentiality of the information you share with us. We do not sell or rent any personal data. "Personal Information" includes details that identify an individual such as name, address, telephone number, or email address.</p>
      <p>This Privacy Policy explains how onlinevignan.in collects and uses information through www.onlinevignan.in. We are committed to protecting your personal data and using it transparently.</p>
      <ol className="list-decimal ml-5 space-y-2">
        <li><b>No Personal Data Collected by Default</b><br />You can freely browse our platform without providing any personal details. We only collect information when you choose to submit forms or contact us directly.</li>
        <li><b>Use of Submitted Information</b><br />We use the information you voluntarily provide to:
          <ul className="list-disc ml-5">
            <li>Assist you with educational counseling</li>
            <li>Help you explore relevant universities or courses</li>
            <li>Send you admission updates via WhatsApp or email</li>
          </ul>
          You may opt out of our communication anytime by contacting us at <a href="mailto:support@onlinevignan.in" className="text-[#0A4377] underline">support@onlinevignan.in</a>.
        </li>
        <li><b>Scope of Policy</b><br />This policy applies only to users accessing www.onlinevignan.in. It does not cover other domains or third-party sites we may link to.</li>
        <li><b>Data Sharing</b><br />We do not sell or share your personal data with advertisers. Your information is strictly used to deliver counselling and educational services.</li>
        <li><b>External Links</b><br />Our platform may link to official university portals for your convenience. We are not responsible for the content or privacy practices of those websites.</li>
        <li><b>Cookies and Analytics</b><br />We use cookies to analyze website performance and enhance your experience. These do not collect personally identifiable information.</li>
      </ol>
    </div>
  </div>
);

export default PrivacyPolicyPage;
