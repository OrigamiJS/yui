import React, { ReactNode } from 'react'
import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';
import { useHorizontalStyles, useGapStyles, useVerticalStyles } from 'src/styles';

type Justify = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';

type Props = {
    children: JSX.Element | ReactNode;
    justify: Justify;
    spacingTop?: any;
    spacingBottom?: any;
    spacingLeft?: any;
    spacingRight?: any;
    pageProps?: any;
    gap?: any;
}

export const Flex = (props: Props) => {
    const styles = useFlexStyles();
    const vertical = useVerticalStyles();
    const classNames = mergeClasses(
        styles.root,
        // TODO: Fix type error
        // styles[props.justify],
        props.justify === 'space-between' && styles.spacebetween,
        props.spacingTop === 'M' && vertical.paddingTopM,
        props.spacingBottom === 'M' && vertical.paddingBottomM,
        // TODO: Add more flex styles
    )
    return (
        <div className={classNames}>
            {props.children}
        </div>
    )
};

const useFlexStyles = makeStyles({
    root: {
        display: 'flex',
    },
    spacebetween: {
        justifyContent: 'space-between',
    },
})