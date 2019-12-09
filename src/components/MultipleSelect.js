import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";

import "./MultipleSelect.css";

const useStyles = makeStyles(theme => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: 4
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      outline: "1px solid slategrey",
      height: 30,
      fontFamily: "Rubik"
    }
  },
  formControl: {
    margin: theme.spacing(2),
    width: 336,

    color: theme.palette.primary.text,
    "&:hover": {
      "& $icon": {
        color: theme.palette.secondary.main
      }
    }
  },
  selectEmpty: {
    color: theme.palette.primary.text,
    height: 48,
    backgroundColor: theme.palette.primary.main
  },
  dropDown: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.text,
    marginTop: 52,
    width: 336,

    maxHeight: 236
    // boxShadow: `inset 0px -50px 54px -40px #fff`
  },
  menuItem: {
    borderBottom: "solid 1px black",
    height: 40
  },
  listItem: {
    display: "flex",
    width: "100%",
    fontSize: "12px !important",
    justifyContent: "space-between"
  },
  additionalInfo: {
    display: "flex",
    justifyContent: "flex-end",
    opacity: 0.4
  },
  icon: {
    color: theme.palette.primary.text
  },
  placeholder: {
    margin: 0,
    textAlign: "left",
    paddingLeft: 16
  },
  chip: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.text,
    minHeight: 24,
    display: "flex",
    alignItems: "center",
    margin: 2,
    borderRadius: 3,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      "& svg": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.main
      }
    }
  },
  checkbox: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 12
  },
  cardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#202128",
    marginTop: 4
  }
}));

const MultipleSelect = props => {
  const classes = useStyles();

  const [chips, setChips] = React.useState([...props.selected]);

  React.useEffect(() => {
    setChips(props.selected);
  }, [props.selected]);

  // console.log(chips);
  // console.log("props.values", props.selected);

  const handleDelete = e => {
    const { id } = e.target;
    chips.splice(id, 1);
    setChips([...chips]);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        IconComponent={ExpandMoreIcon}
        className={classes.selectEmpty}
        displayEmpty
        multiple
        inputProps={{
          classes: {
            icon: classes.icon
          }
        }}
        value={props.selected}
        onChange={props.onChange}
        renderValue={selected => {
          if (selected.length === 0) {
            return <p className={classes.placeholder}>{"Объект отчета"}</p>;
          }

          return (
            <p
              className={classes.placeholder}
            >{`Объект отчета (${selected.length})`}</p>
          );
        }}
        MenuProps={{ classes: { paper: classes.dropDown } }}
      >
        {props.values.map(value => (
          <MenuItem className={classes.menuItem} key={value.id} value={value}>
            <Checkbox
              value={value.id}
              checked={props.selected.indexOf(value) > -1}
              className={classes.checkbox}
            />
            <Box className={classes.listItem}>
              <ListItemText primary={value.name} />
              <ListItemText
                className={classes.additionalInfo}
                primary={value.prof}
              />
            </Box>
          </MenuItem>
        ))}
      </Select>

      <Paper className={classes.cardWrapper}>
        {chips.map(data => {
          return (
            <Chip
              key={data.id}
              label={data.name}
              onDelete={handleDelete}
              className={classes.chip}
            />
          );
        })}
      </Paper>
    </FormControl>
  );
};

export default MultipleSelect;
