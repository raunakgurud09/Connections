import React from 'react';
import cx from 'classnames';

function FillBtn({ text, cns, onClick }: any) {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <button
        onClick={onClick}
        id="transparent"
        className={cx('h-fit w-fit cursor-pointer text-center', cns)}
      >
        {text}
      </button>
    </div>
  );
}

export default FillBtn;
