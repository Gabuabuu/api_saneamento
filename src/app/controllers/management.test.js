import request from 'supertest';
import app from '../../app.js'; // supondo que sua aplicação está em um arquivo app.js

describe('GET /bairros', () => {
    it('should return a list of data from the database', async () => {
        const response = await request(app).get('/bairros');
        expect(response.status).toBe(200);
    });
});