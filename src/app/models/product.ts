export interface Product{ //export=public, interfacelerin önüne I konmaz.
    productId:number; //bütün sayı tipleri(int,float,double,decimal) için number kullanılır
    categoryId:number;
    productName:string;
    unitsInStock:number;
    unitPrice:number;
}