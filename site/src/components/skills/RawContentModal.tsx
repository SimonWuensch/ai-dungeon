import {useEffect, useMemo, useState} from 'react';
import {marked} from 'marked';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './RawContentModal.module.css';

type RawContentModalProps = {
  /** File name (without extension) under site/static/downloads/skills/. */
  slug: string;
  open: boolean;
  onClose: () => void;
};

/** Strips a leading YAML frontmatter block (--- ... ---) so the reading view starts at the title. */
function stripFrontmatter(md: string): string {
  const match = md.match(/^---\n[\s\S]*?\n---\n+/);
  return match ? md.slice(match[0].length) : md;
}

/** A dialog that fetches and shows the raw, portable Markdown source of one skill, nicely rendered. */
export default function RawContentModal({slug, open, onClose}: RawContentModalProps) {
  const rawUrl = useBaseUrl(`/downloads/skills/${slug}.md`);
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!open) return;
    setContent(null);
    setError(false);
    fetch(rawUrl)
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.text();
      })
      .then(setContent)
      .catch(() => setError(true));
  }, [open, rawUrl]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const html = useMemo(() => {
    if (content === null) return '';
    return marked.parse(stripFrontmatter(content), {breaks: false}) as string;
  }, [content]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={`Skill-Inhalt: ${slug}`}
        onClick={(e) => e.stopPropagation()}>
        <div className={styles.dialogHeader}>
          <span className={styles.dialogTitle}>{slug}.md</span>
          <span className={styles.dialogHeaderActions}>
            <a className={styles.downloadButton} href={rawUrl} download>
              Herunterladen ↓
            </a>
            <button className={styles.closeButton} onClick={onClose} aria-label="Schließen">
              ✕
            </button>
          </span>
        </div>
        <div className={styles.dialogBody}>
          {error && <p>Konnte den Inhalt nicht laden.</p>}
          {!error && content === null && <p>Lädt …</p>}
          {content !== null && (
            <div className={styles.rendered} dangerouslySetInnerHTML={{__html: html}} />
          )}
        </div>
      </div>
    </div>
  );
}
