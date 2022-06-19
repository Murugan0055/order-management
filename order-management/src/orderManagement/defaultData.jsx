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

export const itemtypes = [
  {
    id: 1,
    itemTypeName: "Electronics",
    checked: true
  },
  {
    id: 2,
    itemTypeName: "Groceries",
    checked: true
  }
];
export const allItems = [
  {
    id: 1,
    itemTypeId: 1,
    itemName: "iPhone 13 Max Pro",
    temDescription: "This is iPhone",
    itemSpecifications: { memory: "512 GB", colorChoice: true, color: "RED" },
    isOpen: true
  },
  {
    id: 2,
    itemTypeId: 1,
    itemName: "Android phone",
    temDescription: "This is Android phone",
    itemSpecifications: { memory: "512 GB" },
    isOpen: true
  },
  {
    id: 3,
    itemTypeId: 2,
    itemName: "Parle G Biscuit 70 gram",
    temDescription: "This is a parle g biscuit of 70 Gram",
    itemSpecifications: null,
  },
  {
    id: 4,
    itemTypeId: 2,
    itemName: "Rice Packet",
    temDescription: "This is Rice Packet",
    itemSpecifications: { sizeInKG: 1 },
    isOpen: true
  }
];
