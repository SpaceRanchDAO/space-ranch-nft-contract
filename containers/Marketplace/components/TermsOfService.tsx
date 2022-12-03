import { EState, MbButton } from 'mintbase-ui';
import { useState } from 'react';
import { getFormattedDate } from '../utils/helper';

const TermsOfService = ({ closeModal, continuePurchase }: { closeModal: () => void, continuePurchase: () => void}) => {
    const [showContinueButton, setShowContinueButton] = useState(false);
    const handleScroll = (e: any) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            setShowContinueButton(true);
        }
  }
  
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-base-blue-dark px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="mt-3 ml-2 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div className="flex flex-row items-center justify-between w-full border-black border-b">
              <h3 className="text-xl leading-7 font-semibold text-white" id="modal-title">
                Terms of Purchase
              </h3>
              <button
                type="button"
                className="inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-primary transition duration-150 ease-in-out"
                onClick={() => closeModal()}
                aria-label="Close"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
                <div className="max-h-60 overflow-y-scroll" onScroll={handleScroll} >
                        <br/>
                        <p>Our Terms and Conditions were last updated on November 30, 2022.</p>
                        <p>Please read these terms and conditions carefully before using the platform.</p>
                        <p><strong>Terms of Operations</strong></p>
                        <p>SpaceRanch DAO LLC ("We" or "SpaceRanch DAO LLC") exists to purchase, develop and operate properties for the intended use of facilitating space launch, research, development, tourism, regenerative agriculture and energy production. SpaceRanch DAO plans to utilize blockchain based tooling for finance and governance, 
                            such that it operates as a "decentralized autonomous organization, and or decentralized human organization", commonly referred to as a DAO and DHO.</p>
                      
                        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                        <ul>
                        <li>By visiting our community channel: https://discord.gg/K7WWUf4kr7</li>
                        <li>By sending us an email: legal@spaceranch.org</li>
                        </ul>
                        <p>
                    </p>
                </div>
                <br/>
                <div className='text-right flex justify-center'>
                    <MbButton onClick={()=>{showContinueButton && continuePurchase()}} label="Accept and Continue"  state={showContinueButton ? EState.ACTIVE : EState.DISABLED}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService;
