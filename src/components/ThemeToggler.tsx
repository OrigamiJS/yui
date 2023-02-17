'use client';

import { FC } from 'react';
import { ToggleButton } from '@fluentui/react-components';
import {
  WeatherSunny24Regular,
  WeatherMoon24Regular,
} from '@fluentui/react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { toggleTheme } from 'store/slices';

export const ToggleTheme: FC = () => {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state: RootState) => state.theme.lightTheme);

  return (
    <ToggleButton
      appearance="transparent"
      icon={lightTheme ? <WeatherSunny24Regular /> : <WeatherMoon24Regular />}
      onClick={() => dispatch(toggleTheme())}
    />
  );
};
