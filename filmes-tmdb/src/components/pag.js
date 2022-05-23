import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const BasicPag = (props) => {
  return (
    <Stack spacing={2}>
      <Pagination color={props.color} count={props.count} onChange={props.onChange} size="large" />
    </Stack>
  );
}