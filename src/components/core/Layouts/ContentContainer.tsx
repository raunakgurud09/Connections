interface Props {
  children: React.ReactNode;
}

function ContentContainer({ children }: Props) {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='h-full w-full max-w-[1080px]'>{children}</div>
    </div>
  );
}

export default ContentContainer;
