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
    const res = await axios.get("/client-records/find/all");
    this.setState({ loading: false, records: res.data });
  }

  componentDidMount() {
    this.getUsersData();
  }

  render() {
    const columns = [
      {
        Header: "ID",
        accessor: "id",
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
