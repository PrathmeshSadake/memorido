import React from 'react';
const ProfilePage = () => {
  return (
    <form>
      <div className='bg-white'>
        <div className='container mx-auto bg-white rounded'>
          <div className='xl:w-full border-b border-gray-300 py-5 bg-white'>
            <div className='flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center'>
              <p className='text-lg text-gray-800 font-bold'>My Profile</p>
              <div className='ml-2 cursor-pointer text-gray-600 dark:text-gray-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width={16}
                  height={16}
                >
                  <path
                    className='heroicon-ui'
                    d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'
                    fill='currentColor'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='mx-auto'>
            <div className='xl:w-full mx-auto xl:mx-0'>
              <div className='rounded relative mt-8 h-48'>
                <img
                  src='https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg'
                  alt
                  className='w-full h-full object-cover rounded absolute shadow'
                />
                <div className='absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded' />
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto bg-white mt-10 rounded px-4'>
          <div className='mx-auto pt-4'>
            <div className='container mx-auto'>
              <div className='xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                <label
                  htmlFor='FirstName'
                  className='pb-2 text-sm font-bold text-gray-800'
                >
                  First Name
                </label>
                <input
                  type='text'
                  id='FirstName'
                  name='firstName'
                  required
                  className='border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400'
                  placeholder
                />
              </div>
              <div className='xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                <label
                  htmlFor='LastName'
                  className='pb-2 text-sm font-bold text-gray-800'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  id='LastName'
                  name='lastName'
                  required
                  className='border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400'
                  placeholder
                />
              </div>
              <div className='xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                <label
                  htmlFor='Email'
                  className='pb-2 text-sm font-bold text-gray-800'
                >
                  Email
                </label>
                <div className='border border-green-400 shadow-sm rounded flex'>
                  <div className='px-4 py-3 flex items-center border-r border-green-400'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-mail'
                      width={20}
                      height={20}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points='3 7 12 13 21 7' />
                    </svg>
                  </div>
                  <input
                    type='text'
                    id='Email'
                    name='email'
                    required
                    className='pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400'
                    placeholder='example@gmail.com'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='container mx-auto w-11/12 xl:w-full'>
          <div className='w-full py-4 sm:px-0 bg-white flex justify-end'>
            <button className='bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4'>
              Cancel
            </button>
            <button
              className='bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm'
              type='submit'
            >
              Save
            </button>
          </div>
        </div> */}
      </div>
    </form>
  );
};
export default ProfilePage;
