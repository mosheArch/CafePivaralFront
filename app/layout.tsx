import './globals.css';
import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Café Pivaral - Café Artesanal de Alta Calidad',
  description: 'Descubre el auténtico sabor del café artesanal de Café Pivaral',
};

function Footer() {
  return (
    <footer className="bg-[#8B0000] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 Café Pivaral. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#FFF5F5]`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
