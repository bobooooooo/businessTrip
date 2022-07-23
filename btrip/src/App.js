import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import Database from './Database';
import { ref, set, get, update, remove, child} from 'firebase/database';


function App() {
  const [database, setdatabase] = useState(Database());


  // useEffect(() => {
  //   document.body.classList.add(
  //     'd-flex',
  //     'flex-column',
  //     'min-vh-100',
  //   );
  // }, [])

  return (
    <Layout>
      <div>
        <code>
          {/* <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre> */}
        </code>
      </div>
      <Header></Header>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
