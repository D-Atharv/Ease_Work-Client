import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-slate-300 w-full  flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to Ease Work Client</h1>
      <Link href="/textGenerator" className="text-blue-500 text-2xl font-bold mb-6 hover:underline">
        Go to Voice to Text Converter
      </Link>
    </div>
  );
}
