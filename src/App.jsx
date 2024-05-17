
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './layot/Header';
import Footer from './layot/Footer';
import Content from './layot/Content';
import {CatalogContextProvider} from './catalog/Context';

export default function App() {
    return (
        <Router>
            <Header />
            <CatalogContextProvider>
                <Content />
            </CatalogContextProvider>
            <Footer />
        </Router>
    );
}
