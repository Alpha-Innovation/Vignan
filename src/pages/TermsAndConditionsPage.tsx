import React from 'react';

const TermsAndConditionsPage: React.FC = () => (
  <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-10 mb-10">
    <h2 className="text-2xl font-bold mb-4 text-[#0A4377]">Terms and Conditions</h2>
    <div className="text-sm space-y-3">
      <p><b>Disclaimer</b></p>
      <p>
        This website is operated under the brand name <b>onlinevignan.in</b>. We are an independent education guidance platform and are not affiliated with Vignan Online or any other university.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>All university names, logos, and trademarks are used only for reference and informational purposes.</li>
        <li>We do not act as an admission cell or issue degrees, certificates, or mark sheets.</li>
        <li>We offer free counseling to help students make informed educational decisions.</li>
        <li>No fees are charged by us for providing university-related information or guidance.</li>
        <li>Students are advised to verify all details directly from the respective official university portals.</li>
        <li>We fully respect the autonomy and credibility of all educational institutions mentioned on this platform.</li>
      </ul>
      <hr className="my-4" />
      <p>By using this website, you agree to the following terms and conditions:</p>
      <ul className="list-decimal pl-5 space-y-2">
        <li><b>Use of Information:</b> All information provided is for general guidance only and should not be considered as official advice or representation of any university.</li>
        <li><b>Accuracy:</b> While we strive to keep information up to date, we do not guarantee the accuracy or completeness of any content. Users should verify details independently.</li>
        <li><b>No Affiliation:</b> We are not affiliated with or endorsed by any university, including Vignan Online.</li>
        <li><b>External Links:</b> Our platform may link to official university portals for your convenience. We are not responsible for the content or privacy practices of those websites.</li>
        <li><b>Limitation of Liability:</b> We are not liable for any loss or damages resulting from reliance on information provided on this platform.</li>
        <li><b>Changes:</b> We reserve the right to update these terms and conditions at any time without prior notice.</li>
      </ul>
    </div>
  </div>
);

export default TermsAndConditionsPage;
