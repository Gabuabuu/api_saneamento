const request = require('supertest');
import { response } from 'express';
import app from '../../../src/app.js'; // Ajuste o caminho conforme necessário

describe('GET /bairros', () => {
    it('deve retornar uma lista de dados do banco de dados', async () => {
        const response = await request(app).get('/bairros');
        const mockNeighborhood = [
            { id: 58, bairro: 'Elmo', empresa: 'Dmae', horario: '7:40' },
            { id: 59, bairro: 'Alameda', empresa: 'Dmae', horario: '7:40' },
            { id: 60, bairro: 'Grifinoria', empresa: 'Dmae', horario: '7:40' },

            // outros dados simulados
        ];
        console.log(`Dados ficticios ${JSON.stringify(mockNeighborhood)}`);
        expect(response.status).toBe(200);
        console.log(`Dados do banco ${JSON.stringify(response.body)}`)
        expect(mockNeighborhood).toEqual(expect.arrayContaining(response.body));

    }, 10000); // aumenta o timeout para 10000 ms (10 segundos)

    it('deve retornar um bairro pelo ID', async () => {
        const id = 1; // ID válido para o teste
        const response = await request(app).get(`/bairros/buscar/${id}`);

        expect(200);
        expect(response.body)
        });
    });

    it('deve criar um novo bairro', async () => {
        const mockNeighborhood = [

            { bairro: 'Alameda1', empresa: 'Dmae', horario: '7:40' },
            { bairro: 'Alameda2', empresa: 'Dmae', horario: '7:40' },
            { bairro: 'Alameda3', empresa: 'Dmae', horario: '7:40' }

        ]

        await request(app)
            .post('/bairros/gerenciamento')
            .send(mockNeighborhood)
            .expect(201)
            .expect(response.body)

    }); /*Funcionando */

    it('deve deletar por id', async () => {
        const id = 90
        const response = await request(app)
            .delete(`/bairros/gerenciamento/delete/${id}`)
            .expect(200)
    })
