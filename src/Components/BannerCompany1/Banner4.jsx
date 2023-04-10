const people = [
    {
      name: 'Founded in 2002',
      /* role: 'Co-Founder / CEO', */
      imageUrl:
        'https://image.spreadshirtmedia.net/content/f_png,w_180/cms/aboutus/thecompany/company_info_01year',
    },
    {
        name: '110 million dollars of sales volume',
       /*  role: 'Co-Founder / CEO', */
        imageUrl:
          'https://image.spreadshirtmedia.net/content/f_png,w_180/cms/aboutus/thecompany/company_info_02money',
      },
      {
        name: 'more than 750 workers',
       /*  role: 'Co-Founder / CEO', */
        imageUrl:
          'https://image.spreadshirtmedia.net/content/f_png,w_180/cms/aboutus/thecompany/company_info_03production',
      },
      {
        name: 'More than 5.5 million printed products',
       /*  role: 'Co-Founder / CEO', */
        imageUrl:
          'https://image.spreadshirtmedia.net/content/f_png,w_180/cms/aboutus/thecompany/company_info_04products',
      },
      {
        name: '100,000 active sellers',
        /* role: 'Co-Founder / CEO', */
        imageUrl:
          'https://image.spreadshirtmedia.net/content/f_png,w_180/cms/aboutus/thecompany/company_info_05shops',
      }
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"> Some data of our performance</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            some data of our performance
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading- tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
  {/* <p>Founded in 2018</p>
            <p>110 million dollars of sales volume</p>
            <p>more than 750 workers</p>
            <p>More than 5.5 million printed products</p>
    <p>100,000 active sellers</p> */}