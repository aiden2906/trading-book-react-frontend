import './App.css';
import Routes from './components/routes/Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Layout } from 'antd';


function App() {
  return (
    <Router>
      <Layout>
          <Header></Header>
          <Switch>
            <Route component={Routes} />
          </Switch>
          <Footer></Footer>
      </Layout>
    </Router>
  );
}

export default App;
