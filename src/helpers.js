/* eslint-disable max-len */
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

export const convertGraphData = (data) => {
  const statusObj = {};
  for (let i = 0; i < data.length; i++) {
    let civil = null;
    if ((Array.isArray(data[i].civilians.civ))) {
      civil = data[i].civilians.civ;
    } else {
      civil = [data[i].civilians.civ];
    }
    civil.forEach((c) => {
      // eslint-disable-next-line camelcase
      const { physical_desc } = c;
      // const race = physical_desc.phys.physical_desc_race;
      // eslint-disable-next-line camelcase
      if ('phys' in physical_desc) {
        if ('physical_desc_race' in physical_desc.phys) {
          if ('phys_race' in physical_desc.phys.physical_desc_race) {
            if ('phys_race_race' in physical_desc.phys.physical_desc_race.phys_race) {
              statusObj[physical_desc.phys.physical_desc_race.phys_race.phys_race_race] = physical_desc.phys.physical_desc_race.phys_race.phys_race_race in statusObj ? statusObj[physical_desc.phys.physical_desc_race.phys_race.phys_race_race] + 1 : 1;
            } else {
              statusObj['Decline or Unknown'] = 'Decline or Unknown' in statusObj ? statusObj['Decline or Unknown'] + 1 : 1;
            }
          } else {
            statusObj['Decline or Unknown'] = 'Decline or Unknown' in statusObj ? statusObj['Decline or Unknown'] + 1 : 1;
          }
        } else {
          statusObj['Decline or Unknown'] = 'Decline or Unknown' in statusObj ? statusObj['Decline or Unknown'] + 1 : 1;
        }
      } else {
        statusObj['Decline or Unknown'] = 'Decline or Unknown' in statusObj ? statusObj['Decline or Unknown'] + 1 : 1;
      }

      // if (race) {
      //   console.log(race.phys.physical_desc_race);
      // }
    });
  }
  return makeBarData(statusObj);
};
