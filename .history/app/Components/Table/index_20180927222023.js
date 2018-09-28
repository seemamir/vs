import React from 'react';
import { Row, Col, Table } from 'antd';
import DefaultButton from '../Button/Loadable';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Feild1',
    dataIndex: 'feild1',
  },
  {
    title: 'Feild2',
    dataIndex: 'feild2',
  },
  {
    title: 'Feild3',
    dataIndex: 'feild3',
  },
  {
    title: 'Feild4',
    dataIndex: 'feild4',
  },
  {
    title: 'Feild5',
    dataIndex: 'feild5',
  },
  {
    title: 'Feild6',
    dataIndex: 'feild6',
  },
];
const data = [
  {
    key: '1',
    name: 'Name1',
    feild1: 'value1',
    feild2: 'value2',
    feild3: 'value3',
    feild4: 'value4',
    feild5: 'value5',
    feild6: 'value6',
  },
  {
    key: '2',
    name: 'Name1',
    feild1: 'value1',
    feild2: 'value2',
    feild3: 'value3',
    feild4: 'value4',
    feild5: 'value5',
    feild6: 'value6',
  },
  {
    key: '3',
    name: 'Name1',
    feild1: 'value1',
    feild2: 'value2',
    feild3: 'value3',
    feild4: 'value4',
    feild5: 'value5',
    feild6: 'value6',
  },
  {
    key: '4',
    name: 'Name1',
    feild1: 'value1',
    feild2: 'value2',
    feild3: 'value3',
    feild4: 'value4',
    feild5: 'value5',
    feild6: 'value6',
  },
  {
    key: '5',
    name: 'Name1',
    feild1: 'value1',
    feild2: 'value2',
    Feild3: 'value3',
    feild4: 'value4',
    feild5: 'value5',
    feild6: 'value6',
  },
  {
    key: '6',
    name: 'Name1',
    feild1: 'value1',
    feild2: 'value2',
    feild3: 'value3',
    feild4: 'value4',
    feild5: 'value5',
    feild6: 'value6',
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
  <Row style={{ margin: '50px 0' }}>
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

    <Col span={22} offset={1}>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={false}
        style={{ background: 'white' }}
      />
      <DefaultButton />
    </Col>
  </Row>
);

ListItems.propTypes = {};

export default ListItems;
