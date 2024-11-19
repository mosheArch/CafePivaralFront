import Image from 'next/image';
import Link from 'next/link';
import { Coffee, Package, ShoppingBag } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      <section className="hero bg-[url('https://descubreenmexico.com/wp-content/uploads/2023/10/ca1.jpg')] bg-cover bg-center text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Descubre el Arte del Café Artesanal
          </h1>
          <p className="text-xl mb-8">
            Sabor auténtico, cuidadosamente elaborado para los amantes del café
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            El Café Artesanal: Una Experiencia Única
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="product-card">
              <h3 className="product-title">Selección Cuidadosa</h3>
              <p>
                Nuestros granos son seleccionados a mano, garantizando la más
                alta calidad en cada taza.
              </p>
            </div>
            <div className="product-card">
              <h3 className="product-title">Tostado Artesanal</h3>
              <p>
                Tostamos en pequeños lotes para resaltar los sabores únicos de
                cada origen.
              </p>
            </div>
            <div className="product-card">
              <h3 className="product-title">Frescura Garantizada</h3>
              <p>
                Enviamos nuestro café recién tostado para que disfrutes de su
                máximo sabor y aroma.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestro Proceso Artesanal
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <Coffee size={48} className="mx-auto mb-4 text-green-800" />
              <h3 className="text-xl font-semibold mb-2">Cultivo Sostenible</h3>
              <p>
                Trabajamos con pequeños productores que cuidan el medio
                ambiente.
              </p>
            </div>
            <div className="text-center">
              <Package size={48} className="mx-auto mb-4 text-green-800" />
              <h3 className="text-xl font-semibold mb-2">Tostado Perfecto</h3>
              <p>
                Cada lote es tostado con precisión para resaltar sus mejores
                cualidades.
              </p>
            </div>
            <div className="text-center">
              <ShoppingBag size={48} className="mx-auto mb-4 text-green-800" />
              <h3 className="text-xl font-semibold mb-2">Entrega Fresca</h3>
              <p>Tu café llega a tu puerta en su punto óptimo de frescura.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Descubre Nuestras Variedades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/cafe-en-grano" className="block">
              <div className="product-card">
                <Image
                  src="/vercel.svg"
                  alt="Café en Grano"
                  width={300}
                  height={200}
                  className="product-image"
                />
                <h3 className="product-title">Café en Grano</h3>
                <p className="mt-2 text-gray-600">
                  Explora nuestras variedades de granos enteros
                </p>
              </div>
            </Link>
            <Link href="/cafe-molido" className="block">
              <div className="product-card">
                <Image
                  src="/vercel.svg"
                  alt="Café Molido"
                  width={300}
                  height={200}
                  className="product-image"
                />
                <h3 className="product-title">Café Molido</h3>
                <p className="mt-2 text-gray-600">
                  Descubre la comodidad de nuestro café recién molido
                </p>
              </div>
            </Link>
            <Link href="/accesorios" className="block">
              <div className="product-card">
                <Image
                  src="/vercel.svg"
                  alt="Accesorios"
                  width={300}
                  height={200}
                  className="product-image"
                />
                <h3 className="product-title">Accesorios</h3>
                <p className="mt-2 text-gray-600">
                  Complementa tu experiencia con nuestros accesorios
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
