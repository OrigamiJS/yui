import { makeStyles, mergeClasses, tokens } from '@fluentui/react-components';
import React, { ReactNode } from 'react'

type Props = {
    children: JSX.Element | ReactNode;
}

export const Center = (props: Props) => {
    const styles = useCenterStyles();
    return (
        <div className={styles.root}>
            {props.children}
        </div>
    )
}

const useCenterStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});