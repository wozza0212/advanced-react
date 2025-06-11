import Link from "next/link";
export default function DesignPatterns() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Design Patterns</h1>
      <Link href={"/design-patterns/container-components"}>
        <h2>Container Components</h2>
      </Link>
      <Link href={"/"}>
        <h2>Home</h2>
      </Link>
    </div>
  );
}
