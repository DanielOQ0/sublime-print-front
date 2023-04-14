import logo from '../../Media/logo.png'
import './banner1.css'


export default function Example() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 banner2">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-36" src={logo} alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl leading-8 text-gray-800 sm:text-2xl sm:leading-9">
              <p>
              We make sure that the fabrics of our products have the best quality on the market.
              The garments are unique with double stitching and YKK closures.
              We have our own factory where all the garment processes are carried out,
              that is why the production times of Sublime Print
              they are the shortest!
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
    )
  }
  