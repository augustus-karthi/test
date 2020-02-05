import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import {tableIcons} from './mtable-styles';

class Mtable extends Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "name", field: "name" },
            { title: "surname", field: "surname" },
            { title: "birthyear", field: "birthYear"},
            { title: "birthCity", field: "birthCity"}
          ]}
          data={
            [...Array(50).keys()].map((item) => (
                { name: `Mehmet${item}`, surname: `Baran${item}`, birthYear: `1987${item}`, birthCity: `63${item}` }
            )) 
          }
          icons={tableIcons}
          options={{
            paging:false,
            showTitle:false,
          }}
        />
      </div>
    )
  }
}

export default Mtable;