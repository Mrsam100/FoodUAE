import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Real Food UAE',
  description: 'Privacy Policy for Real Food UAE. Learn how we handle your data and protect your privacy.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A0505] text-[#F7F5EF]">
      <div className="max-w-[800px] mx-auto px-5 md:px-10 py-20 md:py-32">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#8E8A85] hover:text-[#E6FF8C] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-[40px] md:text-[56px] font-bold tracking-tight mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-[18px] md:text-[20px] text-[#F7F5EF]/90 leading-relaxed mb-8">
            At Real Food UAE, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website.
          </p>

          <p className="text-[14px] text-[#8E8A85] mb-12">
            Effective Date: January 2025
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            1. Information We Collect
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            <strong className="text-[#F7F5EF]">Minimal Data Collection:</strong> Real Food UAE is designed to be a freely accessible educational resource. We do not require user accounts, registration, or login to access any content on this website.
          </p>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            <strong className="text-[#F7F5EF]">Automatically Collected Information:</strong> When you visit our website, our servers may automatically collect standard technical information such as:
          </p>
          <ul className="space-y-2 text-[16px] md:text-[17px] text-[#8E8A85] list-none pl-0 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Browser type and version</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Device type (desktop, mobile, tablet)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Pages visited and time spent on pages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Referring website (if applicable)</span>
            </li>
          </ul>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            This information is collected in aggregate form and cannot be used to personally identify you.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            2. How We Use Information
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            Any information collected is used solely to:
          </p>
          <ul className="space-y-2 text-[16px] md:text-[17px] text-[#8E8A85] list-none pl-0 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Improve website performance and user experience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Understand which content is most valuable to visitors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Identify and fix technical issues</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Ensure the website functions properly across different devices</span>
            </li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            3. Cookies
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            We use only essential cookies that are necessary for the website to function properly. We do not use tracking cookies, advertising cookies, or any third-party cookies that collect personal information for marketing purposes.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            4. Third-Party Services
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            Our website may use privacy-respecting analytics services to understand website usage. These services are configured to:
          </p>
          <ul className="space-y-2 text-[16px] md:text-[17px] text-[#8E8A85] list-none pl-0 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Not collect personally identifiable information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Not track users across websites</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Respect Do Not Track browser settings</span>
            </li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            5. Data Storage
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            We do not store personal data on our servers. Any preferences or settings you configure on this website are stored locally in your browser using localStorage and never transmitted to our servers.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            6. Data Sharing
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. We do not share any data with advertisers or marketing companies.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            7. Your Rights
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            You have the right to:
          </p>
          <ul className="space-y-2 text-[16px] md:text-[17px] text-[#8E8A85] list-none pl-0 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Access the website without providing any personal information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Clear your browser data at any time to remove locally stored preferences</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Contact us with any privacy-related questions or concerns</span>
            </li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            8. Children&apos;s Privacy
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            Our website is designed for general audiences and does not knowingly collect information from children under 13. The educational content is suitable for all ages and can be accessed freely without providing any personal information.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            9. Changes to This Policy
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            10. Contact Us
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <a 
            href="mailto:hello@lycoris-studios.com"
            className="text-[#E6FF8C] hover:text-[#F7F5EF] transition-colors text-[18px] font-medium"
          >
            hello@lycoris-studios.com
          </a>

          <div className="mt-16 pt-8 border-t border-[#201D1D]">
            <p className="text-[14px] text-[#8E8A85]/60">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}