import {
  EIconName,
  MbDropdownMenu,
  MbIcon,
  MbMenuWrapper,
  MbTab
} from "mintbase-ui";
import { useState } from "react";
import useStoreThingsController, {
  StoreThing
} from "../controllers/useMarketplaceController";
import useStoreController, { Store } from "../controllers/useStoresController";
import HeroSection from "./HeroSection";
import { Item, LoadingItem } from "./Item";
import MButton from "./MButton";

interface TextCardType {
  title: string;
  label: string;
  text: string;
  handleFunction: any;
}

const TextCard = ({ title, label, text, handleFunction }: TextCardType) => {
  return (
    <div className="bg-base-blue-dark rounded shadow-lg p-4 relative flex flex-col justify-between">
      <div className="">
        <div className="flex text-xl text-white mt-1 justify-center">
          {title}
        </div>
        <div className="text-sm mt-2">{text}</div>
      </div>
      <div className="flex items-center mt-4 justify-center">
        <MButton onClick={() => handleFunction()} label={label} />
      </div>
    </div>
  );
};

const Items = ({
  showModal,
  showConversationModal,
  showDashboardModal,
}: {
  showModal: (item: StoreThing) => void;
  showConversationModal: () => void;
  showDashboardModal: () => void;
}) => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");

  const { things, loading } = useStoreThingsController();
  const { stores, loading: loadingStores } = useStoreController();

  // show store names in the dropdown menu
  const storeTabs = stores.map((store: Store) => {
    return {
      content: <span>{store.name}</span>,
      onClick: () => setSelectedStore(store.id),
    };
  });

  // add 'all stores' to the beginning of the dropdown menu
  storeTabs.unshift({
    content: <span>All Stores</span>,
    onClick: () => setSelectedStore(""),
  });

  const scrollToPurchase = () => {
    openInNewTab("https://discord.gg/6KKf7hkdEk");
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // filter things by store name selected in the dropdown menu
  const filteredThings = things.filter((thing: StoreThing) => {
    return selectedStore === "" || thing.storeId === selectedStore;
  });

  return (
    <div className="w-full items-center mt-4 mx-6">
      <div className="flex w-full ml-6 items-center mt-4 hidden">
        <div onClick={() => setSelectedTab("all")}>
          <MbTab
            label={<span>All Items</span>}
            isActive={selectedTab === "all"}
            isSmall
          />
        </div>
        <MbMenuWrapper setIsOpen={setMenuOpen}>
          <div onClick={() => setMenuOpen(!menuOpen)}>
            <MbTab
              label={
                <div className="flex space-x-8 items-center">
                  <span>
                    {selectedStore === ""
                      ? "All Stores"
                      : stores.find(
                        (store: Store) => store.id === selectedStore
                      )?.name}
                  </span>
                  <div className="pointer-events-none">
                    <MbIcon
                      name={
                        menuOpen
                          ? EIconName.ARROW_DROP_UP
                          : EIconName.ARROW_DROP_DOWN
                      }
                      size="16px"
                      color="blue-300"
                      darkColor="blue-100"
                    />
                  </div>
                </div>
              }
              isSmall
            />
          </div>
          <MbDropdownMenu
            items={storeTabs}
            isOpen={menuOpen}
            className="mt-2"
          />
        </MbMenuWrapper>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 my-12">
        <TextCard
          title="Purchase Membership"
          label="Get Started"
          text=""
          handleFunction={scrollToPurchase}
        />
        <TextCard
          title="Community Discussion"
          label="Take Me There"
          text=""
          handleFunction={showConversationModal}
        />
        <TextCard
          title="Documentation"
          label="Learn More"
          text=""
          handleFunction={() =>
            openInNewTab("https://spaceranch.gitbook.io/documentation")
          }
        />
        <TextCard
          title="Project Dashboard"
          label="Sign In"
          text=""
          handleFunction={() => openInNewTab("http://104.251.218.7:3000/dao/spaceranch.sputnikv2.testnet")}
        />
      </div>
      <hr className="style2 ml-8 mr-8 mt-4 shadow-lg" />
      <HeroSection />
      {/** grid */}
      <hr id="purchase-items" className="style2 ml-8 mr-8 shadow-lg" />
      <div className="p-4 text-white">
        <div className="text-xl text-white mt-2 font-bold">
          Join the SpaceRanch Ranks
        </div>
        <div>
          To participate in the SpaceRanch, connect your wallet and purchase the
          NFT of the associated rank - this is the cryptographic identifier to
          access special communications and the portal for governance.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 my-4">
        {loading ? (
          <LoadingItem />
        ) : (
          filteredThings.map((thing: StoreThing, index: number) => (
            <Item key={index} item={thing} showModal={showModal} />
          ))
        )}
      </div>
    </div>
  );
};

export default Items;
