import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";

type Props = {};

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>Finshark Design Guide</h1>
      <RatioList />
      <Table />
      <h3>
        This is Finshark's design guide. This is where we well house various
        design aspects of the app
      </h3>
    </>
  );
};

export default DesignGuide;
