import app from '../';
import request from 'supertest';

describe("GET /now ", () => {
  
  // Happy Paths :)
  test("Should respond with an object and 200 code if query is valid", async () => {
    const response = await request(app).get("/now?lon=10&lat=10");
    expect(typeof response.body).toBe('object');
    expect(response.statusCode).toBe(200);
  });

  // Sad Paths :(
  test("If lon or lat is invalid", async () => {
    const response = await request(app).get("/now?lon=1000&lat=1000");
    expect(response.statusCode).toBe(400);
  });

  test("Status code 400 if no arguments are passed", async () => {
    const response = await request(app).get("/now");
    expect(response.statusCode).toBe(400);
  });

});