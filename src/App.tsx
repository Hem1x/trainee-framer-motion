import 'locomotive-scroll/dist/locomotive-scroll.css';

import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import GlobalStyles from './styles/GlobalStyles';
import { dark } from './styles/Themes';
import Home from './sections/Home';
import About from './sections/About';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Shop from './sections/Shop';
import Arrival from './sections/Arrival';
import MainLayout from './MainLayout';

const App = () => {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}>
          <main
            data-scroll-container
            className="App"
            ref={containerRef}>
            <AnimatePresence>
              <NavBar />
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}>
                <Routes>
                  <Route path="/" element={<MainLayout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="arrival" element={<Arrival />} />
                  </Route>
                </Routes>
              </motion.div>
            </AnimatePresence>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
