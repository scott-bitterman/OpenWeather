const app = require('../dist/');
const request = require('supertest');

describe("GET /now ", () => {
    test("It should respond", async () => {
      const response = await request(app).get("/now?log=90&lat=90");
      console.log(response.body)
      
      // expect.objectContaining({
      //   weather: expect.objectContaining({

      //   })
      //   // x: expect.any(Number),
      //   // y: expect.any(Number),
      // }),

      expect(typeof response.body).toBe('object');

      expect(response.statusCode).toBe(200);
    });
});