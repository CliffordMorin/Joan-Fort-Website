import { FaHome, FaInfoCircle, FaVideo } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { TbVinyl } from "react-icons/tb";
import { BsFillCameraFill, BsCalendarEventFill } from "react-icons/bs";
import { AiFillPicture, AiFillMail } from "react-icons/ai";
import { GrDocumentDownload } from "react-icons/gr";
import { MdNewspaper } from "react-icons/md";

const navLinksDesktop = [
  { page: "Home", link: "/", id: 0, icon: FaHome },
  {
    page: "About",
    id: 1,
    icon: FaInfoCircle,
    children: [
      { page: "BIO", link: "/bio", id: 2, icon: TfiWrite },
      { page: "PRESS", link: "/press", id: 11, icon: MdNewspaper },
      { page: "DISCOGRAPHY", link: "/discography", id: 3, icon: TbVinyl },
    ],
  },
  {
    page: "Media",
    id: 4,
    icon: BsFillCameraFill,
    children: [
      { page: "VIDEOS", link: "/videos", id: 5, icon: FaVideo },
      { page: "PICTURES", link: "/pictures", id: 6, icon: AiFillPicture },
      {
        page: "Joan Fort EPK",
        link: "/Joan_Fort_EPK.pdf",
        id: 7,
        icon: GrDocumentDownload,
      },
      {
        page: "Joan Fort PR Sheet",
        link: "/Joan_Fort_PR_Sheet.pdf",
        id: 8,
        icon: GrDocumentDownload,
      },
    ],
  },
  { page: "SHOWS", link: "/calendar", id: 9, icon: BsCalendarEventFill },
  { page: "CONTACT", link: "/contact", id: 10, icon: AiFillMail },
];

export default navLinksDesktop;
