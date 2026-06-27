import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { navItems } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/78 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="text-sm font-semibold uppercase tracking-[0.28em] text-cloud">
          Adithya
        </a>
        <nav className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.18em] text-cloud/62 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-acid">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#admin"
            aria-label="Admin preview"
            className="grid h-10 w-10 place-items-center border border-line text-cloud/76 transition hover:border-acid hover:text-acid"
          >
            <LockKeyhole size={17} />
          </a>
          <a
            href="#contact"
            className="inline-flex h-10 items-center gap-2 border border-acid bg-acid px-4 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-cloud"
          >
            Connect
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </header>
  );
}

