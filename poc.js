///const aiUtil= require('./app/components/ai/googleGemini');

//aiUtil.aiTranslate('Translate - "How are you today?" to Japanese');
//aiUtil.aiTranslate("How to say - 'How are you today?' in Japanese");
const deel=require('./app/components/ai/deepLtestTranlate')
// let res={
// apiRes:"As an AI language model, I don't have personal feelings or emotions, so I don't experience days or have a concept of well-being. I'm a virtual assistant designed to provide information and assist users with their queries and requests.\n\nMay I help you with something today?"
// }
// let modRes= JSON.stringify(res.apiRes);
// let newRes=modRes.replace(/\n/g,"<br/>");
// console.log(newRes);
async function gettext(){
    let text = await deel.deepLTextTranslate("How are you","JA");
    let newText=JSON.stringify(text)
    console.log(newText);
}

