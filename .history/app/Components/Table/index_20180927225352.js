import React from 'react';
import { Row, Col, Table } from 'antd';
import DefaultButton from '../Button/Loadable';
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
];
const data = [
  {
    key: '1',
    name: 'Name1',
    field1: 'value1',
    field2: 'value2',
    field3: 'value3',
    field4: 'value4',
    field5: 'value5',
    field6: 'value6',
  },
  {
    key: '2',
    name: 'Name1',
    field1: 'value1',
    field2: 'value2',
    field3: 'value3',
    field4: 'value4',
    field5: 'value5',
    field6: 'value6',
  },
  {
    key: '3',
    name: 'Name1',
    field1: 'value1',
    field2: 'value2',
    field3: 'value3',
    field4: 'value4',
    field5: 'value5',
    field6: 'value6',
  },
  {
    key: '4',
    name: 'Name1',
    field1: 'value1',
    field2: 'value2',
    field3: 'value3',
    field4: 'value4',
    field5: 'value5',
    field6: 'value6',
  },
  {
    key: '5',
    name: 'Name1',
    field1: 'value1',
    field2: 'value2',
    Field3: 'value3',
    field4: 'value4',
    field5: 'value5',
    field6: 'value6',
  },
  {
    key: '6',
    name: 'Name1',
    field1: 'value1',
    field2: 'value2',
    field3: 'value3',
    field4: 'value4',
    field5: 'value5',
    field6: 'value6',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    );
  },
};
const ListItems = () => (
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
        <DefaultButton />
      </Col>
    </Row>
  </Wrapper>
);

ListItems.propTypes = {};

export default ListItems;
