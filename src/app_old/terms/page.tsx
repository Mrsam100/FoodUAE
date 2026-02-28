import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Real Food UAE',
  description: 'Terms of Service for Real Food UAE. Understand the terms and conditions for using our website.',
};

export default function TermsPage() {
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
          Terms of Service
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-[18px] md:text-[20px] text-[#F7F5EF]/90 leading-relaxed mb-8">
            Welcome to Real Food UAE. By accessing and using this website, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>

          <p className="text-[14px] text-[#8E8A85] mb-12">
            Effective Date: January 2025
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            1. Acceptance of Terms
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            By accessing or using the Real Food UAE website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            2. Nature of Content
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            <strong className="text-[#F7F5EF]">Educational Purpose:</strong> The content on this website is provided for general educational and informational purposes only. It is designed to promote awareness of whole, nutrient-dense foods and healthy eating habits.
          </p>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            <strong className="text-[#F7F5EF]">Not Medical Advice:</strong> The information provided on this website does not constitute medical advice, diagnosis, or treatment. Always consult with a qualified healthcare professional before making any changes to your diet, especially if you have existing health conditions, are pregnant, nursing, or taking medications.
          </p>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            <strong className="text-[#F7F5EF]">Private Initiative:</strong> Real Food UAE is a private educational initiative by Lycoris Design Studios. We are not affiliated with any government entity, healthcare organization, or commercial food company.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            3. Free Access
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            All content on this website is provided free of charge. We do not require registration, payment, or subscription to access any information or resources. This service is offered as a public benefit with no financial barriers.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            4. Intellectual Property
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Lycoris Design Studios or its content suppliers and is protected by international copyright laws.
          </p>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            You may:
          </p>
          <ul className="space-y-2 text-[16px] md:text-[17px] text-[#8E8A85] list-none pl-0 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>View and read the content for personal, non-commercial use</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Share links to the website with others</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Reference the content with proper attribution</span>
            </li>
          </ul>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            You may not:
          </p>
          <ul className="space-y-2 text-[16px] md:text-[17px] text-[#8E8A85] list-none pl-0 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Reproduce, distribute, or modify the content for commercial purposes without written permission</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Remove any copyright or proprietary notices from the content</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>Use the content to create derivative works without authorization</span>
            </li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            5. Disclaimer of Warranties
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            This website and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranties of any kind, either express or implied. We do not warrant that:
          </p>
          <ul className="space-y-2 text-[16px] md:text-[17px] text-[#8E8A85] list-none pl-0 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>The website will be available at all times or be error-free</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>The information is complete, accurate, or up-to-date</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#E6FF8C] mt-1">•</span>
              <span>The content will meet your specific needs or expectations</span>
            </li>
          </ul>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            6. Limitation of Liability
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            To the fullest extent permitted by law, Lycoris Design Studios and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            7. External Links
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            This website may contain links to external websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies or content.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            8. Modifications to Terms
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            9. Governing Law
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            These Terms of Service shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-[24px] md:text-[28px] font-semibold mt-10 mb-5 text-[#F7F5EF]">
            10. Contact Information
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#8E8A85] leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us at:
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