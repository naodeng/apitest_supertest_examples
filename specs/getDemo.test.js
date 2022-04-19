import {
  commonHost
} from '../utils/host';
import request from 'supertest';
import {
  cssAPI
} from '../configuration/testAPI.json';
import getData from '../testData/getDemo/getData.json'


describe('GET demo', () => {
  // eslint-disable-next-line max-len
  it('should return code 200 when use normal parameters requested', async () => {
    const res = await request(commonHost.newHost)
      .get(cssAPI)
      .query(getData.normalParametersRequestData);
    expect(res.status).toBe(200);
  }, 60000);
});