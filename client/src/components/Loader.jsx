import React from "react";
import { FallingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <FallingLines color="purple" width="100" visible={true} />
    </div>
  );
};

export default Loader;
