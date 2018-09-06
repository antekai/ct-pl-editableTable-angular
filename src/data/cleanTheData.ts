const cleanTheData = data =>
  data
    .map(({ a, campaignid, userid, frienddomainid, ...keepRest }) => keepRest)
    .map((obj, index) => {
      obj.key = index.toString();
      return obj;
    });

export default cleanTheData;
