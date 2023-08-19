import cx from 'classnames';
import Link from 'next/link';

export default function FilledButton({ text, href, classNames, onClick }: any) {
  return (
    <>
      {href ? (
        <Link
          href={href}
          role='button'
          className={cx(
            'mr-2 w-auto rounded-3xl bg-brown px-6 py-3 text-sm font-medium text-white dark:bg-brown',
            classNames
          )}
          passHref
        >
          {text}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={cx(
            'mr-2 w-auto rounded-3xl bg-brown px-6 py-3 text-sm font-medium text-white dark:bg-brown',
            classNames
          )}
        >
          {text}
        </button>
      )}
    </>
  );
}
