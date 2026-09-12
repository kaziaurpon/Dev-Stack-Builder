const LINK_GROUPS = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-sm font-bold text-white">
                DS
              </span>
              <span className="text-lg font-bold text-slate-900">
                Dev <span className="text-gradient-brand">Stack</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              Curated tools, technologies, and resources for developers building modern
              software.
            </p>
            <div className="mt-5 flex gap-4 text-sm font-medium text-slate-500">
              <a href="https://github.com" className="group relative hover:text-slate-900">
                GitHub
                <span className="bg-gradient-brand absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="https://twitter.com" className="group relative hover:text-slate-900">
                Twitter
                <span className="bg-gradient-brand absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="https://linkedin.com" className="group relative hover:text-slate-900">
                LinkedIn
                <span className="bg-gradient-brand absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group relative text-sm text-slate-500 transition hover:text-slate-900"
                    >
                      {link}
                      <span className="bg-gradient-brand absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}