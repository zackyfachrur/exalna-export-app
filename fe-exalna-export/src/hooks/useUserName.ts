const useUserName = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return user?.username || null;
};

export default useUserName;