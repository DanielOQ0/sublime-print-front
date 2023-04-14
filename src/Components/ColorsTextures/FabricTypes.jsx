import './colors.css'

const telas = [
  {
    name: 'cotton frieze',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/telas/tela-frisa-algodon.jpg',
  },
  {
    name: 'friza melange',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/telas/tela-frisa-melange.jpg',
  },
  {
    name: 'Printed Frieze',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/telas/tela-estampada.jpg',
  },
  {
    name: 'Glossy Patterned',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/telas/tela-estampada-brillante.jpg',
  },
  {
    name: 'jersey',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/telas/tela-jersey.jpg',
  },
  {
    name: 'pique',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/telas/tela-pique.jpg',
  },
  {
    name: 'Bright Sporty',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/telas/tela-deportivo-brillante.jpg',
  },
  {
    name: 'jersey melange',

    imageUrl:
      'https://littleblue.com.ar/img/inspire/telas/tela-jersey-melange.jpg',
  },
  {
    name: 'viscose',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/telas/tela-viscosa.jpg',
  }
]

export default function Example() {
  return (
    <div className="bg-white py-12 sm:py-16 fabricTypes" >
      
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">Fabric Types</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
           Fabric Types
          </p>
        </div>
 
        <ul role="list" className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"> 
          {telas.map((telas) => (
            <li key={telas.name}>
              <div className="items-center texturas">
                <img className="h-36 w-36 rounded-full" src={telas.imageUrl} alt="" />
                <div>
                  <p className="leading-2 tracking-tight text-gray-800">{telas.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
    </div>
    
  )
}
