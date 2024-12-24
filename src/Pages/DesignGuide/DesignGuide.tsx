import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { CompanyKeyMetrics } from "../../company";
import { testIncomeStatementData } from "../../Components/Table/testData";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>Finshark Design Guide</h1>
      <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table />
      <h3>
        This is Finshark's design guide. This is where we well house various
        design aspects of the app
      </h3>
    </>
  );
};

export default DesignGuide;
