import Layout from '../app/layout/layout'
import { Protect } from '../app/layout/protect'

import store from '../app/store'
import { Provider } from 'react-redux'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp
