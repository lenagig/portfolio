import { navigationItems } from "../data/portfolio-content";

export function SiteHeader() {
  return (
    <header className="site-header" id="top">
      <div className="site-header__inner">
        <a className="site-header__wordmark" href="#top" aria-label="Lena のページ先頭">
          LENA
        </a>
        <nav className="site-navigation" aria-label="ページ内ナビゲーション">
          {navigationItems.map((item) => (
            <a className="site-navigation__link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
