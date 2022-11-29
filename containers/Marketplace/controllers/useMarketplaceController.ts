import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { tokens } from "../utils/constants";

const GET_MB_STORE_THINGS = gql`
  query StoreThings($storeIds: [mb_views_store_things_bool_exp!]) {
    mb_views_store_things(
      where: {_or: 
        $storeIds
      }, 
      order_by: {createdAt: desc}
    ) {
      createdAt
      listed
      media
      storeId
      thingId
      title
    }
  }
`;

export type StoreThing = {
  createdAt: string;
  listed: boolean;
  media: string;
  storeId: string;
  thingId: string;
  title: string;
  price?: number;
};



const useStoreThingsController = () => {
  const [things, setThings] = useState<StoreThing[]>([]);

  const stores = process.env.NEXT_PUBLIC_STORES || 'mufasa.mintspace2.testnet,nearcon2sponsorships.mintspace2.testnet,calvinttest.mintspace2.testnet'
  let storeIds: { storeId: { _eq: string; }; }[] = [];
  let _arr = stores?.split(',')

  _arr?.forEach((id) => {
    storeIds.push({
      storeId: {_eq: id}
    })
  })

  const { loading } = useQuery(GET_MB_STORE_THINGS, {
    variables: {
      storeIds
    },
    onCompleted: (data) => {
      const _things = data?.mb_views_store_things;
      
      // IMPORTANT: added for testnet version sorting (we need to fix this issue with graphql in the future)
      const result = tokens.map((token) => {
        return {..._things[token.thingId], price: token.price};
      });
      
      setThings(result);
    },
  })

  return { things, loading };
};

export default useStoreThingsController;
