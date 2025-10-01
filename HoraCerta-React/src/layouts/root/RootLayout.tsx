import Header from '../../components/layout/header/Header';
import Sidebar from '../../components/layout/sidebar/Sidebar';
import Footer from '../../components/layout/footer/Footer';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {

    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>

            <header>
                <Header />
            </header>

            <div style={{ display: "flex", flex: 1 }}>

                <aside>
                    <Sidebar />
                </aside>

                {/* Renderiza o conteúdo da rota filha */}
                <main style={{ flex: 1, padding: "1rem" }}>
                    <Outlet />
                </main>
            </div>

            
            <footer>
                <Footer />
            </footer>
        </div>
    );
}