'use client';

import React from 'react';
import { Alert24Regular } from '@fluentui/react-icons';
import { Button } from '@fluentui/react-components';
import { useRouter } from 'next/navigation';

export const NotificationIndicator = () => {
  const router = useRouter();
  const onNotificationClick = (e: any) => {
    router.push('/notification');
  };
  return (
    <Button
      onClick={onNotificationClick}
      icon={<Alert24Regular />}
      aria-label="Notification"
      appearance="subtle"
    />
  );
};
