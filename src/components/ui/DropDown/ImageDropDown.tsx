import cx from "classnames"
import { useEffect, useRef, useState } from "react";


export default function ImageDropDown({ children, data, setValue, setName }: any) {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);

  const imageDropDownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    window.addEventListener('click', handleClickOutSide);
    return () => window.removeEventListener('click', handleClickOutSide);
  }, [isOpenDropDown]);

  const handleClickOutSide = (e: Event) => {
    const target = e.target;
    if (target instanceof Node && imageDropDownRef.current?.contains(target)) {
      return;
    }
    setIsOpenDropDown(false);
  };

  const handleCloseDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  return (
    <li ref={imageDropDownRef} className='relative list-none'>
      <div onClick={handleCloseDropDown} className='truncate'>
        <div>{children}</div>
      </div>
      <div
        className={cx(
          'absolute top-10 z-30 w-full rounded  bg-white transition-opacity',
          isOpenDropDown ? 'visible' : 'invisible'
        )}
        aria-label='drop-menu'
      >
        <div className='flex flex-col text-white transition-all duration-100 ease-in-out'>
          {
            data && (data.length > 0) && data.map((image: any) => (
              <DropDownList
                key={image._id}
                id={image._id}
                text={image.name}
                setValue={setValue}
                setName={setName}
                close={setIsOpenDropDown}
              />
            ))
          }
        </div>
      </div>
    </li>
  );
}

const DropDownList = ({ text, id, setValue, setName, close }: any) => {
  return (
    <div
      className='flex  h-8 px-3 flex-row border-black/30 bg-zinc-600 text-offWhite hover hover:bg-pine'
      onClick={() => {
        setValue(id);
        setName(text);
        close(false)
      }}
    >
      <div className='w-full truncate'>{text}</div>
    </div>
  );
};