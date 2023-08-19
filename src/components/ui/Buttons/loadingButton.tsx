import { FiCircle } from "react-icons/fi";
import cx from "classnames"

interface Props {
  isLoading: boolean
  text: string
  cn?: string
}

export default function LoadingBtn({ isLoading, text, cn = "bg-black" }: Props) {
  return (
    <button disabled={isLoading} className={cx('px-4 py-1 bg-black rounded-md flex items-center', cn)}>
      {isLoading && (
        <FiCircle className="mr-2 h-4 w-4 animate-spin" />
      )}
      {text}
    </button>
  )
}
