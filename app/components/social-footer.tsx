import { socialLinks } from "../data/portfolio-content";
import { GitHubIcon, ProtoPediaIcon, XIcon } from "./icons";

const icons = { x: XIcon, github: GitHubIcon, protopedia: ProtoPediaIcon };

function SocialLink({ label, icon, href }: (typeof socialLinks)[number]) {
  const Icon = icons[icon];
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}（別タブで開きます）`}
    >
      <Icon />
    </a>
  );
}

export function SocialFooter() {
  return (
    <footer className="social-footer" aria-label="SNS">
      <div className="social-footer__icons">
        {socialLinks.map((link) => (
          <SocialLink key={link.label} {...link} />
        ))}
      </div>
    </footer>
  );
}
