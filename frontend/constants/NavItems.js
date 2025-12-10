import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import { GoHome, GoHomeFill, GoSearch } from "react-icons/go";
import { LuCircleUserRound } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { RiSearchFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";

export const NAV_ITEMS = [
  {
    label: "Home",
    iconOff: GoHome,
    iconOn: GoHomeFill,
    url: "/feeds",
  },
  {
    label: "Search",
    iconOff: GoSearch,
    iconOn: RiSearchFill,
    url: "/search",
  },

  {
    label: "Create Post",
    iconOff: IoIosAddCircleOutline,
    iconOn: IoIosAddCircle,
    url: "/createpost",
  },

  {
    label: "Messages",
    iconOff: AiOutlineMessage,
    iconOn: AiFillMessage,
    url: "/messages",
  },
  {
    label: "Profile",
    iconOff: LuCircleUserRound,
    iconOn: FaCircleUser,
    url: "/profile",
  },
];
