/* eslint-disable @next/next/no-img-element */

export default function Certification(){
    return(
        <section id="certification" className="py-16 mt-4">
      <div id="project" className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl text-center font-bold mb-2 mt-4">
            My <span className="text-custom-purple">Certification</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mx-12">
          <div className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img
              src="c1.png"
              alt="ALX Software Engineering"
              width={600}
              height={400}
              className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img
              src="c2.jpg"
              alt="MINAB Tech Certificate"
              width={600}
              height={400}
              className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
              style={{ height: '310px' }}
            />
          </div>
          <div className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img
              src="c3.PNG"
              alt="Udacity Nanodegree"
              width={600}
              height={400}
              className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
              style={{ height: '310px' }}
            />
          </div>
          <div className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img
              src="c4.png"
              alt="Udacity Nanodegree"
              width={600}
              height={400}
              className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
              style={{ height: '310px' }}
            />
          </div>
        </div>
      </div>
    </section>
    )
}