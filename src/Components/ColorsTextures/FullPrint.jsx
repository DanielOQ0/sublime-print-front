import './colors.css'

const estampados = [
  {
    name: 'FLOURISHES',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/fullprints/fullprints-floreadas.png',
  },
  {
    name: 'DRAWN',
    imageUrl:
      'https://littleblue.com.ar/img/inspire/fullprints/fullprints-dibujadas.png',
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
    <div className="bg-white py-12 sm:py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">FULLPRINT PRINTS</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          FULLPRINT PRINTS
          </p>
        </div>

        <ul role="list" className="grid gap-x-3 gap-y-2 sm:grid-cols-3 sm:gap-y-6 xl:col-span-8 full-print">
          {estampados.map((estampados) => (
            <li key={estampados.name}>
              <div className="flex items-center gap-x-2">
                <img className="h-36 w-36 rounded-full" src={estampados.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-4 tracking-tight text-gray-800">{estampados.name}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
    </div>
  
  )
}
