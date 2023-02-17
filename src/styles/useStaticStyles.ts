import { makeStaticStyles } from '@fluentui/react-components';

export const useStaticStyles = makeStaticStyles({
  body: {
    height: '100%',
    minHeight: '100%',
    maxWidth: '100vw',
    overflowX: 'hidden',
    fontFamily: 'Open Sans',
  },
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
});
