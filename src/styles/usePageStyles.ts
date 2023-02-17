import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const usePageStyles = makeStyles({
    fluid: {
        width: '100%',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        ...shorthands.padding(
            tokens.spacingVerticalM,
            tokens.spacingHorizontalNone,
        ),
    },
});
