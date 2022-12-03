const HeroSection = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="items-center justify-center">
        <div className="pl-4 pr-4 text-white">
          <div className="text-xl text-white mt-2 font-bold">
            Our mission is to build towards the Space Age.
          </div>
          <div className="flex flex-col justify-between py-2 space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <div className="flex-1">
              We are innovating new ways to organize and develop infrastructure
              for the emerging space industry. With peer to peer technologies
              that enable alternative fundraising and transparent governance -
              we will go far as a next generation space organization, and boldly
              go where no group has gone before.
            </div>
            <div className="flex-1">
              <div className="text-white">
                The SpaceRanch Membership is the access point for participating
                with the SpaceRanch ecosystem, where you can vote and engage in
                the creation of launch infrastructure, and the proliferation of
                new space technologies.
              </div>
              <div className="text-white">
                There are five ranks which represent different tiers of
                opportunities and responsibilities within the organization. Climb
                the ranks by completing bounties, fulfilling roles, and building
                towards the future.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
