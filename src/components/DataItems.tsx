
export interface ItemData {
    id: string;
    image: any;
    name: string;
    price: number;
    count: number;
  }

export const DATA: ItemData[] = [
    {
        id: '1',
        image: require('../../assets/img/energetico.png'),
        name: "Bebida",
        price: 12,
        count: 1,
    },
    {
        id: '2',
        image: require('../../assets/img/miojo.png'),
        name: "Miojo",
        price: 1.90,
        count: 1,
    },
    {
        id: '3',
        image: require('../../assets/img/canetabic.png'),
        name: "Caneta",
        price: 7.50,
        count: 1,
    },
    {
        id: '4',
        image: require('../../assets/img/cebola.png'),
        name: "Cebola",
        price: 0.60,
        count: 1,
    },
  ]