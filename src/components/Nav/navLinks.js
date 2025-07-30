import { FaHome, FaInfoCircle, FaVideo } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { TbVinyl } from "react-icons/tb";
import { BsFillCameraFill, BsCalendarEventFill } from "react-icons/bs";
import { AiFillPicture, AiFillMail } from "react-icons/ai";
import { GrDocumentDownload } from "react-icons/gr";

const navLinksDesktop = [
  { page: "Home", link: "/", id: 0, icon: FaHome },
  {
    page: "About",
    id: 1,
    icon: FaInfoCircle,
    children: [
      { page: "BIO", link: "/bio", id: 2, icon: TfiWrite },
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
        link: "https://www.notion.so/Joan-Fort-Trio-EPK-2278bb79968c80a7b137fb54382d8490?source=copy_link",
        id: 7,
        icon: GrDocumentDownload,
      },
      {
        page: "Dam Jawn EPK",
        link: "/Booklet The Dam Jawn feat. Jeremy Pelt 2.pdf",
        id: 8,
        icon: GrDocumentDownload,
      },
    ],
  },
  { page: "SHOWS", link: "/calendar", id: 9, icon: BsCalendarEventFill },
  { page: "CONTACT", link: "/contact", id: 10, icon: AiFillMail },
];

export default navLinksDesktop;
