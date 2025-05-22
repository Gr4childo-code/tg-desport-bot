'use client';

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
} from '@mui/material';
import React from 'react';
import { ModelTime } from './lib/time.mock';
import { CheckedCheckboxIcon, UncheckedCheckboxIcon } from '@/shared/Icons/CustomCheckbox';
import { useStore } from '@/shared/providers/StoreProvider';

const StyledButton = styled(({ $hasOpen, ...props }: { $hasOpen?: boolean }) => <Button {...props} />)(
  ({ theme, $hasOpen }) => ({
    padding: '20px 40px',
    borderRadius: '20px',
    color: theme.palette.common.white,
    backgroundColor: $hasOpen ? theme.palette.error.main : theme.palette.desportMain.main,
    width: '100%',
    fontFamily: 'GilroyBold',
    textTransform: 'none',
    fontSize: '1.2rem',
    height: '100%',
    maxHeight: '56px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  })
);

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'white',
    backdropFilter: 'blur(4px)',
  },
  '& .MuiDialog-container': {
    alignItems: 'flex-end',
  },
  '& .MuiDialog-paper': {
    marginBottom: '120px',
    boxShadow: theme.shadows[2],
    width: '100%',
    borderRadius: '20px',
  },
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: '30px',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontFamily: 'GilroyBold',
  fontSize: '1.2rem',
  color: theme.palette.desportMain.main,
  textTransform: 'uppercase',
  padding: '0',
}));
const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiTypography-root': {
    fontFamily: 'Gilroy',
    fontSize: '1rem',
    color: theme.palette.text.primary,
  },
}));

const ModalTime = () => {
  const { userStore } = useStore();
  const { user, setUserBreak } = userStore;

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string | null>(null);

  const handleModal = () => {
    if (open) {
      if (value) {
        setUserBreak(value);
      }
    }
    setOpen((prev) => !prev);
    setValue(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <StyledButton onClick={handleModal} $hasOpen={open}>
        {!open ? 'Создать перерыв' : 'Закрыть'}
      </StyledButton>

      <StyledDialog open={open} aria-labelledby="modal-title" role="dialog">
        <StyledDialogContent>
          <StyledDialogTitle>Мой перерыв</StyledDialogTitle>

          <FormControl>
            <RadioGroup value={value || ''} onChange={handleChange}>
              {ModelTime.map((item) => (
                <StyledFormControlLabel
                  key={item.label}
                  value={item.value}
                  control={<Radio checkedIcon={<CheckedCheckboxIcon />} icon={<UncheckedCheckboxIcon />} />}
                  label={item.label}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </StyledDialogContent>
      </StyledDialog>
    </>
  );
};

export default ModalTime;
