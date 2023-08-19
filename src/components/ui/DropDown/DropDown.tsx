import cx from 'classnames';
import { useLogout } from '@/hooks/useAuth';
import { useUser } from '@/hooks/user/useUser';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ChevronDown } from 'lucide-react';

export default function DropDown({ children, info }: any) {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const { data: currentUser } = useUser();
  const router = useRouter()
  const logout = useLogout();

  const dropDownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    window.addEventListener('click', handleClickOutSide);
    return () => window.removeEventListener('click', handleClickOutSide);
  }, [isOpenDropDown]);

  const handleClickOutSide = (e: Event) => {
    const target = e.target;
    if (target instanceof Node && dropDownRef.current?.contains(target)) {
      return;
    }
    setIsOpenDropDown(false);
  };

  const handleCloseDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };



  const handleLogout = () => {
    logout();
    router.push('/login')
  };

  const handleProfile = () => {
    router.push('/profile')
  };

  const handleConnections = () => {
    router.push('/connections')
  }



  return (
    <li ref={dropDownRef} className='relative list-none'>
      <div>
        <div onClick={handleCloseDropDown} className='rounded-md hidden sm:flex flex-row w-h-12 w-52 border border-black/10 p-1 '>
          <div className='w-1/5 flex items-center justify-center'>{children}</div>
          <div className='px-1 w-3/5 text-blueC'>
            <p className='text-xs'>welcome back,</p>
            <p className='font-semibold text-sm'>
              {info}
            </p>
          </div>
          <div className='w-1/5 flex items-center justify-center'>
            <ChevronDown />
          </div>
        </div>
      </div>

      <div onClick={handleCloseDropDown} className='visible sm:hidden '>
        <div>{children}</div>
      </div>

      <div
        className={cx(
          'absolute top-10 right-1 w-48 rounded-md border-[1px] border-opacity-25 border-white bg-zinc-900 transition-opacity',
          isOpenDropDown ? 'visible' : 'invisible'
        )}
        aria-label='drop-menu'
      >
        <div className='flex flex-col text-white font-secondary'>
          <div className="flex flex-col p-2">
            <p className='uppercase  font-semibold text-xl '>
              {currentUser.name.firstName}{' '}{currentUser.name.lastName}
            </p>
            <p className='text-sm text-white/70 '>{currentUser.email}</p>
          </div>
          <span className='line'></span>
          <div className="flex flex-col px-1 py-0">
            <DropDownList
              action={handleProfile}
              text='Profile'
            />
            <DropDownList
              action={handleConnections}
              text='Connections'
            />

          </div>
          <span className="line"></span>
          <div className="flex flex-col px-1 py-0">
            <DropDownList
              action={handleLogout}
              text='Signout'
            />
          </div>
        </div>
      </div>
    </li>
  );
}

const DropDownList = ({ text, action }: any) => {
  return (
    <div className='my-1 flex h-8 flex-row rounded hover:bg-slate-700/50 p-1 tracking-wider text-white/50  hover:text-white'>
      <div className='w-full px-1' onClick={action}>
        {text}
      </div>
    </div>
  );
};
