import { Fragment, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

export const BackButton = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Fragment>
      {pathname !== "/" ? (
        <button className="back-button" onClick={(e) => history.goBack()}>
          &#8592;
        </button>
      ) : (
        ""
      )}
    </Fragment>
  );
};
