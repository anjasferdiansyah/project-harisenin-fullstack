const List = (props) => {
  const { children, href } = props;
  return (
    <a href={href}>
      <span className="text-xs relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 hover:after:w-[100%] after:h-[1px] after:transition-[width] after:duration-[550ms] after:ease-[cubic-bezier(.19,1,.22,1)] after:delay-0 after:bg-white">
        {children}
      </span>
    </a>
  );
};

export default List;
