import Link from "next/link";

export default function Button({ href, text }) {
  return (
    <Link
      href={href}
      className="bg-blue-500 text-white h-10 inline-flex items-center px-4 rounded-md"
    >
      {text}
    </Link>
  );
}
