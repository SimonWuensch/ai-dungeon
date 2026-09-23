import {useEffect, useState} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './RawContentModal.module.css';

type RawContentModalProps = {
  /** File name (without extension) under site/static/downloads/skills/. */
  slug: string;
  open: boolean;
  onClose: () => void;
};

/** A dialog that fetches and shows the raw, portable Markdown source of one skill. */
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

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={`Rohtext: ${slug}`}
        onClick={(e) => e.stopPropagation()}>
        <div className={styles.dialogHeader}>
          <span className={styles.dialogTitle}>{slug}.md</span>
          <button className={styles.closeButton} onClick={onClose} aria-label="Schließen">
            ✕
          </button>
        </div>
        <div className={styles.dialogBody}>
          {error && <p>Konnte den Rohtext nicht laden.</p>}
          {!error && content === null && <p>Lädt …</p>}
          {content !== null && <pre className={styles.pre}>{content}</pre>}
        </div>
      </div>
    </div>
  );
}
