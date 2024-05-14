import ListFooter from "./ListFooter";
import FollowUs from "./FollowUs";
import NewsLatter from "./NewsLatter";
import Reviews from "./Reviews";
import { Facebook, Instagram, Youtube, YoutubeIcon } from "lucide-react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-[#213875] text-white py-8 mt-16 gap-4">
      <div className="flex gap-4 items-center">
        <Link to="https://www.facebook.com/protestsportswear">
          <Facebook size={18} />
        </Link>
        <Link to="https://www.instagram.com/protestsportswear/">
          <Instagram size={18} />
        </Link>
        <Link to="https://www.youtube.com/ProtestMovieChannel">
          <Youtube size={23} />
        </Link>
      </div>
      <div>Copyright &copy; Kelompok 7. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
