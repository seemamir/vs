import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Table, Popover } from 'antd';
import Button from '../Button/Loadable';
import { Wrapper } from './Loadable';
import data from './data';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Field1',
    dataIndex: 'field1',
  },
  {
    title: 'Field2',
    dataIndex: 'field2',
  },
  {
    title: 'Field3',
    dataIndex: 'field3',
  },
  {
    title: 'Field4',
    dataIndex: 'field4',
  },
  {
    title: 'Field5',
    dataIndex: 'field5',
  },
  {
    title: 'Field6',
    dataIndex: 'field6',
  },
  {
    title: 'Field7',
    dataIndex: 'field7',
  },
];

class ListItems extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedRows: [],
    };
  }

  renderDetail = () => {
    if (this.state.selectedRows.length === 0) {
      return (
        <Popover content="please check any field from table" trigger="click">
          <Button className="primary-button">Submit</Button>
        </Popover>
      );
    }
    return (
      <Link className="primary-button" to="/detail">
        Submit
      </Link>
    );
  };
  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.props.selectedRows(selectedRows);
        this.setState({
          selectedRows,
        });
      },
    };
    return (
      <Wrapper>
        <Row>
          <Col xs={{ span: 8, offset: 4 }} lg={{ span: 6, offset: 6 }}>
            <h3 className="heading">
              <b>Type 1 Item</b>
            </h3>
          </Col>
          <Col xs={{ span: 8, offset: 4 }} lg={{ span: 6, offset: 6 }}>
            <h3 className="heading">
              <b>Type 1 Item</b>
            </h3>
          </Col>

          <Col xs={24} sm={24} lg={{ span: 24 }}>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              pagination={false}
            />
            {this.renderDetail()}
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default ListItems;
