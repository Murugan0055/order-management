export const defaultHeaderdata = [
  {
    label: "Order Id",
    name: "id"
  },
  {
    label: "Order Description",
    name: "orderDescription"
  },
  {
    label: "Count of Item Types included in order",
    name: "countOfItemTypes"
  },
  {
    label: "% of Electronic Items",
    name: "percentageOfElectronics"
  },
  {
    label: "Created By",
    name: "createdBy"
  },
  {
    label: "Created At",
    name: "createdAt"
  },
  {
    label: "Actions",
    name: "action"
  }
];
export const defaultRowData = [
  {
    id: 1,
    orderDescription: "Order for Customer 1",
    countOfItemTypes: { Electronics: 2, Groceries: 2 },
    createdBy: "Ajeet kumar",
    createdAt: "2022-04-26T07:03:12.892Z"
  },
  {
    id: 2,
    orderDescription: "Order for Self",
    countOfItemTypes: { Electronics: 0, Groceries: 2 },
    createdBy: "Sujeet kumar",
    createdAt: "2022-04-26T07:03:12.892Z"
  },
  {
    id: 3,
    orderDescription: "Order for Customer 2",
    countOfItemTypes: { Electronics: 1, Groceries: 0 },
    createdBy: "Manjeet kumar",
    createdAt: "2022-04-26T07:03:12.892Z"
  }
];
