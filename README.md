Follow these steps to download it :
1. Download by writing the following command in your terminal:
npm install react-theme-switcher-ps or yarn install react-theme-switcher-ps 
// import the necessary files 
2.Import the following in your file declaration:
 import { ThemeSwitcher, ThemeProvider } from "react-theme-switcher-ps";
Use global  the following :
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;
