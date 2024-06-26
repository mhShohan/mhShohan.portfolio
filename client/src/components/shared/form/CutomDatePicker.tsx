import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { SxProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface IDatePicker {
  name: string;
  size?: 'small' | 'medium';
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

const CustomDatePicker = ({
  name,
  size = 'small',
  label,
  required,
  fullWidth = true,
  sx,
}: IDatePicker) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field }, fieldState: { error } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label={label}
              timezone='system'
              {...field}
              onChange={(date) => {
                onChange(new Date(date as any));
              }}
              value={dayjs(new Date(value))}
              inputRef={field.ref}
              slotProps={{
                textField: {
                  required: required,
                  size: size,
                  sx: {
                    ...sx,
                  },
                  variant: 'outlined',
                  fullWidth: fullWidth,
                  error: !!error?.message,
                  helperText: error?.message,
                },
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default CustomDatePicker;
