
const aiUtil={
aiTranslate:async(translateText)=>{
    return new Promise((resolve)=>{
        let data = JSON.stringify({
            "contents": [
              {
                "parts": [
                  {
                    "text": translateText
                  }
                ]
              }
            ],
            "generationConfig": {
              "temperature": 0.9,
              "topK": 1,
              "topP": 1,
              "maxOutputTokens": 2048,
              "stopSequences": []
            },
            "safetySettings": [
              {
                "category": "HARM_CATEGORY_HARASSMENT",
                "threshold": "BLOCK_MEDIUM_AND_ABOVE"
              },
              {
                "category": "HARM_CATEGORY_HATE_SPEECH",
                "threshold": "BLOCK_MEDIUM_AND_ABOVE"
              },
              {
                "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                "threshold": "BLOCK_MEDIUM_AND_ABOVE"
              },
              {
                "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
                "threshold": "BLOCK_MEDIUM_AND_ABOVE"
              }
            ]
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAQm4-MmhHvu5iwZbXOo17IjAjHIIEHawc',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          const axios = require('axios');
          axios.request(config)
          .then((response) => {
           // console.log(JSON.stringify(response.data.candidates[0].content));
            resolve(response.data.candidates[0].content);
          })
          .catch((error) => {
            console.log(error);
          });
    })
    


}
}
module.exports=aiUtil;