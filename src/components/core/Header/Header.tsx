import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
// import MaxWContainer from '../Layouts/MaxWContainer';
import Menu from './Menu';
import { useUser } from '@/hooks/user/useUser';
import DropDown from '@/components/ui/DropDown/DropDown';
import AvatarImage from '@/components/ui/Image/AvatarImage';
import { Bell } from 'lucide-react';
// import SmallNav from './SmallNav';
// import Search from './Search';
// import SmallNav from './SmallNav';

function Header() {
  const { data: currentUser } = useUser();
  return (
    <>
      <header className='absolute top-0 z-40 w-full bg-transparent py-2'>
        {/* <ComingSoon /> */}
        <div className='flex w-full items-center justify-center px-4 pb-2 border-b border-black/30'>
          <div className='flex w-full items-center justify-between '>
            <div className="flex space-x-2 items-center">
              <Menu />
              <Logo />
            </div>
            {currentUser ? (
              <div className='flex'>
                <div className='flex items-center justify-between mr-3 text-blueC hover:cursor-pointer'>
                  <Bell />
                </div>
                <div className='hover:cursor-pointer'>
                  <DropDown
                    info={currentUser.name.firstName + " " + currentUser.name.lastName}
                  >
                    <AvatarImage src={currentUser.image} alt='avatar' />
                  </DropDown>
                </div>
              </div>
            ) : (
              <Nav />
            )}
          </div>
        </div>
      </header>
    </>
  );
}

// const ComingSoon = () => {
//   return (<div className='w-full h-8 bg-brown mb-2 flex items-center justify-center'>
//     <p className='text-white tracking-wide font-primary text-2xl'>
//       coming soon...
//     </p>
//   </div>)
// }

export default Header;
