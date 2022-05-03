import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <div className='relative'>
        <div className='max-w-full h-56'>
          <img
            src='https://i.ibb.co/HxkBZQM/img-1.png'
            alt='stairs'
            className='object-cover h-full w-full'
          />
        </div>
        <div className='bg-white absolute top-0 left-0'>
          <p className='text-base leading-4 py-3 px-5 text-gray-800'>
            Michael Jackson
          </p>
        </div>
      </div>

      <p className='text-xs font-light leading-2 text-gray-500 mt-1'>
        22 April 2022
      </p>
      <h1 className='text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800'>
        Moving up the corporate ladder?
      </h1>
      <p className='text-base leading-normal mt-1 sm:pr-20 md:pr-10 text-gray-600'>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <button className='flex items-center justify-between w-full mt-2 bg-gray-800 p-2 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700'>
            <p className='text-base font-medium leading-4 text-white'>
              {post.likeCount} Likes
            </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='#fff'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
              />
            </svg>
          </button>{' '}
        </div>
        <div>
          <button className='flex items-center justify-between w-full mt-2 bg-gray-800 p-2 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700'>
            <p className='text-base font-medium leading-4 text-white'>Delete</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='#fff'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
