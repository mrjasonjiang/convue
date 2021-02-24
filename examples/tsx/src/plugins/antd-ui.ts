export default ({ app }: any, inject: any) => {
  inject('toString', (obj: any) => {
    return JSON.stringify(obj);
  });
};
