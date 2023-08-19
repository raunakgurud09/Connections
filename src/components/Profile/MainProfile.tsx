import React from 'react'
import AvatarImage from '@/components/ui/Image/AvatarImage';
// import Image from "next/image"
import { GitHubLogo, HashnodeLogo, LinkedinLogo, TwitterLogo } from '../Icons'
import { useUser } from '@/hooks/user/useUser'

const socials = [
	{ _id: '0', name: 'Twitter', logo: < TwitterLogo /> },
	{ _id: '1', name: 'Twitter', logo: < HashnodeLogo /> },
	{ _id: '2', name: 'Twitter', logo: < LinkedinLogo /> },
	{ _id: '3', name: 'Twitter', logo: < GitHubLogo /> },
]

function MainProfile() {
	const { data: currentUser } = useUser();

	if (!currentUser) {
		return (
			<div>error</div>
		)
	}

	return (
		<div className='w-full bg-black/50 rounded-[20px]  text-offWhite space-y-6'>
			<div className='relative flex flex-col items-center justify-center w-full h-24 mb-10'>
				<div className='w-full rounded-t-[20px] bg-white h-full'>
				</div>
				<div className='absolute bottom-[-40px] h-20 w-20 flex items-center justify-center rounded-full  bg-transparent'>
					<AvatarImage src={currentUser.image} alt={"avatar"} width={80} height={80} />
				</div>
			</div>
			<div className='p-4 space-y-6'>
				<div className='flex items-center justify-center'>
					<p className='text-4xl font-semibold'>{currentUser?.name?.firstName} {currentUser?.name?.lastName}</p>
				</div>
				<div>
					<h4 className='text-3xl font-semibold'>Bio</h4>
					<p className="text-sm  text-offWhite">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam illum asperiores corrupti vitae voluptate porro fugiat voluptatibus, accusamus omnis!</p>
				</div>
				<div className='flex items-center justify-center'>
					{
						socials.map(social => (
							<div key={social._id} className='m-1 mx-2 items-center'>
								<div className='w-6 h-6 hover:text-pine'>{social.logo}</div>
							</div>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default MainProfile