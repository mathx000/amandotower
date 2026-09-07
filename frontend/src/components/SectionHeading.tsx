type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl mb-12 ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="eyebrow text-xs text-gold-dark tracking-[0.2em] mb-3">
          {eyebrow.toUpperCase()}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl mb-4">{title}</h2>
      <span
        className={`block w-14 h-0.5 bg-gold mb-4 ${isCenter ? "mx-auto" : ""}`}
      />
      {subtitle && <p className="text-stone leading-relaxed">{subtitle}</p>}
    </div>
  );
}
