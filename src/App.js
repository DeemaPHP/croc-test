import React, { useState } from "react";
import "./App.css";
import MultipleSelect from "./components/MultipleSelect";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const names = [
  { id: 1, name: "Петров Д.А", prof: "Бригадир" },
  { id: 2, name: "Сидоров Д.А", prof: "Бригадир" },
  { id: 3, name: "Иванов Д.А", prof: "Бригадир" },
  { id: 4, name: "Видишев Д.А", prof: "Бригадир" },
  { id: 5, name: "Видишев Д.А", prof: "Бригадир" },
  { id: 6, name: "Видишев Д.А", prof: "Бригадир" },
  { id: 7, name: "Видишев Д.А", prof: "Бригадир" },
  { id: 8, name: "Видишев Д.А", prof: "Бригадир" },
  { id: 9, name: "Видишев Д.А", prof: "Бригадир" },
  { id: 10, name: "Видишев Д.А", prof: "Бригадир" }
];

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#3C3C48",
      text: "#FFFFFF",
      focused: "#202128"
    },
    secondary: {
      main: "#00CD69"
    }
  }
});

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#F0F1F3",
      text: "#141719",
      focused: "#F0F1F3"
    },
    secondary: {
      main: "#FF5F1B"
    }
  }
});

function App() {
  const [selectedValues, setSelectedValues] = useState([]);

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <MultipleSelect
          values={names}
          selected={selectedValues}
          onChange={e => {
            setSelectedValues(e.target.value);
          }}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
