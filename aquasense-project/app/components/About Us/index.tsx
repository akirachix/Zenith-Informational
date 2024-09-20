import Image from "next/image";

const AboutUs = () => {
  return (
    <div  id="aboutus"className="container mx-auto font-serif text-base sm:text-lg md:text-xl lg:text-xl px-4 sm:px-6 lg:px-10">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl font-bold text-teal-700 mt-12 mb-12">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-10">
  <div className="flex justify-center w-full md:w-1/2">
    <Image
      src="/images/saver .png"
      alt="Drainage System"
      className="rounded-[50px] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      width={543}
      height={500}
    />
  </div>
  
  <div className="flex flex-col items-center md:items-start w-4/5 md:w-1/2 text-center md:text-left">
    <p className="text-2xl sm:text-3xl md:text-2xl lg:text-2xl font-bold">
      Transforming estates into resilient havens with AquaSense
    </p>
    <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mt-8">
      With AquaSense, we empower Estate Associations to proactively manage drainage, creating cleaner, safer, and more sustainable living environments.
    </p>
  </div>
</div>

      </div>
      <div className="text-center mt-10 md:ml-6">
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-[30px] font-bold text-teal-700 mb-8">
          Product
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap- mt-10">
          <div className="flex flex-col items-center md:items-start w-4/5 md:w-1/2">
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-center md:text-left">
              AquaSense is a solution that monitors and detects blockages in drainage systems. It offers real-time updates and early warnings to help prevent flooding and keep your drainage system running smoothly.
            </p>
          </div>
          <div className="flex justify-center mt-5 md:mt-0 w-full md:w-1/2 ">
            <Image
              src="/images/device.png"
              alt="AquaSense Product"
              width={600}
              height={200}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;