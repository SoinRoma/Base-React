import {$api_token} from './index';

export const fetchContacts = async () => {
    const {data} = await $api_token.get('api/v1/twilio/contact/list/');
    return data;
}

