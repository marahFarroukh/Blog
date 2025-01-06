import axios from "axios";
import { useRouter } from "next/navigation";
import { DOMAIN } from "../utils/constant";
import { toast } from "react-toastify";

function LogoutButton() {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      await axios.get(`${DOMAIN}/api/logout`);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("logout");
      router.push("/");
      router.refresh();
    } catch (error) {
      toast.warning("Something went worng");
      console.log(error);
    }
  };
  return (
    <>
      <button
        onClick={logoutHandler}
        className="bg-red-800 border mt-2 text-white font-bold py-2 px-4 rounded-md  hover:bg-red-950 disabled:bg-gray-500"
      >
        Logout
      </button>
    </>
  );
}

export default LogoutButton;
