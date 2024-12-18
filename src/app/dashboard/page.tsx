import { Button } from "@/components/ui/button";

export default function DashboardPage() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<header>
				<nav>
					<p>This is the nav.</p>
					<Button variant="outline">Manage Organization</Button>
				</nav>
			</header>
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
					<li className="mb-2">
						Get started by editing{" "}
						<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
							src/app/page.tsx
						</code>
						.
					</li>
					<li>Save and see your changes instantly.</li>
				</ol>

				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<Button variant="outline">Button 1</Button>
					<Button variant="default">Button 2</Button>
				</div>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<p>THIS IS THE FOOTER.</p>
			</footer>
		</div>
	);
}
