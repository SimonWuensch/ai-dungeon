import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './DownloadAllButton.module.css';

/** Single global button: downloads every adapted skill as one ZIP (one SKILL.md per skill, in its own folder). */
export default function DownloadAllButton() {
  const downloadUrl = useBaseUrl('/downloads/skills-alle.zip');
  return (
    <a className={styles.button} href={downloadUrl} download>
      📦 Alle 17 angepassten Skills herunterladen (ZIP)
    </a>
  );
}
