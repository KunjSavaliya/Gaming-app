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
            &bull; to provide advertisements on our Websites tailored to your interests. We may use third-party cookies to collect information about your activities on our Websites and elsewhere over time to provide you with targeted advertising.
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4 mb-4">
            &bull; You may set your browser to refuse cookies or to alert you when cookies are being sent. However, if you do so, some parts of our Websites may not function properly. We may also use web beacons (small graphic images) on our Websites or in our e-mails to help us count users who have visited certain pages or opened e-mails and to deliver cookies. Web beacons are also known as web bugs, tracking bugs, or clear gifs.
          </h2>
        </div>
        <h1 className='text-2xl text-[#69a2ff] mb-2 mt-4'>3. USE OF YOUR INFORMATION</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            3.1 populargamesforyou collects, processes, and uses the information we gather about our users to:
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            &bull; Improve our Websites and the overall user experience; &bull; Provide you with customer service, including help with technical issues and game-related queries;
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; Personalize the content of our Websites and any advertisements displayed on them; and
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base">
            &bull; Send you promotional information about our Websites, or our partners, that we think may interest you. This includes sending marketing communications and offers related to the Websites and third parties’ products and services.
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            3.2 If you do not wish to receive such communications, you may opt out by following the unsubscribe instructions provided in the communication or by contacting us directly.
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            3.3 We may use your information to conduct market research and improve our services based on feedback and usage patterns. We may also analyze the data for the purposes of understanding how users interact with our Websites and how we can improve the user experience.
          </h2>
        </div>
        <h1 className='text-2xl text-[#69a2ff] mb-2 mt-4'>4. SHARING YOUR INFORMATION</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            4.1 We do not sell, rent, or lease your personal data to third parties. However, we may share your information with the following parties:
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            &bull; Service providers and partners who assist us in operating our Websites, conducting our business, or providing services to you, as long as those parties agree to keep this information confidential.
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            &bull; With third parties as required by law, or to protect our rights, property, or safety, or that of our users or others.
          </h2>
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            &bull; In connection with any merger, acquisition, or sale of all or a portion of our assets, we may transfer your information to the acquiring entity.
          </h2>
        </div>
        <h1 className='text-2xl text-[#69a2ff] mb-2 mt-4'>5. DATA SECURITY</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            5.1 We take reasonable measures to protect the information we collect from loss, theft, misuse, unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </h2>
        </div>
        <h1 className='text-2xl text-[#69a2ff] mb-2 mt-4'>6. CHANGES TO THIS PRIVACY POLICY</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            6.1 We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about our practices.
          </h2>
        </div>
        <h1 className='text-2xl text-[#69a2ff] mb-2 mt-4'>7. CONTACT US</h1>
        <hr className="w-full border-gray-300 border-t-1" />
        <div className="mt-2">
          <h2 className="font-light text-[#696969] flex items-center gap-2 text-sm md:text-base mt-4">
            7.1 If you have any questions about this Privacy Policy or our practices, please contact us at [email address].
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
