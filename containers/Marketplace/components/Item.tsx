import { StoreThing } from "../controllers/useMarketplaceController";
import { getCurrency } from "../utils/helper";
import MButton from "./MButton";

const Item = ({ item, showModal }: {item: StoreThing, showModal: (item: StoreThing) => void}) => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-base-blue-dark rounded shadow-lg p-4 relative">
      <img src={item.media} className="w-full h-72 object-cover"></img>
      <div className="my-3.5">
        <div className="text-xl text-white font-bold flex justify-between">
          <span>{item.title}</span>
          <span>{getCurrency(item.price)}</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <MButton onClick={() => showModal(item)} label={`BUY`} />
        &nbsp;
        <MButton onClick={() => openInNewTab('https://spaceranch.gitbook.io/documentation/membership-ranks')} label={`LEARN`} />
      </div>
    </div>
  );
}

const LoadingItem = (): JSX.Element => {
  const products = Array(12).fill(null);

  return (
    <>
      {products.map((_, i) => (
        <div key={i} className="flex items-center justify-center ">
            <div className="w-full h-64 bg-base-blue-dark animate-pulse"></div>
        </div>
      ))}
    </>
  );
};

export { Item, LoadingItem };

