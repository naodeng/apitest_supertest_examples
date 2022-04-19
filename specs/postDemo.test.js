import {
    commonHost
} from '../utils/host';
import request from 'supertest';
import {
    getCoopTypesAPI
} from '../configuration/testAPI.json';


describe('Post demo', () => {
    // eslint-disable-next-line max-len
    it('should return code 200 when use normal parameters requested', async () => {
        const res = await request(commonHost.newHost).post(getCoopTypesAPI);
        expect(res.status).toBe(200);
    }, 60000);
});