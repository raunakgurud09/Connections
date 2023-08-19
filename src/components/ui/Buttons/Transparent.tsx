export default function Transparent({ icon, text, onClick }: any) {
  return (
    <div
      className='flex w-fit flex-row items-center justify-center space-x-3 rounded-[32px] bg-white/[0.07] p-[10px] backdrop-blur hover:bg-white/[0.1]'
      onClick={onClick}
    >
      <div className='flex w-fit items-center justify-center'>
        <div className='h-3 w-3'>{icon}</div>
      </div>
      <p className='w-fit text-white'>{text}</p>
    </div>
  );
}
