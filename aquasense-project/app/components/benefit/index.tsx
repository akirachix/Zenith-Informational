import Image from "next/image";
const Benefit = () => {
  return (
    <div id="product">
  <section className="py-8 font-serif">
  <h1 className="text-3xl font-bold text-center w-full text-[#268075] md:text-4xl">
    Benefits
  </h1>
  <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-4 sm:px-8 md:px-16 mt-8 md:mt-16 justify-center mx-auto">
    <div
      className="bg-transparent border-2 border-blue-500 rounded-[30px] flex flex-col w-full md:w-1/2 xl:w-[500px] md:text-xl ring-offset-1 ring-black shadow-md shadow-blue-500 p-6 md:p-8">
      <h3 className="text-blue-500 font-semibold text-xl md:text-2xl">
        Reduce Maintenance Costs:
      </h3>
      <p className="whitespace-normal text-base md:text-lg xl:text-2xl xl:leading-loose">
        By identifying potential issues before they become critical, AquaSense helps reduce the need for emergency repairs and lowers overall maintenance costs.
      </p>
    </div>

    <div
      className="bg-transparent border-2 border-blue-500 rounded-[30px] flex flex-col w-full md:w-1/2 xl:w-[500px] md:text-xl ring-offset-1 ring-black shadow-md shadow-blue-500 p-6 md:p-8"
    >
      <h3 className="text-blue-500 font-semibold text-xl md:text-2xl">
        Enhance System Efficiency:
      </h3>
      <p className="whitespace-normal text-base md:text-lg xl:text-2xl leading-loose">
        Continuous monitoring ensures that your drainage system operates optimally, reducing the risk of downtime and ensuring effective drainage.
      </p>
    </div>
  </div>
</section>
      <section className="p-4 md:p-8 font-serif sm:mx-16 lg:mx-32">
  <h2 className="text-3xl font-bold text-center text-[#268075] md:text-4xl mb-6">
    Why Choose AquaSense
  </h2>
  <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
  <div className="w-full lg:w-2/2 mb-4 lg:mb-0 px-4 flex flex-col items-center lg:items-start text-center lg:text-left">
  <p className="text-lg md:text-2xl leading-loose xl:text-2xl mb-4">
    AquaSense uses the latest advancements in sensor technology and data analysis to provide accurate and reliable blockage detection.
  </p>
  <p className="text-lg md:text-2xl leading-loose xl:text-2xl">
    <p className="text-2xl font-bold text-blue-500">
      Scalable Solution:
    </p>
    Whether you are managing a single drainage point or a complex network, AquaSense is scalable to meet your needs.
  </p>
</div>

    
    
    
    <div className="w-full lg:w-1/2 flex justify-center">
      <Image
        src="/images/aquasense.png"
        alt="aquaSense logo"
        width={170} 
        height={48}
        className="w-full h-auto max-w-xs md:max-w-md"
      />
    </div>
  </div>
</section>

    </div>
  );
};

export default Benefit;