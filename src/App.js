import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './molecules/Header';
import AllCountries from './organisms/AllCountries';
import Country from './organisms/Country';

export default function App() {
  const [ countries, setCountries ] = useState([]);
  const [ darkMode, setDarkMode ] = useState(false);
  document.body.style.backgroundColor = 'var(--color-bg)'
  !!darkMode && (document.body.style.backgroundColor = 'var(--color-bg-dark)');
  const countriesData = (e) => setCountries(e);
  const darkTheme = (e) => setDarkMode(e);
  return (
    <div>
      <div className={!!darkMode ? "dark-theme": ""}>
        <Header darkTheme={darkTheme}/>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/">
                <AllCountries countriesData={countriesData}/>
              </Route>
              <Route exat  path="/country/:name" children={<Country countries={countries}/>}></Route>
            </Switch>
          </Router>
        </div>
        </div>
    </div>
  );
}
