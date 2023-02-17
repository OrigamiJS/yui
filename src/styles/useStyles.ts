import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
  },
  vertical: {
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
  },
  aside: {
    width: '20%',
    ...shorthands.padding(
      tokens.spacingVerticalM,
      tokens.spacingHorizontalXL,
      tokens.spacingVerticalNone,
      tokens.spacingHorizontalXXXL,
    ),
    ...shorthands.borderRight('1px', 'solid', tokens.colorNeutralBackground5),
  },
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
  },
  main: {
    height: '100%',
  },
  fluid: {
    width: '100%',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  horizontal: {
    flexDirection: 'column',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    ...shorthands.padding(
      tokens.spacingVerticalM,
      tokens.spacingHorizontalNone,
    ),
  },
  form: {
    display: 'flex',
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    ...shorthands.padding(tokens.spacingHorizontalXXXL),
    ...shorthands.gap(tokens.spacingHorizontalS),
  },
  panel: {
    width: '100%',
    height: '100%',
    ...shorthands.padding(
      tokens.spacingVerticalS,
      tokens.spacingHorizontalXXXL,
      tokens.spacingVerticalNone,
      tokens.spacingHorizontalXL,
    ),
  },
  breadcrumb: {
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralBackground5),
  },
  viewport: {
    width: '100vw',
    height: '100vh',
  }
});

export const useOverrides = makeStyles({
  field: {
    '> *': {
      width: '100%',
    },
  },
  fluid: {
    width: '100%',
  },
});
