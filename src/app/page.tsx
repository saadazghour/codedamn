import Image from "next/image";
import SideBar from "@/SideBar";
import Link from "next/link";

// TODO: Codedamn

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-between min-h-screen pl-2 py-28">
      <SideBar />
      <Link href="/profile/edit">
        <button className="px-2 py-1 font-semibold text-white bg-blue-500 rounded-md">
          Edit Profile
        </button>
      </Link>
    </main>
  );
}
