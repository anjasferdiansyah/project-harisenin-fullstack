const ButtonSocial = (props) => {
  const { path, classname } = props;
  return (
    <button
      className={`border p-3 relative font-bold overflow-hidden rounded-full transition-all duration-400 ease-in-out hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r ${classname} before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0`}
    >
      <img src={path} alt="social-facebook" width={13} />
    </button>
  );
};

export default ButtonSocial;
