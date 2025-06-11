import Link from "next/link";
export default function ContainerComponents() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Container Components</h1>
      <Link href={"/design-patterns"}>
        <h2>Design Patterns</h2>
      </Link>
    </div>
  );
}
