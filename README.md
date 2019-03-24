# service-zerocater [![CircleCI](https://circleci.com/gh/lunchly/service-zerocater/tree/master.svg?style=svg)](https://circleci.com/gh/lunchly/service-zerocater/tree/master)

> ZeroCater integration for Lunchly

Wraps the ZeroCater REST API, allowing the Lunchly meal-announcement bot to query current and upcoming meals.


## Install

```
$ npm install @lunchly/service-zerocater --save
```


## Usage

###### Lunchly integration

```js
const { today } = require('@lunchly/service-zerocrater');
const companyId = controller.config.zerocrater_company_id;
const {
  id,
  name,
  vendor_name: vendorName,
  vendor_image_url: vendorImageURL,
  vendor_description: vendorDescription
} = await today(companyId);

const mealsURL = ZEROCRATER_MEALS_URL.replace('{companyId}', companyId);
const mealURL = `${mealsURL}/${id}`;

const messageTemplate = `Today's lunch is *${name}*, brought to you by *${vendorName}* — _${vendorDescription}_`;
```


## API

### .all

Type: `Array`

All meals returned by ZeroCater.

### .today()

Type: `Function`

Today's meal.


## License

MIT © [Chris Vogt](https://www.chrisvogt.me)
