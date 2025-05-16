const useUserId = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return user?.id || null;
};

export default useUserId;