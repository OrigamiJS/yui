import { makeStyles, tokens } from "@fluentui/react-components";

export const useTabStyles = makeStyles({
    root: {
    },
    tab: {
        "[aria-selected='true']": {
            backgroundColor: tokens.colorNeutralBackground1Selected,
        },
        ":hover": {
            backgroundColor: tokens.colorNeutralBackground1Hover,
        }
    },
    label: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    }
});
