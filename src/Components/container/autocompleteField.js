import React from "react";
import "react-widgets/dist/css/react-widgets.css";
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import Downshift from 'downshift';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import data from './data';

const citys = data.provinces[0].citys
console.log('citys',citys);

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;
  console.log('inputProps', inputProps)
  return (
    <TextField
      {...other}
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...InputProps,
      }}
    />
  );
}

function renderCity(params) {
  const { city, index, itemProps, highlightedIndex, selectedItem } = params;
  const isHighlighted = highlightedIndex === index;
  const isSelected = selectedItem === city.citysName;

  return (
    <MenuItem
      {...itemProps}
      key={city.citysName}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {city.citysName}
    </MenuItem>
  );
}

function getCitys(inputValue) {
  let count = 0;

  return citys.filter(city => {
    const keep =
      (!inputValue || city.citysName.toLowerCase().includes(inputValue.toLowerCase())) &&
      count < 5;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

const autocompleteField= (props) =>{
  const { classes } = props;
  return (
   <Downshift
     onChange={selectedItem => props.input.onChange(selectedItem.cityName) }>
      {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
        <div className={classes.container}>

          {renderInput({
            fullWidth: true,
            classes,
            InputProps: getInputProps({
              placeholder: 'Search a city',
              id:'integration-downshift',
            }),
            ...props.input
          })}
          {isOpen ? (
            <Paper square>
              {getCitys(inputValue).map((city, index) =>
                renderCity({
                  city,
                  index,
                  itemProps: getItemProps({ item: city.citysName }),
                  highlightedIndex,
                  selectedItem,
                }),
              )}
            </Paper>
          ) : null}
        </div>
      )}
    </Downshift>
  );
}


export default autocompleteField;