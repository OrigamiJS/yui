'use client';

import React from 'react';
import Image from 'next/image';
import {
  Alert24Regular,
  WeatherMoon24Regular,
  WeatherSunny24Regular,
} from '@fluentui/react-icons';
import {
  Avatar,
  Button,
  Link,
  makeStyles,
  ToggleButton,
} from '@fluentui/react-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'store/slices';
import { RootState } from 'store/store';
import { UserAvatar } from './Avatar';

type Props = {
  logo: any;
};

export const Navbar = ({logo}: Props) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { lightTheme } = useSelector((state: RootState) => state.theme);

  const toggle = () => dispatch(toggleTheme());
  return (
    <>
      <div className={styles.root}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo BPJS Kesehatan" width={220} height={40} />
        </div>
        <div className={styles.menu}>
          <div className={styles.item}>
            <Link
              href="https://pusatbantuan-kcjakpus.netlify.app/"
              target={'_blank'}
            >
              Pusat Bantuan
            </Link>
          </div>
          <div className={styles.item}>
            <Button
              icon={<Alert24Regular />}
              aria-label="Notification"
              appearance="subtle"
              onClick={toggle}
            />
            <ToggleButton
              appearance="transparent"
              icon={
                lightTheme ? (
                  <WeatherSunny24Regular />
                ) : (
                  <WeatherMoon24Regular />
                )
              }
              onClick={toggle}
            />
            <UserAvatar />
          </div>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    width: '15%',
    height: '100%',
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
});
