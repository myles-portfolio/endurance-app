import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import "./globals.css";
import { AppSidebar } from "./app-sidebar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider
			appearance={{
				baseTheme: dark,
			}}
		>
			<html lang="en" className="dark">
				<body>
					<header>
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</header>
					<SidebarProvider>
						<AppSidebar />
						<main>
							<SidebarTrigger />
							{children}
						</main>
					</SidebarProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
