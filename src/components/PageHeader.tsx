import React from "react";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  breadcrumb: string | React.ReactNode;
  backgroundImage: string;
}

export default function PageHeader({ title, breadcrumb, backgroundImage }: PageHeaderProps) {
  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#002147] opacity-80"></div>
      <div className="relative text-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div>
          <Link legacyBehavior href="/"><a className="hover:text-yellow-400">HOME</a></Link> &nbsp; &gt; &nbsp; {breadcrumb}
        </div>
      </div>
    </div>
  );
}
