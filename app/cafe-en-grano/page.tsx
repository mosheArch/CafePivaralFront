import Image from 'next/image';

const products = [
  {
    name: 'Café Artesanal 1kg',
    price: 250,
    description:
      'Nuestro café premium en su presentación más grande, ideal para verdaderos amantes del café.',
    image: '/vercel.svg',
  },
  {
    name: 'Café Artesanal 500g',
    price: 140,
    description: 'La medida perfecta para mantener tu café siempre fresco.',
    image: '/vercel.svg',
  },
  {
    name: 'Café Artesanal 250g',
    price: 80,
    description: 'Perfecto para probar nuestras diferentes variedades.',
    image: '/vercel.svg',
  },
  {
    name: 'Sobres individuales (10 x 30g)',
    price: 100,
    description:
      'La forma más práctica de llevar tu café favorito a donde vayas.',
    image: '/vercel.svg',
  },
];

export default function CafeEnGranoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Café en Grano</h1>
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
