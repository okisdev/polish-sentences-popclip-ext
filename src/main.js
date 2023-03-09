'use strict';

const axios = require('axios');

const polishSentences = async (input, options) => {
    const api_url = options.openai_api_url;
    const api_key = options.openai_api_key;
    const api_tempature = Number(options.openai_api_tempature);

    const prompt = 'Please correct and polish the following sentences in same language:\n\n';

    const headers = { Authorization: 'Bearer ' + api_key };

    const body = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                content: 'You are a proofreader that can only correct and polish sentences in the same language.',
                role: 'system',
            },
            {
                content: prompt + input.text,
                role: 'user',
            },
        ],
        temperature: api_tempature,
        frequency_penalty: 1,
        presence_penalty: 1,
        top_p: 1,
        max_tokens: 2000,
    };

    const { data } = await axios.post(api_url + '/v1/chat/completions', body, { headers: headers });

    const response = data.choices[0].message.content.trim();

    return popclip.pasteText(options.replace_text ? response : input.text + '\n' + response);
};

exports.actions = [
    {
        title: 'Polish sentences with ChatGPT',
        code: polishSentences,
    },
];
