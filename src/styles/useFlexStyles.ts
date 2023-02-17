import { makeStyles, mergeClasses, shorthands, tokens } from "@fluentui/react-components";

export const flex = makeStyles({
    root: {
        display: 'flex',
    },
    horizontal: {
        flexDirection: 'column',
    },
    gapM: {
        ...shorthands.gap(tokens.spacingVerticalM),
    }
});

export const useFlexStyles = () => {
    const styles = flex();
    const form = mergeClasses(styles.root, styles.horizontal, styles.gapM);
    return {
        form,
    }
}