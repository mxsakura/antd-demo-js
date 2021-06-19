<template>
  <a-table bordered :columns="columns" :components="components" :data-source="data">
    <template v-slot:action>
      <a href="javascript:;">Delete</a>
    </template>
  </a-table>
</template>

<script>
import Vue from 'vue';
import VueDraggableResizable from 'vue-draggable-resizable';

Vue.component('vue-draggable-resizable', VueDraggableResizable);
const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    width: 200,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: 100,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width: 100,
  },
  {
    title: 'Note',
    dataIndex: 'note',
    width: 100,
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];
const data = [
  {
    key: 0,
    date: '2018-02-11',
    amount: 120,
    type: 'income',
    note: 'transfer',
  },
  {
    key: 1,
    date: '2018-03-11',
    amount: 243,
    type: 'income',
    note: 'transfer',
  },
  {
    key: 2,
    date: '2018-04-11',
    amount: 98,
    type: 'income',
    note: 'transfer',
  },
];
const draggingMap = {};
columns.forEach((col) => {
  const k = col.dataIndex || col.key;
  draggingMap[k] = col.width;
});
const draggingState = Vue.observable(draggingMap);
const ResizeableTitle = (h1) => {
  const props = h1.props;
  const children = h1.children;
  let thDom = null;
  const { key, ...restProps } = props;
  const col = columns.find((item) => {
    const k = item.dataIndex || item.key;
    return k === key;
  });
  if (!col.width) {
    return <th {...restProps}>{children}</th>;
  }
  const onDrag = (x) => {
    draggingState[key] = 0;
    col.width = Math.max(x, 1);
  };
  const onDragstop = () => {
    draggingState[key] = thDom.getBoundingClientRect().width;
  };
  return (
    <th
      {...restProps}
      v-ant-ref={(r) => { thDom = r; }}
      width={draggingState[key]}
      class="resize-table-th"
    >
      {children}
      <vue-draggable-resizable
        key={col.dataIndex || col.key}
        class="table-draggable-handle"
        w={10}
        x={col.width || draggingState[key]}
        z={1}
        axis="x"
        draggable={true}
        resizable={false}
        onDragging={onDrag}
        onDragstop={onDragstop}
      ></vue-draggable-resizable>
    </th>
  );
};
export default {
  name: 'App',
  data() {
    this.components = {
      header: {
        cell: ResizeableTitle,
      },
    };
    return {
      data,
      columns,
    };
  },
};
</script>
<style lang="scss" scoped>
::v-deep .resize-table-th {
    position: relative;
    .table-draggable-handle {
        transform: none !important;
        position: absolute;
        height: 100% !important;
        bottom: 0;
        left: auto !important;
        right: -5px;
        cursor: col-resize;
        touch-action: none;
    }
}
</style>