type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">{eyebrow}</p>}
      <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-brand-ink sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-brand-ink/68">{text}</p>}
    </div>
  );
}
