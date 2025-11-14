import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        background: "#eee",
        color: "#000",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
