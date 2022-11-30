
const HeroSection = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="items-center justify-center">
        {/*<MbText className="text-3xl uppercase p-4 border-gray-100">
          NFT Membership Selection
        </MbText> <img src="logo-x.png" className="flex items-center float-left p-4" style={{width: '130px'}} /> */}

        <div className="pl-4 pr-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 my-12 text-white">
          <div className="text-xl text-white mt-1 font-bold">
            Our mission is to collaboratively build towards the Space Age.
          <span className="text-white">We are innovating new ways to organize and develop infrastructure for the emerging space industry. With next generation peer to peer technologies, 
            enabling alternative fundraising and trustless governance opportunities - we will go far as a next generation space organization, and boldly go where no group has gone before.</span>
          </div>
          <div className="">
          <span className="text-white">The SpaceRanch Membership is the access point for participating with the SpaceRanch ecosystem.  to the physical properties and digital immersive environments.</span>
            <span className="text-white">There are five ranks which represent different tiers of opportunities and responsibilities within the organization. Climb the ranks by completing bounties and participating in the SpaceRanch.</span> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
