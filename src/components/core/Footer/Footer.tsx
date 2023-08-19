import socials from '../../../data/socials';
import footer from '@/data/footer-data';
import MaxWContainer from '../Layouts/MaxWContainer';
import Logo from '../Header/Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='text-400 flex items-center justify-evenly py-6 text-sm text-white bg-dark'>
      <MaxWContainer>
        <div className='container flex-row justify-between px-4 py-4 sm:flex'>
          <div className='flex flex-col space-y-1 justify-center sm:justify-center '>
            <div className='ml-3'>
              <Logo />
            </div>
            <p className='ml-3 text-offWhite'> VENQ Technologies Pvt. Ltd.</p>
            <p className='ml-3 text-offWhite'> &#169; {year}</p>
            <p className='text-xs ml-3 text-offWhite'>
              Kalyani nagar, Pune
            </p>
            <p className='text-xs ml-3 text-offWhite'> +91 81712 21234</p>
            <div className='text-300 ml-1 flex items-center space-x-4 p-2'>
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target='_blank'
                  rel='noreferrer'
                  className='w-4 hover:text-primary-500'
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className='flex-1'></div>
          <div className='flex p-2'>
            {footer.map(({ heading, options }) => (
              <div className='w-fit mr-2' key={heading}>
                <h4 className='text-md py-[2px] font-bold'>{heading}</h4>
                <ul className='text-xs'>
                  {options.map((option) => (
                    <a
                      href={option.url}
                      key={option.name}
                      target={option?.blank ? '_blank' : '_self'}
                      rel='noreferrer'
                      className='opacity-70 hover:opacity-100'
                      aria-label={option.name}
                    >
                      <li className='py-[2px]'>{option.name}</li>
                    </a>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </MaxWContainer>
    </footer>
  );
}
