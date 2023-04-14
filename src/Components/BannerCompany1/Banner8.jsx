import './banner1.css'


export default function Example() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 banner2">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-36" src="https://previews.123rf.com/images/aquir/aquir1612/aquir161205626/67446894-1-a%C3%B1o-de-garant%C3%ADa-sello-firmar-sello.jpg" alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl leading-8 text-gray-800 sm:text-2xl sm:leading-9">
              <p>
              WARRANTY1 YEAR <br />
              Some clothes are used every day, and washed many times a month, imagine how many times a year!
              That is why we offer a one-year guarantee: we provide the best quality and you can use it with complete peace of mind.
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
    )
  }
  