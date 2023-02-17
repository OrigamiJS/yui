'use client';

import { FC } from 'react';
import { Title1 } from '@fluentui/react-components';

interface Props {
  text: string;
}

export const Title: FC<Props> = ({ text }) => {
  return <Title1 block>{text}</Title1>;
};
