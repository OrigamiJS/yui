'use client';

import { makeStyles, Spinner } from '@fluentui/react-components';

export const Loading = () => {
  const styles = useSpinnerStyles();
  return (
    <div className={styles.root}>
      <Spinner size="extra-large" />
    </div>
  );
};

const useSpinnerStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
