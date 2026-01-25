import Link from "next/link";

export default function SignUpButton() {
  return (
    <Link
      className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white transition-colors hover:bg-primary-dark focus:outline-hidden focus:bg-secondary disabled:opacity-50 disabled:pointer-events-none"
      href="/contact"
    >
      Sign up
    </Link>
  );
}
