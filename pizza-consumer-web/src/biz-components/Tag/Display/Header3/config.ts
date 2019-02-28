import { TagName, RowPosition, ColumPosition } from '@biz-components/Tag/schema';

export const config = {
  tag_name: TagName.HEADER3,
  tag_props: {
    height: 20,
    width: 100,
  },
  tag_children: [{
    tag_name: TagName.BLOCK1,
    tag_props: {
      height: 13,
      width: 2,
      left: 0,
      top: 3,
    },
  }, {
    tag_name: TagName.TEXT1,
    tag_props: {
      height: 20,
      width: 100,
      row_position: RowPosition.LEFT,
      column_position: ColumPosition.CENTER,
      font_size: 8,
      left: 5,
      top: 0,
      content: '标题',
      color: '#666',
      font_weight: 600,
    },
  }],
};
