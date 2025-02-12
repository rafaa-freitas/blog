import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostInterface from '../../interfaces/Post';
import api from '../../services/api';
import ENDPOINTS from '../../services/endpoints';
import { AxiosResponse } from 'axios';
import UserInterface from '../../interfaces/User';

function Post() {
  const { idPost } = useParams();
  const [currentPost, setCurrentPost] = useState<PostInterface | null>(null);
  const [postAuthor, setPostAuthor] = useState<UserInterface | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (idPost) {
      api
        .get(ENDPOINTS.getPost(idPost))
        .then((response: AxiosResponse<PostInterface>) => {
          setCurrentPost(response.data);

          api
            .get(ENDPOINTS.getUser(response.data.id_user))
            .then((response: AxiosResponse<UserInterface>) => {
              setPostAuthor(response.data);
              setTimeout(() => {
                setIsLoading(false);
              }, 5000);
            });
        });
    }
  }, [idPost]);

  return (
    <section className="container-layout">
      {isLoading ? (
        <div
          role="status"
          className="flex justify-center animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center mb-1.5"
        >
          <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
        </div>
      ) : (
        <h6 className="uppercase text-center tracking-[2px] text-primary-light">
          {currentPost?.category}
        </h6>
      )}

      {isLoading ? (
        <div
          role="status"
          className="flex justify-center animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center mb-1.5"
        >
          <div className="h-6 bg-gray-100 rounded-full dark:bg-gray-700 w-96"></div>
        </div>
      ) : (
        <h3 className="text-center">{currentPost?.title}</h3>
      )}

      {isLoading ? (
        <div
          role="status"
          className="flex justify-center my-6 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
        >
          <div className="h-3 bg-gray-100 rounded-full dark:bg-gray-700 w-56"></div>
        </div>
      ) : (
        <div className="flex justify-center items-center my-6">
          <p className="text-gray-5">
            {currentPost?.date} - {currentPost?.duration} min read
          </p>
        </div>
      )}

      <div
        role="status"
        className={
          'flex justify-center my-6 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center' +
          (!isLoading ? ' !hidden' : '')
        }
      >
        <div className="flex items-center justify-center w-full h-[420px] bg-gray-300 rounded  dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>

      <div
        className={'img-banner overflow-hidden' + (isLoading ? ' !hidden' : '')}
      >
        <img src={currentPost?.imageUrl} alt="Imagem do post" />
      </div>

      {isLoading ? (
        <div
          role="status"
          className="flex flex-col !items-start my-6 animate-pulse   rtl:space-x-reverse md:flex md:items-center"
        >
          <div className="h-6 bg-gray-100 rounded-full dark:bg-gray-700 w-4/5 mb-4"></div>

          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12 mb-2.5"></div>
        </div>
      ) : (
        <div className="flex flex-wrap w-full my-6">
          <h4>{currentPost?.resume}</h4>

          <p className="mt-2">{currentPost?.content}</p>
        </div>
      )}

      <div className="flex flex-wrap w-full my-6 justify-center">
        <div className="w-grid-12 lg:w-grid-6 m-4 py-4 card">
          <div className="flex flex-wrap w-full">
            <div className="w-grid-12 lg:w-grid-3 m-4 py-4 pl-2 justify-center">
              <div>
                <img
                  src={postAuthor?.imageProfile}
                  alt="Autor"
                  className="profile-img"
                />
              </div>
            </div>

            <div className="w-grid-12 lg:w-grid-9 m-4 py-4">
              <h6 className="text-primary-light">
                {postAuthor?.name} {postAuthor?.surname}
              </h6>

              <h6 className="text-gray-5">Autor</h6>
              <p className="mt-2">{postAuthor?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Post;
