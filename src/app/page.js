"use client";
import Header from "@/components/Header";
import HeroForm from "@/components/forms/HeroForm";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });
  return (
    <main className="">
      <section className="pt-32 px-6 max-w-4xl mx-auto">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link<br />for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>
        <HeroForm user={session?.user} />
      </section>

      {/* next auth */}
      <div className="p-8">
        <div className=''>{session?.data?.user?.email}</div>
        <button className='' onClick={() => signOut()}>Logout</button>
      </div>
    </main>
  );
}
