import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loader = ({ loading }) => {
  useEffect(() => {
    if (loading) {
      toast.info(
        <div>
          <div className="spinner"></div>
          <span>Fetching data...</span>
        </div>,
        {
          autoClose: false,
          closeOnClick: false,
          draggable: false,
        }
      );
    } else {
      toast.dismiss();
    }
  }, [loading]);

  return <ToastContainer />;
};

export default Loader;
