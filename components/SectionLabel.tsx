type Props = {
  children: string;
  id?: string;
  className?: string;
};

/** Uppercase eyebrow label (binyam-style section headers) */
export function SectionLabel({ children, id, className = "" }: Props) {
  return (
    <h2
      id={id}
      className={`font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent ${className}`}
    >
      {children}
    </h2>
  );
}
