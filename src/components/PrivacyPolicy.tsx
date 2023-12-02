import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 font-sans ">
      <h1 className="text-3xl font-bold text-center mt-4 mb-4">
        Privacy Policy
      </h1>
      <div className="flex flex-col justify-center text-justify">
        <p className="text-center text-gray-600 mt-4 mb-4">
          Last updated: Saturday December 2th, 2023
        </p>

        <div className="mt-4 mb-4">
          <p>
            Welcome to next.E-commerce, a development and testing environment
            created for showcasing coding and design skills. This privacy policy
            explains how we handle information collected during your visit to
            our website.
          </p>
          <h4 className=" text-gray-600 mt-4 mb-4">
            {" "}
            1. Information We Collect{" "}
          </h4>
          <p>
            {" "}
            1.1. Personal Information We do not collect any real personal
            information on this website. If you choose to register for an
            account, any data provided is entirely fictional and used for
            development and testing purposes. We commit not to use or share this
            information for any commercial or real-world purposes. The
            registration flow works only by verifying the email. To experience
            the full site, you need to use a real email to receive a
            confirmation link.
          </p>
          <p className="mt-2">
            {" "}
            1.2. Automatic Data Collection We may collect automated information
            such as IP addresses, browser types, and operating systems for
            debugging and testing purposes. This information is anonymized and
            aggregated for internal analysis only.{" "}
          </p>
          <h4 className=" text-gray-600 mt-4 mb-4"> 2. Use of Information </h4>
          <p>
            2.1. We use the collected information for testing and development
            purposes only. If you decide to register for an account, we assure
            you that we will not use the provided data for any business or
            commercial activities. Your data will solely be used to enhance and
            test the functionality of our development environment.{" "}
          </p>
          <h4 className=" text-gray-600 mt-4 mb-4"> 3. Data Security </h4>
          <p>
            {" "}
            3.1. Your privacy and data security are important to us. If you
            choose to register, please note that passwords are securely
            encrypted, and no one can access or view your password. We use
            industry-standard encryption methods to protect your data during
            transmission.
          </p>
          <h4 className=" text-gray-600 mt-4 mb-4">4. Data Sharing </h4>
          <p>
            4.1.1 We do not share any data collected on this website with third
            parties. The information is used solely for internal testing and
            development. Rest assured that your data, even if fictional, will
            not be sold, traded, or shared for any external purposes.{" "}
          </p>
          <h4 className=" text-gray-600 mt-4 mb-4"> 5. Third-Party</h4>
          <p>
            5.1.1 Links This privacy policy applies only to this specific
            webiste. We are not responsible for the privacy practices of
            third-party websites linked to from this development environment.{" "}
          </p>
          <h4 className=" text-gray-600 mt-4 mb-4">
            {" "}
            6. Updates to the Privacy Policy{" "}
          </h4>
          <p>
            {" "}
            We may update this privacy policy to reflect changes in our
            practices. Users will be notified of any significant updates.
          </p>

          <h4 className=" text-gray-600 mt-4 mb-4"> 7. Contact Information </h4>
          <p>
            {" "}
            If you have any questions or concerns about this privacy policy,
            please contact us at postmaster@lucaforma.com. Thank you for
            visiting next.E-commerce - Development Environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
