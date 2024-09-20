"use-client"
import Image from "next/image"

const Footer= () =>{

    return(
    <footer className="text-white text-2xl font-serif mt-24">
      <div className="bg-[#008fff] text-center md:text-right">
        <div className="container mx-auto bg-[#008fff] text-white px-4 md:px-20">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className="text-center md:text-left">
                        <img src="/images/aqualogo.png" alt="AquaSense Logo" width={250} height={50} className="mx-auto md:mx-0" />
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-20 text-center md:text-left font-bold">
                        <a href="#" className="hover:text-gray-300">Support</a>
                        <a href="#" className="hover:text-gray-300">Privacy</a>
                        <a href="#" className="hover:text-gray-300">Terms</a>
                        <a href="#" className="hover:text-gray-300">Contact</a>
                    </div>
                </div>

                <section className="mt-6 md:mt-0 text-center md:text-right">
                    <h2 className="font-bold mt-6 md:mt-6 md:ml-4 mt-2">JoinUs</h2>
                    <div className="flex justify-center md:justify-end space-x-3 mt-1">
                        <a href="#">
                            <img src="/images/twitters.png" alt="Twitter" width={20} height={20} className="mt-1" />
                        </a>
                        <a href="#">
                            <Image src="/images/linkedinnn.png" alt="LinkedIn" width={20} height={20} />
                        </a>
                    </div>
                </section>
                </div>

            <div className="text-center mb-2 p-6">
                <p className="text-white text-sm md:text-md font-bold">@2024 Zenith. All rights reserved.</p>
            </div>
        </div>
    </div>
</footer>

    )
}
export default Footer