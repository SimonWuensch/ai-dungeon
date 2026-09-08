import styles from './GeneratedImage.module.css';

type GeneratedImageProps = {
  /** Stable, greppable id — used as the filename once the real image exists. */
  id: string;
  /** Prompt to paste into an image generator (e.g. Nano Banana). */
  prompt: string;
  alt: string;
  /**
   * Once generated, drop the file at static/img/generated/<id>.png and pass
   * `src="/img/generated/<id>.png"` here to swap the placeholder for the real image.
   */
  src?: string;
};

/**
 * Placeholder for an illustration that still needs to be generated externally.
 * Keeps the id + prompt visible on the page so it's easy to find and swap later.
 */
export default function GeneratedImage({id, prompt, alt, src}: GeneratedImageProps) {
  if (src) {
    return <img className={styles.image} src={src} alt={alt} />;
  }

  return (
    <figure className={styles.placeholder}>
      <div className={styles.tagRow}>
        <span className={styles.badge}>🍌 Bild fehlt noch</span>
        <span className={styles.id}>{id}</span>
      </div>
      <p className={styles.prompt}>„{prompt}"</p>
    </figure>
  );
}
