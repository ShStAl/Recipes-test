export default function RecipeBlock() {
  return (
    <div className="grid h-min grid-cols-2 border-[1px] border-[#F0F0F0]">
      <div className="flex flex-col">
        <div className="border-b-[1px] border-[#F0F0F0] bg-white px-6 py-4 text-base font-medium leading-4">
          Наименование блюда длинное
        </div>
        <div className="flex-grow">
          <img
            className="h-full object-cover"
            src="/No-Image-Placeholder.svg.png"
          ></img>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-white p-6">
        <p className="text-[10px] font-normal leading-3 text-[#8C8C8C]">
          Традиционное итальянское блюдо, изначально в виде круглой
          дрожжевой лепёшки, выпекаемой с уложенной сверху начинкой из томатного
          соуса, сыра 
        </p>
        <div className="flex items-center gap-2 pt-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0001 22.2454C17.5951 22.2454 22.2455 17.6048 22.2455 11.9999C22.2455 6.40495 17.6049 1.75452 12.0099 1.75452C11.4776 1.75452 11.2166 2.07595 11.2166 2.59795V6.49537C11.2166 6.92737 11.5081 7.2788 11.9495 7.2788C12.3918 7.2788 12.6931 6.92737 12.6931 6.49537V3.49195C17.1129 3.84337 20.5278 7.49995 20.5278 11.9999C20.5324 13.1216 20.3151 14.2331 19.8883 15.2704C19.4615 16.3077 18.8337 17.2503 18.041 18.0439C17.2484 18.8375 16.3065 19.4665 15.2697 19.8945C14.233 20.3226 13.1217 20.5412 12.0001 20.5379C7.25878 20.5379 3.45221 16.7408 3.46207 11.9999C3.47192 9.89052 4.22535 7.97223 5.48107 6.49537C5.79221 6.10366 5.81235 5.6318 5.48107 5.27995C5.14935 4.91866 4.58707 4.94866 4.22535 5.4008C2.6885 7.18837 1.75464 9.4988 1.75464 11.9999C1.75464 17.6048 6.39521 22.2454 12.0001 22.2454ZM13.6072 13.5467C14.4005 12.7229 14.2402 11.5979 13.2858 10.9354L7.9715 7.22866C7.46964 6.87723 6.94721 7.39966 7.29864 7.90152L11.0054 13.2154C11.6684 14.1698 12.7934 14.3404 13.6072 13.5467Z"
              fill="black"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-xs font-normal leading-6">30 min</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs font-normal leading-6">Difficult:</p>
          <div className="flex gap-[6px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z"
                fill="black"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.85 16.825L12 14.925L15.15 16.85L14.325 13.25L17.1 10.85L13.45 10.525L12 7.125L10.55 10.5L6.9 10.825L9.675 13.25L8.85 16.825ZM5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z"
                fill="black"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.85 16.825L12 14.925L15.15 16.85L14.325 13.25L17.1 10.85L13.45 10.525L12 7.125L10.55 10.5L6.9 10.825L9.675 13.25L8.85 16.825ZM5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <p className="text-xs font-normal leading-6">European cousine</p>
        <p className="text-xs font-normal leading-6">Breakfast, dinner</p>
      </div>
    </div>
  );
}
