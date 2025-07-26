import { useEffect } from 'react';
import { useParams } from '@tanstack/react-router';
import AxiosInstance from '../utils/AxiosInstance.js';

const RedirectPage = () => {
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    AxiosInstance.get(`/${id}`)
      .then((res) => {
        if (res.data && res.data.long_url) {
          window.location.replace(res.data.long_url);
        } else if (res.request?.responseURL) {
          // If backend does a redirect, follow it
          window.location.replace(res.request.responseURL);
        } else {
          window.location.replace('/');
        }
      })
      .catch(() => {
        window.location.replace('/');
      });
  }, [id]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;
