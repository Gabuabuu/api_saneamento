const request = require('supertest');
import { response } from 'express';
import app from '../app'; // Ajuste o caminho conforme necessário

describe('GET /bairros', () => {
    it('deve retornar uma lista de dados do banco de dados', async () => {
        const response = await request(app).get('/bairros');
        const mockNeighborhood = [
            { id: 1, bairro: 'Alameda', empresa: 'Dmae', horario: '10:00' },
            { id: 2, bairro: 'Ipanema', empresa: 'Dmae', horario: '12:40' },
            { id: 3, bairro: 'Ipiranga', empresa: 'Dmae', horario: '17:17' },

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

        { bairro: 'Alameda', empresa: 'Dmae', horario: '10:00' },
        { bairro: 'Ipanema', empresa: 'Dmae', horario: '12:40' },
        { bairro: 'Ipiranga', empresa: 'Dmae', horario: '17:17' },
        { bairro: 'Osório', empresa: 'Dmae', horario: '17:17' }

    ]

    // Mapear cada item do array para enviar uma requisição
    for (const i of mockNeighborhood) {
        const response = await request(app)
            .post('/bairros/gerenciamento')
            .send(i)
            .expect(201)
        expect(response.body)
    }
})
    ; /*Funcionando */

it('deve deletar por id', async () => {
    const id = 4
    const response = await request(app)
        .delete(`/bairros/gerenciamento/delete/${id}`)
        .expect(200)
})
