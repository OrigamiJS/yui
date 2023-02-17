import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useStackLayoutStyles = makeStyles({
    root: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    container: {
        display: "flex",
        flexGrow: "1",
        overflowY: 'auto',
        backgroundColor: tokens.colorSubtleBackgroundInvertedHover,
    },
    navbar: {
        zIndex: '1',
        // Keep Navbar in position on page scroll
        position: 'sticky',
        top: 0,
        // 
        ...shorthands.padding(
            tokens.spacingVerticalSNudge,
            tokens.spacingHorizontalXXXL
        ),
        boxShadow: tokens.shadow2,
    },
    aside: {
        width: "20%",
        backgroundColor: tokens.colorNeutralBackground1,
        ...shorthands.padding(
            tokens.spacingVerticalM,
            tokens.spacingHorizontalXXXL
        ),
        ...shorthands.borderRight(
            "1px",
            "solid",
            tokens.colorNeutralBackground5
        ),
    },
    main: {
        display: 'flex',
        width: '100%',
        overflowY: 'auto',
        backgroundColor: tokens.colorNeutralBackground2,
        ...shorthands.padding(
            tokens.spacingVerticalNone,
            tokens.spacingHorizontalXXXL
        ),
    },
    colorPrimary: {
        backgroundColor: tokens.colorNeutralBackground1,
    },
    colorSecondary: {
        backgroundColor: tokens.colorNeutralBackground2,
    },
    fluid: {
        width: '100%',
    },
    center: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    }
});
