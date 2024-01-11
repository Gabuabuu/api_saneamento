import connectionDataBase from "../database/connection.js";

class managementController {
  neighborhoodList(req, res) {
    const sql = "SELECT * FROM bairros;";
    connectionDataBase.query(sql, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.status(200).json(result);
      }
    });
  }

  neighborhoodListById(req, res) {
    const id = req.params.id;
    const sql = "SELECT * FROM bairros WHERE id=?";
    connectionDataBase.query(sql, id, (error, result) => {
      const row = result[0];
      if (error) {
        console.log(error);
        res.status(400).json({ error: `${error}` });
      } else {
        res.status(200).json(row);
      }
    });
  }

  neighborhoodAdd(req, res) {
    const bairro = req.body;
    const sql = "INSERT INTO bairros SET ?"; //Inserindo dados na tabela de seleções dentro do banco de dados
    connectionDataBase.query(sql, bairro, (error, result) => {
      if (error) {
        console.log(error);
        res.status(404).json({ error: `${error}` });
      } else {
        res.status(201).json(result);
      }
    });
  }

  neighborhoodUpdate(req, res) {
    const id = req.params.id;
    const bairro = req.body;
    const sql = "UPDATE bairros SET ? WHERE id=?";
    connectionDataBase.query(sql, [bairro, id], (error, result) => {
      if (error) {
        console.log(error);
        res.status(400).json({ error: `${error}` });
      } else {
        res.status(200).json(result);
      }
    });
  }

  neighborhoodDelete(req, res) {
    const id = req.params.id;
    const sql = "DELETE FROM bairros WHERE id=?";
    connectionDataBase.query(sql, id, (error, result) => {
      if (error) {
        console.log(error);
        res.status(400).json({ error: `${error}` });
      } else {
        res.status(200).send(`O bairro com o id ${req.params.id} foi excluido com sucesso!`);
      }
    });
  }
}

export default new managementController();
