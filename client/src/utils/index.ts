// huvisagchiin type
// let firstName: string = "John";
// let age: number = 33;

// type ConsFuncParamType = string | number;

// const consFunc = (param: ConsFuncParamType) => {
//   console.log(param);
// };

// type ConsFunc2ParamType = {
//   id: number;
//   title: string;
//   category: string;
//   price: number;
// };

// const ConsFunc2 = (param: ConsFunc2ParamType) => {
//   console.log(param.id);
//   console.log(param.category);
//   console.log(param.title);
//   console.log(param.price);
// };

// const object = {
//   id: 1,
//   title: "Perfume",
//   category: "beauty",
//   price: 9.99,
// };

// type ConsFuncProductType = {
//   id: number;
//   title: string;
//   category: string;
//   price?: number;
// };

// const consFunc = (param1: ConsFuncProductType[]) => {};

// const array = [
//   {
//     id: 1,
//     title: "Perfume",
//     category: "beauty",
//     price: 9.99,
//   },
//   {
//     id: 2,
//     title: "Perfume2",
//     category: "beauty",
//   },
// ];

// consFunc(array);

type MongoClientOptions = {
  name: string;
};
const MongoClient = (url: number, options?: MongoClientOptions) => {
  //
};

export default MongoClient;
