import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <img src="https://kinsta.com/wp-content/uploads/2017/11/wordpress-contact-form-plugins-1024x512.png" alt="contact-img"/>
        </div>
        <div>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-s">
                ASHISH KUMAR
              </h2>
            </div>
            <div className="lg:w-1/2 px-10 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                ashish.kumar7497@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+91-9066 233 407</p><br/>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                LINKEDIN
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                ashish-kumar-0704
              </a><br/><br/>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                GITHUB
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                ashish-74
              </a>
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
}