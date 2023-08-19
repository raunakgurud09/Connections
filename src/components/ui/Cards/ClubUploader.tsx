import cx from "classnames"

interface Props {
  id:string
  name:string
  placeholder:string
  type:string
  value:any
  onChange:any
  touched:any
  errors:any
}

export default function ClubUploader({ errors, touched, type, name, id, placeholder, value, onChange }: Props) {
  return (
    <div className='my-4 placeholder:flex w-full sm:w-[48%] flex-col   '>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        className={cx(
          'w-full rounded-[10px] border border-pine bg-black/30 px-8 py-2 font-secondary',
          touched && errors
            ? 'border-wine'
            : 'border-pine'
        )}
      />
      <span className='text-[7px] text-wine'>
        {errors && touched && errors}
      </span>
    </div>
  )
}
