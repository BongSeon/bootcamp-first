const { MongoClient, ObjectId, Collection } = require("mongodb");
let mongoDB = null;

// 이런형태 ()() 이 함수를 호출하지 않더라도 이 파일이 실행할 준비가 되면
// 바로 실행
(async function () {
  const urlMongoDB = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/?maxPoolSize=${process.env.MONGODB_LIMIT}`;

  // useUnifiedTopology명확하게 가이드가 나와있는것이 없지만 이렇게 쓴다
  const client = new MongoClient(urlMongoDB, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("MongoDB에 정상적으로 정상적으로 접속되었습니다");
    mongoDB = client.db(process.env.MONGODB_DB);
  } catch (err) {
    console.log(err);
  }
})();

const find = async (collectionName, condition = {}) => {
  const r = await mongoDB.collection(collectionName).find(condition).toArray();
  return r;
};

// id로 검색할때는 ObjectId로 감싸줘야한다.
const findById = async (collectionName, _id) => {
  const r = await mongoDB
    .collection(collectionName)
    .findOne({ _id: ObjectId(_id) });
  return r;
};

const insertOne = async (collectionName, data) => {
  const r = await mongoDB.collection(collectionName).insertOne(data);
  return r;
};

const insertMany = async (collectionName, data) => {
  const r = await mongoDB.collection(collectionName).insertMany(data);
  return r;
};

const updateById = async (collectionName, data, _id) => {
  const r = await mongoDB.collection(collectionName).updateOne(
    { _id: ObjectId(_id) },
    { $set: data, $currentDate: { lastModified: true } } // 현재 시간 분초
  ); // $set:data
  // lastModified 현재 시간 분초
  return r;
};

const deleteById = async (collectionName, _id) => {
  const r = await mongoDB
    .collection(collectionName)
    .deleteOne({ _id: ObjectId(_id) });
  return r;
};

const updateMany = async (collectionName, data, condition) => {
  const r = await mongoDB.collection(collectionName).updateMany(condition, {
    $set: data,
    $currentDate: { lastModified: true },
  });
  return r;
};

const deleteMany = async (collectionName, condition) => {
  // {"email": /@gmail/}
  const r = await mongoDB.collection(collectionName).deleteMany(condition);
  return r;
};

module.exports = {
  find,
  findById,
  insertOne,
  insertMany,
  updateById,
  updateMany,
  deleteById,
  deleteMany,
};
