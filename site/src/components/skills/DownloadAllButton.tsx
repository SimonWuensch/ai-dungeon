import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './DownloadAllButton.module.css';

/** Single global button: downloads every Atruvia-adapted skill as one ZIP (one .md file per skill, in a folder). */
export default function DownloadAllButton() {
  const downloadUrl = useBaseUrl('/downloads/atruvia-skills-alle.zip');
  return (
    <a className={styles.button} href={downloadUrl} download>
      📦 Alle 17 angepassten Skills herunterladen (ZIP)
    </a>
  );
}
