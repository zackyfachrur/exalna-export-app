import { ButtonBlue, ButtonTransparent } from "@components/ui/Button";
import { useAuth } from "@hooks/useAuth"

const Navigation = () => {

  const { isLoggedIn } = useAuth();

  return (
    <>
      <nav className="fixed right-8 top-2 flex justify-between items-center h-[80px] z-50 gap-2 drop-shadow-2xl">
        {isLoggedIn ? (
          <div className="flex flex-row gap-8 justify-center items-center bg-white px-8 rounded-2xl py-4">
            <i className="ri-search-line text-2xl cursor-pointer"></i>
            <i className="ri-notification-2-line text-2xl cursor-pointer"></i>
            <div className="hover:bg-blue-600 px-2 py-1 rounded-full cursor-pointer hover:text-white animate">
              <i className="ri-user-line text-2xl"></i>
            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-8 justify-center items-center bg-white px-8 rounded-2xl py-4">
            <div className="flex gap-1 border-2 rounded-2xl px-2 py-1 border-blue-600">
              <ButtonTransparent
                onClick={() => window.location.assign("/sign-in")}
              >
                Sign In
              </ButtonTransparent>
              <ButtonBlue onClick={() => window.location.assign("/sign-up")}>
                Sign Up
              </ButtonBlue>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
