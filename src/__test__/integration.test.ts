import app from '../';
import request from 'supertest';

// Happy Paths :)
describe("GET /now ", () => {
  
  test("Should respond with an object and 200 code if query is valid", async () => {
    const response = await request(app).get("/now?lon=10&lat=10");
    expect(typeof response.body).toBe('object');
    expect(response.statusCode).toBe(200);
  });

  test("If lon or lat is invalid", async () => {
    const response = await request(app).get("/now?lon=10");
    // console.log(response.body, response.statusCode)
    expect(response.statusCode).toBe(400);
  });

});