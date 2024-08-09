import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to Ease Work Client</h1>
      <Link href="/text-generator" className="text-blue-500 hover:underline">
        Go to Voice to Text Converter
      </Link>
    </div>
  );
}
