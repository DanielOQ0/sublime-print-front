import './banner1.css'


export default function Example() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 banner2">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img className="mx-auto h-36" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHnQaCKXISqH7_4K5AAw-AFxp91YdqmVzVcJG1i-ru_M6JzwHr2AhuaY6JnQpPftOgM0&usqp=CAU" alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl leading-8 text-gray-800 sm:text-2xl sm:leading-9">
              <p>
              FROM HOME IS EASIER <br />
              At Sublime Prints we let you manage the times. From the design, through the load of sizes to the payments;
              You can do EVERYTHING from your home and it is registered in the system.
              And for key dates, don't worry. We send you emails, sms and alerts so you don't forget anything ;)
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
    )
  }
  