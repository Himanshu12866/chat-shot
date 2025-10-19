import React from 'react'
import assets, { messagesDummyData, userDummyData } from '../assets/assets'

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
    return selectedUser ? (
        <div className='h-full backdrop-blur-lg relative m-2'>
            {/*Header Part  */}
            <div className='flex items-center gap-3 border-b border-stone-500 px-6 py-3'>
                <img src={assets.profile_martin} alt='' className='w-8 rounded-full' />
                <p className='flex items-center flex-1 gap-2 text-lg text-white font-semibold'>Martin Fowler <span className='w-2 h-2 rounded-full bg-green-500'></span></p>
                <img onClick={() => setSelectedUser(null)} src={assets.arrow_icon} className='md:hidden max-w-7' />
                <img src={assets.help_icon} alt='' className='max-w-5  max-md:hidden cursor-pointer' />
            </div>
            <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
            {
                messagesDummyData.map((msg , index) => <div>
                </div>)
            }
            </div>
        </div>

    ) :
        <div className='flex items-center justify-center flex-col gap-4 ' >
            <img src={assets.logo_icon} className='max-w-16' alt='' />
            <p className='text-xl text-white'>Chat Anywhre , Anytime</p>

        </div>
}

export default ChatContainer