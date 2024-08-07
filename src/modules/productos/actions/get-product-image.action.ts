    export const getProductImageAction = (nameImg:string):string =>{

        return nameImg.includes('http') ? nameImg : `${import.meta.env.VITE_TESLO_API_URL}/files/product/${nameImg}`
}   