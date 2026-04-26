import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

export function MarkdownContent({ content }: Props) {
  return (
    <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-ink prose-p:text-ink-muted prose-a:text-accent prose-strong:text-ink prose-li:text-ink-muted prose-code:rounded prose-code:bg-surface-muted prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-pre:bg-ink prose-pre:text-surface-elevated">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
