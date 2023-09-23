import { MasterHeader } from '../Components/MasterHeader/MasterHeader';
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './styles.css';
import { TextareaAutosize } from '@mui/material';

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

export const Form = () => {
  return (
    <>
      <MasterHeader title="Formularz" />
      <div className="form-page-container">
        <h2>ZAMÓWIENIE PRODUKTU</h2>
        <form action="" method="post" className="form-container">
          <label htmlFor="products">
            <p>Wybier produkty*</p>
            <select name="products">
              <option value="frontend">Kurs front-end</option>
              <option value="backend">Kurs back-end</option>
            </select>
          </label>
          <label htmlFor="payments">
            <p>Wybierz formę płatności*</p>
            <RadioGroup name="use-radio-group" defaultValue="first">
              <MyFormControlLabel
                value="blik"
                label="Blik"
                control={<Radio />}
              />
              <MyFormControlLabel
                value="paypal"
                label="PayPal"
                control={<Radio />}
              />
              <MyFormControlLabel
                value="przelew tradycyjny"
                label="Przelew tradycyjny"
                control={<Radio />}
              />
            </RadioGroup>
          </label>
          <label htmlFor="additional">
            <p>Opcje dodatkowe do zamówienia*</p>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Ustawienia środowiska"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Intro do GitHub"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Materiały dodatkowe"
              />
            </FormGroup>
          </label>
          <h2>DANE DO REALIZACJI ZAMÓWIENIA</h2>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
              display: 'flex',
              flexDirection: 'column',
              width: 500,
              maxWidth: '100%',
            }}
            noValidate
            autoComplete="off"
          >
            <p>Imię i nazwisko*</p>
            <TextField
              id="name-surname"
              label=""
              placeholder="Wpisz swoje imię i nazwisko"
              variant="outlined"
            />
            <p>Twój pseudonim*</p>
            <TextField
              id="nick"
              label=""
              placeholder="Wpisz swój pseudonim"
              variant="outlined"
            />
            <p>Adres do wysyłki*</p>
            <TextField
              id="adress"
              label=""
              placeholder="Podaj adres, na który wyślamy zamówienie"
              variant="outlined"
            />
            <p>Adres e-mail*</p>
            <TextField
              id="email"
              label=""
              placeholder="jan.kowalski@gmail.com"
              variant="outlined"
            />
            <p>Numer kontaktowy*</p>
            <TextField
              id="phone"
              label=""
              placeholder="+48 888 888 888"
              variant="outlined"
            />
          </Box>
          <p>Uwagi do zamówienia</p>
          <label htmlFor="unique-id">Label</label>
          <TextareaAutosize
            slotProps={{
              textarea: {
                id: 'unique-id',
              },
            }}
          />
        </form>
      </div>
    </>
  );
};
