export interface Product{ //export=public
    productId:number; //bütün sayı tipleri için number kullanılır
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number;
}