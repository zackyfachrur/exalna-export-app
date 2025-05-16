import { toast, ToastOptions } from 'react-toastify';
import BrandLogo from "@assets/img/Web-Logo-White.png"

const Notifications = (message: string) => {
  const options: ToastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    style: {
      background: '#155DFC',
      color: '#fff ',
      fontWeight: 'bold',
      borderRadius: '10px',
    },
    icon: (
      <img 
        src={BrandLogo}
        alt="warning" 
        style={{ width: 24, height: 24 }}
      />
    ),
  };

  toast.success(message, options);
};

export default Notifications;