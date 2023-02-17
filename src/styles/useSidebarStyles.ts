import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useSidebarStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
  },
  nav: {
    ...shorthands.padding(
      tokens.spacingVerticalSNudge,
      tokens.spacingHorizontalXXXL,
    ),
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralBackground5),
  },
  breadcrumb: {
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralBackground5),
  },
  aside: {
    width: '20%',
    backgroundColor: tokens.colorNeutralBackground3Hover,
    ...shorthands.padding(
      tokens.spacingVerticalM,
      tokens.spacingHorizontalXL,
      tokens.spacingVerticalNone,
      tokens.spacingHorizontalXXXL,
    ),
    ...shorthands.borderRight('1px', 'solid', tokens.colorNeutralBackground5),
  },
  main: {
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground3Pressed,
    ...shorthands.padding(tokens.spacingVerticalNone),
  },
  container: {
    display: 'flex',
    flexGrow: '1',
  },
  children: {
    ...shorthands.padding(
      tokens.spacingVerticalM,
      tokens.spacingHorizontalXXXL,
      tokens.spacingVerticalNone,
      tokens.spacingHorizontalXL,
    ),
  },
});
