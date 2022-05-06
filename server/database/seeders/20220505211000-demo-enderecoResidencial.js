'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('enderecos_residenciais', [{
      endereco: 'rua malaquias modrigues',
      numero: '308',
      bairro: 'alto branco',
      cep: '58408310',
      complemento: null,
      fk_cidade: 15
    },
    {
      endereco: 'rua da liberdade',
      numero: '25',
      bairro: 'liberdade',
      cep: '58408217',
      complemento: null,
      fk_cidade: 15
    },
    {
      endereco: 'rua glauber alisson',
      numero: '256',
      bairro: 'bodocongó',
      cep: '58410518',
      complemento: null,
      fk_cidade: 15
    },
    {
      endereco: 'rua salvador',
      numero: '568',
      bairro: 'josé pinheiro',
      cep: '58415028',
      complemento: null,
      fk_cidade: 15
    },
    {
      endereco: 'rua tarcisio de albuquerque',
      numero: '902',
      bairro: 'palmeira',
      cep: '58410205',
      complemento: null,
      fk_cidade: 15
    },
    {
      endereco: 'rua maria da conceição',
      numero: '26',
      bairro: 'sandra cavalcante',
      cep: '58405332',
      complemento: null,
      fk_cidade: 15
    },
    {
      endereco: 'rua dionízio ferreira de albuquerque',
      numero: '1256',
      bairro: 'centro',
      cep: '58412100',
      complemento: null,
      fk_cidade: 15
    },
    {
      endereco: 'rua olegário maciel',
      numero: '16',
      bairro: 'centenário',
      cep: '58225321',
      complemento: null,
      fk_cidade: 15
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('enderecos_residenciais', null, {});

  }
};
