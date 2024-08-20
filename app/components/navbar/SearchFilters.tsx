'use client'
import useSearchModal from "@/app/hooks/useSearchModal";

const SearchFilters = () => {

  const searchModal = useSearchModal();

  return(
      <div className="h-[48px] lg:h-[64] flex flex-row items-center justify-between
      border rounded-full shadow-xl"
            onClick={()=>searchModal.open('location')}>
        <div className="hidden lg:block">
          <div className="flex flex-row items-center justify-between">
            <div
                className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">Where?</p>
              <p className="text-sm">Wanted location</p>
            </div>
            <div
                className="cursor-pointer h-[48px] lg:h-[64]px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">Check in</p>
              <p className="text-sm">Add dates</p>
            </div>
            <div
                className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">Check out</p>
              <p className="text-sm">Add dates</p>
            </div>
            <div
                className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">Who?</p>
              <p className="text-sm">Add guests</p>
            </div>
        </div>
        </div>
        <div className="p-2">
          <div className="cursor-pointer p-4 bg-airbnb rounded-full hover:bg-airbnb-dark transition text-white">
            <svg viewBox="0 0 32 32"
                 style={{display:'block',fill:'none',height:'16px',width:'16px',stroke:'currentColor',strokeWidth:4,
              overflow:'visible'}}
                 aria-hidden="true" role="presentation" focusable="false">
              <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
            </svg>
          </div>
        </div>
      </div>
  )
}

export default SearchFilters;