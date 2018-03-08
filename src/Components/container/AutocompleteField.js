import React from "react";
import Paper from "material-ui/Paper";
import { MenuItem } from "material-ui/Menu";
import Downshift from "downshift";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import data from "../../Data/cities";

const provinces = data.provinces;

const renderInput = inputProps => {
  const { InputProps, classes, ref, ...other } = inputProps;
  console.log(inputProps)
  return (
    <TextField
      {...other}
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...InputProps
      }}
    />
  );
};

const renderCity = params => {
  const { city, index, itemProps, highlightedIndex, selectedItem } = params;
  const isHighlighted = highlightedIndex === index;
  const isSelected = selectedItem === city;

  return (
    <MenuItem
      {...itemProps}
      key={city}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {city}
    </MenuItem>
  );
};

const getCitys = inputValue => {
  let result = [];
  for (let i = 0; i < provinces.length; i++) {
    let province = provinces[i];
    let provinceName = province.provinceName;
    for (let j = 0; j < province.citys.length; j++) {
      let city = province.citys[j];
      if (
        !inputValue ||
        city.toLowerCase().includes(inputValue.toLowerCase())
      ) {
        result.push(city+ " " + provinceName);
        if (result.length == 5) {
          return result;
        }
      }
    }
  }

  return result;
};

const autocompleteField = props => {
  const { classes } = props;
  return (
    <Downshift>
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex
      }) => (
        <div className={classes.container} style={{width:"100%"}}>
          {renderInput({
            fullWidth: true,
            classes,
            InputProps: getInputProps({
              placeholder: "输入城市，按提示列表选择",
              id: "integration-downshift"
            }),
            ...props.input
          })}
          {isOpen ? (
            <Paper square>
              {getCitys(inputValue).map((city, index) =>
                renderCity({
                  city,
                  index,
                  itemProps: getItemProps({ item: city }),
                  highlightedIndex,
                  selectedItem
                })
              )}
            </Paper>
          ) : null}

          <div className="input-error">
            {props.meta.touched && props.meta.error}
          </div>
        </div>
      )}
    </Downshift>
  );
};

export default autocompleteField;
