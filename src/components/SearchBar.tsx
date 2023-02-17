'use client';

import React, { ChangeEvent, useState } from 'react';
import { Input, InputOnChangeData, tokens } from '@fluentui/react-components';
import { Search24Regular, Dismiss24Regular } from '@fluentui/react-icons';

type Props = {
  className?: any;
}

export const SearchBar = (props: Props) => {
  const [query, setQuery] = useState('');

  const onChange = (
    ev: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData,
  ) => {
    setQuery(data.value);
  };

  const onClick = (e: any) => {
    console.log(e)
  }
  const clearQuery = () => setQuery('');

  const contentAfter =
    query === '' ? (
      <Search24Regular color={tokens.colorBrandForegroundLinkSelected} />
    ) : (
      <Dismiss24Regular
        onClick={clearQuery}
        color={tokens.colorPaletteRedBackground3}
      />
    );
  return (
    <>
      <Input
        placeholder="Find a setting"
        value={query}
        onChange={onChange}
        onClick={onClick}
        contentAfter={contentAfter}
        {...props}
      />
    </>
  );
};
