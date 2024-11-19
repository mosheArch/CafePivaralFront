import Image from 'next/image';

const products = [
  {
    name: 'Café Molido 1kg',
    price: 240,
    description:
      'Nuestro café premium molido a la perfección en presentación familiar.',
    image: '/vercel.svg',
  },
  {
    name: 'Café Molido 500g',
    price: 130,
    description: 'El balance perfecto entre cantidad y frescura.',
    image: '/vercel.svg',
  },
  {
    name: 'Café Molido 250g',
    price: 75,
    description: 'Ideal para probar nuestras diferentes variedades.',
    image: '/vercel.svg',
  },
  {
    name: 'Sobres individuales (10 x 30g)',
    price: 95,
    description: 'Prácticos sobres individuales para llevar contigo.',
    image: '/vercel.svg',
  },
];

export default function CafeMolidoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Café Molido</h1>
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
