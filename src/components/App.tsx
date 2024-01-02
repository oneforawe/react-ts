import './App.scss';
import { DateTime } from './dateTime';
import { Weather } from './weather';
import { Counter } from './counter';
import * as helper from 'helper';
import logo from 'assets/logo.svg';


export const App: React.FC = () => {

  // Hooks
  helper.hooks.dateTime.useDateTimeState();
  helper.hooks.weather.useWeatherState({ 'city-name': 'San Francisco' });

  return (
    <div className="app">
      <div className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/components/App.tsx</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <div className="app-body">
        <DateTime />
        <Weather />
        <Counter />
      </div>
    </div>
  );
};
