import Image from "next/image";

const Team = () => {
  return (
      <div id="team" className="text-3xl   ">
        <h1 className="text-[#268075] font-bold text-3xl text-center  font-serif">Team</h1>
  <div className="mb-6 font-serif">
    <div className="flex flex-wrap gap-6 sm:gap-16 md:gap-24 lg:gap-60 xl:gap-120 justify-center text-center">
        <div className="flex flex-col items-center mx-4">
            <Image src="/images/Linet.png" alt="Linet Mkandoe" width={250} height={250} className="mb-4" />
            <h4 className="text-2xl">Linet Mkandoe</h4>
        </div>
        <div className="flex flex-col items-center mx-4">
            <Image src="/images/Aline.png" alt="Aline Mutesi" width={250} height={250} className="mb-4" />
            <h4 className="text-2xl">Aline Mutesi</h4>
        </div>
    </div>

    <div className="flex flex-wrap gap-8 sm:gap-16 md:gap-24 lg:gap-60 xl:gap-120 justify-center text-center mt-6">
        <div className="flex flex-col items-center mx-4">
            <Image src="/images/Nyabang.png" alt="Nyabang Wech" width={250} height={250} className="mb-4" />
            <h4 className="text-2xl">Nyabang Wech</h4>
        </div>
        <div className="flex flex-col items-center mx-4">
            <Image src="/images/DaisyC.png" alt="Daisy Chepkirui" width={250} height={250} className="mb-4" />
            <h4 className="text-2xl">Daisy Chepkirui</h4>
        </div>
    </div>
</div>


      </div>
  );
}

export default Team;