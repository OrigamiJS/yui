import { makeStyles, tokens } from '@fluentui/react-components';
import React, { ReactNode } from 'react'

type Props = {
    children: JSX.Element | ReactNode;
    pageProps?: any;
}

export const Box = (props: Props) => {
    const styles = useBoxStyles();
    return (
        <div className={styles.root}>{props.children}</div>
    )
}

const useBoxStyles = makeStyles({
    root: {
        width: '100%',
    }
});