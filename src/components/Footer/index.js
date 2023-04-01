import React from "react";
import Translate, {translate} from '@docusaurus/Translate';

export default function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#00182c] sticky top-[100vh]"
    >
      <div className="w-xl h-[140px]">
        <div className="border-t-0 border-gray-100 sm:flex sm:items-center sm:justify-between h-full p-6">
          <p className="text-center text-[10px] md:text-sm text-white sm:text-left">
            Copyright © NordXDataspace Foundation 2023. <Translate>All rights reserved.</Translate>
          </p>
          <div className="footer-menu text-xs-center flex items-center justify-center text-white">
            <a
              href="#"
              className="text-white hover:text-white active:text-white focus:text-white text-[10px] md:text-sm mr-1"
              key="footer_option1"
              onclick="activeTabMove(1)"
            >
              <Translate>Cookies Policy</Translate>
            </a>
            |
            <a
              href="#"
              className="text-white hover:text-white active:text-white focus:text-white text-[10px] md:text-sm ml-1 mr-1"
              key="footer_option4"
            >
              <Translate>Terms of Service</Translate>
            </a>
            |
            <a
              href="#"
              className="text-white hover:text-white active:text-white focus:text-white text-[10px] md:text-sm ml-1 mr-1"
              key="footer_option3"
              onclick="activeTabMove(2)"
            >
              <Translate>Privacy Policy</Translate>
            </a>
          </div>
          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <li>
              <a
                href="https://nordxdataspace.slack.com/"
                rel="noreferrer"
                target="_blank"
                className="text-white hover:text-white active:text-white focus:text-white"
              >
                <span className="sr-only">Slack</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 10C13 11.1046 13.8954 12 15 12C16.1046 12 17 11.1046 17 10V5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5V10ZM5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12H10C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8H5ZM15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17H20C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13H15ZM10 22C8.89543 22 8 21.1046 8 20L8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15V20C12 21.1046 11.1046 22 10 22ZM8 5C8 3.89543 8.89543 3 10 3C11.1046 3 12 3.89543 12 5V7H10C8.89543 7 8 6.10457 8 5ZM3 15C3 16.1046 3.89543 17 5 17C6.10457 17 7 16.1046 7 15V13H5C3.89543 13 3 13.8954 3 15ZM17 20C17 21.1046 16.1046 22 15 22C13.8954 22 13 21.1046 13 20V18H15C16.1046 18 17 18.8954 17 20ZM22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10V12H20C21.1046 12 22 11.1046 22 10Z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/decentralised-dataexchange/nordxdataspace"
                rel="noreferrer"
                target="_blank"
                className="text-white hover:text-white active:text-white focus:text-white"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/nordx-dataspace/"
                rel="noreferrer"
                target="_blank"
                className="text-white hover:text-white active:text-white focus:text-white"
              >
                <span className="sr-only">Linkedin</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-linkedin h-6 w-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
