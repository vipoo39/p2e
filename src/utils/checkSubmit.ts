export default function checkSubmit(type: string, value: string){
    if(!value){
        return {status: false, text : 'Все поля должны быть заполнены!'}
    }

    switch(type){
        case 'mail' : {
            if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)){
                return {status: true, text: 'ok'}
            }

            return {status: false, text : 'некорректный почтовый адрес'}
        }
        case 'tel' : {
            if(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value)){
                return {status: true, text: 'ok'} 
            }

            return {status: false, text : 'некорректный телефон'}
        }
        default: {
            return {status: true, text: 'ok'}
        }
    }
}