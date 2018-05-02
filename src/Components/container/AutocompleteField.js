import React from "react";
import Paper from "material-ui/Paper";
import { MenuItem } from "material-ui/Menu";
import Downshift from "downshift";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import data from "../../Data/cities";
import ages from "../../Data/ages";
import years from "../../Data/yearOfLiving";

const provinces = data.provinces;
const renderInput = inputProps => {
  const { InputProps, classes, ref, ...other } = inputProps;
  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
        },
        ...InputProps,
      }}
      label={InputProps.label}
      {...other}
      style={{ marginTop:8}}
    />
  );
};

const renderItem = (params, props) => {
  const {
    item,
    index,
    itemProps,
    highlightedIndex,
    selectedItem,
    onClick
  } = params;
  const isHighlighted = highlightedIndex === index;
  const isSelected = selectedItem === item;
  if (props.onClick) {
    return (
      <div
        key={item}
        onClick={() => {
          props.onClick(item);
        }}
      >
        <MenuItem
          {...itemProps}
          key={item}
          selected={isHighlighted}
          component="div"
          style={{
            fontWeight: isSelected ? 500 : 400,
          }}
        >
          {item}
        </MenuItem>
      </div>
    );
  } else {
    return (
      <MenuItem
        {...itemProps}
        key={item}
        selected={isHighlighted}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
           marginTop:6
        }}
      >
        {item}
      </MenuItem>
    );
  }
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
        result.push(city + " " + provinceName);
        if (result.length == 5) {
          return result;
        }
      }
    }
  }

  return result;
};

const getAges = inputValue => {
  let result = [];
  for (let i = 0; i < ages.length; i++) {
    if (!inputValue || ages.includes(inputValue)) {
      result.push(ages[i]);
    }
  }
  return result;
};

const getYears = inputValue => {
  let result = [];
  for (let i = 0; i < years.length; i++) {
    if (!inputValue || years.includes(inputValue)) {
      result.push(years[i]);
    }
  }
  return result;
};

const renderSelectionList = (inputValue, marker) => {
  if (marker === "age") {
    return getAges(inputValue);
  }
  if (marker === "loc") {
    return getCitys(inputValue);
  }
  if (marker === "year") {
    return getYears(inputValue);
  }
};

const autocompleteField = props => {
  const { classes, label, defaultValue, marker, id, ...rest } = props;

  return (
    <Downshift defaultSelectedItem={defaultValue}>
      {({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex
      }) => (
        <div className={classes.container} style={{ width: "100%" }}>
          {renderInput({
            fullWidth: true,
            classes,
            InputProps: getInputProps({
              label:label,
              id: id
            }),
            ...props.input
          })}
          {isOpen ? (
            <Paper square >
              {renderSelectionList(inputValue, marker).map((item, index) =>
                renderItem(
                  {
                    item,
                    index,
                    itemProps: getItemProps({ item }),
                    highlightedIndex,
                    selectedItem
                  },
                  props
                )
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