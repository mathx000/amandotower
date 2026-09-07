import type { SVGProps } from "react";

// Minimal hand-drawn SVG icon set used across the site
type IconProps = { className?: string };

function base(
  props?: Partial<SVGProps<SVGSVGElement>>,
): SVGProps<SVGSVGElement> {
  return {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    ...props,
  };
}

export function IconArrowRight({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconChevronDown({ className = "w-3.5 h-3.5" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconMenu({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconPaintRoller({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <rect x="3" y="4" width="12" height="6" rx="1.5" />
      <path d="M9 10v4" />
      <rect x="7" y="14" width="4" height="6" rx="1" />
    </svg>
  );
}

export function IconLayers({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

export function IconHammer({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M14 7l3-3 4 4-3 3" />
      <path d="M14.5 9.5L5 19l-2-2 9.5-9.5" />
      <path d="M12 6l3 3" />
    </svg>
  );
}

export function IconTile({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}

export function IconHome({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 9.5V20h12V9.5" />
    </svg>
  );
}

export function IconStar({ className = "w-7 h-7" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2L6.6 19.3l1.3-6-4.6-4.1 6.1-.6L12 3z" />
    </svg>
  );
}

export function IconShield({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconRuler({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M3 16l5-5 3 3 5-5 5 5" transform="translate(-1 3)" />
      <rect x="3" y="14" width="18" height="6" rx="1" />
      <path d="M7 14v2M11 14v3M15 14v2" />
    </svg>
  );
}

export function IconCalendar({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

export function IconUsers({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M15.5 14a5 5 0 0 1 4.5 6" />
    </svg>
  );
}

export function IconCheckCircle({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.3l2.3 2.3 4.7-5" />
    </svg>
  );
}

export function IconPhone({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M5 4h3l2 5-2.2 1.6a11 11 0 0 0 5.6 5.6L15 14l5 2v3c0 1.1-.9 2-2 2C9.6 21 3 14.4 3 6c0-1.1.9-2 2-2z" />
    </svg>
  );
}

export function IconMail({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function IconMapPin({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function IconClock({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconWhatsapp({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M7 17l-3.5 1L4.5 15A8 8 0 1 1 7 17z" />
      <path d="M9 10c0 3 2.5 5.5 5.5 5.5.6 0 1-.5 1-1v-1l-2-.7-1 1c-1.2-.6-2.1-1.5-2.7-2.7l1-1-.7-2H9z" />
    </svg>
  );
}

export function IconClipboard({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <rect x="9" y="2.5" width="6" height="3" rx="1" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}

export function IconFacebook({ className = "w-4.5 h-4.5" }: IconProps) {
  return (
    <svg className={className} {...base({ strokeWidth: 1.4 })}>
      <path d="M14 21v-7h2.5l.5-3H14V9.2c0-.9.3-1.5 1.6-1.5H17V5.1C16.7 5 15.7 5 14.6 5 12.3 5 10.7 6.4 10.7 9v2H8v3h2.7v7H14z" />
    </svg>
  );
}

export function IconInstagram({ className = "w-4.5 h-4.5" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function IconLinkedin({ className = "w-4.5 h-4.5" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5V17M8 7.5v.01" />
      <path d="M12 17v-4c0-1.2.9-2 2-2s2 .8 2 2v4" strokeLinecap="round" />
    </svg>
  );
}

export function IconPaperclip({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} {...base()}>
      <path d="M8 12l6-6a3 3 0 1 1 4 4l-8 8a5 5 0 1 1-7-7l7-7" />
    </svg>
  );
}
