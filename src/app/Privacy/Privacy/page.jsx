'use client'; // Required for client-side hooks in the App Router

import React, { Suspense } from 'react'; /// 
import { AiOutlineLoading } from 'react-icons/ai'; 

function Privacy() { // Get the title from the U


  return (
    <div className="flex flex-col items-center p-5">
      <div className="w-full max-w-screen-lg">
    
        <h1 className='text-2xl mt-2 text-[#69a2ff] mb-2'>Privacy</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2 ">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
          Information Collection: We may collect personal information, such as names,  email addresses, and user preferences, when you create an account or interact with the website. We may also collect non-personal information, such as  browser type and IP addresses. Use of Information: We use the collected information for purposes including: Personalizing your user experience. Sending updates, notifications, and promotional materials. Monitoring website usage and improving our services. Cookies: We may use cookies to enhance your browsing experience. Cookies are small text files that are stored on your device and help us recognize you when you return to the website. Third-Party Services: We may use third-party services and tools, including analytics and advertising providers, which may collect information about your online activities. Data Security: We take measures to protect your personal information, but no data transmission over the internet is entirely secure. You use this website at your own risk. Children's Privacy: This website is not directed at children under 13 years of age. We do not knowingly collect personal information from children. User Control: You may request to review, modify, or delete your personal information by contacting us. You can also opt out of receiving promotional emails. Changes to Privacy Policy: We may update this Privacy Policy as necessary. Users will be notified of any significant changes. Third-Party Links: This website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. By using this gaming website, you agree to the terms and practices outlined in this Privacy Policy. If you do not agree with these terms, please discontinue your use of the site. Your continued use of the website implies your acceptance of these terms and policies.
          </h2>
         
        </div>
       
      </div>
     
    </div>
  );
}

export default function GameDescription() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <AiOutlineLoading className="text-4xl animate-spin" />
        </div>
      }
    >
      <Privacy />
    </Suspense>
  );
}
