import { MenuItem, SxProps, TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface ITextField {
  name: string;
  size?: 'small' | 'medium';
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
  items: { name: string; value: string }[];
}

const CustomSelectField = ({
  items,
  name,
  label,
  size = 'small',
  required,
  fullWidth = true,
  sx,
}: ITextField) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{
            ...sx,
          }}
          size={size}
          select
          color='secondary'
          label={label}
          required={required}
          fullWidth={fullWidth}
          error={isError}
          helperText={isError ? (formState.errors[name]?.message as string) : ''}
        >
          {items.map((item) => (
            <MenuItem key={item.name} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default CustomSelectField;
