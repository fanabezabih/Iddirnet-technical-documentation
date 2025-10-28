"use client";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FooterSection() {
    return (
        <div className="bg-[#0F1420] mt-10">

            <div className="w-full px-6 sm:px-10 md:px-20 xl:px-40">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16  py-8 border-b-2 border-gray-700">

                    <div className="text-center md:text-left max-w-xs">
                        <Image
                            src="/images/Logo-removebg-preview.png"
                            alt="IddirNet Logo"
                            width={100}
                            height={40}
                            className=""
                        />
                        <p className="text-white text-[16px] mt-3">
                            Modern tool for Ethiopia’s timeless tradition of mutual support.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[20px] text-white font-semibold mb-4 md:text-[13.8px]">
                            Navigation
                        </h2>
                        <ul>
                            {["Home", "Product overview", "Code structure"].map((link) => (
                                <li key={link} className="mb-2 text-[16px] md:text-[13.8px]">
                                    <a
                                        href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                                        className="text-white hover:underline"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[20px] text-white font-semibold mb-4 md:text-[13px]">
                            Contact Us
                        </h2>
                        <ul>
                            {[
                                {
                                    name: "Instagram",
                                    url: "https://www.instagram.com/iddirnet?igsh=MXAweDZhaWV1dzA4eA==",
                                    icon: <AiFillInstagram size={20} />,
                                },
                                {
                                    name: "Facebook",
                                    url: "https://www.facebook.com/profile.php?id=61580175176921",
                                    icon: <FaFacebook size={20} />,
                                },
                                {
                                    name: "Email",
                                    url: "mailto:victoriaogega@gmail.com",
                                    icon: <MdEmail size={20} />,
                                },
                            ].map((social) => (
                                <li key={social.name} className="mb-2">
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-white hover:underline md:text-[13.8px]"
                                    >
                                        <span>{social.name}</span>
                                        {social.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center text-white text-[16px] py-4 border-t border-gray-700">
                    © Copyright IddirNet {new Date().getFullYear()}
                </div>
            </div>
        </div>
    );
}