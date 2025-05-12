import { useSession } from "next-auth/react";
import Link from "next/link";

function PaidPage() {
  const { data: session } = useSession();
  return (
    <>
      {/* Shows up if free user is trying to access paid content */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Paid Content</h1>
        <p className="text-lg mb-4">Please subscribe to view this content.</p>
        {session ? (
          <>
            <Link href={`/follows/subscription/${session?.user?.id}`}>
              <a className="bg-cyan-500 text-white px-4 py-2 rounded-md">
                Subscribe
              </a>
            </Link>
          </>
        ) : (
          <Link href="/login">
            <a className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              Sign In
            </a>
          </Link>
        )}
      </div>
    </>
  );
}

export default PaidPage;
