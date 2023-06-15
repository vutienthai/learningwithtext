export const TextIcon = (props: { size: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill="currentColor"
      className="bi bi-file-text-fill"
      viewBox="0 0 16 16"
    >
      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
    </svg>
  );
};

export const EditIcon = (props: { size: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill="currentColor"
      className="bi bi-pencil-square"
      viewBox="0 0 16 16"
    >
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
      <path
        fillRule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
      />
    </svg>
  );
};

export const GenerateIcon = (props: { size: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill="currentColor"
      className="bi bi-gear-wide-connected"
      viewBox="0 0 16 16"
    >
      <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
    </svg>
  );
};

export const LinkedInIcon = (props: { size: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill="currentColor"
      className="bi bi-linkedin"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  );
};

export const GitHubIcon = (props: { size: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill="currentColor"
      className="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
};

export const EmailIcon = (props: { size: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill="currentColor"
      className="bi bi-envelope-at-fill"
      viewBox="0 0 16 16"
    >
      <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
      <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
    </svg>
  );
};

export const LogoutIcon = (props: { size: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill="currentColor"
      className="bi bi-person-fill-x"
      viewBox="0 0 16 16"
    >
      <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z" />
    </svg>
  );
};

export const RightArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="currentColor"
      className="bi bi-arrow-right-circle-fill"
      viewBox="0 0 16 16"
    >
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
    </svg>
  );
};

export const Yahoo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={60}
      viewBox="-39.687495 -18.34385 343.95829 110.0631"
    >
      <g transform="translate(260.9554 41.2138)" fill="#f9f4da">
        <path d="M-260.9554-23.3516h15.741l9.1657 23.4497 9.2848-23.4497h15.3264l-23.0782 55.5131h-15.4235l6.3172-14.71zm65.484-.9334c-11.827 0-19.3036 10.6068-19.3036 21.1696 0 11.8863 8.1972 21.31 19.0792 21.31 8.1176 0 11.1783-4.9458 11.1783-4.9458v3.8526h13.7291v-40.4527h-13.7291v3.6775s-3.4148-4.6113-10.954-4.6113zm2.9202 12.9998c5.457 0 8.2731 4.318 8.2731 8.2143 0 4.1955-3.017 8.3127-8.273 8.3127-4.3563 0-8.293-3.56-8.293-8.1342 0-4.639 3.1665-8.3928 8.293-8.3928zm26.4911 28.3864v-58.315h14.3598v21.68s3.4109-4.7463 10.5543-4.7463c8.738 0 13.8575 6.5105 13.8575 15.8137v25.5676h-14.2548V-4.964c0-3.1484-1.4997-6.1899-4.8968-6.1899-3.458 0-5.2602 3.0876-5.2602 6.19v22.065zm63.2546-41.3815c-13.544 0-21.6088 10.299-21.6088 21.3332 0 12.5572 9.7646 21.1416 21.6601 21.1416 11.5297 0 21.6185-8.1948 21.6185-20.931 0-13.9355-10.5633-21.5438-21.6698-21.5438zm.1294 13.1142c4.7842 0 8.0945 3.9847 8.0945 8.234 0 3.6244-3.0846 8.0946-8.0945 8.0946-4.5906 0-8.0357-3.6824-8.0357-8.1342 0-4.2886 2.8642-8.1944 8.0357-8.1944zm45.4632-13.1142c-13.544 0-21.6089 10.299-21.6089 21.3332 0 12.5572 9.7647 21.1416 21.6602 21.1416 11.5297 0 21.6185-8.1948 21.6185-20.931 0-13.9355-10.5633-21.5438-21.6698-21.5438zm.1293 13.1142c4.7843 0 8.0946 3.9847 8.0946 8.234 0 3.6244-3.0846 8.0946-8.0946 8.0946-4.5906 0-8.0356-3.6824-8.0356-8.1342 0-4.2886 2.8642-8.1944 8.0356-8.1944z" />
        <circle r="9.5355" cy="8.4245" cx="-24.2122" />
        <path d="M-11.5434-4.6137h-17.1664l15.2355-36.6001H3.6279z" />
      </g>
    </svg>
  );
};

export const TechCrunch = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      viewBox="-27 -22.5 234 135"
    >
      <path
        fill="#f9f4da"
        d="M60 30v60H30V30H0V0h90v30zm60-30h60v30h-60zM90 90V30h30v30h60v30z"
      />
    </svg>
  );
};

export const TheNewYorkTimes = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={60}
      viewBox="-27.615 -6.05 239.33 36.3"
      fill="#f9f4da"
    >
      <path d="M13.8 2.5c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8C6.2 1 5 .6 4 .6 2 .6.6 2.1.6 3.8c0 1.5 1.1 2 1.5 2.2l.1-.2c-.2-.2-.5-.4-.5-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8v3.1L9 9.8v.1l1.5 1.3v4.3c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2V5.6l-5 2.2C3.6 6.5 4.7 5.6 5.8 5l-.1-.3c-3 .8-5.7 3.6-5.7 7 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1l-1.6-1.3V5.4c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7 0-1.5.2-2.1l2.1-.9zm10.6 2.3l-1.3 1 .2.2.6-.5 2.2 2 3-2-.1-.2-.8.5-1-1V9l.8-.6L21 9.8v6.1c0 3.8-.8 4.4-2.5 5v.3c2.8.1 5.4-.8 5.4-5.7V8.9l.9-.7-.2-.2-.8.6-2.5-2.1-2.8 2.1V.4h-.2l-3.5 2.4V3c.4.2 1 .4 1 1.5zM34 14.7l-2.5 1.9-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6zM29 13V8.1l.2-.1 2.2 3.5zM53.1 1.6c0-.3-.1-.6-.2-.9h-.2c-.3.8-.7 1.2-1.7 1.2-.9 0-1.5-.5-1.9-.9l-2.9 3.3.2.2 1-.9c.6.5 1.1.9 2.5 1v8.3L44 2.8C43.5 2 42.8.9 41.4.9c-1.6 0-3 1.4-2.8 3.6h.3c.1-.6.4-1.3 1.1-1.3.5 0 1 .5 1.3 1v3.3c-1.8 0-3 .8-3 2.3 0 .8.4 2 1.6 2.3v-.2c-.2-.2-.3-.4-.3-.7 0-.5.4-.9 1.1-.9h.5v4.2c-2.1 0-3.8 1.2-3.8 3.2 0 1.9 1.6 2.8 3.4 2.7v-.2c-1.1-.1-1.6-.6-1.6-1.3 0-.9.6-1.3 1.4-1.3.8 0 1.5.5 2 1.1l2.9-3.2-.2-.2-.7.8c-1.1-1-1.7-1.3-3-1.5v-10l8 14h.6v-14c1.5-.1 2.9-1.3 2.9-3zm7.3 13.1l-2.5 1.9-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.6l-1 .8.2.2.9-.7 3.4 2.5 4.5-3.6zm-5-1.7V8.1l.2-.1 2.2 3.5zm21.3-5.4l-.7.5-1.9-1.6-2.2 2 .9.9v7.5l-2.4-1.5V9.2l.8-.5-2.3-2.2-2.2 2 .9.9v7.2l-.3.2-2.1-1.5v-6c0-1.4-.7-1.8-1.5-2.3-.7-.5-1.1-.8-1.1-1.5 0-.6.6-.9.9-1.1v-.2c-.8 0-2.9.8-2.9 2.7 0 1 .5 1.4 1 1.9s1 .9 1 1.8v5.8l-1.1.8.2.2 1-.8 2.3 2 2.5-1.7 2.8 1.7 5.3-3.1V8.8l1.3-1zm18.6-5.5l-1 .9-2.2-2-3.3 2.4V1.2h-.3l.1 16.2c-.3 0-1.2-.2-1.9-.4l-.2-13.5c0-1-.7-2.4-2.5-2.4s-3 1.4-3 2.8h.3c.1-.6.4-1.1 1-1.1s1.1.4 1.1 1.7v3.9c-1.8.1-2.9 1.1-2.9 2.4 0 .8.4 2 1.6 2v-.2c-.4-.2-.5-.5-.5-.7 0-.6.5-.8 1.3-.8h.4v6.2c-1.5.5-2.1 1.6-2.1 2.8 0 1.7 1.3 2.9 3.3 2.9 1.4 0 2.6-.2 3.8-.5 1-.2 2.3-.5 2.9-.5.8 0 1.1.4 1.1.9 0 .7-.3 1-.7 1.1v.2c1.6-.3 2.6-1.3 2.6-2.8 0-1.5-1.5-2.4-3.1-2.4-.8 0-2.5.3-3.7.5-1.4.3-2.8.5-3.2.5-.7 0-1.5-.3-1.5-1.3 0-.8.7-1.5 2.4-1.5.9 0 2 .1 3.1.4 1.2.3 2.3.6 3.3.6 1.5 0 2.8-.5 2.8-2.6V3.3l1.2-1zm-4.1 6.1c-.3.3-.7.6-1.2.6s-1-.3-1.2-.6V3.8l1-.7 1.4 1.3zm0 3c-.2-.2-.7-.5-1.2-.5s-1 .3-1.2.5V8.6c.2.2.7.5 1.2.5s1-.3 1.2-.5zm0 4.7c0 .8-.5 1.6-1.6 1.6h-.8v-5.9c.2-.2.7-.5 1.2-.5s.9.3 1.2.5zm13.7-7.1l-3.2-2.3-4.9 2.8v6.5l-1 .8.1.2.8-.6 3.2 2.4 5-3zm-5.4 6.3V7.9l2.5 1.8v7.1zm14.9-8.4h-.2c-.3.2-.6.4-.9.4-.4 0-.9-.2-1.1-.5h-.2l-1.7 1.9-1.7-1.9-3 2 .1.2.8-.5 1 1.1v6.3l-1.3 1 .2.2.6-.5 2.4 2 3.1-2.1-.1-.2-.9.5-1.2-1v-7c.5.5 1.1 1 1.8 1 1.4.1 2.2-1.3 2.3-2.9zm12 9.6l-3.4 2.3-4.6-7 3.3-5.1h.2c.4.4 1 .8 1.7.8s1.2-.4 1.5-.8h.2c-.1 2-1.5 3.2-2.5 3.2s-1.5-.5-2.1-.8l-.3.5 5 7.4 1-.6zm-11-.5l-1.3 1 .2.2.6-.5 2.2 2 3-2-.2-.2-.8.5-1-1V.4h-.1l-3.6 2.4V3c.4.2 1 .3 1 1.5zM143 2.5c0-2-1.9-2.5-3.4-2.5v.3c.9 0 1.6.3 1.6 1 0 .4-.3 1-1.2 1-.7 0-2.2-.4-3.3-.8-1.3-.4-2.5-.8-3.5-.8-2 0-3.4 1.5-3.4 3.2 0 1.5 1.1 2 1.5 2.2l.1-.2c-.3-.2-.6-.4-.6-1 0-.4.4-1.1 1.4-1.1.9 0 2.1.4 3.7.9 1.4.4 2.9.7 3.7.8v3.1l-1.5 1.3v.1l1.5 1.3v4.3c-.8.5-1.7.6-2.5.6-1.5 0-2.8-.4-3.9-1.6l4.1-2v-7l-5 2.2c.5-1.3 1.6-2.2 2.6-2.9l-.1-.2c-3 .8-5.7 3.5-5.7 6.9 0 4 3.3 7 7 7 4 0 6.6-3.2 6.6-6.5h-.2c-.6 1.3-1.5 2.5-2.6 3.1v-4.1l1.6-1.3v-.1L140 8.4v-3c1.5 0 3-1 3-2.9zm-8.7 11l-1.2.6c-.7-.9-1.1-2.1-1.1-3.8 0-.7.1-1.5.3-2.1l2.1-.9zm12.2-12h-.1l-2 1.7v.1l1.7 1.9h.2l2-1.7v-.1zm3 14.8l-.8.5-1-1V8.9l1-.7-.2-.2-.7.6-1.8-2.1-2.9 2 .2.3.7-.5.9 1.1v6.5l-1.3 1 .1.2.7-.5 2.2 2 3-2zm16.7-.1l-.7.5-1.1-1V8.9l1-.8-.2-.2-.8.7-2.3-2.1-3 2.1-2.3-2.1-2.8 2.1-1.8-2.1-2.9 2 .1.3.7-.5 1 1.1v6.5l-.8.8 2.3 1.9 2.2-2-.9-.9V8.9l.9-.6 1.5 1.4v6l-.8.8 2.3 1.9 2.2-2-.9-.9V8.9l.8-.5 1.6 1.4v6l-.7.7 2.3 2.1 3.1-2.1zm8.7-1.5l-2.5 1.9-2.5-2v-1.2l4.7-3.2v-.1l-2.4-3.6-5.2 2.8v6.8l3.5 2.5L175 15zm-5-1.7V8.1l.2-.1 2.2 3.5zm14.1-.9l-1.9-1.5c1.3-1.1 1.8-2.6 1.8-3.6v-.6h-.2c-.2.5-.6 1-1.4 1-.8 0-1.3-.4-1.8-1L176 8.9v3.6l1.7 1.3c-1.7 1.5-2 2.5-2 3.3 0 1 .5 1.7 1.3 2l.1-.2c-.2-.2-.4-.3-.4-.8 0-.3.4-.8 1.2-.8 1 0 1.6.7 1.9 1l4.3-2.6v-3.6zm-1.1-3c-.7 1.2-2.2 2.4-3.1 3l-1.1-.9V7.7c.4 1 1.5 1.8 2.6 1.8.7 0 1.1-.1 1.6-.4zm-1.7 8c-.5-1.1-1.7-1.9-2.9-1.9-.3 0-1.1 0-1.9.5.5-.8 1.8-2.2 3.5-3.2l1.2 1z" />
    </svg>
  );
};

export const Bloomberg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={60}
      viewBox="-38.67 -11.8756 335.14 71.2536"
      fill="#f9f4da"
    >
      <path d="M0 0h18.9c3.6 0 6.3.9 8.3 2.4 2.2 1.8 3.4 4.4 3.4 7.6 0 3.7-1.5 6-4.5 7.4v.2c4 1.3 6.3 4.9 6.3 9.2 0 4.1-1.6 7.3-4.2 9.3-2.2 1.6-5 2.3-8.8 2.3H0zm17 15c2 0 3.5-1.1 3.5-3.4 0-2.2-1.5-3.3-3.6-3.3h-6.5v6.6H17zm.9 14.9c2.3 0 4-1.4 4-3.9 0-2.7-1.8-3.9-4-3.9h-7.4V30h7.4zM34.1 0H44v38.5h-9.9zM46 24.8c0-8.7 5.6-14.5 14.3-14.5 8.7 0 14.2 5.9 14.2 14.5 0 8.7-5.5 14.5-14.2 14.5S46 33.5 46 24.8zm18.6 0c0-4.8-1.5-7.8-4.5-7.8s-4.4 3-4.4 7.8 1.4 7.9 4.4 7.9c3-.1 4.5-3.1 4.5-7.9zm11 0c0-8.7 5.6-14.5 14.3-14.5 8.7 0 14.1 5.8 14.1 14.5s-5.5 14.5-14.2 14.5c-8.6 0-14.2-5.8-14.2-14.5zm18.6 0c0-4.8-1.5-7.8-4.5-7.8s-4.4 3-4.4 7.8 1.4 7.9 4.4 7.9c3-.1 4.5-3.1 4.5-7.9zM106 11h9.2v4.1h.2c1.8-3.2 4.3-4.9 8.3-4.9 3.5 0 6.1 1.7 7.4 4.7h.2c2.2-3.6 5.1-4.7 8.5-4.7 6.4 0 9.1 4.7 9.1 11v17.2h-9.6V22.9c0-2.8-.9-4.6-3.3-4.6s-3.6 2.2-3.6 5.2v14.9h-9.6V22.9c0-2.8-.9-4.6-3.3-4.6s-3.6 2.2-3.6 5.2v14.9H106V11zm55 23.8h-.1v3.6h-9.2V0h9.6v13.8h.2c1.8-2.4 4.3-3.7 7.8-3.7 6.9 0 10.9 6.2 10.9 14.5 0 9.3-4.3 14.7-11.5 14.7-3 0-6.1-1.4-7.7-4.5zm9.3-10.3c0-4.4-1.6-7.3-4.5-7.3-3 0-4.8 2.9-4.8 7.3s1.9 7.3 4.8 7.3 4.5-2.8 4.5-7.3zm11 .2c0-8.6 5.7-14.5 13.9-14.5 4.1 0 7.2 1.3 9.6 3.6 3.2 3.1 4.6 7.9 4.5 13.5h-18.4c.4 3.4 2 5.2 4.9 5.2 1.7 0 3.2-.8 3.8-2.6h9.3c-1.6 6.3-6.5 9.4-13.4 9.4-8.5-.1-14.2-5.9-14.2-14.6zm9.6-2.9h8.8c-.2-3.3-2-5-4.3-5-2.7-.1-4.2 1.8-4.5 5zm29.3-6.1h.2c2-3.8 4.6-5.3 7.9-5.3.8 0 1.3.1 1.6.3v8.4h-.2c-5.7-1-9 1.7-9 7.9v11.5H211V11h9.2zm10.7 22.8h9.3c.4 1.2 1.6 2.3 3.9 2.3 3.1 0 4.2-1.9 4.2-4.8v-2h-.2c-1.5 1.8-3.6 3.1-6.6 3.1-5.9 0-11.1-4.4-11.1-13 0-7.9 4.2-14 10.6-14 3.7 0 5.9 1.5 7.4 3.8h.2v-3h9.2v23.8c0 4.4-1.5 7.8-3.8 9.8-2.4 2.1-5.8 3-9.7 3-7.4.1-12.5-2.9-13.4-9zm17.8-14.8c0-3.4-1.6-6.2-4.4-6.2-2.7 0-4.4 2.4-4.4 6.2 0 3.7 1.7 6.3 4.4 6.3s4.4-2.7 4.4-6.3z" />
    </svg>
  );
};

export const PlayStoreIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      fill="currentColor"
      className="bi bi-google-play text-light-yellow"
      viewBox="0 0 16 16"
    >
      <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
    </svg>
  );
};

export const AppleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      fill="currentColor"
      className="bi bi-apple text-light-yellow"
      viewBox="0 0 16 16"
    >
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
    </svg>
  );
};

export const GripIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      fill="currentColor"
      className="bi bi-grip-horizontal"
      viewBox="0 0 16 16"
    >
      <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
};

export const AwardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      fill="currentColor"
      className="bi bi-award-fill"
      viewBox="0 0 16 16"
    >
      <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
    </svg>
  );
};

export const BookmarkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      fill="currentColor"
      className="bi bi-bookmark-star-fill"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"
      />
    </svg>
  );
};

export const BezierIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={100}
      height={100}
      fill="currentColor"
      className="bi bi-bezier2"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
      />
    </svg>
  );
};

export const QuoteIcon = (props: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="currentColor"
      className={`bi bi-quote ${props.color}`}
      viewBox="0 0 16 16"
    >
      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
    </svg>
  );
};

export const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="currentColor"
      className="bi bi-star-fill text-yellow-1"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
};

export const OpenMenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="currentColor"
      className="bi bi-android text-yellow-1"
      viewBox="0 0 16 16"
    >
      <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.94 8.94 0 0 1 8 5a8.94 8.94 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
};

export const CloseMenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="currentColor"
      className="bi bi-android2 text-yellow-1"
      viewBox="0 0 16 16"
    >
      <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z" />
    </svg>
  );
};