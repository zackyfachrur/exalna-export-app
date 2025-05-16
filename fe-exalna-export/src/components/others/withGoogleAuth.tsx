import { useGoogleLogin } from '@react-oauth/google';

const GoogleButton = () => {
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        const userInfo = await res.json();
        console.log("Google user info:", userInfo);

      } catch (error) {
        console.error("Google login error:", error);
      }
    },
    onError: (errorResponse) => {
      console.error("Login Failed:", errorResponse);
    },
  });

  return (
    <button
      onClick={() => loginWithGoogle()}
      className="bg-white border border-gray-300 text-black font-medium px-4 py-2 rounded-2xl cursor-pointer hover:opacity-85 flex flex-row justify-center items-center gap-1 animate active:scale-95 w-full"
    >
      <img
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        alt="Google Icon"
        className="w-[35px] h-[35px]"
      />
      Continue with Google
    </button>
  );
};

export default GoogleButton;
