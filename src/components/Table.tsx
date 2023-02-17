'use client';

import React, { FC, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Spinner } from '@fluentui/react-components';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

type Props = {
  rowData: any[] | null | undefined;
  columnDefs: any[];
  overlay?: JSX.Element;
};

const themes = {
  alpine: 'ag-theme-alpine',
  dark: 'ag-theme-alpine-dark',
};

export const AgGridTable: FC<Props> = ({ rowData, columnDefs, ...props }) => {
  const lightTheme = useSelector((state: RootState) => state.theme.lightTheme);
  const theme = lightTheme ? themes.alpine : themes.dark;
  const loadingOverlayComponent = useMemo(() => {
    return Spinner;
  }, []);
  return (
    /**
     * TODO!: Fix received state;
     * theme always receive defered theme state;
     * !theme is used to sync in theme state;
     */
    <div className={theme} style={{ height: 600, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        paginationPageSize={12}
        loadingOverlayComponent={loadingOverlayComponent}
        noRowsOverlayComponent={loadingOverlayComponent}
        enableCellChangeFlash={true}
        pagination
        {...props}
      />
    </div>
  );
};
