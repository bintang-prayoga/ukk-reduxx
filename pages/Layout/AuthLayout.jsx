import Head from "next/head";

function UserLayout({ children }) {
  return (
    <>
      <Head>
        <title>BoedNoComic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(/LoginBanner.jpg)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="max-w-md w-full space-y-8 p-10 bg-zinc-800 rounded-xl z-10">
          <div className="text-center">{/* <Image /> */}</div>
          {children}
        </div>
      </div>
    </>
  );
}

export default UserLayout;

UserLayout.getLayout = (page) => <UserLayout>{page}</UserLayout>;
