const deeplLUtil={
deepLTextTranslate:async(translatText,targetLang)=>{
return new Promise((resolve,reject)=>{
    const axios = require('axios');
let data = JSON.stringify({
  "text": [
    translatText
  ],
  "target_lang": targetLang
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://language-translate-api.vercel.app/translateTextWithDeepL',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
    resolve(response.data);
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
  reject(error);
});

})

}

}
module.exports =deeplLUtil;