type Props = { loading: boolean };

const Loader = (props: Props) => {
  const show = props.loading ? "show fullscreen" : "fullscreen";
  return (
    <>
      <div id="loader" className={show}>
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="6"
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="6"
            strokeMiterlimit="10"
            stroke="#cf112f"
          />
        </svg>
      </div>
    </>
  );
};

export default Loader;
