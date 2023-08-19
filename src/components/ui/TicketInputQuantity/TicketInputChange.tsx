import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import style from "./InputQuantity.module.css"

interface Props {
  value: string | number;
  onChangeInput(value: string | number): void;
  onButtonClick(type: string): void;
  onChangeBlur: (value: string) => void;
  isUpdating?: boolean;
}

const InputChange = ({
  value,
  onChangeInput,
  onButtonClick,
  onChangeBlur,
  isUpdating,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChangeInput(value);
  };

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChangeBlur(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isNaN(parseInt(e.key))) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <div className="flex px-1 sm:px-3 items-center text-black">
        <button
          type="button"
          className="px-0 xs:px-1 h-7 rounded-l-[20px] bg-brown "
          onClick={() => onButtonClick('sub')}
          disabled={isUpdating}
        >
          <FiMinus />
        </button>
        <input
          type="text"
          className={style.shadow}
          value={value}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onBlur={handleOnBlur}
          disabled={isUpdating}
        />
        <button
          type="button"
          className="px-0 xs:px-1 h-7 rounded-r-[20px] bg-brown"
          onClick={() => onButtonClick('add')}
          disabled={isUpdating}
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
};

export default InputChange;
