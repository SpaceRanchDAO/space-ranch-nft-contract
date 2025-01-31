const Footer = () => {

  return (
    <nav className="flex justify-between w-full bg-base-blue-dark bottom-0 z-40 lg:border-b border-solid border-black/75">
      <div className="flex justify-between items-center pt-4 sm:pt-0 pb-4 sm:pb-0">
        <h1 className="font-light text-2xl text-white p-2 sm:p-4 border-gray-100 hidden sm:block">
          SpaceRanch DAO
        </h1>
      </div>
      {/** login/logout with wallet */}
      <div className="flex items-center mr-4">
        <a href="https://spaceranch.gitbook.io/documentation" target="_blank" rel="noreferrer">Documentation</a>
      </div>
    </nav>
  )
}

export default Footer;
