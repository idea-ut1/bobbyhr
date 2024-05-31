"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import SectionTitle from "@/components/home/sectionTitle";
import Footer from "@/components/footer";
import { Menu } from "react-feather";
import SliderHome from "@/components/slider-home";
export default function Privacy() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link href={'/'}>
        <ArrowLeftIcon className="absolute w-10 h-10 text-blue-500 top-5 left-10" />
      </Link>
      <div className="p-5 text-justify text-gray-700 bg-gray-100 lg:p-20">
        <div className="fixed right-0 top-0 h-20 w-20 rounded-bl-full bg-brown_bobby" />
        <div className="fixed right-0 top-0 pr-4 pt-4">
          <div className="flex items-start justify-end">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open panel</span>
              <Menu className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </div>
        <h1 className="my-8 text-5xl font-extrabold text-center md:text-6xl lg:text-7xl">
          Privacy Policy for IDeA
        </h1>
        <div className="container max-w-3xl mx-auto text-justify">
          <p>At IDeA, accessible from https://idea-student.works/, one of our main priorities is the privacy of our
            visitors. This Privacy Policy document contains types of information that is collected and recorded by IDeA and
            how we use it.
            you have additional questions or require more information about our Privacy Policy, do not hesitate to
            contact us.
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards
            to the information that they shared and/or collect in IDeA. This policy is not applicable to any information
            collected offline or via channels other than this website.</p>


          <SectionTitle
            id="faq3"
            title="Consent" />

          <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

          <SectionTitle
            id="faq3"
            title="Information we collect" />

          <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will
            be made clear to you at the point we ask you to provide your personal information.
            If you contact us directly, we may receive additional information about you such as your name, email address,
            phone number, the contents of the message and/or attachments you may send us, and any other information you may
            choose to provide.
            When you register for an Account, we may ask for your contact information, including items such as name,
            company name, address, email address, and telephone number.</p>
          <SectionTitle
            id="faq3"
            title="How we use your information" />

          <p>We use the information we collect in various ways, including to:

            Provide, operate, and maintain our website, improve, personalize, and expand our website,understand and analyze how you use our website, Develop new products, services, features, and functionality,
            Communicate with you, either directly or through one of our partners,
            including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes,
            Send you emails, Find and prevent fraud</p>

          <SectionTitle
            id="faq3"
            title="Log Files" />
          {/* <h2 className="my-5 text-2xl font-bold md:text-3xl">Log Files</h2> */}

          <p>IDeA follows a standard procedure of using log files. These files log visitors when they visit websites. All
            hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files
            include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are not linked to any information that is
            personally identifiable. The purpose of the information is for analyzing trends, administering the site,
            tracking users&apos; movement on the website, and gathering demographic information.</p>
          <SectionTitle
            id="faq3"
            title="Cookies and Web Beacons" />

          <p>Like any other website, IDeA uses &quot;cookies&quot;. These cookies are used to store information including
            visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information
            is used to optimize the users&apos; experience by customizing our web page content based on
            visitors&apos; browser type and/or other information.</p>

          <SectionTitle
            id="faq3"
            title="Advertising Partners Privacy Policies" />

          <p>You may consult this list to find the Privacy Policy for each of the advertising partners of IDeA.

            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used
            in their respective advertisements and links that appear on IDeA, which are sent directly to
            users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to
            measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you
            see on websites that you visit.

            Note that IDeA has no access to or control over these cookies that are used by third-party advertisers.</p>
          <SectionTitle
            id="faq3"
            title="Third Party Privacy Policies" />

          <p>IDeA&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to
            consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may
            include their practices and instructions about how to opt-out of certain options.

            You can choose to disable cookies through your individual browser options. To know more detailed information
            about cookie management with specific web browsers, it can be found at the browsers&apos; respective
            websites.</p>
          <SectionTitle
            id="faq3"
            title="CCPA Privacy Rights (Do Not Sell My Personal Information)" />

          <p>Under the CCPA, among other rights, California consumers have the right to:
            Request that a business that collects a consumer&apos;s personal data disclose the categories and specific
            pieces of personal data that a business has collected about consumers.
            Request that a business delete any personal data about the consumer that a business has collected.
            Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal
            data.
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights,
            please contact us.</p>
          <SectionTitle
            id="faq3"
            title="GDPR Data Protection Rights" />

          <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to
            the following:
            The right to access – You have the right to request copies of your personal data. We may charge you a small fee
            for this service.
            The right to rectification – You have the right to request that we correct any information you believe is
            inaccurate. You also have the right to request that we complete the information you believe is incomplete.
            The right to erasure – You have the right to request that we erase your personal data, under certain
            conditions.
            The right to restrict processing – You have the right to request that we restrict the processing of your
            personal data, under certain conditions.
            The right to object to processing – You have the right to object to our processing of your personal data, under
            certain conditions.
            The right to data portability – You have the right to request that we transfer the data that we have collected
            to another organization, or directly to you, under certain conditions.
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights,
            please contact us.</p>
          <SectionTitle
            id="faq3"
            title="Children&apos;s Information" />

          <p>Another part of our priority is adding protection for children while using the internet. We encourage parents
            and guardians to observe, participate in, and/or monitor and guide their online activity.

            IDeA does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you
            think that your child provided this kind of information on our website, we strongly encourage you to contact us
            immediately and we will do our best efforts to promptly remove such information from our records.</p>
          <SectionTitle
            id="faq3"
            title="Changes to This Privacy Policy" />

          <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for
            any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are
            effective immediately, after they are posted on this page.

            Our Privacy Policy was created with the help of the <a href="https://www.privacypolicygenerator.info">Privacy
              Policy Generator</a>.</p>
          <SectionTitle
            id="faq3"
            title="Contact Us" />
          <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>

        </div>
        <Footer /></div>
      <SliderHome open={open} setOpen={setOpen} />
    </>
  );
}