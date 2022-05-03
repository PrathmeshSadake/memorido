import { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createPost, updatePost } from '../../redux/actions/posts';

function Form() {
  const dispatch = useDispatch();
  const { id: currentPostId } = useParams();

  if (currentPostId) {
    console.log(currentPostId);
  } else {
    console.log('No post id');
  }

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    description: '',
    tags: '',
    selectedFile: '',
  });

  useEffect(() => {
    // currentPostId =
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPostId) {
      dispatch(updatePost(currentPostId, postData));
      return;
    }
    dispatch(createPost(postData));
    console.log('Form Submitted!');
  };

  const handleCancel = () => {
    if (currentPostId) {
      return;
    }
    setPostData({
      creator: '',
      title: '',
      message: '',
      description: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <div className='px-2 container mx-auto'>
      <div className='flex flex-no-wrap items-start'>
        <div className='w-full '>
          <div className='py-4 px-2'>
            <form
              className='bg-white rounded shadow mt-7 py-7'
              onSubmit={handleSubmit}
            >
              <div className='mt-5 px-7'>
                <p className='text-xl font-semibold leading-tight text-gray-800'>
                  Create a Memory
                </p>
                <div className='grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-10'>
                  <div>
                    <p className='text-base font-medium leading-none text-gray-800'>
                      Title
                    </p>
                    <input
                      value={postData.title}
                      onChange={(e) =>
                        setPostData({ ...postData, title: e.target.value })
                      }
                      className='w-full p-3 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50'
                    />
                    <p className='mt-3 text-xs leading-[15px] text-gray-600'>
                      Set title that is related to your Memory
                    </p>
                  </div>
                  <div>
                    <p className='text-base font-medium leading-none text-gray-800'>
                      Creator Name
                    </p>
                    <input
                      value={postData.creator}
                      onChange={(e) =>
                        setPostData({ ...postData, creator: e.target.value })
                      }
                      className='w-full p-3 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50'
                    />
                    <p className='mt-3 text-xs leading-[15px] text-gray-600'>
                      Memory Creator
                    </p>
                  </div>

                  <div>
                    <p className='text-base font-medium leading-none text-gray-800'>
                      Message
                    </p>
                    <input
                      value={postData.message}
                      onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                      }
                      className='w-full p-3 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50'
                    />
                    <p className='mt-3 text-xs leading-[15px] text-gray-600'>
                      Set caption that is related to your Memory
                    </p>
                  </div>
                  <div>
                    <p className='text-base font-medium leading-none text-gray-800'>
                      Tags
                    </p>
                    <input
                      value={postData.tags}
                      onChange={(e) =>
                        setPostData({ ...postData, tags: e.target.value })
                      }
                      className='w-full p-3 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50'
                    />
                    <p className='mt-3 text-xs leading-[15px] text-gray-600'>
                      Set tags that are related to your Memory
                    </p>
                  </div>
                </div>
              </div>
              <div className='pt-6 border-gray-300 mt-2 px-7'>
                <p className='text-base font-semibold leading-4 text-gray-800'>
                  Memory Description
                </p>
                <div className='mt-2 border border-gray-300 rounded'>
                  <textarea
                    className='resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600'
                    placeholder='Start typing here ...'
                    value={postData.description}
                    onChange={(e) =>
                      setPostData({ ...postData, description: e.target.value })
                    }
                  />
                </div>
                <p className='mt-3 text-xs leading-[15px] text-gray-600'>
                  Set description that is related to your Memory
                </p>
              </div>

              <div className='flex flex-col my-5 px-7'>
                <p className='text-base font-medium leading-none text-gray-800 mb-2'>
                  Add an Image
                </p>
                <FileBase
                  multiple={false}
                  value={postData.selectedFile}
                  onDone={({ base64 }) =>
                    setPostData({ ...postData, selectedFile: base64 })
                  }
                />
                <p className='mt-3 text-xs leading-[15px] text-gray-600'>
                  Select Image related to your Memory
                </p>
              </div>

              <hr className='h-[1px] bg-gray-100 my-5' />
              <div className='grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 px-7'>
                <button
                  onSubmit={handleCancel}
                  className='bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border  w-full '
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  onSubmit={handleSubmit}
                  className='bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white w-full '
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
