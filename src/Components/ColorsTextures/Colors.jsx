import './colors.css'

const colors = [
  {
    name: 'yellow',
     imageUrl:
      'https://www.colores.org.es/imagenes_colores/Amarillento-franc%e9s-luz.jpg',
  },
  {
    name: 'yellow canar',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/Amarillo-canario.jpg',
  },
  {
    name: 'acero blue',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/acero-azul.jpg',
  },
  {
    name: 'brow',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/acicoria.jpg',
  },
  {
    name: 'aero',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/aero.jpg',
  },
  {
    name: 'aqua',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/agua.jpg',
  },
  {
    name: 'almagre',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/almagre.jpg',
  },
  {
    name: 'purpura',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/amaranto-purpura.jpg',
  },
  {
    name: 'amazonas',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/amazonas.jpg',
  },
  {
    name: 'anil',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/ao-ingles.jpg',
  },
  {
    name: 'anil',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/irresistible.jpg',
  },
  {
    name: 'anil',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/lavanda-brillante.jpg',
  },
  {
    name: 'anil',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/lavanda-oscuro.jpg',
  },
  {
    name: 'anil',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/lima-limon.jpg',
  },
  {
    name: 'anil',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/majorelle-azul.jpg',
  },
  {
    name: 'anil',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/menta-magica.jpg',
  },
  {
    name: 'anil',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/rojo--naranja.jpg',
  },
  {
    name: 'anil',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/sinople.jpg',
  },
  {
    name: 'anil',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/violeta-ingles.jpg',
  },
  {
    name: 'anil',
    imageUrl:
      'https://www.colores.org.es/imagenes_colores/zafiro.jpg',
  },
]


export default function Example() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-2xl">Available colours</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These are the fabric colors
          </p>
      </div>
     
      <div className="mx-auto grid max-w-7xl gap-x-9 gap-y-20 px-6 lg:px-8 xl:grid-cols-4 colors-list">
        <ul role="list" className="grid gap-x-3 gap-y-2 sm:grid-cols-10 sm:gap-y-8 xl:col-span-8">
          {colors.map((color) => (
            <li key={color.name}>
              <div className="flex items-center gap-x-6">
                 <img className="h-16 w-16 rounded-full" src={color.imageUrl} alt="" />
                <div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
