import './colors.css'

const estampados = [
  {
    name: 'FLOURISHES',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/fullprints/fullprints-floreadas.png',
  },
  {
    name: 'PSYCHEDELIC',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/fullprints/fullprints-psicodelicas.png',
  },
  {
    name: 'CAMOUFLAGED',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/fullprints/fullprints-camufladas.png',
  },
  {
    name: 'BATIKS',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/fullprints/fullprints-batiks.png',
  },
  {
    name: 'DEGRADES',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/fullprints/fullprints-degrades.png',
  },
  {
    name: 'GEOMETRIC',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/fullprints/fullprints-geometricas.png',
  }
]

export default function Example() {
  return (
    <div className="bg-white py-12 sm:py-16 fullprint">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">FULLPRINT PRINTS</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          FULLPRINT PRINTS
          </p>
        </div>

        <ul role="list" className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-6"> 
          {estampados.map((estampados) => (
            <li key={estampados.name}>
              <div className="items-center texturas">
                <img className="h-40 w-40 rounded-full" src={estampados.imageUrl} alt="" />
                <div>
                  <h3 className="leading-2 tracking-tight text-gray-800">{estampados.name}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
    </div>
  
  )
}
