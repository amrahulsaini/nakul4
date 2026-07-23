import { createRootRouteWithContext, HeadContent, Link, Outlet, Scripts, useRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logoAsset from "../assets/madras-book-logo.webp.asset.json";
import { SITE_NAME, WHATSAPP_URL, WHATSAPP_NUMBER } from "../lib/site";

function NotFoundComponent() {
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="max-w-md text-center">
        <p className="text-primary font-semibold">404</p>
        <h1 className="mt-2 text-3xl">Page not found</h1>
        <p className="mt-2 text-muted-foreground text-sm">The page you were looking for doesn't exist.</p>
        <Link to="/" className="btn-primary mt-6">Back to home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "root" }); }, [error]);
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again in a moment.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary mt-6">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: SITE_NAME },
      { name: "theme-color", content: "#0b0d17" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logoAsset.url, type: "image/webp" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800;900&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_NAME,
          url: "/",
          logo: logoAsset.url,
          sameAs: [],
          contactPoint: { "@type": "ContactPoint", telephone: "+916377523847", contactType: "customer service", areaServed: "IN", availableLanguage: ["en", "hi"] },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      activeProps={{ className: "text-foreground" }}
    >
      {label}
    </Link>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-background/75 border-b border-border/60">
      <div className="container-page flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2" aria-label={`${SITE_NAME} — home`}>
          <img src={logoAsset.url} alt={`${SITE_NAME} logo`} width={140} height={44} className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          <NavLink to="/" label="Home" />
          <NavLink to="/games" label="Platforms" />
          <NavLink to="/blog" label="Blog" />
          <NavLink to="/about" label="About" />
          <NavLink to="/faq" label="FAQ" />
          <NavLink to="/contact" label="Contact" />
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm !py-2 !px-4">Get ID</a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container-page py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoAsset.url} alt={`${SITE_NAME} logo`} width={160} height={50} className="h-11 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            {SITE_NAME} is India's trusted online cricket ID and betting book provider. Instant IDs on 30+ verified platforms, 24×7 WhatsApp support, and secure UPI deposits & withdrawals.
          </p>
          <p className="mt-3 text-xs text-muted-foreground">WhatsApp: <a className="hover:text-foreground" href={WHATSAPP_URL}>{WHATSAPP_NUMBER}</a></p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/games" className="hover:text-foreground">Platforms</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">WhatsApp Us</a></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-page py-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        <p>18+ only. Play responsibly. Available where permitted by local law.</p>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-[oklch(0.65_0.17_150)] text-white shadow-[0_10px_30px_-6px_oklch(0.60_0.20_150_/_0.55)] hover:scale-105 transition-transform"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.2-.5 0-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.3 5.2 4.6 3 1.3 3 .9 3.6.8.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4 0-.2-.3-.3-.6-.5zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
      </svg>
    </a>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
      <FloatingWA />
    </QueryClientProvider>
  );
}
