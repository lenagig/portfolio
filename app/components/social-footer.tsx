import { socialLinks } from "../data/portfolio-content";
import { GitHubIcon, ProtoPediaIcon, XIcon } from "./icons";

const icons = { x: XIcon, github: GitHubIcon, protopedia: ProtoPediaIcon };

function SocialIcon({ label, icon }: (typeof socialLinks)[number]) {
  const Icon = icons[icon];
  return (
    <span className="social-icon" role="img" aria-label={label}>
      <Icon />
    </span>
  );
}

export function SocialFooter() {
  return (
    <footer className="social-footer" aria-label="SNS">
      <div className="social-footer__icons">
        {socialLinks.map((link) => (
          <SocialIcon key={link.label} {...link} />
        ))}
      </div>
    </footer>
  );
}
