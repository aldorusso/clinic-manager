import React from "react";
import LanguageSelect from "../common/LanguageSelect";
import Link from "next/link";
import Image from "next/image";
import { footerLinks6 } from "@/data/footer";

export default function Footer7() {
  return (
    <footer
      id="uc-footer"
      className="uc-footer panel overflow-hidden uc-dark uc-dark"
    >
      <div className="footer-outer py-6 lg:py-8 xl:py-9 bg-tertiary-700 text-white text-opacity-70 m-2 mt-0 rounded-2">
        <div className="uc-footer-content">
          <div className="container xl:max-w-xl">
            <div className="uc-footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  <div className="col-12 lg:col-6">
                    <div className="panel vstack items-start gap-3 xl:gap-4 lg:max-w-1/2">
                      <div>
                        <Link
                          className="panel text-none text-white"
                          href={`/`}
                          style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "28px",
                            fontWeight: 700,
                            letterSpacing: "-0.5px",
                            textDecoration: "none",
                            display: "inline-block"
                          }}
                        >
                          ClinicManager
                        </Link>
                        <p className="mt-2">
                          La plataforma integral para gestionar y escalar tu clínica estética.
                        </p>
                      </div>
                      <LanguageSelect />
                    </div>
                  </div>
                  {footerLinks6.map((section, index) => (
                    <div key={index} className={section.className || ""}>
                      <ul className="nav-y gap-2 fw-medium dark:text-white">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.isLink ? (
                              <Link href={link.href}>{link.text}</Link>
                            ) : (
                              <a href={link.href}>{link.text}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between text-center pt-4 lg:pt-6 mt-6 border-top">
                <p>ClinicManager © {new Date().getFullYear()}, Todos los derechos reservados.</p>
                <ul className="nav-x justify-center gap-2">
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-x-filled" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-youtube" />
                    </a>
                  </li>
                  <li>
                    <a className="duration-150 hover:text-primary" href="#">
                      <i className="icon icon-2 unicon-logo-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
