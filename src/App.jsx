import { Outlet, useLocation } from 'react-router-dom'
import { HeaderContextProvider } from './contexts/HeaderContext';
import { LoaderContextProvider } from './contexts/LoaderContext';
import { FavoritesContextProvider } from './contexts/FavoritesContext';
import { PaginationContextProvider } from './contexts/PaginationContext';
import { ScrollContextProvider } from './contexts/ScrollContext';
import Header from './components/Global/Header'
import Footer from './components/Global/Footer'
import Loader from './components/Global/Loader';
import Hero from './components/Home/Hero';
import ArrowToTop from './components/Global/ArrowToTop';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { pathname } = useLocation()

  return (
    <div className="app">
      <LoaderContextProvider>
        <ScrollContextProvider>
          <FavoritesContextProvider>
            <PaginationContextProvider>

              <HeaderContextProvider>
                {pathname === "/" ? (
                  <div className="heroBanner">
                    <Header />
                    <Hero />
                  </div>
                ) : <Header isHome={false}/>}
              </HeaderContextProvider>
              
              <Loader />

              <Outlet />
            
              <Footer />
                
              <ArrowToTop />
        
            </PaginationContextProvider>
          </FavoritesContextProvider>
        </ScrollContextProvider>
      </LoaderContextProvider>
    </div>
  )
}

export default App
