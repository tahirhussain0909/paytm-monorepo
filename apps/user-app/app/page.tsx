import dynamic from "next/dynamic";

const HomeForm = dynamic(() => import("./form"), { ssr: false });

export default async function Home() {
  return (
    <main className="select-none">
      <HomeForm />
    </main>
  );
}
