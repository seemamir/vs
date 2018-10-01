import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Table } from 'antd';
import Button from '../Button/Loadable';
import { Wrapper } from './Loadable';
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

// rowSelection object indicates the need for row selection

class ListItems extends React.Component {
  constructor() {
    super();
    this.state = {
      // selectedRows: [],
    };
  }
  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        this.props.selectedRows(selectedRows);
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
            <Link to="/detail">Submit</Link>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

export default ListItems;
