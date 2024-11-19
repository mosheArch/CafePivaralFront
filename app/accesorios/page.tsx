import Image from 'next/image';

const products = [
  {
    name: 'Playera Café Lover',
    price: 299,
    description:
      'Playera 100% algodón con diseño exclusivo para amantes del café.',
    image: '/vercel.svg',
  },
  {
    name: 'Prensa Francesa',
    price: 499,
    description:
      'Prensa francesa de alta calidad para una extracción perfecta.',
    image: '/vercel.svg',
  },
  {
    name: 'Molino Manual',
    price: 799,
    description: 'Molino de café manual con ajuste de molienda preciso.',
    image: '/vercel.svg',
  },
  {
    name: 'Taza Térmica',
    price: 249,
    description:
      'Mantén tu café caliente por más tiempo con nuestra taza térmica.',
    image: '/vercel.svg',
  },
];

export default function AccesoriosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Accesorios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="product-image"
            />
            <h2 className="product-title">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button className="btn-primary w-full">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}
