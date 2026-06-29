import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-logo">
          My Blog
        </Link>
        <nav className="site-nav">
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}
