import * as moment from 'moment';

const cleanTheData = data => {
  const clean = data
    .map(({ a, campaignid, userid, frienddomainid, ...keepRest }) => keepRest)
    .map(obj => {
      obj.time = moment(obj.date).format('HH:mm');
      obj.germanDate = moment(obj.date).format('DD.MM.YYYY');
      return obj;
    })
    .map(({ date, ...keepRest }) => keepRest)
    .map(({ germanDate: date, ...keepRest }) => ({ date, ...keepRest }))
    .map((obj, index) => {
      obj.key = index;
      return obj;
    })
    .map(x => {
      x.freeclickString = x.freeclick ? 'true' : 'false';
      return x;
    })
    .map(({ freeclick, ...keepRest }) => keepRest)
    .map(({ freeclickString: freeclick, ...keepRest }) => ({
      freeclick,
      ...keepRest
    }));
  return clean;
};
export default cleanTheData;
