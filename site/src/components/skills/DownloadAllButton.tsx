import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './DownloadAllButton.module.css';

/** Single global button: downloads every Atruvia-adapted skill as one combined Markdown file. */
export default function DownloadAllButton() {
  const downloadUrl = useBaseUrl('/downloads/atruvia-skills-alle.md');
  return (
    <a className={styles.button} href={downloadUrl} download>
      📦 Alle 16 angepassten Skills herunterladen (eine Datei)
    </a>
  );
}
