module.exports = {
  // 스키마 이름 적을 필요 없음
  categoryList: `select * from product_category`,
  categoryInsert: `insert into product_category set ?`,
  categoryUpdate: `update product_category set ? where product_category_id=?`,
  categoryDelete: `delete from product_category where product_category_id=?`,
};
