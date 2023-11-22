import "../scss/loadingAnimation.scss";

export const LoadingAnimation = () => {
  return (
    <>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
