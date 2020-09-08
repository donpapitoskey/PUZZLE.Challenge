import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import client from './services/apollo';
import { ApolloProvider } from 'react-apollo';

const store = generateStore();



const WithStore = () => <Provider store={store}><App /></Provider>
const WithApollo = () => <ApolloProvider client={client}><WithStore /></ApolloProvider>

ReactDOM.render(
  <React.StrictMode>
    <WithApollo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
