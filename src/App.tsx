/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { Product } from './pages/Product';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Journal } from './pages/Journal';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="journal" element={<Journal />} />
        </Route>
      </Routes>
    </Router>
  );
}
