'use client'; // Required for client-side hooks in the App Router

import Link from 'next/link';
import React, { Suspense } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

function TermsOfUse() {
  return (
    <div className="flex flex-col items-center p-5">
      <div className="w-full max-w-screen-lg">
        <h1 className='text-2xl mt-2 text-[#69a2ff] mb-2'>Terms of Use</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-3">
            populargamesforyou is dedicated to protecting the privacy of our users and handling any personal data we obtain from our users with care and respect. An overall principle is that we do not collect more information than is reasonably necessary to provide you with the best user experience.
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            This privacy policy (hereafter referred to as the &quot;Privacy Policy&quot;) is applicable where populargamesforyou acts as a data controller with respect to your data. This is the case where we determine the purposes and means of the data processing on our websites, which includes certain games and other activities that are offered by us on or through our websites. Our websites, all the web pages that are part of the websites, and such games and activities are hereafter collectively referred to as the &quot;Websites.&quot;
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            populargamesforyou may use affiliates&apos; or reputable third parties&apos; services for the processing of personal data collected on or through the Websites. By using or accessing our Websites, you are accepting the practices described in this Privacy Policy.
          </h2>
        </div>
        <h1 className='text-2xl mt-2 text-[#69a2ff] mb-2'>1. ABOUT OUR WEBSITES</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
          1.1 Our Websites offer a diverse, and exciting mix of online games created by populargamesforyou, as well as games created by independent developers and populargamesforyou partners. Players can access our Websites to play games without registering; Also, visitors to the Websites will be able to rate games and browse for the newly added, top-rated, and most-popular games. The Websites may include automated decision making in the form of behavioral advertising.
        </h2>
        <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
          1.2 Certain games on our Websites are controlled by third parties, including third parties located outside of the European Economic Area (&ldquo;EEA&rdquo;). populargamesforyou’s own hosting facilities for the Websites are located within the EEA. populargamesforyou uses commercially reasonable efforts to ensure that any data processing that takes place on the Websites is in line with the applicable data protection laws. Privacy safeguards we take are contractual safeguards with third parties and the employment of technical privacy solutions, such as monitoring and blocking tools. However, as we do not control all games, data may be collected and transferred of which we are not aware. If you have concerns about data processing in a game, please click
        </h2>
        <h1 className='text-2xl text-[#69a2ff] mb-2 mt-4'>2. THE INFORMATION WE COLLECT</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            2.1 populargamesforyou collects information when you use or access our Websites. This information relates to how you use our websites including with what device, and may include information that you submit when creating an account with us or through your social network accounts such as Facebook or Google+. We may also collect information from ad network providers and other third parties such as payment service providers.
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4 mb-4">
            The information we may collect when you use our Websites includes (among others) the following:
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; Your IP address;
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; Demographic information (such as age and country); &bull; Information collected through cookies or similar technologies;
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; When you choose to register with us for a better game experience and/or to create a public or private profile for participating in our social gaming network, we collect information such as username, email address, avatar and any information you may choose to provide, such as gender. This can be through a social network account;
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; Information that you provide us when you fill in online forms or surveys on our Websites;
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; Other information that we receive from you, e.g. your e-mails, chats or other communications and information exchanged with us on our social media channels;
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; How you use our Websites, including when you play our games and interact with our advertising network providers;
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; Transaction information of payments made;
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; User agent of device;
          </h2>

          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4 mb-4">
            IP address, Cookies, and Web Beacons
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            2.2 When you visit our Websites, our servers automatically save your computer&apos;s IP address via our analytics tracking system. IP addresses will be collected for the purpose of analytical tracking and improving the Websites, along with geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths, as well as information about the timing, frequency and pattern of your use of the Websites. If you arrive at the Websites via a link from another website, the URL of the linking website and the URL of any website that you link to next will also be collected for the purpose of assessing our main traffic sources, and debugging and tracing.
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            2.3 In addition, we store certain information from your browser, using &ldquo;cookies&rdquo;. A cookie is a piece of data stored on the computer and is tied to information about the user. We will ask you to consent to the use of our Cookies in accordance with this Privacy Policy in case this is required under the applicable data protection laws when you first use our Websites. SPIL may use cookies, web beacons (web bugs), or similar technologies to enhance and personalize your experience on the Websites, including the following:
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            &bull; to operate and improve services and features on the Websites;
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; to help authenticate you, to remember your preferences and login details; and
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; to remember your preferences and registration information, as applicable;
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
  &bull; to present and help measure and research the effectiveness of SPIL&apos;s offerings, advertisements, and email communications;
</h2>

          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; to customize the content and advertisements provided to you through the Websites.
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">If you do not want populargamesforyou to store any cookies on your computer, you can prevent this by changing your browser settings to “do not accept cookies”. Your browser manufacturer will provide you more details on how this works. However, we do inform you that you will not be able to use the Websites including its functionalities as intended. If you want to learn more about H5Gmestreet’s use of Cookies, please click here for our cookie policy.
            </h2>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            2.4 populargamesforyou uses analytics partners in order to help get insights into the usage of the Websites and services (“Usage Data”). These analytics partners process Usage Data which may include among others your IP address, geographical location,  browser type and version, operating system, length of visit, page views and other information about how you use and navigate the Websites. This data is used to analyze the use of the Websites and to improve the Websites and services. Our analytics partners will act as a data processor in relation to the Usage Data. The legal basis for the processing of the Usage Data is legitimate interest.
            </h2>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            2.5 populargamesforyou also uses ad network providers, ad exchanges and ad servers (“Advertising Partners”) to help present advertisements on the Websites. These Advertising Partners use cookies, web beacons, or similar technologies for presenting, better targeting, and measuring the effectiveness of their advertisements, using data gathered over time and across their networks of web pages to determine or predict the characteristics and preferences of their audiences (“Advertising Data”). populargamesforyou processes such information in accordance with this Privacy Policy. Our Advertising Partners may act as a data processor or data controller with regards to the Advertising Data, depending on the scope of their services. The Advertising Partners are responsible for their compliance with the applicable data protection legislation. The use of cookies, web beacons, or similar technologies by such third parties as ad network providers is subject to their own privacy policies, not this Privacy Policy. The legal basis for the processing of the Advertising Data is consent.
            </h2>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            2.6 populargamesforyou uses Facebook technology to provide certain services on the Websites. The Websites may include the “Facebook Like Button” which is controlled by Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304 USA (Facebook). In the event you click on the Facebook Like Button, Facebook will ask you whether you want to log in to Facebook if you are not logged in at that moment, or register with Facebook. If you decide to do so, your personal data will be transferred to Facebook. In the event you are already logged into your Facebook account and you have given SPIL your explicit consent to the sharing of your information with Facebook, your information is shared with Facebook when visiting the Websites or playing games including the “Facebook Like Button”.
            </h2>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            The Websites also use the “Facebook Pixel” controlled by Facebook in order to show conversions, create “lookalike audiences” and provide SPIL with relevant statistics about our Websites in order to improve them. When you use our websites and you have given SPIL your explicit consent to the sharing of your information with Facebook, your information is automatically shared with Facebook.
            </h2>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            For more information on the “Facebook Like Button” and “Facebook Pixel” and sharing and use of your personal data please consult Facebook’s Data Policy at:
            
            </h2>
            <p className='text-[#69a2ff]'><Link href={'https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0'}>https://www.facebook.com/policy.php</Link></p>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            2.7 For optimizing our services and the Websites, and for the purposes mentioned in this article 2, we are entitled to combine your personal data (including your  email address, as applicable) with other information about you collected by or provided to us.
            </h2>

            <h1 className='text-2xl mt-2 text-[#69a2ff] mb-2'>3. TO WHOM DOES populargamesforyou PROVIDE THIS INFORMATION?</h1>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">3.1 populargamesforyou may provide information to any party whose services it engages for the purposes of its normal operations (for example, those partners who assist us by providing technical or operational facilities for the Websites and so forth), as mentioned under section 2. We may also supply information to other parties if we are required to do so by law or by a ruling handed down by a court of law.populargamesforyou does not provide personal details to other parties for commercial, advertising, or marketing purposes, except if you explicitly give us permission to do so, or if doing so is part of a specific program or operation for which you have registered. In such case, you may withdraw your permission at any time.</h2>
       
            <h1 className='text-2xl mt-2 text-[#69a2ff] mb-2'>4. WHY DO WE COLLECT INFORMATION?</h1>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-1">4.1 We use personal data and other information to maintain the general and personalized content and functionality of the Websites. In addition, we use personal details to make it possible to accommodate your requests, and so that we are able to provide you with the services, as described herein, when using the Websites and for the purposes set out elsewhere in this Privacy Policy. We may (among others) use the information that we have about you:</h2>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-1">&bull; To provide you access to the Websites and associated games and services, and continuously improve their features</h2>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-1">&bull; To store your Website settings, gaming-history and provide personalized content</h2>
    <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-1">&bull;To provide customer support services</h2>
      <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-1">&bull;To provide our chat service</h2>
        <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-1">&bull;To analyze and optimize the functioning of the Websites and games</h2>
       <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-1">&bull;To enable in-game purchases</h2>
         <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-1">&bull;To provide relevant advertisements and to send you promotional messages by email or other  communications in case you have given your consent for this</h2>
      <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-1">&bull;To enable social network integration, especially with Facebook and Google+</h2>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-1">&bull;To provide competitions</h2>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-1">&bull;To prevent cheating, fraud and crime</h2>
            <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-1">&bull;To meet legal and tax obligations</h2>


        </div>  
        
      </div>
    </div>
  );
}

export default TermsOfUse;
