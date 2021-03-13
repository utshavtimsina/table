import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class App extends Component {
  state = {
    records: [],
    loading: true,
  };

  async getUsersData() {
    try {
      const res = await axios.get("/client-records/find/all");
      let tableData =
        res &&
        res.data &&
        res.data.map((d, index) => ({ ...d, sn: index + 1 }));
      this.setState({ loading: false, records: [...tableData] });
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.getUsersData();
  }

  render() {
    const columns = [
      {
        Header: "S.N",
        accessor: "sn",
      },
      {
        Header: "Name",
        accessor: "clientFullName",
      },

      {
        Header: "Domain",
        accessor: "clientDomain",
      },
      {
        Header: "Phone",
        accessor: "clientContactNo",
      },
      {
        Header: "Email",
        accessor: "clientEmail",
      },
      {
        Header: "Contract Date",
        accessor: "contractDate",
      },
    ];
    return <ReactTable data={this.state.records} columns={columns} />;
  }
}
