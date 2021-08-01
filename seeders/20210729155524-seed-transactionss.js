'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let data = [{
      "id": 87,
      "title": "Lunch Ayam HW",
      "UserId": 30,
      "type": "Expense",
      "category": "Other Expense",
      "amount": 230000,
      "fullDate": "2021-07-24T07:09:56.459Z",
      "date": 24,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:26:41.916Z",
      "updatedAt": "2021-07-29T10:26:41.916Z"
      },
      {
      "id": 88,
      "title": "Bubur UM",
      "UserId": 30,
      "type": "Expense",
      "category": "Other Expense",
      "amount": 80000,
      "fullDate": "2021-07-24T07:09:56.459Z",
      "date": 24,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:28:58.244Z",
      "updatedAt": "2021-07-29T10:28:58.244Z"
      },
      {
      "id": 89,
      "title": "Indomaret",
      "UserId": 30,
      "type": "Expense",
      "category": "Personal Spending",
      "amount": 120000,
      "fullDate": "2021-07-25T07:09:56.459Z",
      "date": 25,
      "month": 7,
      "year": 2021,
      "receiptImage": "https://ik.imagekit.io/t1jbb5rhgcf/receiptImage_9IvxrT8q_h_dGi3NqrMD0k.jfif",
      "note": "",
      "createdAt": "2021-07-29T10:32:44.439Z",
      "updatedAt": "2021-07-29T10:32:44.439Z"
      },
      {
      "id": 90,
      "title": "Indomaret",
      "UserId": 30,
      "type": "Expense",
      "category": "Personal Spending",
      "amount": 70000,
      "fullDate": "2021-07-26T07:09:56.459Z",
      "date": 26,
      "month": 7,
      "year": 2021,
      "receiptImage": "https://ik.imagekit.io/t1jbb5rhgcf/receiptImage_9IvxrT8q_h_-fWWChQ_yQ.jfif",
      "note": "",
      "createdAt": "2021-07-29T10:33:06.305Z",
      "updatedAt": "2021-07-29T10:33:06.305Z"
      },
      {
      "id": 92,
      "title": "Rent Car",
      "UserId": 30,
      "type": "Expense",
      "category": "Transportation",
      "amount": 1200000,
      "fullDate": "2021-06-15T07:09:56.459Z",
      "date": 15,
      "month": 6,
      "year": 2021,
      "receiptImage": "https://ik.imagekit.io/t1jbb5rhgcf/receiptImage_9IvxrT8q_h_o4ikAFT19t.jfif",
      "note": "",
      "createdAt": "2021-07-29T10:34:00.845Z",
      "updatedAt": "2021-07-29T10:34:00.845Z"
      },
      {
      "id": 93,
      "title": "Rent Car",
      "UserId": 30,
      "type": "Expense",
      "category": "Transportation",
      "amount": 800000,
      "fullDate": "2021-07-03T07:09:56.459Z",
      "date": 3,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:34:18.034Z",
      "updatedAt": "2021-07-29T10:34:18.034Z"
      },
      {
      "id": 94,
      "title": "Beli Piano",
      "UserId": 30,
      "type": "Expense",
      "category": "Other Expense",
      "amount": 8000000,
      "fullDate": "2021-05-10T07:09:56.459Z",
      "date": 10,
      "month": 5,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:36:17.588Z",
      "updatedAt": "2021-07-29T10:36:17.588Z"
      },
      {
      "id": 95,
      "title": "Jual Saxophone",
      "UserId": 30,
      "type": "Income",
      "category": "Other income",
      "amount": 4000000,
      "fullDate": "2021-05-10T07:09:56.459Z",
      "date": 10,
      "month": 5,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:37:07.539Z",
      "updatedAt": "2021-07-29T10:37:07.539Z"
      },
      {
      "id": 96,
      "title": "Gaji",
      "UserId": 30,
      "type": "Income",
      "category": "Salary",
      "amount": 10000000,
      "fullDate": "2021-04-10T07:09:56.459Z",
      "date": 10,
      "month": 4,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:37:35.281Z",
      "updatedAt": "2021-07-29T10:37:35.281Z"
      },
      {
      "id": 97,
      "title": "Gaji",
      "UserId": 30,
      "type": "Income",
      "category": "Salary",
      "amount": 10000000,
      "fullDate": "2021-03-20T07:09:56.459Z",
      "date": 20,
      "month": 3,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:37:43.320Z",
      "updatedAt": "2021-07-29T10:37:43.320Z"
      },
      {
      "id": 98,
      "title": "Gaji",
      "UserId": 30,
      "type": "Income",
      "category": "Salary",
      "amount": 10000000,
      "fullDate": "2021-02-20T07:09:56.459Z",
      "date": 20,
      "month": 2,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:37:47.675Z",
      "updatedAt": "2021-07-29T10:37:47.675Z"
      },
      {
      "id": 99,
      "title": "Gaji",
      "UserId": 30,
      "type": "Income",
      "category": "Salary",
      "amount": 10000000,
      "fullDate": "2021-01-20T07:09:56.459Z",
      "date": 20,
      "month": 1,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:37:51.455Z",
      "updatedAt": "2021-07-29T10:37:51.455Z"
      },
      {
      "id": 100,
      "title": "Gaji",
      "UserId": 30,
      "type": "Income",
      "category": "Salary",
      "amount": 10000000,
      "fullDate": "2021-06-20T07:09:56.459Z",
      "date": 20,
      "month": 6,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:37:57.639Z",
      "updatedAt": "2021-07-29T10:37:57.639Z"
      },
      {
      "id": 101,
      "title": "Gaji",
      "UserId": 30,
      "type": "Income",
      "category": "Salary",
      "amount": 10000000,
      "fullDate": "2021-07-20T07:09:56.459Z",
      "date": 20,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:38:01.192Z",
      "updatedAt": "2021-07-29T10:38:01.192Z"
      },
      {
      "id": 102,
      "title": "Flight",
      "UserId": 30,
      "type": "Expense",
      "category": "Transporation",
      "amount": 5000000,
      "fullDate": "2021-04-27T07:09:56.459Z",
      "date": 27,
      "month": 4,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:39:06.958Z",
      "updatedAt": "2021-07-29T10:39:06.958Z"
      },
      {
      "id": 103,
      "title": "Investasi Saham",
      "UserId": 30,
      "type": "Expense",
      "category": "Invest & Debt",
      "amount": 20000000,
      "fullDate": "2021-03-01T07:09:56.459Z",
      "date": 1,
      "month": 3,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:40:26.006Z",
      "updatedAt": "2021-07-29T10:40:26.006Z"
      },
      {
      "id": 104,
      "title": "Investasi Saham",
      "UserId": 30,
      "type": "Expense",
      "category": "Invest & Debt",
      "amount": 5000000,
      "fullDate": "2021-07-05T07:09:56.459Z",
      "date": 5,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:40:51.918Z",
      "updatedAt": "2021-07-29T10:40:51.918Z"
      },
      {
      "id": 105,
      "title": "NIPT",
      "UserId": 30,
      "type": "Expense",
      "category": "Medical & Healthcare",
      "amount": 8000000,
      "fullDate": "2021-01-15T07:09:56.459Z",
      "date": 15,
      "month": 1,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:41:15.510Z",
      "updatedAt": "2021-07-29T10:41:15.510Z"
      },
      {
      "id": 106,
      "title": "Jimbaran",
      "UserId": 30,
      "type": "Expense",
      "category": "Food & Beverage",
      "amount": 350000,
      "fullDate": "2021-07-28T07:09:56.459Z",
      "date": 28,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:42:07.791Z",
      "updatedAt": "2021-07-29T10:42:07.791Z"
      },
      {
      "id": 107,
      "title": "PLN",
      "UserId": 30,
      "type": "Expense",
      "category": "Utilities",
      "amount": 1000000,
      "fullDate": "2021-07-10T07:09:56.459Z",
      "date": 10,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": "",
      "createdAt": "2021-07-29T10:42:21.694Z",
      "updatedAt": "2021-07-29T10:42:21.694Z"
      },
      {
      "id": 114,
      "title": "Grab Car",
      "UserId": 30,
      "type": "Expense",
      "category": "Transportation",
      "amount": 80000,
      "fullDate": "2021-07-28T07:09:56.459Z",
      "date": 28,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T11:36:59.381Z",
      "updatedAt": "2021-07-29T11:36:59.381Z"
      },
      {
      "id": 115,
      "title": "GoFood Mie Ayam",
      "UserId": 30,
      "type": "Expense",
      "category": "Food & Beverage",
      "amount": 85000,
      "fullDate": "2021-07-26T07:09:56.459Z",
      "date": 26,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T11:37:40.495Z",
      "updatedAt": "2021-07-29T11:37:40.495Z"
      },
      {
      "id": 116,
      "title": "GoFood Bubur",
      "UserId": 30,
      "type": "Expense",
      "category": "Food & Beverage",
      "amount": 45000,
      "fullDate": "2021-07-27T07:09:56.459Z",
      "date": 27,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T11:38:08.156Z",
      "updatedAt": "2021-07-29T11:38:08.156Z"
      },
      {
      "id": 117,
      "title": "Juice",
      "UserId": 30,
      "type": "Expense",
      "category": "Food & Beverage",
      "amount": 20000,
      "fullDate": "2021-07-27T07:09:56.459Z",
      "date": 27,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T11:38:21.192Z",
      "updatedAt": "2021-07-29T11:38:21.192Z"
      },
      {
      "id": 118,
      "title": "Saham ANTM",
      "UserId": 30,
      "type": "Expense",
      "category": "Invest & Debt",
      "amount": 500000,
      "fullDate": "2021-07-28T07:09:56.459Z",
      "date": 28,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T11:38:54.438Z",
      "updatedAt": "2021-07-29T11:38:54.438Z"
      },
      {
      "id": 119,
      "title": "Grab",
      "UserId": 30,
      "type": "Expense",
      "category": "Transportation",
      "amount": 120000,
      "fullDate": "2021-07-27T07:09:56.459Z",
      "date": 27,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T11:39:23.612Z",
      "updatedAt": "2021-07-29T11:39:23.612Z"
      },
      {
      "id": 120,
      "title": "BreadTalk",
      "UserId": 30,
      "type": "Expense",
      "category": "Food & Beverage",
      "amount": 135000,
      "fullDate": "2021-07-25T07:09:56.459Z",
      "date": 25,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T11:40:12.395Z",
      "updatedAt": "2021-07-29T11:40:12.395Z"
      },
      {
      "id": 121,
      "title": "BreadTalk",
      "UserId": 30,
      "type": "Expense",
      "category": "Food & Beverage",
      "amount": 135000,
      "fullDate": "2021-07-27T07:09:56.459Z",
      "date": 27,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T11:40:26.987Z",
      "updatedAt": "2021-07-29T11:40:26.987Z"
      },
      {
      "id": 122,
      "title": "Gojek Bubur",
      "UserId": 30,
      "type": "Expense",
      "category": "Food & Beverage",
      "amount": 56000,
      "fullDate": "2021-07-26T07:09:56.459Z",
      "date": 26,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T11:40:41.122Z",
      "updatedAt": "2021-07-29T11:40:41.122Z"
      },
      {
      "id": 123,
      "title": "Apartment Bills",
      "UserId": 30,
      "type": "Expense",
      "category": "Utilities",
      "amount": 10000000,
      "fullDate": "2021-05-26T07:09:56.459Z",
      "date": 26,
      "month": 5,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T11:43:45.567Z",
      "updatedAt": "2021-07-29T11:43:45.567Z"
      },
      {
      "id": 124,
      "title": "Gaji May",
      "UserId": 30,
      "type": "Income",
      "category": "Salary",
      "amount": 10000000,
      "fullDate": "2021-05-26T07:09:56.459Z",
      "date": 26,
      "month": 5,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T11:43:53.838Z",
      "updatedAt": "2021-07-29T11:43:53.838Z"
      },
      {
      "id": 125,
      "title": "Birthday Gift",
      "UserId": 30,
      "type": "Income",
      "category": "Gifts",
      "amount": 1000000,
      "fullDate": "2021-07-28T07:09:56.459Z",
      "date": 28,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T12:27:42.885Z",
      "updatedAt": "2021-07-29T12:27:42.885Z"
      },
      {
      "id": 128,
      "title": "Shop @Pepito",
      "UserId": 30,
      "type": "Expense",
      "category": "Personal Spending",
      "amount": 500000,
      "fullDate": "2021-07-28T07:09:56.459Z",
      "date": 28,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": null,
      "createdAt": "2021-07-29T12:30:31.392Z",
      "updatedAt": "2021-07-29T12:30:31.392Z"
      },
      {
      "id": 129,
      "title": "Jual lamp - Tokped",
      "UserId": 30,
      "type": "Income",
      "category": "Other Income",
      "amount": 250000,
      "fullDate": "2021-07-27T07:09:56.459Z",
      "date": 27,
      "month": 7,
      "year": 2021,
      "receiptImage": null,
      "note": "Jual lamp di Tokpked",
      "createdAt": "2021-07-29T12:32:12.233Z",
      "updatedAt": "2021-07-29T12:32:12.233Z"
      }]
      
    await queryInterface.bulkInsert('Transactions', data.map(ele => {
      delete ele.id
      return ele
    })
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
