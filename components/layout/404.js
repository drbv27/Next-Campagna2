import React from "react";
import { css } from "@emotion/react";

const Error404 = () => {
  return (
    <>
      <h1
        css={css`
          margin-top: 5rem;
          text-align: center;
          font-size: 4rem;
          font-weight: bold;
        `}
      >
        404
      </h1>
      <h1
        css={css`
          text-align: center;
          font-size: 4rem;
          font-weight: bold;
        `}
      >
        Simpatizante No existente
      </h1>
    </>
  );
};

export default Error404;
