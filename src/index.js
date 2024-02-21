import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './first';
import Mid from './mid';
import MainMiddle from './mainmid';
import Unlock from './unlock';
import Approach from './approach';
import Supply from './protext';
import Stand from './standout';
import Footer from './footer';
import Last from './lastfooter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Heading/>
    <Mid/>
    <MainMiddle/>
    <Unlock/>
    <Approach/>
    <Supply/>
    <Stand/>
    <Footer/>
    <Last />
  </div>
);