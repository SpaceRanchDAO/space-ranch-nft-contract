import { MbButton } from "mintbase-ui"
import { useWallet } from "../../../services/providers/WalletProvider"

const Header = () => {
  const { isConnected, details, signIn, signOut } = useWallet()

  return (
    <nav className="flex justify-between w-full bg-slate-900 sticky top-0 z-40 lg:border-b border-solid border-black/75 px-6">
      <div className="flex justify-between items-center pt-4 sm:pt-0 pb-4 sm:pb-0">
        <img src="logo-x.png" alt="logo" className="flex items-center" style={{width: '30px'}} />
        <h1 className="font-light text-2xl text-white p-2 sm:p-4 border-gray-100 hidden sm:block">
          SpaceRanch DAO
        </h1>
      </div>
      {/** login/logout with wallet */}
      <div className="flex items-center">
        {isConnected && (
          <MbButton onClick={signOut} label={`Sign Out ${details.accountId}`} />
        )}
        {!isConnected && (
          <MbButton onClick={signIn} label="Connect" />
        )}
      </div>
    </nav>
  )
}

export default Header;
