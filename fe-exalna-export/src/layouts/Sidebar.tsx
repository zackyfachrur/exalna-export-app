import { motion, NavLink, AnimatePresence } from "@libs/pages";
import { NavigateProps } from "@type/layouts";
import { useMotionLayout } from "@hooks/useMotionLayout";
import { SidebarList } from "./SidebarSupport";
import { useAuth } from "@hooks/useAuth";

const Sidebar = () => {
  const { isLoggedIn, handleLogout } = useAuth();
  const { showSide, setShowSide } = useMotionLayout();
  const listStyle =
    "flex gap-2 flex-row font-medium cursor-pointer px-4 py-2 text-lg text-gray-600 hover:text-gray-900 select-none";
  const listActive =
    "relative before:content-[''] before:w-10 before:h-10 before:rounded-r-full before:bg-blue-600 before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:-translate-x-5 flex gap-2 flex-row font-medium cursor-pointer px-4 py-2 text-lg text-gray-900 select-none";

  return (
    <AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white font-bold cursor-pointer w-[50px] h-[45px] mx-4 my-4 rounded-lg px-4 py-2 fixed z-50 top-0 left-0"
        onClick={() => setShowSide(!showSide)}
      >
        <i
          className={showSide === false ? `ri-menu-5-line` : `ri-close-line`}
        ></i>
      </motion.button>
      <motion.div
        initial={{ opacity: 1, x: 0 }}
        animate={{ x: showSide ? 0 : -160 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`bg-white w-[250px] flex flex-col justify-between pt-12 fixed left-0 top-0 h-full z-40`}
      >
        <>
          <motion.ul
            key="sidebar-navigation"
            initial={{ opacity: 0, x: -100 }} // Masuk dari kiri
            animate={{ opacity: 1, x: 0 }} // Animasi saat muncul
            exit={{ opacity: 0, x: -100 }} // Animasi saat keluar
            transition={{ duration: 1.5 }} // Durasi transisi
            className="py-12 flex flex-col"
          >
            {Navigate.map((content, index) => (
              <SidebarList key={index} className={listStyle}>
                <NavLink
                  to={content.to}
                  className={({ isActive }) =>
                    isActive ? listActive : listStyle
                  }
                >
                  {content.icon}
                  <span>{content.text}</span>
                </NavLink>
              </SidebarList>
            ))}
          </motion.ul>
          <motion.ul
            key="sidebar-actions"
            initial={{ opacity: 0, y: 20 }} // Masuk dari bawah
            animate={{ opacity: 1, y: 0 }} // Animasi saat muncul
            exit={{ opacity: 0, y: 20 }} // Animasi saat keluar
            transition={{ duration: 1.5 }}
            className="px-8 py-12 flex gap-4 flex-col"
          >
            {isLoggedIn ? (
              <motion.div
                initial={{ opacity: 1, x: 0 }}
                animate={{ x: showSide ? 0 : -160 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4"
              >
                <li>
                  <button className="bg-blue-600 text-white font-bold px-4 py-2 w-full rounded-2xl cursor-pointer flex gap-2 justify-center items-center hover:bg-blue-500">
                    <i className="ri-add-line text-xl"></i>
                    <span>Create Order</span>
                  </button>
                </li>
                <li>
                  <button className="flex flex-row gap-2 font-medium px-4 cursor-pointer hover:opacity-80 animate text-lg">
                    <i className="ri-settings-2-line text-xl"></i>
                    <span>Settings</span>
                  </button>
                </li>
                <li>
                  <button
                    className="flex flex-row gap-2 font-medium px-4 cursor-pointer hover:opacity-80 animate text-lg"
                    onClick={handleLogout}
                  >
                    <i className="ri-logout-circle-line text-xl"></i>
                    <span>Logout</span>
                  </button>
                </li>
              </motion.div>
            ) : null}
          </motion.ul>
        </>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;

const Navigate: NavigateProps[] = [
  {
    icon: <i className="ri-home-3-line"></i>,
    to: "/",
    text: "Home",
  },
  {
    icon: <i className="ri-folder-line"></i>,
    to: "/saved",
    text: "Saved",
  },
  {
    icon: <i className="ri-inbox-unarchive-fill"></i>,
    to: "/export",
    text: "Export",
  },
    {
    icon: <i className="ri-inbox-archive-fill"></i>,
    to: "/import",
    text: "Import",
  },
  {
    icon: <i className="ri-bard-line"></i>,
    to: "/chat",
    text: "Ask AI",
  },
  {
    icon: <i className="ri-message-3-line"></i>,
    to: "/messages",
    text: "Messages",
  },
];
