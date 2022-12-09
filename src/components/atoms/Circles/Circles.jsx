import { memo } from 'react';
import styles from './Circles.module.scss'

export const Circles = memo(() => {
  return (
    <div className={styles.circles}>
        <div></div>
    </div>
  );
})
