import ButtonSocial from "../../molecules/Footer/ButtonSocial";
import IconFacebook from "../../../assets/img/icon-facebook.svg";
import IconInstagram from "../../../assets/img/icon-instagram.svg";
import IconYoutube from "../../../assets/img/icon-youtube.svg";
const FollowUs = () => {
  return (
    <div className="flex flex-col gap-3 grow">
      <span className="font-bold">IKUTI KAMI</span>
      <div className="flex gap-3 text-red-50 border-red-500">
        <ButtonSocial
          path={IconFacebook}
          classname="before:from-blue-500 before:to-blue-300"
        />
        <ButtonSocial
          path={IconInstagram}
          classname="before:from-rose-500 before:to-rose-300"
        />
        <ButtonSocial
          path={IconYoutube}
          classname="before:from-red-500 before:to-red-600"
        />
      </div>
      <hr className="my-3 md:hidden" />
      <span className="font-bold md:my-10">
        &copy; DEKKER OLIFANTA BV / PROTEST
      </span>
    </div>
  );
};

export default FollowUs;
