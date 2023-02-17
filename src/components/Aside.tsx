'use client';

import {
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
  TabValue,
} from '@fluentui/react-components';
import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTabStyles } from 'src/styles/useTabStyles';
import { useSession } from 'next-auth/react';

export type TabItem = {
  value: string;
  label: string;
  roles: string[];
};

type Props = {
  tabItem: TabItem[];
};

export const Aside = ({ tabItem }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const styles = useTabStyles();
  
  const [selectedValue, setSelectedValue] = React.useState<TabValue>('');
  const { data: session } = useSession();

  const role = session?.role as string;

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
    router.push(data.value as string);
  };

  const filteredTab = tabItem.filter((tab: TabItem) =>
    tab.roles.includes(role),
  );

  // Reset Tab State if segment is empty
  useEffect(() => {
    setSelectedValue(pathname ?? undefined);
  }, [pathname]);
  return (
    <TabList
      selectedValue={selectedValue}
      onTabSelect={onTabSelect}
      size={'large'}
      vertical
    >
      {filteredTab?.map((tab: TabItem) => (
        <Tab value={tab.value} key={tab.value} className={styles.tab}>
          {tab.label}
        </Tab>
      ))}
    </TabList>
  );
};
