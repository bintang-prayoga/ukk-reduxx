import Image from "next/image";
import { useState } from "react";

function UnauthorizedPage() {
  const [count, setCount] = useState(3);
  if (count > 0) {
    setTimeout(() => setCount(count - 1), 1000);
  }

  if (count === 0) {
    window.location.href = "/";
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url(/LoginBanner.jpg)",
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="max-w-md w-full space-y-8 p-10 bg-zinc-800 rounded-xl z-0 text-center ">
        {/* <Image
          src={`https://cdn.discordapp.com/attachments/949216626715279391/1070896837139103744/pngegg.png`}
          width={200}
          height={150}
          className="rounded-full mx-auto"
        /> */}
        <h1 className="font-semibold md:text-lg">
          You Are Not Authorized to Access This Page
        </h1>
        <h1 className="font-semibold md:text-lg">Redirect in {count}</h1>
      </div>
    </div>
  );
}

export default UnauthorizedPage;
