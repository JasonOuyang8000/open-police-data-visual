// eslint-disable-next-line no-unused-vars
import moment from 'moment';

export const makeBarData = (barData) => {
  const data = [];
  Object.keys(barData).forEach((key) => {
    data.push({
      x: key,
      y: barData[key],
    });
  });

  return data;
};

export const makeBarDataY = (barData) => {
  const data = [];
  Object.keys(barData).forEach((key) => {
    data.push({
      y: key,
      x: barData[key],
    });
  });

  return data;
};

/* eslint-disable no-plusplus */
// eslint-disable-next-line import/prefer-default-export
export const getAmountCharged = (data) => {
  const newData = {
    Charged: 0,
    'Not Charged': 0,
    'Not Sure': 0,
  };

  //   const reader = {
  //     com_anyone_charged: 'Anyone Charged',
  //   };

  for (let i = 0; i < data.length; i++) {
    // eslint-disable-next-line no-empty

    if (data[i].com_anyone_charged === 'N' || data[i].com_anyone_charged === 'Y') {
      if (data[i].com_anyone_charged === 'Y') {
        newData.Charged += 1;
      } else {
        newData['Not Charged'] += 1;
      }
    } else {
      newData['Not Sure'] += 1;
    }
  }
  const dataArray = makeBarData(newData);

  return dataArray;
};

// eslint-disable-next-line no-unused-vars
export const getStatus = (data, key, def = false) => {
  const statusObj = {};
  if (key === 'com_record_submitted') {
    for (let i = 0; i < data.length; i++) {
      const name = moment(data[i][key]).format('YYYY-MM-DD');
      statusObj[name] = name in statusObj ? statusObj[name] + 1 : 1;
    }

    return makeBarData(statusObj);
  }

  if (def) {
    for (let i = 0; i < data.length; i++) {
      if ((typeof data[i][key]) === 'object') {
        let name = null;
        if (!Array.isArray(data[i][key].off)) {
          name = 'Single Officer';
          statusObj[name] = name in statusObj ? statusObj[name] + 1 : 1;
        } else {
          name = 'Multiple Officers';
          statusObj[name] = name in statusObj ? statusObj[name] + 1 : 1;
        }
      }
    }
    return makeBarData(statusObj);
  }

  if (key === 'officers') {
    for (let i = 0; i < data.length; i++) {
      let name = null;
      if ((typeof data[i][key]) === 'undefined') {
        name = 'Unidentified Officers';
        statusObj[name] = name in statusObj ? statusObj[name] + 1 : 1;
      } else {
        name = 'Identified Officers';
        statusObj[name] = name in statusObj ? statusObj[name] + 1 : 1;
      }
      // statusObj[name] = name in statusObj ? statusObj[name] + 1 : 1;
    }
    return makeBarData(statusObj);
  }

  for (let i = 0; i < data.length; i++) {
    const name = data[i][key];
    statusObj[name] = name in statusObj ? statusObj[name] + 1 : 1;
  }
  return makeBarData(statusObj);
};

export const getStatusAlleged = (data, key) => {
  const statusObj = {};
  for (let i = 0; i < data.length; i++) {
    const val = data[i][key];
    const names = val.split(',');
    names.forEach((n) => {
      const name = n.trim();
      statusObj[name] = name in statusObj ? statusObj[name] + 1 : 1;
    });
  }
  return makeBarDataY(statusObj);
};
