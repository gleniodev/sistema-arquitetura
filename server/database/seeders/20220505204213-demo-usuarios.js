const bcrypt = require('bcrypt')
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usuarios', [{
      nome_completo: 'Ana Glícia Guimarães Figueiredo',
      email: "anaglicia@gmail.com",
      data_nascimento: "1983-08-21",
      pessoa_juridica: 0,
      cpf_cnpj: "47276866009",
      telefone_1: "8398564213",
      nome_usuario: "glauber",
      senha: await bcrypt.hash("123", 12),
      fk_endereco_residencial: 1,
    },
    {
      nome_completo: 'Glauber Alysson Guimarães Figueiredo',
      email: "glauber@gmail.com",
      data_nascimento: "1970-09-19",
      pessoa_juridica: 0,
      cpf_cnpj: "76659134077",
      telefone_1: "83985214687",
      nome_usuario: "glauber",
      senha: await bcrypt.hash("123", 12),
      fk_endereco_residencial: 2,
    },
    {
      nome_completo: 'Eduardo Joshua de Oliveira Figueiredo',
      email: "eduardo@gmail.com",
      data_nascimento: "2007-04-17",
      pessoa_juridica: 0,
      cpf_cnpj: "84149603081",
      telefone_1: "83987546895",
      nome_usuario: "eduardo",
      senha: await bcrypt.hash("123", 12),
      fk_endereco_residencial: 3,
    },
    {
      nome_completo: 'Héctor Petrus de Oliveira Figueiredo',
      email: "hector@gmail.com",
      data_nascimento: "2011-11-18",
      pessoa_juridica: 0,
      cpf_cnpj: "95249774008",
      telefone_1: "83985621745",
      nome_usuario: "hector",
      senha: await bcrypt.hash("123", 12),
      fk_endereco_residencial: 4,
    },
    {
      nome_completo: 'Érika Tarsila de Oliveira Figueiredo',
      email: "erika@gmail.com",
      data_nascimento: "1983-03-23",
      pessoa_juridica: 0,
      cpf_cnpj: "18686839070",
      telefone_1: "83981254142",
      nome_usuario: "erika",
      senha: await bcrypt.hash("123", 12),
      fk_endereco_residencial: 5,
    },
    {
      nome_completo: 'Maria Joaleide Guimarães Figueiredo',
      email: "maria@gmail.com",
      data_nascimento: "1953-08-21",
      pessoa_juridica: 0,
      cpf_cnpj: "74206178054",
      telefone_1: "8395868741",
      nome_usuario: "erika",
      senha: await bcrypt.hash("123", 12),
      fk_endereco_residencial: 6,
    },
    {
      nome_completo: 'Geraldo Mendes de Figueiredo',
      email: "maria@gmail.com",
      data_nascimento: "1949-12-21",
      pessoa_juridica: 0,
      cpf_cnpj: "14912227005",
      telefone_1: "8391653247",
      nome_usuario: "geraldo",
      senha: await bcrypt.hash("123", 12),
      fk_endereco_residencial: 7,
    },
    {
      nome_completo: 'José Aldo Farias',
      email: "aldo@gmail.com",
      data_nascimento: "1981-11-23",
      pessoa_juridica: 0,
      cpf_cnpj: "76927962034",
      telefone_1: "8391653247",
      nome_usuario: "josealdo",
      senha: await bcrypt.hash("123", 12),
      fk_endereco_residencial: 8,
    },
    {
      nome_completo: 'Bob Esponja Calça Quadrada',
      email: "bobesponja@gmail.com",
      data_nascimento: "1990-05-11",
      pessoa_juridica: 0,
      cpf_cnpj: "50849549000",
      telefone_1: "8399312547",
      nome_usuario: "bobesponja",
      senha: await bcrypt.hash("123", 12),
      fk_endereco_residencial: 9,
    },
    {
      nome_completo: 'Mariana Gonçalves',
      email: "mariana@gmail.com",
      data_nascimento: "2000-02-15",
      pessoa_juridica: 0,
      cpf_cnpj: "08520454097",
      telefone_1: "8391165478",
      nome_usuario: "mariana",
      senha: await bcrypt.hash("123", 12),
      fk_endereco_residencial: 10,
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
