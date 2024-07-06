import React from "react";
import DiaperCard from "../Components/DiaperCard";

const Diapers = () => {
  return (
    <div className="bg-[#64cfee]">
      <div className="h-[300px] bg-black text-center flex flex-col justify-center items-center">
        <div className="font-bold text-6xl text-white">
          <h1>Diapers</h1>
          <p>&</p>
          <h1>Beer</h1>
        </div>

        <div className=" text-2xl text-white pt-12"><p>August 10th 5pm</p></div>
      </div>

      <div className="flex mt-6 gap-6 max-w-7xl m-auto">
        <div>

        <h2 className="text-center font-bold text-3xl text-black">Diapers!</h2>
        <p className="text-black">Please enter the size and quantity you will bring.</p>
        <div className="md:grid md:grid-cols-3">
          <DiaperCard
            imgSrc="/diapersImages/1.jpg"
            imgHeight="h-48"
            imgWidth="w-full"
            quantityProp="1"
            title="Huggies 1"
            startingTotal={8}
            />
          <DiaperCard
            imgSrc="/diapersImages/2.jpg"
            imgHeight="h-48"
            imgWidth="w-full"
            quantityProp="1"
            title="Huggies 2"
            startingTotal={8}
            />
          <DiaperCard
            imgSrc="/diapersImages/3.jpg"
            imgHeight="h-48"
            imgWidth="w-full"
            quantityProp="1"
            title="Huggies 3"
            startingTotal={10}
            />
          <DiaperCard
            imgSrc="/diapersImages/4.jpg"
            imgHeight="h-48"
            imgWidth="w-full"
            quantityProp="1"
            title="Huggies 4"
            startingTotal={8}
            />
          <DiaperCard
            imgSrc="/diapersImages/5.jpg"
            imgHeight="h-48"
            imgWidth="w-full"
            quantityProp="1"
            title="Huggies 5"
            startingTotal={8}
            />
          <DiaperCard
            imgSrc="/diapersImages/6.jpg"
            imgHeight="h-48"
            imgWidth="w-full"
            quantityProp="1"
            title="Huggies 6"
            startingTotal={8}
            />
        </div>
          </div>
        <div>
          <h2 className="text-center font-bold text-3xl text-black">Wipes!</h2>
          <p className="text-black">Please enter the size and quantity you will bring.</p>
          <DiaperCard
            imgSrc="/diapersImages/wipes.jpg"
            imgHeight="h-48"
            imgWidth="w-full"
            quantityProp="1"
            title="Fragrence Free Wipes"
            startingTotal={10}
          />
        </div>
        <div>
          <h2 className="text-center font-bold text-3xl text-black">Beer!</h2>
          <p className="text-black">Please vote for the beer you want to see make an appearance.</p>
          <div className="md:grid md:grid-cols-3">

          <DiaperCard
            imgSrc="/diapersImages/budlight.jpg"
            imgHeight="h-48"
            imgWidth="w-full"
            quantityProp="0"
            title="Bud Light"
            />
          <DiaperCard
            imgSrc="/diapersImages/bm.jpg"
            imgHeight="h-48"
            imgWidth="w-full"
            quantityProp="0"
            title="Blue Moon"
            />
          <DiaperCard
            imgSrc="/diapersImages/corona.jpg"
            imgHeight="h-48"
            imgWidth="w-full"
            quantityProp="0"
            title="Corona"
            />
          <DiaperCard
            imgSrc="/diapersImages/michelob.jpg"
            imgHeight="h-48"
            imgWidth="w-full"
            quantityProp="0"
            title="Michelob Ultra"
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Diapers;
