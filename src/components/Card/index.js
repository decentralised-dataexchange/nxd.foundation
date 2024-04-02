import React from "react";
import Link from "@docusaurus/Link";

export default function Card({ title, description, link }) {
    return (
        <Link href={link} className="hover:no-underline border border-solid w-full border-[grey] bg-[#f7f6f6] rounded   p-4 flex flex-col justify-between">
            <div className="flex flex-col justify-center items-center">
                <p className="text-[black] flex justify-center items-center text-[20px] text-center">
                    {title}
                </p>
                {
                    description && (<p className="text-[black] w-2/3 mt-2 text-[14px] text-center">
                        {description}
                    </p>)
                }

            </div>
        </Link>
    );
}
