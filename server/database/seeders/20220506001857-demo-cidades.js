'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cidades',
      [{
        "id_cidade": "1",
        "Nome": "Afonso Cláudio",
        "fk_estado": "8"
      },
      {
        "id_cidade": "2",
        "Nome": "Água Doce do Norte",
        "fk_estado": "8"
      },
      {
        "id_cidade": "3",
        "Nome": "Águia Branca",
        "fk_estado": "8"
      },
      {
        "id_cidade": "4",
        "Nome": "Alegre",
        "fk_estado": "8"
      },
      {
        "id_cidade": "5",
        "Nome": "Alfredo Chaves",
        "fk_estado": "8"
      },
      {
        "id_cidade": "6",
        "Nome": "Alto Rio Novo",
        "fk_estado": "8"
      },
      {
        "id_cidade": "7",
        "Nome": "Anchieta",
        "fk_estado": "8"
      },
      {
        "id_cidade": "8",
        "Nome": "Apiacá",
        "fk_estado": "8"
      },
      {
        "id_cidade": "9",
        "Nome": "Aracruz",
        "fk_estado": "8"
      },
      {
        "id_cidade": "10",
        "Nome": "Atilio Vivacqua",
        "fk_estado": "8"
      },
      {
        "id_cidade": "11",
        "Nome": "Baixo Guandu",
        "fk_estado": "8"
      },
      {
        "id_cidade": "12",
        "Nome": "Barra de São Francisco",
        "fk_estado": "8"
      },
      {
        "id_cidade": "13",
        "Nome": "Boa Esperança",
        "fk_estado": "8"
      },
      {
        "id_cidade": "14",
        "Nome": "Bom Jesus do Norte",
        "fk_estado": "8"
      },
      {
        "id_cidade": "15",
        "Nome": "Brejetuba",
        "fk_estado": "8"
      },
      {
        "id_cidade": "16",
        "Nome": "Cachoeiro de Itapemirim",
        "fk_estado": "8"
      },
      {
        "id_cidade": "17",
        "Nome": "Cariacica",
        "fk_estado": "8"
      },
      {
        "id_cidade": "18",
        "Nome": "Castelo",
        "fk_estado": "8"
      },
      {
        "id_cidade": "19",
        "Nome": "Colatina",
        "fk_estado": "8"
      },
      {
        "id_cidade": "20",
        "Nome": "Conceição da Barra",
        "fk_estado": "8"
      },
      {
        "id_cidade": "21",
        "Nome": "Conceição do Castelo",
        "fk_estado": "8"
      },
      {
        "id_cidade": "22",
        "Nome": "Divino de São Lourenço",
        "fk_estado": "8"
      },
      {
        "id_cidade": "23",
        "Nome": "Domingos Martins",
        "fk_estado": "8"
      },
      {
        "id_cidade": "24",
        "Nome": "Dores do Rio Preto",
        "fk_estado": "8"
      },
      {
        "id_cidade": "25",
        "Nome": "Ecoporanga",
        "fk_estado": "8"
      },
      {
        "id_cidade": "26",
        "Nome": "Fundão",
        "fk_estado": "8"
      },
      {
        "id_cidade": "27",
        "Nome": "Governador Lindenberg",
        "fk_estado": "8"
      },
      {
        "id_cidade": "28",
        "Nome": "Guaçuí",
        "fk_estado": "8"
      },
      {
        "id_cidade": "29",
        "Nome": "Guarapari",
        "fk_estado": "8"
      },
      {
        "id_cidade": "30",
        "Nome": "Ibatiba",
        "fk_estado": "8"
      },
      {
        "id_cidade": "31",
        "Nome": "Ibiraçu",
        "fk_estado": "8"
      },
      {
        "id_cidade": "32",
        "Nome": "Ibitirama",
        "fk_estado": "8"
      },
      {
        "id_cidade": "33",
        "Nome": "Iconha",
        "fk_estado": "8"
      },
      {
        "id_cidade": "34",
        "Nome": "Irupi",
        "fk_estado": "8"
      },
      {
        "id_cidade": "35",
        "Nome": "Itaguaçu",
        "fk_estado": "8"
      },
      {
        "id_cidade": "36",
        "Nome": "Itapemirim",
        "fk_estado": "8"
      },
      {
        "id_cidade": "37",
        "Nome": "Itarana",
        "fk_estado": "8"
      },
      {
        "id_cidade": "38",
        "Nome": "Iúna",
        "fk_estado": "8"
      },
      {
        "id_cidade": "39",
        "Nome": "Jaguaré",
        "fk_estado": "8"
      },
      {
        "id_cidade": "40",
        "Nome": "Jerônimo Monteiro",
        "fk_estado": "8"
      },
      {
        "id_cidade": "41",
        "Nome": "João Neiva",
        "fk_estado": "8"
      },
      {
        "id_cidade": "42",
        "Nome": "Laranja da Terra",
        "fk_estado": "8"
      },
      {
        "id_cidade": "43",
        "Nome": "Linhares",
        "fk_estado": "8"
      },
      {
        "id_cidade": "44",
        "Nome": "Mantenópolis",
        "fk_estado": "8"
      },
      {
        "id_cidade": "45",
        "Nome": "Marataízes",
        "fk_estado": "8"
      },
      {
        "id_cidade": "46",
        "Nome": "Marechal Floriano",
        "fk_estado": "8"
      },
      {
        "id_cidade": "47",
        "Nome": "Marilândia",
        "fk_estado": "8"
      },
      {
        "id_cidade": "48",
        "Nome": "Mimoso do Sul",
        "fk_estado": "8"
      },
      {
        "id_cidade": "49",
        "Nome": "Montanha",
        "fk_estado": "8"
      },
      {
        "id_cidade": "50",
        "Nome": "Mucurici",
        "fk_estado": "8"
      },
      {
        "id_cidade": "51",
        "Nome": "Muniz Freire",
        "fk_estado": "8"
      },
      {
        "id_cidade": "52",
        "Nome": "Muqui",
        "fk_estado": "8"
      },
      {
        "id_cidade": "53",
        "Nome": "Nova Venécia",
        "fk_estado": "8"
      },
      {
        "id_cidade": "54",
        "Nome": "Pancas",
        "fk_estado": "8"
      },
      {
        "id_cidade": "55",
        "Nome": "Pedro Canário",
        "fk_estado": "8"
      },
      {
        "id_cidade": "56",
        "Nome": "Pinheiros",
        "fk_estado": "8"
      },
      {
        "id_cidade": "57",
        "Nome": "Piúma",
        "fk_estado": "8"
      },
      {
        "id_cidade": "58",
        "Nome": "Ponto Belo",
        "fk_estado": "8"
      },
      {
        "id_cidade": "59",
        "Nome": "Presid_cidadeente Kennedy",
        "fk_estado": "8"
      },
      {
        "id_cidade": "60",
        "Nome": "Rio Bananal",
        "fk_estado": "8"
      },
      {
        "id_cidade": "61",
        "Nome": "Rio Novo do Sul",
        "fk_estado": "8"
      },
      {
        "id_cidade": "62",
        "Nome": "Santa Leopoldina",
        "fk_estado": "8"
      },
      {
        "id_cidade": "63",
        "Nome": "Santa Maria de Jetibá",
        "fk_estado": "8"
      },
      {
        "id_cidade": "64",
        "Nome": "Santa Teresa",
        "fk_estado": "8"
      },
      {
        "id_cidade": "65",
        "Nome": "São Domingos do Norte",
        "fk_estado": "8"
      },
      {
        "id_cidade": "66",
        "Nome": "São Gabriel da Palha",
        "fk_estado": "8"
      },
      {
        "id_cidade": "67",
        "Nome": "São José do Calçado",
        "fk_estado": "8"
      },
      {
        "id_cidade": "68",
        "Nome": "São Mateus",
        "fk_estado": "8"
      },
      {
        "id_cidade": "69",
        "Nome": "São Roque do Canaã",
        "fk_estado": "8"
      },
      {
        "id_cidade": "70",
        "Nome": "Serra",
        "fk_estado": "8"
      },
      {
        "id_cidade": "71",
        "Nome": "Sooretama",
        "fk_estado": "8"
      },
      {
        "id_cidade": "72",
        "Nome": "Vargem Alta",
        "fk_estado": "8"
      },
      {
        "id_cidade": "73",
        "Nome": "Venda Nova do Imigrante",
        "fk_estado": "8"
      },
      {
        "id_cidade": "74",
        "Nome": "Viana",
        "fk_estado": "8"
      },
      {
        "id_cidade": "75",
        "Nome": "Vila Pavão",
        "fk_estado": "8"
      },
      {
        "id_cidade": "76",
        "Nome": "Vila Valério",
        "fk_estado": "8"
      },
      {
        "id_cidade": "77",
        "Nome": "Vila Velha",
        "fk_estado": "8"
      },
      {
        "id_cidade": "78",
        "Nome": "Vitória",
        "fk_estado": "8"
      },
      {
        "id_cidade": "79",
        "Nome": "Acrelândia",
        "fk_estado": "1"
      },
      {
        "id_cidade": "80",
        "Nome": "Assis Brasil",
        "fk_estado": "1"
      },
      {
        "id_cidade": "81",
        "Nome": "Brasiléia",
        "fk_estado": "1"
      },
      {
        "id_cidade": "82",
        "Nome": "Bujari",
        "fk_estado": "1"
      },
      {
        "id_cidade": "83",
        "Nome": "Capixaba",
        "fk_estado": "1"
      },
      {
        "id_cidade": "84",
        "Nome": "Cruzeiro do Sul",
        "fk_estado": "1"
      },
      {
        "id_cidade": "85",
        "Nome": "Epitaciolândia",
        "fk_estado": "1"
      },
      {
        "id_cidade": "86",
        "Nome": "Feijó",
        "fk_estado": "1"
      },
      {
        "id_cidade": "87",
        "Nome": "Jordão",
        "fk_estado": "1"
      },
      {
        "id_cidade": "88",
        "Nome": "Mâncio Lima",
        "fk_estado": "1"
      },
      {
        "id_cidade": "89",
        "Nome": "Manoel Urbano",
        "fk_estado": "1"
      },
      {
        "id_cidade": "90",
        "Nome": "Marechal Thaumaturgo",
        "fk_estado": "1"
      },
      {
        "id_cidade": "91",
        "Nome": "Plácid_cidadeo de Castro",
        "fk_estado": "1"
      },
      {
        "id_cidade": "92",
        "Nome": "Porto Acre",
        "fk_estado": "1"
      },
      {
        "id_cidade": "93",
        "Nome": "Porto Walter",
        "fk_estado": "1"
      },
      {
        "id_cidade": "94",
        "Nome": "Rio Branco",
        "fk_estado": "1"
      },
      {
        "id_cidade": "95",
        "Nome": "Rodrigues Alves",
        "fk_estado": "1"
      },
      {
        "id_cidade": "96",
        "Nome": "Santa Rosa do Purus",
        "fk_estado": "1"
      },
      {
        "id_cidade": "97",
        "Nome": "Sena Madureira",
        "fk_estado": "1"
      },
      {
        "id_cidade": "98",
        "Nome": "Senador Guiomard",
        "fk_estado": "1"
      },
      {
        "id_cidade": "99",
        "Nome": "Tarauacá",
        "fk_estado": "1"
      },
      {
        "id_cidade": "100",
        "Nome": "Xapuri",
        "fk_estado": "1"
      },
      {
        "id_cidade": "101",
        "Nome": "Água Branca",
        "fk_estado": "2"
      },
      {
        "id_cidade": "102",
        "Nome": "Anadia",
        "fk_estado": "2"
      },
      {
        "id_cidade": "103",
        "Nome": "Arapiraca",
        "fk_estado": "2"
      },
      {
        "id_cidade": "104",
        "Nome": "Atalaia",
        "fk_estado": "2"
      },
      {
        "id_cidade": "105",
        "Nome": "Barra de Santo Antônio",
        "fk_estado": "2"
      },
      {
        "id_cidade": "106",
        "Nome": "Barra de São Miguel",
        "fk_estado": "2"
      },
      {
        "id_cidade": "107",
        "Nome": "Batalha",
        "fk_estado": "2"
      },
      {
        "id_cidade": "108",
        "Nome": "Belém",
        "fk_estado": "2"
      },
      {
        "id_cidade": "109",
        "Nome": "Belo Monte",
        "fk_estado": "2"
      },
      {
        "id_cidade": "110",
        "Nome": "Boca da Mata",
        "fk_estado": "2"
      },
      {
        "id_cidade": "111",
        "Nome": "Branquinha",
        "fk_estado": "2"
      },
      {
        "id_cidade": "112",
        "Nome": "Cacimbinhas",
        "fk_estado": "2"
      },
      {
        "id_cidade": "113",
        "Nome": "Cajueiro",
        "fk_estado": "2"
      },
      {
        "id_cidade": "114",
        "Nome": "Campestre",
        "fk_estado": "2"
      },
      {
        "id_cidade": "115",
        "Nome": "Campo Alegre",
        "fk_estado": "2"
      },
      {
        "id_cidade": "116",
        "Nome": "Campo Grande",
        "fk_estado": "2"
      },
      {
        "id_cidade": "117",
        "Nome": "Canapi",
        "fk_estado": "2"
      },
      {
        "id_cidade": "118",
        "Nome": "Capela",
        "fk_estado": "2"
      },
      {
        "id_cidade": "119",
        "Nome": "Carneiros",
        "fk_estado": "2"
      },
      {
        "id_cidade": "120",
        "Nome": "Chã Preta",
        "fk_estado": "2"
      },
      {
        "id_cidade": "121",
        "Nome": "Coité do Nóia",
        "fk_estado": "2"
      },
      {
        "id_cidade": "122",
        "Nome": "Colônia Leopoldina",
        "fk_estado": "2"
      },
      {
        "id_cidade": "123",
        "Nome": "Coqueiro Seco",
        "fk_estado": "2"
      },
      {
        "id_cidade": "124",
        "Nome": "Coruripe",
        "fk_estado": "2"
      },
      {
        "id_cidade": "125",
        "Nome": "Craíbas",
        "fk_estado": "2"
      },
      {
        "id_cidade": "126",
        "Nome": "Delmiro Gouveia",
        "fk_estado": "2"
      },
      {
        "id_cidade": "127",
        "Nome": "Dois Riachos",
        "fk_estado": "2"
      },
      {
        "id_cidade": "128",
        "Nome": "Estrela de Alagoas",
        "fk_estado": "2"
      },
      {
        "id_cidade": "129",
        "Nome": "Feira Grande",
        "fk_estado": "2"
      },
      {
        "id_cidade": "130",
        "Nome": "Feliz Deserto",
        "fk_estado": "2"
      },
      {
        "id_cidade": "131",
        "Nome": "Flexeiras",
        "fk_estado": "2"
      },
      {
        "id_cidade": "132",
        "Nome": "Girau do Ponciano",
        "fk_estado": "2"
      },
      {
        "id_cidade": "133",
        "Nome": "Ibateguara",
        "fk_estado": "2"
      },
      {
        "id_cidade": "134",
        "Nome": "Igaci",
        "fk_estado": "2"
      },
      {
        "id_cidade": "135",
        "Nome": "Igreja Nova",
        "fk_estado": "2"
      },
      {
        "id_cidade": "136",
        "Nome": "Inhapi",
        "fk_estado": "2"
      },
      {
        "id_cidade": "137",
        "Nome": "Jacaré dos Homens",
        "fk_estado": "2"
      },
      {
        "id_cidade": "138",
        "Nome": "Jacuípe",
        "fk_estado": "2"
      },
      {
        "id_cidade": "139",
        "Nome": "Japaratinga",
        "fk_estado": "2"
      },
      {
        "id_cidade": "140",
        "Nome": "Jaramataia",
        "fk_estado": "2"
      },
      {
        "id_cidade": "141",
        "Nome": "Jequiá da Praia",
        "fk_estado": "2"
      },
      {
        "id_cidade": "142",
        "Nome": "Joaquim Gomes",
        "fk_estado": "2"
      },
      {
        "id_cidade": "143",
        "Nome": "Jundiá",
        "fk_estado": "2"
      },
      {
        "id_cidade": "144",
        "Nome": "Junqueiro",
        "fk_estado": "2"
      },
      {
        "id_cidade": "145",
        "Nome": "Lagoa da Canoa",
        "fk_estado": "2"
      },
      {
        "id_cidade": "146",
        "Nome": "Limoeiro de Anadia",
        "fk_estado": "2"
      },
      {
        "id_cidade": "147",
        "Nome": "Maceió",
        "fk_estado": "2"
      },
      {
        "id_cidade": "148",
        "Nome": "Major Isid_cidadeoro",
        "fk_estado": "2"
      },
      {
        "id_cidade": "149",
        "Nome": "Mar Vermelho",
        "fk_estado": "2"
      },
      {
        "id_cidade": "150",
        "Nome": "Maragogi",
        "fk_estado": "2"
      },
      {
        "id_cidade": "151",
        "Nome": "Maravilha",
        "fk_estado": "2"
      },
      {
        "id_cidade": "152",
        "Nome": "Marechal Deodoro",
        "fk_estado": "2"
      },
      {
        "id_cidade": "153",
        "Nome": "Maribondo",
        "fk_estado": "2"
      },
      {
        "id_cidade": "154",
        "Nome": "Mata Grande",
        "fk_estado": "2"
      },
      {
        "id_cidade": "155",
        "Nome": "Matriz de Camaragibe",
        "fk_estado": "2"
      },
      {
        "id_cidade": "156",
        "Nome": "Messias",
        "fk_estado": "2"
      },
      {
        "id_cidade": "157",
        "Nome": "Minador do Negrão",
        "fk_estado": "2"
      },
      {
        "id_cidade": "158",
        "Nome": "Monteirópolis",
        "fk_estado": "2"
      },
      {
        "id_cidade": "159",
        "Nome": "Murici",
        "fk_estado": "2"
      },
      {
        "id_cidade": "160",
        "Nome": "Novo Lino",
        "fk_estado": "2"
      },
      {
        "id_cidade": "161",
        "Nome": "Olho d`Água das Flores",
        "fk_estado": "2"
      },
      {
        "id_cidade": "162",
        "Nome": "Olho d`Água do Casado",
        "fk_estado": "2"
      },
      {
        "id_cidade": "163",
        "Nome": "Olho d`Água Grande",
        "fk_estado": "2"
      },
      {
        "id_cidade": "164",
        "Nome": "Olivença",
        "fk_estado": "2"
      },
      {
        "id_cidade": "165",
        "Nome": "Ouro Branco",
        "fk_estado": "2"
      },
      {
        "id_cidade": "166",
        "Nome": "Palestina",
        "fk_estado": "2"
      },
      {
        "id_cidade": "167",
        "Nome": "Palmeira dos Índios",
        "fk_estado": "2"
      },
      {
        "id_cidade": "168",
        "Nome": "Pão de Açúcar",
        "fk_estado": "2"
      },
      {
        "id_cidade": "169",
        "Nome": "Pariconha",
        "fk_estado": "2"
      },
      {
        "id_cidade": "170",
        "Nome": "Paripueira",
        "fk_estado": "2"
      },
      {
        "id_cidade": "171",
        "Nome": "Passo de Camaragibe",
        "fk_estado": "2"
      },
      {
        "id_cidade": "172",
        "Nome": "Paulo Jacinto",
        "fk_estado": "2"
      },
      {
        "id_cidade": "173",
        "Nome": "Penedo",
        "fk_estado": "2"
      },
      {
        "id_cidade": "174",
        "Nome": "Piaçabuçu",
        "fk_estado": "2"
      },
      {
        "id_cidade": "175",
        "Nome": "Pilar",
        "fk_estado": "2"
      },
      {
        "id_cidade": "176",
        "Nome": "Pindoba",
        "fk_estado": "2"
      },
      {
        "id_cidade": "177",
        "Nome": "Piranhas",
        "fk_estado": "2"
      },
      {
        "id_cidade": "178",
        "Nome": "Poço das Trincheiras",
        "fk_estado": "2"
      },
      {
        "id_cidade": "179",
        "Nome": "Porto Calvo",
        "fk_estado": "2"
      },
      {
        "id_cidade": "180",
        "Nome": "Porto de Pedras",
        "fk_estado": "2"
      },
      {
        "id_cidade": "181",
        "Nome": "Porto Real do Colégio",
        "fk_estado": "2"
      },
      {
        "id_cidade": "182",
        "Nome": "Quebrangulo",
        "fk_estado": "2"
      },
      {
        "id_cidade": "183",
        "Nome": "Rio Largo",
        "fk_estado": "2"
      },
      {
        "id_cidade": "184",
        "Nome": "Roteiro",
        "fk_estado": "2"
      },
      {
        "id_cidade": "185",
        "Nome": "Santa Luzia do Norte",
        "fk_estado": "2"
      },
      {
        "id_cidade": "186",
        "Nome": "Santana do Ipanema",
        "fk_estado": "2"
      },
      {
        "id_cidade": "187",
        "Nome": "Santana do Mundaú",
        "fk_estado": "2"
      },
      {
        "id_cidade": "188",
        "Nome": "São Brás",
        "fk_estado": "2"
      },
      {
        "id_cidade": "189",
        "Nome": "São José da Laje",
        "fk_estado": "2"
      },
      {
        "id_cidade": "190",
        "Nome": "São José da Tapera",
        "fk_estado": "2"
      },
      {
        "id_cidade": "191",
        "Nome": "São Luís do Quitunde",
        "fk_estado": "2"
      },
      {
        "id_cidade": "192",
        "Nome": "São Miguel dos Campos",
        "fk_estado": "2"
      },
      {
        "id_cidade": "193",
        "Nome": "São Miguel dos Milagres",
        "fk_estado": "2"
      },
      {
        "id_cidade": "194",
        "Nome": "São Sebastião",
        "fk_estado": "2"
      },
      {
        "id_cidade": "195",
        "Nome": "Satuba",
        "fk_estado": "2"
      },
      {
        "id_cidade": "196",
        "Nome": "Senador Rui Palmeira",
        "fk_estado": "2"
      },
      {
        "id_cidade": "197",
        "Nome": "Tanque d`Arca",
        "fk_estado": "2"
      },
      {
        "id_cidade": "198",
        "Nome": "Taquarana",
        "fk_estado": "2"
      },
      {
        "id_cidade": "199",
        "Nome": "Teotônio Vilela",
        "fk_estado": "2"
      },
      {
        "id_cidade": "200",
        "Nome": "Traipu",
        "fk_estado": "2"
      },
      {
        "id_cidade": "201",
        "Nome": "União dos Palmares",
        "fk_estado": "2"
      },
      {
        "id_cidade": "202",
        "Nome": "Viçosa",
        "fk_estado": "2"
      },
      {
        "id_cidade": "203",
        "Nome": "Amapá",
        "fk_estado": "4"
      },
      {
        "id_cidade": "204",
        "Nome": "Calçoene",
        "fk_estado": "4"
      },
      {
        "id_cidade": "205",
        "Nome": "Cutias",
        "fk_estado": "4"
      },
      {
        "id_cidade": "206",
        "Nome": "Ferreira Gomes",
        "fk_estado": "4"
      },
      {
        "id_cidade": "207",
        "Nome": "Itaubal",
        "fk_estado": "4"
      },
      {
        "id_cidade": "208",
        "Nome": "Laranjal do Jari",
        "fk_estado": "4"
      },
      {
        "id_cidade": "209",
        "Nome": "Macapá",
        "fk_estado": "4"
      },
      {
        "id_cidade": "210",
        "Nome": "Mazagão",
        "fk_estado": "4"
      },
      {
        "id_cidade": "211",
        "Nome": "Oiapoque",
        "fk_estado": "4"
      },
      {
        "id_cidade": "212",
        "Nome": "Pedra Branca do Amaparí",
        "fk_estado": "4"
      },
      {
        "id_cidade": "213",
        "Nome": "Porto Grande",
        "fk_estado": "4"
      },
      {
        "id_cidade": "214",
        "Nome": "Pracuúba",
        "fk_estado": "4"
      },
      {
        "id_cidade": "215",
        "Nome": "Santana",
        "fk_estado": "4"
      },
      {
        "id_cidade": "216",
        "Nome": "Serra do Navio",
        "fk_estado": "4"
      },
      {
        "id_cidade": "217",
        "Nome": "Tartarugalzinho",
        "fk_estado": "4"
      },
      {
        "id_cidade": "218",
        "Nome": "Vitória do Jari",
        "fk_estado": "4"
      },
      {
        "id_cidade": "219",
        "Nome": "Alvarães",
        "fk_estado": "3"
      },
      {
        "id_cidade": "220",
        "Nome": "Amaturá",
        "fk_estado": "3"
      },
      {
        "id_cidade": "221",
        "Nome": "Anamã",
        "fk_estado": "3"
      },
      {
        "id_cidade": "222",
        "Nome": "Anori",
        "fk_estado": "3"
      },
      {
        "id_cidade": "223",
        "Nome": "Apuí",
        "fk_estado": "3"
      },
      {
        "id_cidade": "224",
        "Nome": "Atalaia do Norte",
        "fk_estado": "3"
      },
      {
        "id_cidade": "225",
        "Nome": "Autazes",
        "fk_estado": "3"
      },
      {
        "id_cidade": "226",
        "Nome": "Barcelos",
        "fk_estado": "3"
      },
      {
        "id_cidade": "227",
        "Nome": "Barreirinha",
        "fk_estado": "3"
      },
      {
        "id_cidade": "228",
        "Nome": "Benjamin Constant",
        "fk_estado": "3"
      },
      {
        "id_cidade": "229",
        "Nome": "Beruri",
        "fk_estado": "3"
      },
      {
        "id_cidade": "230",
        "Nome": "Boa Vista do Ramos",
        "fk_estado": "3"
      },
      {
        "id_cidade": "231",
        "Nome": "Boca do Acre",
        "fk_estado": "3"
      },
      {
        "id_cidade": "232",
        "Nome": "Borba",
        "fk_estado": "3"
      },
      {
        "id_cidade": "233",
        "Nome": "Caapiranga",
        "fk_estado": "3"
      },
      {
        "id_cidade": "234",
        "Nome": "Canutama",
        "fk_estado": "3"
      },
      {
        "id_cidade": "235",
        "Nome": "Carauari",
        "fk_estado": "3"
      },
      {
        "id_cidade": "236",
        "Nome": "Careiro",
        "fk_estado": "3"
      },
      {
        "id_cidade": "237",
        "Nome": "Careiro da Várzea",
        "fk_estado": "3"
      },
      {
        "id_cidade": "238",
        "Nome": "Coari",
        "fk_estado": "3"
      },
      {
        "id_cidade": "239",
        "Nome": "Codajás",
        "fk_estado": "3"
      },
      {
        "id_cidade": "240",
        "Nome": "Eirunepé",
        "fk_estado": "3"
      },
      {
        "id_cidade": "241",
        "Nome": "Envira",
        "fk_estado": "3"
      },
      {
        "id_cidade": "242",
        "Nome": "Fonte Boa",
        "fk_estado": "3"
      },
      {
        "id_cidade": "243",
        "Nome": "Guajará",
        "fk_estado": "3"
      },
      {
        "id_cidade": "244",
        "Nome": "Humaitá",
        "fk_estado": "3"
      },
      {
        "id_cidade": "245",
        "Nome": "Ipixuna",
        "fk_estado": "3"
      },
      {
        "id_cidade": "246",
        "Nome": "Iranduba",
        "fk_estado": "3"
      },
      {
        "id_cidade": "247",
        "Nome": "Itacoatiara",
        "fk_estado": "3"
      },
      {
        "id_cidade": "248",
        "Nome": "Itamarati",
        "fk_estado": "3"
      },
      {
        "id_cidade": "249",
        "Nome": "Itapiranga",
        "fk_estado": "3"
      },
      {
        "id_cidade": "250",
        "Nome": "Japurá",
        "fk_estado": "3"
      },
      {
        "id_cidade": "251",
        "Nome": "Juruá",
        "fk_estado": "3"
      },
      {
        "id_cidade": "252",
        "Nome": "Jutaí",
        "fk_estado": "3"
      },
      {
        "id_cidade": "253",
        "Nome": "Lábrea",
        "fk_estado": "3"
      },
      {
        "id_cidade": "254",
        "Nome": "Manacapuru",
        "fk_estado": "3"
      },
      {
        "id_cidade": "255",
        "Nome": "Manaquiri",
        "fk_estado": "3"
      },
      {
        "id_cidade": "256",
        "Nome": "Manaus",
        "fk_estado": "3"
      },
      {
        "id_cidade": "257",
        "Nome": "Manicoré",
        "fk_estado": "3"
      },
      {
        "id_cidade": "258",
        "Nome": "Maraã",
        "fk_estado": "3"
      },
      {
        "id_cidade": "259",
        "Nome": "Maués",
        "fk_estado": "3"
      },
      {
        "id_cidade": "260",
        "Nome": "Nhamundá",
        "fk_estado": "3"
      },
      {
        "id_cidade": "261",
        "Nome": "Nova Olinda do Norte",
        "fk_estado": "3"
      },
      {
        "id_cidade": "262",
        "Nome": "Novo Airão",
        "fk_estado": "3"
      },
      {
        "id_cidade": "263",
        "Nome": "Novo Aripuanã",
        "fk_estado": "3"
      },
      {
        "id_cidade": "264",
        "Nome": "Parintins",
        "fk_estado": "3"
      },
      {
        "id_cidade": "265",
        "Nome": "Pauini",
        "fk_estado": "3"
      },
      {
        "id_cidade": "266",
        "Nome": "Presid_cidadeente Figueiredo",
        "fk_estado": "3"
      },
      {
        "id_cidade": "267",
        "Nome": "Rio Preto da Eva",
        "fk_estado": "3"
      },
      {
        "id_cidade": "268",
        "Nome": "Santa Isabel do Rio Negro",
        "fk_estado": "3"
      },
      {
        "id_cidade": "269",
        "Nome": "Santo Antônio do Içá",
        "fk_estado": "3"
      },
      {
        "id_cidade": "270",
        "Nome": "São Gabriel da Cachoeira",
        "fk_estado": "3"
      },
      {
        "id_cidade": "271",
        "Nome": "São Paulo de Olivença",
        "fk_estado": "3"
      },
      {
        "id_cidade": "272",
        "Nome": "São Sebastião do Uatumã",
        "fk_estado": "3"
      },
      {
        "id_cidade": "273",
        "Nome": "Silves",
        "fk_estado": "3"
      },
      {
        "id_cidade": "274",
        "Nome": "Tabatinga",
        "fk_estado": "3"
      },
      {
        "id_cidade": "275",
        "Nome": "Tapauá",
        "fk_estado": "3"
      },
      {
        "id_cidade": "276",
        "Nome": "Tefé",
        "fk_estado": "3"
      },
      {
        "id_cidade": "277",
        "Nome": "Tonantins",
        "fk_estado": "3"
      },
      {
        "id_cidade": "278",
        "Nome": "Uarini",
        "fk_estado": "3"
      },
      {
        "id_cidade": "279",
        "Nome": "Urucará",
        "fk_estado": "3"
      },
      {
        "id_cidade": "280",
        "Nome": "Urucurituba",
        "fk_estado": "3"
      },
      {
        "id_cidade": "281",
        "Nome": "Abaíra",
        "fk_estado": "5"
      },
      {
        "id_cidade": "282",
        "Nome": "Abaré",
        "fk_estado": "5"
      },
      {
        "id_cidade": "283",
        "Nome": "Acajutiba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "284",
        "Nome": "Adustina",
        "fk_estado": "5"
      },
      {
        "id_cidade": "285",
        "Nome": "Água Fria",
        "fk_estado": "5"
      },
      {
        "id_cidade": "286",
        "Nome": "Aiquara",
        "fk_estado": "5"
      },
      {
        "id_cidade": "287",
        "Nome": "Alagoinhas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "288",
        "Nome": "Alcobaça",
        "fk_estado": "5"
      },
      {
        "id_cidade": "289",
        "Nome": "Almadina",
        "fk_estado": "5"
      },
      {
        "id_cidade": "290",
        "Nome": "Amargosa",
        "fk_estado": "5"
      },
      {
        "id_cidade": "291",
        "Nome": "Amélia Rodrigues",
        "fk_estado": "5"
      },
      {
        "id_cidade": "292",
        "Nome": "América Dourada",
        "fk_estado": "5"
      },
      {
        "id_cidade": "293",
        "Nome": "Anagé",
        "fk_estado": "5"
      },
      {
        "id_cidade": "294",
        "Nome": "Andaraí",
        "fk_estado": "5"
      },
      {
        "id_cidade": "295",
        "Nome": "Andorinha",
        "fk_estado": "5"
      },
      {
        "id_cidade": "296",
        "Nome": "Angical",
        "fk_estado": "5"
      },
      {
        "id_cidade": "297",
        "Nome": "Anguera",
        "fk_estado": "5"
      },
      {
        "id_cidade": "298",
        "Nome": "Antas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "299",
        "Nome": "Antônio Cardoso",
        "fk_estado": "5"
      },
      {
        "id_cidade": "300",
        "Nome": "Antônio Gonçalves",
        "fk_estado": "5"
      },
      {
        "id_cidade": "301",
        "Nome": "Aporá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "302",
        "Nome": "Apuarema",
        "fk_estado": "5"
      },
      {
        "id_cidade": "303",
        "Nome": "Araças",
        "fk_estado": "5"
      },
      {
        "id_cidade": "304",
        "Nome": "Aracatu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "305",
        "Nome": "Araci",
        "fk_estado": "5"
      },
      {
        "id_cidade": "306",
        "Nome": "Aramari",
        "fk_estado": "5"
      },
      {
        "id_cidade": "307",
        "Nome": "Arataca",
        "fk_estado": "5"
      },
      {
        "id_cidade": "308",
        "Nome": "Aratuípe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "309",
        "Nome": "Aurelino Leal",
        "fk_estado": "5"
      },
      {
        "id_cidade": "310",
        "Nome": "Baianópolis",
        "fk_estado": "5"
      },
      {
        "id_cidade": "311",
        "Nome": "Baixa Grande",
        "fk_estado": "5"
      },
      {
        "id_cidade": "312",
        "Nome": "Banzaê",
        "fk_estado": "5"
      },
      {
        "id_cidade": "313",
        "Nome": "Barra",
        "fk_estado": "5"
      },
      {
        "id_cidade": "314",
        "Nome": "Barra da Estiva",
        "fk_estado": "5"
      },
      {
        "id_cidade": "315",
        "Nome": "Barra do Choça",
        "fk_estado": "5"
      },
      {
        "id_cidade": "316",
        "Nome": "Barra do Mendes",
        "fk_estado": "5"
      },
      {
        "id_cidade": "317",
        "Nome": "Barra do Rocha",
        "fk_estado": "5"
      },
      {
        "id_cidade": "318",
        "Nome": "Barreiras",
        "fk_estado": "5"
      },
      {
        "id_cidade": "319",
        "Nome": "Barro Alto",
        "fk_estado": "5"
      },
      {
        "id_cidade": "320",
        "Nome": "Barro Preto (antigo Gov. Lomanto Jr.)",
        "fk_estado": "5"
      },
      {
        "id_cidade": "321",
        "Nome": "Barrocas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "322",
        "Nome": "Belmonte",
        "fk_estado": "5"
      },
      {
        "id_cidade": "323",
        "Nome": "Belo Campo",
        "fk_estado": "5"
      },
      {
        "id_cidade": "324",
        "Nome": "Biritinga",
        "fk_estado": "5"
      },
      {
        "id_cidade": "325",
        "Nome": "Boa Nova",
        "fk_estado": "5"
      },
      {
        "id_cidade": "326",
        "Nome": "Boa Vista do Tupim",
        "fk_estado": "5"
      },
      {
        "id_cidade": "327",
        "Nome": "Bom Jesus da Lapa",
        "fk_estado": "5"
      },
      {
        "id_cidade": "328",
        "Nome": "Bom Jesus da Serra",
        "fk_estado": "5"
      },
      {
        "id_cidade": "329",
        "Nome": "Boninal",
        "fk_estado": "5"
      },
      {
        "id_cidade": "330",
        "Nome": "Bonito",
        "fk_estado": "5"
      },
      {
        "id_cidade": "331",
        "Nome": "Boquira",
        "fk_estado": "5"
      },
      {
        "id_cidade": "332",
        "Nome": "Botuporã",
        "fk_estado": "5"
      },
      {
        "id_cidade": "333",
        "Nome": "Brejões",
        "fk_estado": "5"
      },
      {
        "id_cidade": "334",
        "Nome": "Brejolândia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "335",
        "Nome": "Brotas de Macaúbas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "336",
        "Nome": "Brumado",
        "fk_estado": "5"
      },
      {
        "id_cidade": "337",
        "Nome": "Buerarema",
        "fk_estado": "5"
      },
      {
        "id_cidade": "338",
        "Nome": "Buritirama",
        "fk_estado": "5"
      },
      {
        "id_cidade": "339",
        "Nome": "Caatiba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "340",
        "Nome": "Cabaceiras do Paraguaçu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "341",
        "Nome": "Cachoeira",
        "fk_estado": "5"
      },
      {
        "id_cidade": "342",
        "Nome": "Caculé",
        "fk_estado": "5"
      },
      {
        "id_cidade": "343",
        "Nome": "Caém",
        "fk_estado": "5"
      },
      {
        "id_cidade": "344",
        "Nome": "Caetanos",
        "fk_estado": "5"
      },
      {
        "id_cidade": "345",
        "Nome": "Caetité",
        "fk_estado": "5"
      },
      {
        "id_cidade": "346",
        "Nome": "Cafarnaum",
        "fk_estado": "5"
      },
      {
        "id_cidade": "347",
        "Nome": "Cairu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "348",
        "Nome": "Caldeirão Grande",
        "fk_estado": "5"
      },
      {
        "id_cidade": "349",
        "Nome": "Camacan",
        "fk_estado": "5"
      },
      {
        "id_cidade": "350",
        "Nome": "Camaçari",
        "fk_estado": "5"
      },
      {
        "id_cidade": "351",
        "Nome": "Camamu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "352",
        "Nome": "Campo Alegre de Lourdes",
        "fk_estado": "5"
      },
      {
        "id_cidade": "353",
        "Nome": "Campo Formoso",
        "fk_estado": "5"
      },
      {
        "id_cidade": "354",
        "Nome": "Canápolis",
        "fk_estado": "5"
      },
      {
        "id_cidade": "355",
        "Nome": "Canarana",
        "fk_estado": "5"
      },
      {
        "id_cidade": "356",
        "Nome": "Canavieiras",
        "fk_estado": "5"
      },
      {
        "id_cidade": "357",
        "Nome": "Candeal",
        "fk_estado": "5"
      },
      {
        "id_cidade": "358",
        "Nome": "Candeias",
        "fk_estado": "5"
      },
      {
        "id_cidade": "359",
        "Nome": "Candiba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "360",
        "Nome": "Cândid_cidadeo Sales",
        "fk_estado": "5"
      },
      {
        "id_cidade": "361",
        "Nome": "Cansanção",
        "fk_estado": "5"
      },
      {
        "id_cidade": "362",
        "Nome": "Canudos",
        "fk_estado": "5"
      },
      {
        "id_cidade": "363",
        "Nome": "Capela do Alto Alegre",
        "fk_estado": "5"
      },
      {
        "id_cidade": "364",
        "Nome": "Capim Grosso",
        "fk_estado": "5"
      },
      {
        "id_cidade": "365",
        "Nome": "Caraíbas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "366",
        "Nome": "Caravelas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "367",
        "Nome": "Cardeal da Silva",
        "fk_estado": "5"
      },
      {
        "id_cidade": "368",
        "Nome": "Carinhanha",
        "fk_estado": "5"
      },
      {
        "id_cidade": "369",
        "Nome": "Casa Nova",
        "fk_estado": "5"
      },
      {
        "id_cidade": "370",
        "Nome": "Castro Alves",
        "fk_estado": "5"
      },
      {
        "id_cidade": "371",
        "Nome": "Catolândia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "372",
        "Nome": "Catu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "373",
        "Nome": "Caturama",
        "fk_estado": "5"
      },
      {
        "id_cidade": "374",
        "Nome": "Central",
        "fk_estado": "5"
      },
      {
        "id_cidade": "375",
        "Nome": "Chorrochó",
        "fk_estado": "5"
      },
      {
        "id_cidade": "376",
        "Nome": "Cícero Dantas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "377",
        "Nome": "Cipó",
        "fk_estado": "5"
      },
      {
        "id_cidade": "378",
        "Nome": "Coaraci",
        "fk_estado": "5"
      },
      {
        "id_cidade": "379",
        "Nome": "Cocos",
        "fk_estado": "5"
      },
      {
        "id_cidade": "380",
        "Nome": "Conceição da Feira",
        "fk_estado": "5"
      },
      {
        "id_cidade": "381",
        "Nome": "Conceição do Almeid_cidadea",
        "fk_estado": "5"
      },
      {
        "id_cidade": "382",
        "Nome": "Conceição do Coité",
        "fk_estado": "5"
      },
      {
        "id_cidade": "383",
        "Nome": "Conceição do Jacuípe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "384",
        "Nome": "Conde",
        "fk_estado": "5"
      },
      {
        "id_cidade": "385",
        "Nome": "Condeúba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "386",
        "Nome": "Contendas do Sincorá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "387",
        "Nome": "Coração de Maria",
        "fk_estado": "5"
      },
      {
        "id_cidade": "388",
        "Nome": "Cordeiros",
        "fk_estado": "5"
      },
      {
        "id_cidade": "389",
        "Nome": "Coribe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "390",
        "Nome": "Coronel João Sá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "391",
        "Nome": "Correntina",
        "fk_estado": "5"
      },
      {
        "id_cidade": "392",
        "Nome": "Cotegipe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "393",
        "Nome": "Cravolândia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "394",
        "Nome": "Crisópolis",
        "fk_estado": "5"
      },
      {
        "id_cidade": "395",
        "Nome": "Cristópolis",
        "fk_estado": "5"
      },
      {
        "id_cidade": "396",
        "Nome": "Cruz das Almas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "397",
        "Nome": "Curaçá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "398",
        "Nome": "Dário Meira",
        "fk_estado": "5"
      },
      {
        "id_cidade": "399",
        "Nome": "Dias d`Ávila",
        "fk_estado": "5"
      },
      {
        "id_cidade": "400",
        "Nome": "Dom Basílio",
        "fk_estado": "5"
      },
      {
        "id_cidade": "401",
        "Nome": "Dom Macedo Costa",
        "fk_estado": "5"
      },
      {
        "id_cidade": "402",
        "Nome": "Elísio Medrado",
        "fk_estado": "5"
      },
      {
        "id_cidade": "403",
        "Nome": "Encruzilhada",
        "fk_estado": "5"
      },
      {
        "id_cidade": "404",
        "Nome": "Entre Rios",
        "fk_estado": "5"
      },
      {
        "id_cidade": "405",
        "Nome": "Érico Cardoso",
        "fk_estado": "5"
      },
      {
        "id_cidade": "406",
        "Nome": "Esplanada",
        "fk_estado": "5"
      },
      {
        "id_cidade": "407",
        "Nome": "Euclid_cidadees da Cunha",
        "fk_estado": "5"
      },
      {
        "id_cidade": "408",
        "Nome": "Eunápolis",
        "fk_estado": "5"
      },
      {
        "id_cidade": "409",
        "Nome": "Fátima",
        "fk_estado": "5"
      },
      {
        "id_cidade": "410",
        "Nome": "Feira da Mata",
        "fk_estado": "5"
      },
      {
        "id_cidade": "411",
        "Nome": "Feira de Santana",
        "fk_estado": "5"
      },
      {
        "id_cidade": "412",
        "Nome": "Filadélfia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "413",
        "Nome": "Firmino Alves",
        "fk_estado": "5"
      },
      {
        "id_cidade": "414",
        "Nome": "Floresta Azul",
        "fk_estado": "5"
      },
      {
        "id_cidade": "415",
        "Nome": "Formosa do Rio Preto",
        "fk_estado": "5"
      },
      {
        "id_cidade": "416",
        "Nome": "Gandu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "417",
        "Nome": "Gavião",
        "fk_estado": "5"
      },
      {
        "id_cidade": "418",
        "Nome": "Gentio do Ouro",
        "fk_estado": "5"
      },
      {
        "id_cidade": "419",
        "Nome": "Glória",
        "fk_estado": "5"
      },
      {
        "id_cidade": "420",
        "Nome": "Gongogi",
        "fk_estado": "5"
      },
      {
        "id_cidade": "421",
        "Nome": "Governador Mangabeira",
        "fk_estado": "5"
      },
      {
        "id_cidade": "422",
        "Nome": "Guajeru",
        "fk_estado": "5"
      },
      {
        "id_cidade": "423",
        "Nome": "Guanambi",
        "fk_estado": "5"
      },
      {
        "id_cidade": "424",
        "Nome": "Guaratinga",
        "fk_estado": "5"
      },
      {
        "id_cidade": "425",
        "Nome": "Heliópolis",
        "fk_estado": "5"
      },
      {
        "id_cidade": "426",
        "Nome": "Iaçu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "427",
        "Nome": "Ibiassucê",
        "fk_estado": "5"
      },
      {
        "id_cidade": "428",
        "Nome": "Ibicaraí",
        "fk_estado": "5"
      },
      {
        "id_cidade": "429",
        "Nome": "Ibicoara",
        "fk_estado": "5"
      },
      {
        "id_cidade": "430",
        "Nome": "Ibicuí",
        "fk_estado": "5"
      },
      {
        "id_cidade": "431",
        "Nome": "Ibipeba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "432",
        "Nome": "Ibipitanga",
        "fk_estado": "5"
      },
      {
        "id_cidade": "433",
        "Nome": "Ibiquera",
        "fk_estado": "5"
      },
      {
        "id_cidade": "434",
        "Nome": "Ibirapitanga",
        "fk_estado": "5"
      },
      {
        "id_cidade": "435",
        "Nome": "Ibirapuã",
        "fk_estado": "5"
      },
      {
        "id_cidade": "436",
        "Nome": "Ibirataia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "437",
        "Nome": "Ibitiara",
        "fk_estado": "5"
      },
      {
        "id_cidade": "438",
        "Nome": "Ibititá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "439",
        "Nome": "Ibotirama",
        "fk_estado": "5"
      },
      {
        "id_cidade": "440",
        "Nome": "Ichu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "441",
        "Nome": "Igaporã",
        "fk_estado": "5"
      },
      {
        "id_cidade": "442",
        "Nome": "Igrapiúna",
        "fk_estado": "5"
      },
      {
        "id_cidade": "443",
        "Nome": "Iguaí",
        "fk_estado": "5"
      },
      {
        "id_cidade": "444",
        "Nome": "Ilhéus",
        "fk_estado": "5"
      },
      {
        "id_cidade": "445",
        "Nome": "Inhambupe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "446",
        "Nome": "Ipecaetá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "447",
        "Nome": "Ipiaú",
        "fk_estado": "5"
      },
      {
        "id_cidade": "448",
        "Nome": "Ipirá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "449",
        "Nome": "Ipupiara",
        "fk_estado": "5"
      },
      {
        "id_cidade": "450",
        "Nome": "Irajuba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "451",
        "Nome": "Iramaia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "452",
        "Nome": "Iraquara",
        "fk_estado": "5"
      },
      {
        "id_cidade": "453",
        "Nome": "Irará",
        "fk_estado": "5"
      },
      {
        "id_cidade": "454",
        "Nome": "Irecê",
        "fk_estado": "5"
      },
      {
        "id_cidade": "455",
        "Nome": "Itabela",
        "fk_estado": "5"
      },
      {
        "id_cidade": "456",
        "Nome": "Itaberaba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "457",
        "Nome": "Itabuna",
        "fk_estado": "5"
      },
      {
        "id_cidade": "458",
        "Nome": "Itacaré",
        "fk_estado": "5"
      },
      {
        "id_cidade": "459",
        "Nome": "Itaeté",
        "fk_estado": "5"
      },
      {
        "id_cidade": "460",
        "Nome": "Itagi",
        "fk_estado": "5"
      },
      {
        "id_cidade": "461",
        "Nome": "Itagibá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "462",
        "Nome": "Itagimirim",
        "fk_estado": "5"
      },
      {
        "id_cidade": "463",
        "Nome": "Itaguaçu da Bahia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "464",
        "Nome": "Itaju do Colônia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "465",
        "Nome": "Itajuípe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "466",
        "Nome": "Itamaraju",
        "fk_estado": "5"
      },
      {
        "id_cidade": "467",
        "Nome": "Itamari",
        "fk_estado": "5"
      },
      {
        "id_cidade": "468",
        "Nome": "Itambé",
        "fk_estado": "5"
      },
      {
        "id_cidade": "469",
        "Nome": "Itanagra",
        "fk_estado": "5"
      },
      {
        "id_cidade": "470",
        "Nome": "Itanhém",
        "fk_estado": "5"
      },
      {
        "id_cidade": "471",
        "Nome": "Itaparica",
        "fk_estado": "5"
      },
      {
        "id_cidade": "472",
        "Nome": "Itapé",
        "fk_estado": "5"
      },
      {
        "id_cidade": "473",
        "Nome": "Itapebi",
        "fk_estado": "5"
      },
      {
        "id_cidade": "474",
        "Nome": "Itapetinga",
        "fk_estado": "5"
      },
      {
        "id_cidade": "475",
        "Nome": "Itapicuru",
        "fk_estado": "5"
      },
      {
        "id_cidade": "476",
        "Nome": "Itapitanga",
        "fk_estado": "5"
      },
      {
        "id_cidade": "477",
        "Nome": "Itaquara",
        "fk_estado": "5"
      },
      {
        "id_cidade": "478",
        "Nome": "Itarantim",
        "fk_estado": "5"
      },
      {
        "id_cidade": "479",
        "Nome": "Itatim",
        "fk_estado": "5"
      },
      {
        "id_cidade": "480",
        "Nome": "Itiruçu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "481",
        "Nome": "Itiúba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "482",
        "Nome": "Itororó",
        "fk_estado": "5"
      },
      {
        "id_cidade": "483",
        "Nome": "Ituaçu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "484",
        "Nome": "Ituberá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "485",
        "Nome": "Iuiú",
        "fk_estado": "5"
      },
      {
        "id_cidade": "486",
        "Nome": "Jaborandi",
        "fk_estado": "5"
      },
      {
        "id_cidade": "487",
        "Nome": "Jacaraci",
        "fk_estado": "5"
      },
      {
        "id_cidade": "488",
        "Nome": "Jacobina",
        "fk_estado": "5"
      },
      {
        "id_cidade": "489",
        "Nome": "Jaguaquara",
        "fk_estado": "5"
      },
      {
        "id_cidade": "490",
        "Nome": "Jaguarari",
        "fk_estado": "5"
      },
      {
        "id_cidade": "491",
        "Nome": "Jaguaripe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "492",
        "Nome": "Jandaíra",
        "fk_estado": "5"
      },
      {
        "id_cidade": "493",
        "Nome": "Jequié",
        "fk_estado": "5"
      },
      {
        "id_cidade": "494",
        "Nome": "Jeremoabo",
        "fk_estado": "5"
      },
      {
        "id_cidade": "495",
        "Nome": "Jiquiriçá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "496",
        "Nome": "Jitaúna",
        "fk_estado": "5"
      },
      {
        "id_cidade": "497",
        "Nome": "João Dourado",
        "fk_estado": "5"
      },
      {
        "id_cidade": "498",
        "Nome": "Juazeiro",
        "fk_estado": "5"
      },
      {
        "id_cidade": "499",
        "Nome": "Jucuruçu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "500",
        "Nome": "Jussara",
        "fk_estado": "5"
      },
      {
        "id_cidade": "501",
        "Nome": "Jussari",
        "fk_estado": "5"
      },
      {
        "id_cidade": "502",
        "Nome": "Jussiape",
        "fk_estado": "5"
      },
      {
        "id_cidade": "503",
        "Nome": "Lafaiete Coutinho",
        "fk_estado": "5"
      },
      {
        "id_cidade": "504",
        "Nome": "Lagoa Real",
        "fk_estado": "5"
      },
      {
        "id_cidade": "505",
        "Nome": "Laje",
        "fk_estado": "5"
      },
      {
        "id_cidade": "506",
        "Nome": "Lajedão",
        "fk_estado": "5"
      },
      {
        "id_cidade": "507",
        "Nome": "Lajedinho",
        "fk_estado": "5"
      },
      {
        "id_cidade": "508",
        "Nome": "Lajedo do Tabocal",
        "fk_estado": "5"
      },
      {
        "id_cidade": "509",
        "Nome": "Lamarão",
        "fk_estado": "5"
      },
      {
        "id_cidade": "510",
        "Nome": "Lapão",
        "fk_estado": "5"
      },
      {
        "id_cidade": "511",
        "Nome": "Lauro de Freitas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "512",
        "Nome": "Lençóis",
        "fk_estado": "5"
      },
      {
        "id_cidade": "513",
        "Nome": "Licínio de Almeid_cidadea",
        "fk_estado": "5"
      },
      {
        "id_cidade": "514",
        "Nome": "Livramento de Nossa Senhora",
        "fk_estado": "5"
      },
      {
        "id_cidade": "515",
        "Nome": "Luís Eduardo Magalhães",
        "fk_estado": "5"
      },
      {
        "id_cidade": "516",
        "Nome": "Macajuba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "517",
        "Nome": "Macarani",
        "fk_estado": "5"
      },
      {
        "id_cidade": "518",
        "Nome": "Macaúbas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "519",
        "Nome": "Macururé",
        "fk_estado": "5"
      },
      {
        "id_cidade": "520",
        "Nome": "Madre de Deus",
        "fk_estado": "5"
      },
      {
        "id_cidade": "521",
        "Nome": "Maetinga",
        "fk_estado": "5"
      },
      {
        "id_cidade": "522",
        "Nome": "Maiquinique",
        "fk_estado": "5"
      },
      {
        "id_cidade": "523",
        "Nome": "Mairi",
        "fk_estado": "5"
      },
      {
        "id_cidade": "524",
        "Nome": "Malhada",
        "fk_estado": "5"
      },
      {
        "id_cidade": "525",
        "Nome": "Malhada de Pedras",
        "fk_estado": "5"
      },
      {
        "id_cidade": "526",
        "Nome": "Manoel Vitorino",
        "fk_estado": "5"
      },
      {
        "id_cidade": "527",
        "Nome": "Mansid_cidadeão",
        "fk_estado": "5"
      },
      {
        "id_cidade": "528",
        "Nome": "Maracás",
        "fk_estado": "5"
      },
      {
        "id_cidade": "529",
        "Nome": "Maragogipe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "530",
        "Nome": "Maraú",
        "fk_estado": "5"
      },
      {
        "id_cidade": "531",
        "Nome": "Marcionílio Souza",
        "fk_estado": "5"
      },
      {
        "id_cidade": "532",
        "Nome": "Mascote",
        "fk_estado": "5"
      },
      {
        "id_cidade": "533",
        "Nome": "Mata de São João",
        "fk_estado": "5"
      },
      {
        "id_cidade": "534",
        "Nome": "Matina",
        "fk_estado": "5"
      },
      {
        "id_cidade": "535",
        "Nome": "Medeiros Neto",
        "fk_estado": "5"
      },
      {
        "id_cidade": "536",
        "Nome": "Miguel Calmon",
        "fk_estado": "5"
      },
      {
        "id_cidade": "537",
        "Nome": "Milagres",
        "fk_estado": "5"
      },
      {
        "id_cidade": "538",
        "Nome": "Mirangaba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "539",
        "Nome": "Mirante",
        "fk_estado": "5"
      },
      {
        "id_cidade": "540",
        "Nome": "Monte Santo",
        "fk_estado": "5"
      },
      {
        "id_cidade": "541",
        "Nome": "Morpará",
        "fk_estado": "5"
      },
      {
        "id_cidade": "542",
        "Nome": "Morro do Chapéu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "543",
        "Nome": "Mortugaba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "544",
        "Nome": "Mucugê",
        "fk_estado": "5"
      },
      {
        "id_cidade": "545",
        "Nome": "Mucuri",
        "fk_estado": "5"
      },
      {
        "id_cidade": "546",
        "Nome": "Mulungu do Morro",
        "fk_estado": "5"
      },
      {
        "id_cidade": "547",
        "Nome": "Mundo Novo",
        "fk_estado": "5"
      },
      {
        "id_cidade": "548",
        "Nome": "Muniz Ferreira",
        "fk_estado": "5"
      },
      {
        "id_cidade": "549",
        "Nome": "Muquém de São Francisco",
        "fk_estado": "5"
      },
      {
        "id_cidade": "550",
        "Nome": "Muritiba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "551",
        "Nome": "Mutuípe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "552",
        "Nome": "Nazaré",
        "fk_estado": "5"
      },
      {
        "id_cidade": "553",
        "Nome": "Nilo Peçanha",
        "fk_estado": "5"
      },
      {
        "id_cidade": "554",
        "Nome": "Nordestina",
        "fk_estado": "5"
      },
      {
        "id_cidade": "555",
        "Nome": "Nova Canaã",
        "fk_estado": "5"
      },
      {
        "id_cidade": "556",
        "Nome": "Nova Fátima",
        "fk_estado": "5"
      },
      {
        "id_cidade": "557",
        "Nome": "Nova Ibiá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "558",
        "Nome": "Nova Itarana",
        "fk_estado": "5"
      },
      {
        "id_cidade": "559",
        "Nome": "Nova Redenção",
        "fk_estado": "5"
      },
      {
        "id_cidade": "560",
        "Nome": "Nova Soure",
        "fk_estado": "5"
      },
      {
        "id_cidade": "561",
        "Nome": "Nova Viçosa",
        "fk_estado": "5"
      },
      {
        "id_cidade": "562",
        "Nome": "Novo Horizonte",
        "fk_estado": "5"
      },
      {
        "id_cidade": "563",
        "Nome": "Novo Triunfo",
        "fk_estado": "5"
      },
      {
        "id_cidade": "564",
        "Nome": "Olindina",
        "fk_estado": "5"
      },
      {
        "id_cidade": "565",
        "Nome": "Oliveira dos Brejinhos",
        "fk_estado": "5"
      },
      {
        "id_cidade": "566",
        "Nome": "Ouriçangas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "567",
        "Nome": "Ourolândia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "568",
        "Nome": "Palmas de Monte Alto",
        "fk_estado": "5"
      },
      {
        "id_cidade": "569",
        "Nome": "Palmeiras",
        "fk_estado": "5"
      },
      {
        "id_cidade": "570",
        "Nome": "Paramirim",
        "fk_estado": "5"
      },
      {
        "id_cidade": "571",
        "Nome": "Paratinga",
        "fk_estado": "5"
      },
      {
        "id_cidade": "572",
        "Nome": "Paripiranga",
        "fk_estado": "5"
      },
      {
        "id_cidade": "573",
        "Nome": "Pau Brasil",
        "fk_estado": "5"
      },
      {
        "id_cidade": "574",
        "Nome": "Paulo Afonso",
        "fk_estado": "5"
      },
      {
        "id_cidade": "575",
        "Nome": "Pé de Serra",
        "fk_estado": "5"
      },
      {
        "id_cidade": "576",
        "Nome": "Pedrão",
        "fk_estado": "5"
      },
      {
        "id_cidade": "577",
        "Nome": "Pedro Alexandre",
        "fk_estado": "5"
      },
      {
        "id_cidade": "578",
        "Nome": "Piatã",
        "fk_estado": "5"
      },
      {
        "id_cidade": "579",
        "Nome": "Pilão Arcado",
        "fk_estado": "5"
      },
      {
        "id_cidade": "580",
        "Nome": "Pindaí",
        "fk_estado": "5"
      },
      {
        "id_cidade": "581",
        "Nome": "Pindobaçu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "582",
        "Nome": "Pintadas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "583",
        "Nome": "Piraí do Norte",
        "fk_estado": "5"
      },
      {
        "id_cidade": "584",
        "Nome": "Piripá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "585",
        "Nome": "Piritiba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "586",
        "Nome": "Planaltino",
        "fk_estado": "5"
      },
      {
        "id_cidade": "587",
        "Nome": "Planalto",
        "fk_estado": "5"
      },
      {
        "id_cidade": "588",
        "Nome": "Poções",
        "fk_estado": "5"
      },
      {
        "id_cidade": "589",
        "Nome": "Pojuca",
        "fk_estado": "5"
      },
      {
        "id_cidade": "590",
        "Nome": "Ponto Novo",
        "fk_estado": "5"
      },
      {
        "id_cidade": "591",
        "Nome": "Porto Seguro",
        "fk_estado": "5"
      },
      {
        "id_cidade": "592",
        "Nome": "Potiraguá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "593",
        "Nome": "Prado",
        "fk_estado": "5"
      },
      {
        "id_cidade": "594",
        "Nome": "Presid_cidadeente Dutra",
        "fk_estado": "5"
      },
      {
        "id_cidade": "595",
        "Nome": "Presid_cidadeente Jânio Quadros",
        "fk_estado": "5"
      },
      {
        "id_cidade": "596",
        "Nome": "Presid_cidadeente Tancredo Neves",
        "fk_estado": "5"
      },
      {
        "id_cidade": "597",
        "Nome": "Queimadas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "598",
        "Nome": "Quijingue",
        "fk_estado": "5"
      },
      {
        "id_cidade": "599",
        "Nome": "Quixabeira",
        "fk_estado": "5"
      },
      {
        "id_cidade": "600",
        "Nome": "Rafael Jambeiro",
        "fk_estado": "5"
      },
      {
        "id_cidade": "601",
        "Nome": "Remanso",
        "fk_estado": "5"
      },
      {
        "id_cidade": "602",
        "Nome": "Retirolândia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "603",
        "Nome": "Riachão das Neves",
        "fk_estado": "5"
      },
      {
        "id_cidade": "604",
        "Nome": "Riachão do Jacuípe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "605",
        "Nome": "Riacho de Santana",
        "fk_estado": "5"
      },
      {
        "id_cidade": "606",
        "Nome": "Ribeira do Amparo",
        "fk_estado": "5"
      },
      {
        "id_cidade": "607",
        "Nome": "Ribeira do Pombal",
        "fk_estado": "5"
      },
      {
        "id_cidade": "608",
        "Nome": "Ribeirão do Largo",
        "fk_estado": "5"
      },
      {
        "id_cidade": "609",
        "Nome": "Rio de Contas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "610",
        "Nome": "Rio do Antônio",
        "fk_estado": "5"
      },
      {
        "id_cidade": "611",
        "Nome": "Rio do Pires",
        "fk_estado": "5"
      },
      {
        "id_cidade": "612",
        "Nome": "Rio Real",
        "fk_estado": "5"
      },
      {
        "id_cidade": "613",
        "Nome": "Rodelas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "614",
        "Nome": "Ruy Barbosa",
        "fk_estado": "5"
      },
      {
        "id_cidade": "615",
        "Nome": "Salinas da Margarid_cidadea",
        "fk_estado": "5"
      },
      {
        "id_cidade": "616",
        "Nome": "Salvador",
        "fk_estado": "5"
      },
      {
        "id_cidade": "617",
        "Nome": "Santa Bárbara",
        "fk_estado": "5"
      },
      {
        "id_cidade": "618",
        "Nome": "Santa Brígid_cidadea",
        "fk_estado": "5"
      },
      {
        "id_cidade": "619",
        "Nome": "Santa Cruz Cabrália",
        "fk_estado": "5"
      },
      {
        "id_cidade": "620",
        "Nome": "Santa Cruz da Vitória",
        "fk_estado": "5"
      },
      {
        "id_cidade": "621",
        "Nome": "Santa Inês",
        "fk_estado": "5"
      },
      {
        "id_cidade": "622",
        "Nome": "Santa Luzia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "623",
        "Nome": "Santa Maria da Vitória",
        "fk_estado": "5"
      },
      {
        "id_cidade": "624",
        "Nome": "Santa Rita de Cássia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "625",
        "Nome": "Santa Teresinha",
        "fk_estado": "5"
      },
      {
        "id_cidade": "626",
        "Nome": "Santaluz",
        "fk_estado": "5"
      },
      {
        "id_cidade": "627",
        "Nome": "Santana",
        "fk_estado": "5"
      },
      {
        "id_cidade": "628",
        "Nome": "Santanópolis",
        "fk_estado": "5"
      },
      {
        "id_cidade": "629",
        "Nome": "Santo Amaro",
        "fk_estado": "5"
      },
      {
        "id_cidade": "630",
        "Nome": "Santo Antônio de Jesus",
        "fk_estado": "5"
      },
      {
        "id_cidade": "631",
        "Nome": "Santo Estêvão",
        "fk_estado": "5"
      },
      {
        "id_cidade": "632",
        "Nome": "São Desid_cidadeério",
        "fk_estado": "5"
      },
      {
        "id_cidade": "633",
        "Nome": "São Domingos",
        "fk_estado": "5"
      },
      {
        "id_cidade": "634",
        "Nome": "São Felipe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "635",
        "Nome": "São Félix",
        "fk_estado": "5"
      },
      {
        "id_cidade": "636",
        "Nome": "São Félix do Coribe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "637",
        "Nome": "São Francisco do Conde",
        "fk_estado": "5"
      },
      {
        "id_cidade": "638",
        "Nome": "São Gabriel",
        "fk_estado": "5"
      },
      {
        "id_cidade": "639",
        "Nome": "São Gonçalo dos Campos",
        "fk_estado": "5"
      },
      {
        "id_cidade": "640",
        "Nome": "São José da Vitória",
        "fk_estado": "5"
      },
      {
        "id_cidade": "641",
        "Nome": "São José do Jacuípe",
        "fk_estado": "5"
      },
      {
        "id_cidade": "642",
        "Nome": "São Miguel das Matas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "643",
        "Nome": "São Sebastião do Passé",
        "fk_estado": "5"
      },
      {
        "id_cidade": "644",
        "Nome": "Sapeaçu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "645",
        "Nome": "Sátiro Dias",
        "fk_estado": "5"
      },
      {
        "id_cidade": "646",
        "Nome": "Saubara",
        "fk_estado": "5"
      },
      {
        "id_cidade": "647",
        "Nome": "Saúde",
        "fk_estado": "5"
      },
      {
        "id_cidade": "648",
        "Nome": "Seabra",
        "fk_estado": "5"
      },
      {
        "id_cidade": "649",
        "Nome": "Sebastião Laranjeiras",
        "fk_estado": "5"
      },
      {
        "id_cidade": "650",
        "Nome": "Senhor do Bonfim",
        "fk_estado": "5"
      },
      {
        "id_cidade": "651",
        "Nome": "Sento Sé",
        "fk_estado": "5"
      },
      {
        "id_cidade": "652",
        "Nome": "Serra do Ramalho",
        "fk_estado": "5"
      },
      {
        "id_cidade": "653",
        "Nome": "Serra Dourada",
        "fk_estado": "5"
      },
      {
        "id_cidade": "654",
        "Nome": "Serra Preta",
        "fk_estado": "5"
      },
      {
        "id_cidade": "655",
        "Nome": "Serrinha",
        "fk_estado": "5"
      },
      {
        "id_cidade": "656",
        "Nome": "Serrolândia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "657",
        "Nome": "Simões Filho",
        "fk_estado": "5"
      },
      {
        "id_cidade": "658",
        "Nome": "Sítio do Mato",
        "fk_estado": "5"
      },
      {
        "id_cidade": "659",
        "Nome": "Sítio do Quinto",
        "fk_estado": "5"
      },
      {
        "id_cidade": "660",
        "Nome": "Sobradinho",
        "fk_estado": "5"
      },
      {
        "id_cidade": "661",
        "Nome": "Souto Soares",
        "fk_estado": "5"
      },
      {
        "id_cidade": "662",
        "Nome": "Tabocas do Brejo Velho",
        "fk_estado": "5"
      },
      {
        "id_cidade": "663",
        "Nome": "Tanhaçu",
        "fk_estado": "5"
      },
      {
        "id_cidade": "664",
        "Nome": "Tanque Novo",
        "fk_estado": "5"
      },
      {
        "id_cidade": "665",
        "Nome": "Tanquinho",
        "fk_estado": "5"
      },
      {
        "id_cidade": "666",
        "Nome": "Taperoá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "667",
        "Nome": "Tapiramutá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "668",
        "Nome": "Teixeira de Freitas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "669",
        "Nome": "Teodoro Sampaio",
        "fk_estado": "5"
      },
      {
        "id_cidade": "670",
        "Nome": "Teofilândia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "671",
        "Nome": "Teolândia",
        "fk_estado": "5"
      },
      {
        "id_cidade": "672",
        "Nome": "Terra Nova",
        "fk_estado": "5"
      },
      {
        "id_cidade": "673",
        "Nome": "Tremedal",
        "fk_estado": "5"
      },
      {
        "id_cidade": "674",
        "Nome": "Tucano",
        "fk_estado": "5"
      },
      {
        "id_cidade": "675",
        "Nome": "Uauá",
        "fk_estado": "5"
      },
      {
        "id_cidade": "676",
        "Nome": "Ubaíra",
        "fk_estado": "5"
      },
      {
        "id_cidade": "677",
        "Nome": "Ubaitaba",
        "fk_estado": "5"
      },
      {
        "id_cidade": "678",
        "Nome": "Ubatã",
        "fk_estado": "5"
      },
      {
        "id_cidade": "679",
        "Nome": "Uibaí",
        "fk_estado": "5"
      },
      {
        "id_cidade": "680",
        "Nome": "Umburanas",
        "fk_estado": "5"
      },
      {
        "id_cidade": "681",
        "Nome": "Una",
        "fk_estado": "5"
      },
      {
        "id_cidade": "682",
        "Nome": "Urandi",
        "fk_estado": "5"
      },
      {
        "id_cidade": "683",
        "Nome": "Uruçuca",
        "fk_estado": "5"
      },
      {
        "id_cidade": "684",
        "Nome": "Utinga",
        "fk_estado": "5"
      },
      {
        "id_cidade": "685",
        "Nome": "Valença",
        "fk_estado": "5"
      },
      {
        "id_cidade": "686",
        "Nome": "Valente",
        "fk_estado": "5"
      },
      {
        "id_cidade": "687",
        "Nome": "Várzea da Roça",
        "fk_estado": "5"
      },
      {
        "id_cidade": "688",
        "Nome": "Várzea do Poço",
        "fk_estado": "5"
      },
      {
        "id_cidade": "689",
        "Nome": "Várzea Nova",
        "fk_estado": "5"
      },
      {
        "id_cidade": "690",
        "Nome": "Varzedo",
        "fk_estado": "5"
      },
      {
        "id_cidade": "691",
        "Nome": "Vera Cruz",
        "fk_estado": "5"
      },
      {
        "id_cidade": "692",
        "Nome": "Vereda",
        "fk_estado": "5"
      },
      {
        "id_cidade": "693",
        "Nome": "Vitória da Conquista",
        "fk_estado": "5"
      },
      {
        "id_cidade": "694",
        "Nome": "Wagner",
        "fk_estado": "5"
      },
      {
        "id_cidade": "695",
        "Nome": "Wanderley",
        "fk_estado": "5"
      },
      {
        "id_cidade": "696",
        "Nome": "Wenceslau Guimarães",
        "fk_estado": "5"
      },
      {
        "id_cidade": "697",
        "Nome": "Xique-Xique",
        "fk_estado": "5"
      },
      {
        "id_cidade": "698",
        "Nome": "Abaiara",
        "fk_estado": "6"
      },
      {
        "id_cidade": "699",
        "Nome": "Acarape",
        "fk_estado": "6"
      },
      {
        "id_cidade": "700",
        "Nome": "Acaraú",
        "fk_estado": "6"
      },
      {
        "id_cidade": "701",
        "Nome": "Acopiara",
        "fk_estado": "6"
      },
      {
        "id_cidade": "702",
        "Nome": "Aiuaba",
        "fk_estado": "6"
      },
      {
        "id_cidade": "703",
        "Nome": "Alcântaras",
        "fk_estado": "6"
      },
      {
        "id_cidade": "704",
        "Nome": "Altaneira",
        "fk_estado": "6"
      },
      {
        "id_cidade": "705",
        "Nome": "Alto Santo",
        "fk_estado": "6"
      },
      {
        "id_cidade": "706",
        "Nome": "Amontada",
        "fk_estado": "6"
      },
      {
        "id_cidade": "707",
        "Nome": "Antonina do Norte",
        "fk_estado": "6"
      },
      {
        "id_cidade": "708",
        "Nome": "Apuiarés",
        "fk_estado": "6"
      },
      {
        "id_cidade": "709",
        "Nome": "Aquiraz",
        "fk_estado": "6"
      },
      {
        "id_cidade": "710",
        "Nome": "Aracati",
        "fk_estado": "6"
      },
      {
        "id_cidade": "711",
        "Nome": "Aracoiaba",
        "fk_estado": "6"
      },
      {
        "id_cidade": "712",
        "Nome": "Ararendá",
        "fk_estado": "6"
      },
      {
        "id_cidade": "713",
        "Nome": "Araripe",
        "fk_estado": "6"
      },
      {
        "id_cidade": "714",
        "Nome": "Aratuba",
        "fk_estado": "6"
      },
      {
        "id_cidade": "715",
        "Nome": "Arneiroz",
        "fk_estado": "6"
      },
      {
        "id_cidade": "716",
        "Nome": "Assaré",
        "fk_estado": "6"
      },
      {
        "id_cidade": "717",
        "Nome": "Aurora",
        "fk_estado": "6"
      },
      {
        "id_cidade": "718",
        "Nome": "Baixio",
        "fk_estado": "6"
      },
      {
        "id_cidade": "719",
        "Nome": "Banabuiú",
        "fk_estado": "6"
      },
      {
        "id_cidade": "720",
        "Nome": "Barbalha",
        "fk_estado": "6"
      },
      {
        "id_cidade": "721",
        "Nome": "Barreira",
        "fk_estado": "6"
      },
      {
        "id_cidade": "722",
        "Nome": "Barro",
        "fk_estado": "6"
      },
      {
        "id_cidade": "723",
        "Nome": "Barroquinha",
        "fk_estado": "6"
      },
      {
        "id_cidade": "724",
        "Nome": "Baturité",
        "fk_estado": "6"
      },
      {
        "id_cidade": "725",
        "Nome": "Beberibe",
        "fk_estado": "6"
      },
      {
        "id_cidade": "726",
        "Nome": "Bela Cruz",
        "fk_estado": "6"
      },
      {
        "id_cidade": "727",
        "Nome": "Boa Viagem",
        "fk_estado": "6"
      },
      {
        "id_cidade": "728",
        "Nome": "Brejo Santo",
        "fk_estado": "6"
      },
      {
        "id_cidade": "729",
        "Nome": "Camocim",
        "fk_estado": "6"
      },
      {
        "id_cidade": "730",
        "Nome": "Campos Sales",
        "fk_estado": "6"
      },
      {
        "id_cidade": "731",
        "Nome": "Canindé",
        "fk_estado": "6"
      },
      {
        "id_cidade": "732",
        "Nome": "Capistrano",
        "fk_estado": "6"
      },
      {
        "id_cidade": "733",
        "Nome": "Carid_cidadeade",
        "fk_estado": "6"
      },
      {
        "id_cidade": "734",
        "Nome": "Cariré",
        "fk_estado": "6"
      },
      {
        "id_cidade": "735",
        "Nome": "Caririaçu",
        "fk_estado": "6"
      },
      {
        "id_cidade": "736",
        "Nome": "Cariús",
        "fk_estado": "6"
      },
      {
        "id_cidade": "737",
        "Nome": "Carnaubal",
        "fk_estado": "6"
      },
      {
        "id_cidade": "738",
        "Nome": "Cascavel",
        "fk_estado": "6"
      },
      {
        "id_cidade": "739",
        "Nome": "Catarina",
        "fk_estado": "6"
      },
      {
        "id_cidade": "740",
        "Nome": "Catunda",
        "fk_estado": "6"
      },
      {
        "id_cidade": "741",
        "Nome": "Caucaia",
        "fk_estado": "6"
      },
      {
        "id_cidade": "742",
        "Nome": "Cedro",
        "fk_estado": "6"
      },
      {
        "id_cidade": "743",
        "Nome": "Chaval",
        "fk_estado": "6"
      },
      {
        "id_cidade": "744",
        "Nome": "Choró",
        "fk_estado": "6"
      },
      {
        "id_cidade": "745",
        "Nome": "Chorozinho",
        "fk_estado": "6"
      },
      {
        "id_cidade": "746",
        "Nome": "Coreaú",
        "fk_estado": "6"
      },
      {
        "id_cidade": "747",
        "Nome": "Crateús",
        "fk_estado": "6"
      },
      {
        "id_cidade": "748",
        "Nome": "Crato",
        "fk_estado": "6"
      },
      {
        "id_cidade": "749",
        "Nome": "Croatá",
        "fk_estado": "6"
      },
      {
        "id_cidade": "750",
        "Nome": "Cruz",
        "fk_estado": "6"
      },
      {
        "id_cidade": "751",
        "Nome": "Deputado Irapuan Pinheiro",
        "fk_estado": "6"
      },
      {
        "id_cidade": "752",
        "Nome": "Ererê",
        "fk_estado": "6"
      },
      {
        "id_cidade": "753",
        "Nome": "Eusébio",
        "fk_estado": "6"
      },
      {
        "id_cidade": "754",
        "Nome": "Farias Brito",
        "fk_estado": "6"
      },
      {
        "id_cidade": "755",
        "Nome": "Forquilha",
        "fk_estado": "6"
      },
      {
        "id_cidade": "756",
        "Nome": "Fortaleza",
        "fk_estado": "6"
      },
      {
        "id_cidade": "757",
        "Nome": "Fortim",
        "fk_estado": "6"
      },
      {
        "id_cidade": "758",
        "Nome": "Frecheirinha",
        "fk_estado": "6"
      },
      {
        "id_cidade": "759",
        "Nome": "General Sampaio",
        "fk_estado": "6"
      },
      {
        "id_cidade": "760",
        "Nome": "Graça",
        "fk_estado": "6"
      },
      {
        "id_cidade": "761",
        "Nome": "Granja",
        "fk_estado": "6"
      },
      {
        "id_cidade": "762",
        "Nome": "Granjeiro",
        "fk_estado": "6"
      },
      {
        "id_cidade": "763",
        "Nome": "Groaíras",
        "fk_estado": "6"
      },
      {
        "id_cidade": "764",
        "Nome": "Guaiúba",
        "fk_estado": "6"
      },
      {
        "id_cidade": "765",
        "Nome": "Guaraciaba do Norte",
        "fk_estado": "6"
      },
      {
        "id_cidade": "766",
        "Nome": "Guaramiranga",
        "fk_estado": "6"
      },
      {
        "id_cidade": "767",
        "Nome": "Hid_cidaderolândia",
        "fk_estado": "6"
      },
      {
        "id_cidade": "768",
        "Nome": "Horizonte",
        "fk_estado": "6"
      },
      {
        "id_cidade": "769",
        "Nome": "Ibaretama",
        "fk_estado": "6"
      },
      {
        "id_cidade": "770",
        "Nome": "Ibiapina",
        "fk_estado": "6"
      },
      {
        "id_cidade": "771",
        "Nome": "Ibicuitinga",
        "fk_estado": "6"
      },
      {
        "id_cidade": "772",
        "Nome": "Icapuí",
        "fk_estado": "6"
      },
      {
        "id_cidade": "773",
        "Nome": "Icó",
        "fk_estado": "6"
      },
      {
        "id_cidade": "774",
        "Nome": "Iguatu",
        "fk_estado": "6"
      },
      {
        "id_cidade": "775",
        "Nome": "Independência",
        "fk_estado": "6"
      },
      {
        "id_cidade": "776",
        "Nome": "Ipaporanga",
        "fk_estado": "6"
      },
      {
        "id_cidade": "777",
        "Nome": "Ipaumirim",
        "fk_estado": "6"
      },
      {
        "id_cidade": "778",
        "Nome": "Ipu",
        "fk_estado": "6"
      },
      {
        "id_cidade": "779",
        "Nome": "Ipueiras",
        "fk_estado": "6"
      },
      {
        "id_cidade": "780",
        "Nome": "Iracema",
        "fk_estado": "6"
      },
      {
        "id_cidade": "781",
        "Nome": "Irauçuba",
        "fk_estado": "6"
      },
      {
        "id_cidade": "782",
        "Nome": "Itaiçaba",
        "fk_estado": "6"
      },
      {
        "id_cidade": "783",
        "Nome": "Itaitinga",
        "fk_estado": "6"
      },
      {
        "id_cidade": "784",
        "Nome": "Itapagé",
        "fk_estado": "6"
      },
      {
        "id_cidade": "785",
        "Nome": "Itapipoca",
        "fk_estado": "6"
      },
      {
        "id_cidade": "786",
        "Nome": "Itapiúna",
        "fk_estado": "6"
      },
      {
        "id_cidade": "787",
        "Nome": "Itarema",
        "fk_estado": "6"
      },
      {
        "id_cidade": "788",
        "Nome": "Itatira",
        "fk_estado": "6"
      },
      {
        "id_cidade": "789",
        "Nome": "Jaguaretama",
        "fk_estado": "6"
      },
      {
        "id_cidade": "790",
        "Nome": "Jaguaribara",
        "fk_estado": "6"
      },
      {
        "id_cidade": "791",
        "Nome": "Jaguaribe",
        "fk_estado": "6"
      },
      {
        "id_cidade": "792",
        "Nome": "Jaguaruana",
        "fk_estado": "6"
      },
      {
        "id_cidade": "793",
        "Nome": "Jardim",
        "fk_estado": "6"
      },
      {
        "id_cidade": "794",
        "Nome": "Jati",
        "fk_estado": "6"
      },
      {
        "id_cidade": "795",
        "Nome": "Jijoca de Jericoacoara",
        "fk_estado": "6"
      },
      {
        "id_cidade": "796",
        "Nome": "Juazeiro do Norte",
        "fk_estado": "6"
      },
      {
        "id_cidade": "797",
        "Nome": "Jucás",
        "fk_estado": "6"
      },
      {
        "id_cidade": "798",
        "Nome": "Lavras da Mangabeira",
        "fk_estado": "6"
      },
      {
        "id_cidade": "799",
        "Nome": "Limoeiro do Norte",
        "fk_estado": "6"
      },
      {
        "id_cidade": "800",
        "Nome": "Madalena",
        "fk_estado": "6"
      },
      {
        "id_cidade": "801",
        "Nome": "Maracanaú",
        "fk_estado": "6"
      },
      {
        "id_cidade": "802",
        "Nome": "Maranguape",
        "fk_estado": "6"
      },
      {
        "id_cidade": "803",
        "Nome": "Marco",
        "fk_estado": "6"
      },
      {
        "id_cidade": "804",
        "Nome": "Martinópole",
        "fk_estado": "6"
      },
      {
        "id_cidade": "805",
        "Nome": "Massapê",
        "fk_estado": "6"
      },
      {
        "id_cidade": "806",
        "Nome": "Mauriti",
        "fk_estado": "6"
      },
      {
        "id_cidade": "807",
        "Nome": "Meruoca",
        "fk_estado": "6"
      },
      {
        "id_cidade": "808",
        "Nome": "Milagres",
        "fk_estado": "6"
      },
      {
        "id_cidade": "809",
        "Nome": "Milhã",
        "fk_estado": "6"
      },
      {
        "id_cidade": "810",
        "Nome": "Miraíma",
        "fk_estado": "6"
      },
      {
        "id_cidade": "811",
        "Nome": "Missão Velha",
        "fk_estado": "6"
      },
      {
        "id_cidade": "812",
        "Nome": "Mombaça",
        "fk_estado": "6"
      },
      {
        "id_cidade": "813",
        "Nome": "Monsenhor Tabosa",
        "fk_estado": "6"
      },
      {
        "id_cidade": "814",
        "Nome": "Morada Nova",
        "fk_estado": "6"
      },
      {
        "id_cidade": "815",
        "Nome": "Moraújo",
        "fk_estado": "6"
      },
      {
        "id_cidade": "816",
        "Nome": "Morrinhos",
        "fk_estado": "6"
      },
      {
        "id_cidade": "817",
        "Nome": "Mucambo",
        "fk_estado": "6"
      },
      {
        "id_cidade": "818",
        "Nome": "Mulungu",
        "fk_estado": "6"
      },
      {
        "id_cidade": "819",
        "Nome": "Nova Olinda",
        "fk_estado": "6"
      },
      {
        "id_cidade": "820",
        "Nome": "Nova Russas",
        "fk_estado": "6"
      },
      {
        "id_cidade": "821",
        "Nome": "Novo Oriente",
        "fk_estado": "6"
      },
      {
        "id_cidade": "822",
        "Nome": "Ocara",
        "fk_estado": "6"
      },
      {
        "id_cidade": "823",
        "Nome": "Orós",
        "fk_estado": "6"
      },
      {
        "id_cidade": "824",
        "Nome": "Pacajus",
        "fk_estado": "6"
      },
      {
        "id_cidade": "825",
        "Nome": "Pacatuba",
        "fk_estado": "6"
      },
      {
        "id_cidade": "826",
        "Nome": "Pacoti",
        "fk_estado": "6"
      },
      {
        "id_cidade": "827",
        "Nome": "Pacujá",
        "fk_estado": "6"
      },
      {
        "id_cidade": "828",
        "Nome": "Palhano",
        "fk_estado": "6"
      },
      {
        "id_cidade": "829",
        "Nome": "Palmácia",
        "fk_estado": "6"
      },
      {
        "id_cidade": "830",
        "Nome": "Paracuru",
        "fk_estado": "6"
      },
      {
        "id_cidade": "831",
        "Nome": "Paraipaba",
        "fk_estado": "6"
      },
      {
        "id_cidade": "832",
        "Nome": "Parambu",
        "fk_estado": "6"
      },
      {
        "id_cidade": "833",
        "Nome": "Paramoti",
        "fk_estado": "6"
      },
      {
        "id_cidade": "834",
        "Nome": "Pedra Branca",
        "fk_estado": "6"
      },
      {
        "id_cidade": "835",
        "Nome": "Penaforte",
        "fk_estado": "6"
      },
      {
        "id_cidade": "836",
        "Nome": "Pentecoste",
        "fk_estado": "6"
      },
      {
        "id_cidade": "837",
        "Nome": "Pereiro",
        "fk_estado": "6"
      },
      {
        "id_cidade": "838",
        "Nome": "Pindoretama",
        "fk_estado": "6"
      },
      {
        "id_cidade": "839",
        "Nome": "Piquet Carneiro",
        "fk_estado": "6"
      },
      {
        "id_cidade": "840",
        "Nome": "Pires Ferreira",
        "fk_estado": "6"
      },
      {
        "id_cidade": "841",
        "Nome": "Poranga",
        "fk_estado": "6"
      },
      {
        "id_cidade": "842",
        "Nome": "Porteiras",
        "fk_estado": "6"
      },
      {
        "id_cidade": "843",
        "Nome": "Potengi",
        "fk_estado": "6"
      },
      {
        "id_cidade": "844",
        "Nome": "Potiretama",
        "fk_estado": "6"
      },
      {
        "id_cidade": "845",
        "Nome": "Quiterianópolis",
        "fk_estado": "6"
      },
      {
        "id_cidade": "846",
        "Nome": "Quixadá",
        "fk_estado": "6"
      },
      {
        "id_cidade": "847",
        "Nome": "Quixelô",
        "fk_estado": "6"
      },
      {
        "id_cidade": "848",
        "Nome": "Quixeramobim",
        "fk_estado": "6"
      },
      {
        "id_cidade": "849",
        "Nome": "Quixeré",
        "fk_estado": "6"
      },
      {
        "id_cidade": "850",
        "Nome": "Redenção",
        "fk_estado": "6"
      },
      {
        "id_cidade": "851",
        "Nome": "Reriutaba",
        "fk_estado": "6"
      },
      {
        "id_cidade": "852",
        "Nome": "Russas",
        "fk_estado": "6"
      },
      {
        "id_cidade": "853",
        "Nome": "Saboeiro",
        "fk_estado": "6"
      },
      {
        "id_cidade": "854",
        "Nome": "Salitre",
        "fk_estado": "6"
      },
      {
        "id_cidade": "855",
        "Nome": "Santa Quitéria",
        "fk_estado": "6"
      },
      {
        "id_cidade": "856",
        "Nome": "Santana do Acaraú",
        "fk_estado": "6"
      },
      {
        "id_cidade": "857",
        "Nome": "Santana do Cariri",
        "fk_estado": "6"
      },
      {
        "id_cidade": "858",
        "Nome": "São Benedito",
        "fk_estado": "6"
      },
      {
        "id_cidade": "859",
        "Nome": "São Gonçalo do Amarante",
        "fk_estado": "6"
      },
      {
        "id_cidade": "860",
        "Nome": "São João do Jaguaribe",
        "fk_estado": "6"
      },
      {
        "id_cidade": "861",
        "Nome": "São Luís do Curu",
        "fk_estado": "6"
      },
      {
        "id_cidade": "862",
        "Nome": "Senador Pompeu",
        "fk_estado": "6"
      },
      {
        "id_cidade": "863",
        "Nome": "Senador Sá",
        "fk_estado": "6"
      },
      {
        "id_cidade": "864",
        "Nome": "Sobral",
        "fk_estado": "6"
      },
      {
        "id_cidade": "865",
        "Nome": "Solonópole",
        "fk_estado": "6"
      },
      {
        "id_cidade": "866",
        "Nome": "Tabuleiro do Norte",
        "fk_estado": "6"
      },
      {
        "id_cidade": "867",
        "Nome": "Tamboril",
        "fk_estado": "6"
      },
      {
        "id_cidade": "868",
        "Nome": "Tarrafas",
        "fk_estado": "6"
      },
      {
        "id_cidade": "869",
        "Nome": "Tauá",
        "fk_estado": "6"
      },
      {
        "id_cidade": "870",
        "Nome": "Tejuçuoca",
        "fk_estado": "6"
      },
      {
        "id_cidade": "871",
        "Nome": "Tianguá",
        "fk_estado": "6"
      },
      {
        "id_cidade": "872",
        "Nome": "Trairi",
        "fk_estado": "6"
      },
      {
        "id_cidade": "873",
        "Nome": "Tururu",
        "fk_estado": "6"
      },
      {
        "id_cidade": "874",
        "Nome": "Ubajara",
        "fk_estado": "6"
      },
      {
        "id_cidade": "875",
        "Nome": "Umari",
        "fk_estado": "6"
      },
      {
        "id_cidade": "876",
        "Nome": "Umirim",
        "fk_estado": "6"
      },
      {
        "id_cidade": "877",
        "Nome": "Uruburetama",
        "fk_estado": "6"
      },
      {
        "id_cidade": "878",
        "Nome": "Uruoca",
        "fk_estado": "6"
      },
      {
        "id_cidade": "879",
        "Nome": "Varjota",
        "fk_estado": "6"
      },
      {
        "id_cidade": "880",
        "Nome": "Várzea Alegre",
        "fk_estado": "6"
      },
      {
        "id_cidade": "881",
        "Nome": "Viçosa do Ceará",
        "fk_estado": "6"
      },
      {
        "id_cidade": "882",
        "Nome": "Brasília",
        "fk_estado": "7"
      },
      {
        "id_cidade": "883",
        "Nome": "Abadia de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "884",
        "Nome": "Abadiânia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "885",
        "Nome": "Acreúna",
        "fk_estado": "9"
      },
      {
        "id_cidade": "886",
        "Nome": "Adelândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "887",
        "Nome": "Água Fria de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "888",
        "Nome": "Água Limpa",
        "fk_estado": "9"
      },
      {
        "id_cidade": "889",
        "Nome": "Águas Lindas de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "890",
        "Nome": "Alexânia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "891",
        "Nome": "Aloândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "892",
        "Nome": "Alto Horizonte",
        "fk_estado": "9"
      },
      {
        "id_cidade": "893",
        "Nome": "Alto Paraíso de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "894",
        "Nome": "Alvorada do Norte",
        "fk_estado": "9"
      },
      {
        "id_cidade": "895",
        "Nome": "Amaralina",
        "fk_estado": "9"
      },
      {
        "id_cidade": "896",
        "Nome": "Americano do Brasil",
        "fk_estado": "9"
      },
      {
        "id_cidade": "897",
        "Nome": "Amorinópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "898",
        "Nome": "Anápolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "899",
        "Nome": "Anhanguera",
        "fk_estado": "9"
      },
      {
        "id_cidade": "900",
        "Nome": "Anicuns",
        "fk_estado": "9"
      },
      {
        "id_cidade": "901",
        "Nome": "Aparecid_cidadea de Goiânia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "902",
        "Nome": "Aparecid_cidadea do Rio Doce",
        "fk_estado": "9"
      },
      {
        "id_cidade": "903",
        "Nome": "Aporé",
        "fk_estado": "9"
      },
      {
        "id_cidade": "904",
        "Nome": "Araçu",
        "fk_estado": "9"
      },
      {
        "id_cidade": "905",
        "Nome": "Aragarças",
        "fk_estado": "9"
      },
      {
        "id_cidade": "906",
        "Nome": "Aragoiânia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "907",
        "Nome": "Araguapaz",
        "fk_estado": "9"
      },
      {
        "id_cidade": "908",
        "Nome": "Arenópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "909",
        "Nome": "Aruanã",
        "fk_estado": "9"
      },
      {
        "id_cidade": "910",
        "Nome": "Aurilândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "911",
        "Nome": "Avelinópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "912",
        "Nome": "Baliza",
        "fk_estado": "9"
      },
      {
        "id_cidade": "913",
        "Nome": "Barro Alto",
        "fk_estado": "9"
      },
      {
        "id_cidade": "914",
        "Nome": "Bela Vista de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "915",
        "Nome": "Bom Jardim de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "916",
        "Nome": "Bom Jesus de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "917",
        "Nome": "Bonfinópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "918",
        "Nome": "Bonópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "919",
        "Nome": "Brazabrantes",
        "fk_estado": "9"
      },
      {
        "id_cidade": "920",
        "Nome": "Britânia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "921",
        "Nome": "Buriti Alegre",
        "fk_estado": "9"
      },
      {
        "id_cidade": "922",
        "Nome": "Buriti de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "923",
        "Nome": "Buritinópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "924",
        "Nome": "Cabeceiras",
        "fk_estado": "9"
      },
      {
        "id_cidade": "925",
        "Nome": "Cachoeira Alta",
        "fk_estado": "9"
      },
      {
        "id_cidade": "926",
        "Nome": "Cachoeira de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "927",
        "Nome": "Cachoeira Dourada",
        "fk_estado": "9"
      },
      {
        "id_cidade": "928",
        "Nome": "Caçu",
        "fk_estado": "9"
      },
      {
        "id_cidade": "929",
        "Nome": "Caiapônia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "930",
        "Nome": "Caldas Novas",
        "fk_estado": "9"
      },
      {
        "id_cidade": "931",
        "Nome": "Caldazinha",
        "fk_estado": "9"
      },
      {
        "id_cidade": "932",
        "Nome": "Campestre de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "933",
        "Nome": "Campinaçu",
        "fk_estado": "9"
      },
      {
        "id_cidade": "934",
        "Nome": "Campinorte",
        "fk_estado": "9"
      },
      {
        "id_cidade": "935",
        "Nome": "Campo Alegre de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "936",
        "Nome": "Campo Limpo de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "937",
        "Nome": "Campos Belos",
        "fk_estado": "9"
      },
      {
        "id_cidade": "938",
        "Nome": "Campos Verdes",
        "fk_estado": "9"
      },
      {
        "id_cidade": "939",
        "Nome": "Carmo do Rio Verde",
        "fk_estado": "9"
      },
      {
        "id_cidade": "940",
        "Nome": "Castelândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "941",
        "Nome": "Catalão",
        "fk_estado": "9"
      },
      {
        "id_cidade": "942",
        "Nome": "Caturaí",
        "fk_estado": "9"
      },
      {
        "id_cidade": "943",
        "Nome": "Cavalcante",
        "fk_estado": "9"
      },
      {
        "id_cidade": "944",
        "Nome": "Ceres",
        "fk_estado": "9"
      },
      {
        "id_cidade": "945",
        "Nome": "Cezarina",
        "fk_estado": "9"
      },
      {
        "id_cidade": "946",
        "Nome": "Chapadão do Céu",
        "fk_estado": "9"
      },
      {
        "id_cidade": "947",
        "Nome": "Cid_cidadeade Ocid_cidadeental",
        "fk_estado": "9"
      },
      {
        "id_cidade": "948",
        "Nome": "Cocalzinho de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "949",
        "Nome": "Colinas do Sul",
        "fk_estado": "9"
      },
      {
        "id_cidade": "950",
        "Nome": "Córrego do Ouro",
        "fk_estado": "9"
      },
      {
        "id_cidade": "951",
        "Nome": "Corumbá de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "952",
        "Nome": "Corumbaíba",
        "fk_estado": "9"
      },
      {
        "id_cidade": "953",
        "Nome": "Cristalina",
        "fk_estado": "9"
      },
      {
        "id_cidade": "954",
        "Nome": "Cristianópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "955",
        "Nome": "Crixás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "956",
        "Nome": "Cromínia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "957",
        "Nome": "Cumari",
        "fk_estado": "9"
      },
      {
        "id_cidade": "958",
        "Nome": "Damianópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "959",
        "Nome": "Damolândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "960",
        "Nome": "Davinópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "961",
        "Nome": "Diorama",
        "fk_estado": "9"
      },
      {
        "id_cidade": "962",
        "Nome": "Divinópolis de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "963",
        "Nome": "Doverlândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "964",
        "Nome": "Edealina",
        "fk_estado": "9"
      },
      {
        "id_cidade": "965",
        "Nome": "Edéia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "966",
        "Nome": "Estrela do Norte",
        "fk_estado": "9"
      },
      {
        "id_cidade": "967",
        "Nome": "Faina",
        "fk_estado": "9"
      },
      {
        "id_cidade": "968",
        "Nome": "Fazenda Nova",
        "fk_estado": "9"
      },
      {
        "id_cidade": "969",
        "Nome": "Firminópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "970",
        "Nome": "Flores de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "971",
        "Nome": "Formosa",
        "fk_estado": "9"
      },
      {
        "id_cidade": "972",
        "Nome": "Formoso",
        "fk_estado": "9"
      },
      {
        "id_cidade": "973",
        "Nome": "Gameleira de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "974",
        "Nome": "Goianápolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "975",
        "Nome": "Goiandira",
        "fk_estado": "9"
      },
      {
        "id_cidade": "976",
        "Nome": "Goianésia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "977",
        "Nome": "Goiânia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "978",
        "Nome": "Goianira",
        "fk_estado": "9"
      },
      {
        "id_cidade": "979",
        "Nome": "Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "980",
        "Nome": "Goiatuba",
        "fk_estado": "9"
      },
      {
        "id_cidade": "981",
        "Nome": "Gouvelândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "982",
        "Nome": "Guapó",
        "fk_estado": "9"
      },
      {
        "id_cidade": "983",
        "Nome": "Guaraíta",
        "fk_estado": "9"
      },
      {
        "id_cidade": "984",
        "Nome": "Guarani de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "985",
        "Nome": "Guarinos",
        "fk_estado": "9"
      },
      {
        "id_cidade": "986",
        "Nome": "Heitoraí",
        "fk_estado": "9"
      },
      {
        "id_cidade": "987",
        "Nome": "Hid_cidaderolândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "988",
        "Nome": "Hid_cidaderolina",
        "fk_estado": "9"
      },
      {
        "id_cidade": "989",
        "Nome": "Iaciara",
        "fk_estado": "9"
      },
      {
        "id_cidade": "990",
        "Nome": "Inaciolândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "991",
        "Nome": "Indiara",
        "fk_estado": "9"
      },
      {
        "id_cidade": "992",
        "Nome": "Inhumas",
        "fk_estado": "9"
      },
      {
        "id_cidade": "993",
        "Nome": "Ipameri",
        "fk_estado": "9"
      },
      {
        "id_cidade": "994",
        "Nome": "Ipiranga de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "995",
        "Nome": "Iporá",
        "fk_estado": "9"
      },
      {
        "id_cidade": "996",
        "Nome": "Israelândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "997",
        "Nome": "Itaberaí",
        "fk_estado": "9"
      },
      {
        "id_cidade": "998",
        "Nome": "Itaguari",
        "fk_estado": "9"
      },
      {
        "id_cidade": "999",
        "Nome": "Itaguaru",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1000",
        "Nome": "Itajá",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1001",
        "Nome": "Itapaci",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1002",
        "Nome": "Itapirapuã",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1003",
        "Nome": "Itapuranga",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1004",
        "Nome": "Itarumã",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1005",
        "Nome": "Itauçu",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1006",
        "Nome": "Itumbiara",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1007",
        "Nome": "Ivolândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1008",
        "Nome": "Jandaia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1009",
        "Nome": "Jaraguá",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1010",
        "Nome": "Jataí",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1011",
        "Nome": "Jaupaci",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1012",
        "Nome": "Jesúpolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1013",
        "Nome": "Joviânia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1014",
        "Nome": "Jussara",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1015",
        "Nome": "Lagoa Santa",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1016",
        "Nome": "Leopoldo de Bulhões",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1017",
        "Nome": "Luziânia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1018",
        "Nome": "Mairipotaba",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1019",
        "Nome": "Mambaí",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1020",
        "Nome": "Mara Rosa",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1021",
        "Nome": "Marzagão",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1022",
        "Nome": "Matrinchã",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1023",
        "Nome": "Maurilândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1024",
        "Nome": "Mimoso de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1025",
        "Nome": "Minaçu",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1026",
        "Nome": "Mineiros",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1027",
        "Nome": "Moiporá",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1028",
        "Nome": "Monte Alegre de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1029",
        "Nome": "Montes Claros de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1030",
        "Nome": "Montivid_cidadeiu",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1031",
        "Nome": "Montivid_cidadeiu do Norte",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1032",
        "Nome": "Morrinhos",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1033",
        "Nome": "Morro Agudo de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1034",
        "Nome": "Mossâmedes",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1035",
        "Nome": "Mozarlândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1036",
        "Nome": "Mundo Novo",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1037",
        "Nome": "Mutunópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1038",
        "Nome": "Nazário",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1039",
        "Nome": "Nerópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1040",
        "Nome": "Niquelândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1041",
        "Nome": "Nova América",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1042",
        "Nome": "Nova Aurora",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1043",
        "Nome": "Nova Crixás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1044",
        "Nome": "Nova Glória",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1045",
        "Nome": "Nova Iguaçu de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1046",
        "Nome": "Nova Roma",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1047",
        "Nome": "Nova Veneza",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1048",
        "Nome": "Novo Brasil",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1049",
        "Nome": "Novo Gama",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1050",
        "Nome": "Novo Planalto",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1051",
        "Nome": "Orizona",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1052",
        "Nome": "Ouro Verde de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1053",
        "Nome": "Ouvid_cidadeor",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1054",
        "Nome": "Padre Bernardo",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1055",
        "Nome": "Palestina de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1056",
        "Nome": "Palmeiras de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1057",
        "Nome": "Palmelo",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1058",
        "Nome": "Palminópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1059",
        "Nome": "Panamá",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1060",
        "Nome": "Paranaiguara",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1061",
        "Nome": "Paraúna",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1062",
        "Nome": "Perolândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1063",
        "Nome": "Petrolina de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1064",
        "Nome": "Pilar de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1065",
        "Nome": "Piracanjuba",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1066",
        "Nome": "Piranhas",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1067",
        "Nome": "Pirenópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1068",
        "Nome": "Pires do Rio",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1069",
        "Nome": "Planaltina",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1070",
        "Nome": "Pontalina",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1071",
        "Nome": "Porangatu",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1072",
        "Nome": "Porteirão",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1073",
        "Nome": "Portelândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1074",
        "Nome": "Posse",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1075",
        "Nome": "Professor Jamil",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1076",
        "Nome": "Quirinópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1077",
        "Nome": "Rialma",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1078",
        "Nome": "Rianápolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1079",
        "Nome": "Rio Quente",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1080",
        "Nome": "Rio Verde",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1081",
        "Nome": "Rubiataba",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1082",
        "Nome": "Sanclerlândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1083",
        "Nome": "Santa Bárbara de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1084",
        "Nome": "Santa Cruz de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1085",
        "Nome": "Santa Fé de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1086",
        "Nome": "Santa Helena de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1087",
        "Nome": "Santa Isabel",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1088",
        "Nome": "Santa Rita do Araguaia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1089",
        "Nome": "Santa Rita do Novo Destino",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1090",
        "Nome": "Santa Rosa de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1091",
        "Nome": "Santa Tereza de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1092",
        "Nome": "Santa Terezinha de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1093",
        "Nome": "Santo Antônio da Barra",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1094",
        "Nome": "Santo Antônio de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1095",
        "Nome": "Santo Antônio do Descoberto",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1096",
        "Nome": "São Domingos",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1097",
        "Nome": "São Francisco de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1098",
        "Nome": "São João d`Aliança",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1099",
        "Nome": "São João da Paraúna",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1100",
        "Nome": "São Luís de Montes Belos",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1101",
        "Nome": "São Luíz do Norte",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1102",
        "Nome": "São Miguel do Araguaia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1103",
        "Nome": "São Miguel do Passa Quatro",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1104",
        "Nome": "São Patrício",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1105",
        "Nome": "São Simão",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1106",
        "Nome": "Senador Canedo",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1107",
        "Nome": "Serranópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1108",
        "Nome": "Silvânia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1109",
        "Nome": "Simolândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1110",
        "Nome": "Sítio d`Abadia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1111",
        "Nome": "Taquaral de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1112",
        "Nome": "Teresina de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1113",
        "Nome": "Terezópolis de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1114",
        "Nome": "Três Ranchos",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1115",
        "Nome": "Trindade",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1116",
        "Nome": "Trombas",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1117",
        "Nome": "Turvânia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1118",
        "Nome": "Turvelândia",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1119",
        "Nome": "Uirapuru",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1120",
        "Nome": "Uruaçu",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1121",
        "Nome": "Uruana",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1122",
        "Nome": "Urutaí",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1123",
        "Nome": "Valparaíso de Goiás",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1124",
        "Nome": "Varjão",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1125",
        "Nome": "Vianópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1126",
        "Nome": "Vicentinópolis",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1127",
        "Nome": "Vila Boa",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1128",
        "Nome": "Vila Propício",
        "fk_estado": "9"
      },
      {
        "id_cidade": "1129",
        "Nome": "Açailândia",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1130",
        "Nome": "Afonso Cunha",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1131",
        "Nome": "Água Doce do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1132",
        "Nome": "Alcântara",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1133",
        "Nome": "Aldeias Altas",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1134",
        "Nome": "Altamira do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1135",
        "Nome": "Alto Alegre do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1136",
        "Nome": "Alto Alegre do Pindaré",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1137",
        "Nome": "Alto Parnaíba",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1138",
        "Nome": "Amapá do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1139",
        "Nome": "Amarante do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1140",
        "Nome": "Anajatuba",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1141",
        "Nome": "Anapurus",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1142",
        "Nome": "Apicum-Açu",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1143",
        "Nome": "Araguanã",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1144",
        "Nome": "Araioses",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1145",
        "Nome": "Arame",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1146",
        "Nome": "Arari",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1147",
        "Nome": "Axixá",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1148",
        "Nome": "Bacabal",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1149",
        "Nome": "Bacabeira",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1150",
        "Nome": "Bacuri",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1151",
        "Nome": "Bacurituba",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1152",
        "Nome": "Balsas",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1153",
        "Nome": "Barão de Grajaú",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1154",
        "Nome": "Barra do Corda",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1155",
        "Nome": "Barreirinhas",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1156",
        "Nome": "Bela Vista do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1157",
        "Nome": "Belágua",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1158",
        "Nome": "Benedito Leite",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1159",
        "Nome": "Bequimão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1160",
        "Nome": "Bernardo do Mearim",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1161",
        "Nome": "Boa Vista do Gurupi",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1162",
        "Nome": "Bom Jardim",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1163",
        "Nome": "Bom Jesus das Selvas",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1164",
        "Nome": "Bom Lugar",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1165",
        "Nome": "Brejo",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1166",
        "Nome": "Brejo de Areia",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1167",
        "Nome": "Buriti",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1168",
        "Nome": "Buriti Bravo",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1169",
        "Nome": "Buriticupu",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1170",
        "Nome": "Buritirana",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1171",
        "Nome": "Cachoeira Grande",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1172",
        "Nome": "Cajapió",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1173",
        "Nome": "Cajari",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1174",
        "Nome": "Campestre do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1175",
        "Nome": "Cândid_cidadeo Mendes",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1176",
        "Nome": "Cantanhede",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1177",
        "Nome": "Capinzal do Norte",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1178",
        "Nome": "Carolina",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1179",
        "Nome": "Carutapera",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1180",
        "Nome": "Caxias",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1181",
        "Nome": "Cedral",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1182",
        "Nome": "Central do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1183",
        "Nome": "Centro do Guilherme",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1184",
        "Nome": "Centro Novo do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1185",
        "Nome": "Chapadinha",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1186",
        "Nome": "Cid_cidadeelândia",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1187",
        "Nome": "Codó",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1188",
        "Nome": "Coelho Neto",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1189",
        "Nome": "Colinas",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1190",
        "Nome": "Conceição do Lago-Açu",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1191",
        "Nome": "Coroatá",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1192",
        "Nome": "Cururupu",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1193",
        "Nome": "Davinópolis",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1194",
        "Nome": "Dom Pedro",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1195",
        "Nome": "Duque Bacelar",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1196",
        "Nome": "Esperantinópolis",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1197",
        "Nome": "Estreito",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1198",
        "Nome": "Feira Nova do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1199",
        "Nome": "Fernando Falcão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1200",
        "Nome": "Formosa da Serra Negra",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1201",
        "Nome": "Fortaleza dos Nogueiras",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1202",
        "Nome": "Fortuna",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1203",
        "Nome": "Godofredo Viana",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1204",
        "Nome": "Gonçalves Dias",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1205",
        "Nome": "Governador Archer",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1206",
        "Nome": "Governador Edison Lobão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1207",
        "Nome": "Governador Eugênio Barros",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1208",
        "Nome": "Governador Luiz Rocha",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1209",
        "Nome": "Governador Newton Bello",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1210",
        "Nome": "Governador Nunes Freire",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1211",
        "Nome": "Graça Aranha",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1212",
        "Nome": "Grajaú",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1213",
        "Nome": "Guimarães",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1214",
        "Nome": "Humberto de Campos",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1215",
        "Nome": "Icatu",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1216",
        "Nome": "Igarapé do Meio",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1217",
        "Nome": "Igarapé Grande",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1218",
        "Nome": "Imperatriz",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1219",
        "Nome": "Itaipava do Grajaú",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1220",
        "Nome": "Itapecuru Mirim",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1221",
        "Nome": "Itinga do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1222",
        "Nome": "Jatobá",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1223",
        "Nome": "Jenipapo dos Vieiras",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1224",
        "Nome": "João Lisboa",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1225",
        "Nome": "Joselândia",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1226",
        "Nome": "Junco do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1227",
        "Nome": "Lago da Pedra",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1228",
        "Nome": "Lago do Junco",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1229",
        "Nome": "Lago dos Rodrigues",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1230",
        "Nome": "Lago Verde",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1231",
        "Nome": "Lagoa do Mato",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1232",
        "Nome": "Lagoa Grande do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1233",
        "Nome": "Lajeado Novo",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1234",
        "Nome": "Lima Campos",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1235",
        "Nome": "Loreto",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1236",
        "Nome": "Luís Domingues",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1237",
        "Nome": "Magalhães de Almeid_cidadea",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1238",
        "Nome": "Maracaçumé",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1239",
        "Nome": "Marajá do Sena",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1240",
        "Nome": "Maranhãozinho",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1241",
        "Nome": "Mata Roma",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1242",
        "Nome": "Matinha",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1243",
        "Nome": "Matões",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1244",
        "Nome": "Matões do Norte",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1245",
        "Nome": "Milagres do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1246",
        "Nome": "Mirador",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1247",
        "Nome": "Miranda do Norte",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1248",
        "Nome": "Mirinzal",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1249",
        "Nome": "Monção",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1250",
        "Nome": "Montes Altos",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1251",
        "Nome": "Morros",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1252",
        "Nome": "Nina Rodrigues",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1253",
        "Nome": "Nova Colinas",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1254",
        "Nome": "Nova Iorque",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1255",
        "Nome": "Nova Olinda do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1256",
        "Nome": "Olho d`Água das Cunhãs",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1257",
        "Nome": "Olinda Nova do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1258",
        "Nome": "Paço do Lumiar",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1259",
        "Nome": "Palmeirândia",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1260",
        "Nome": "Paraibano",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1261",
        "Nome": "Parnarama",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1262",
        "Nome": "Passagem Franca",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1263",
        "Nome": "Pastos Bons",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1264",
        "Nome": "Paulino Neves",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1265",
        "Nome": "Paulo Ramos",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1266",
        "Nome": "Pedreiras",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1267",
        "Nome": "Pedro do Rosário",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1268",
        "Nome": "Penalva",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1269",
        "Nome": "Peri Mirim",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1270",
        "Nome": "Peritoró",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1271",
        "Nome": "Pindaré-Mirim",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1272",
        "Nome": "Pinheiro",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1273",
        "Nome": "Pio XII",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1274",
        "Nome": "Pirapemas",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1275",
        "Nome": "Poção de Pedras",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1276",
        "Nome": "Porto Franco",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1277",
        "Nome": "Porto Rico do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1278",
        "Nome": "Presid_cidadeente Dutra",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1279",
        "Nome": "Presid_cidadeente Juscelino",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1280",
        "Nome": "Presid_cidadeente Médici",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1281",
        "Nome": "Presid_cidadeente Sarney",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1282",
        "Nome": "Presid_cidadeente Vargas",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1283",
        "Nome": "Primeira Cruz",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1284",
        "Nome": "Raposa",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1285",
        "Nome": "Riachão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1286",
        "Nome": "Ribamar Fiquene",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1287",
        "Nome": "Rosário",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1288",
        "Nome": "Sambaíba",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1289",
        "Nome": "Santa Filomena do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1290",
        "Nome": "Santa Helena",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1291",
        "Nome": "Santa Inês",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1292",
        "Nome": "Santa Luzia",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1293",
        "Nome": "Santa Luzia do Paruá",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1294",
        "Nome": "Santa Quitéria do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1295",
        "Nome": "Santa Rita",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1296",
        "Nome": "Santana do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1297",
        "Nome": "Santo Amaro do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1298",
        "Nome": "Santo Antônio dos Lopes",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1299",
        "Nome": "São Benedito do Rio Preto",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1300",
        "Nome": "São Bento",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1301",
        "Nome": "São Bernardo",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1302",
        "Nome": "São Domingos do Azeitão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1303",
        "Nome": "São Domingos do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1304",
        "Nome": "São Félix de Balsas",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1305",
        "Nome": "São Francisco do Brejão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1306",
        "Nome": "São Francisco do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1307",
        "Nome": "São João Batista",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1308",
        "Nome": "São João do Carú",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1309",
        "Nome": "São João do Paraíso",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1310",
        "Nome": "São João do Soter",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1311",
        "Nome": "São João dos Patos",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1312",
        "Nome": "São José de Ribamar",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1313",
        "Nome": "São José dos Basílios",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1314",
        "Nome": "São Luís",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1315",
        "Nome": "São Luís Gonzaga do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1316",
        "Nome": "São Mateus do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1317",
        "Nome": "São Pedro da Água Branca",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1318",
        "Nome": "São Pedro dos Crentes",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1319",
        "Nome": "São Raimundo das Mangabeiras",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1320",
        "Nome": "São Raimundo do Doca Bezerra",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1321",
        "Nome": "São Roberto",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1322",
        "Nome": "São Vicente Ferrer",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1323",
        "Nome": "Satubinha",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1324",
        "Nome": "Senador Alexandre Costa",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1325",
        "Nome": "Senador La Rocque",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1326",
        "Nome": "Serrano do Maranhão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1327",
        "Nome": "Sítio Novo",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1328",
        "Nome": "Sucupira do Norte",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1329",
        "Nome": "Sucupira do Riachão",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1330",
        "Nome": "Tasso Fragoso",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1331",
        "Nome": "Timbiras",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1332",
        "Nome": "Timon",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1333",
        "Nome": "Trizid_cidadeela do Vale",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1334",
        "Nome": "Tufilândia",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1335",
        "Nome": "Tuntum",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1336",
        "Nome": "Turiaçu",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1337",
        "Nome": "Turilândia",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1338",
        "Nome": "Tutóia",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1339",
        "Nome": "Urbano Santos",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1340",
        "Nome": "Vargem Grande",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1341",
        "Nome": "Viana",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1342",
        "Nome": "Vila Nova dos Martírios",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1343",
        "Nome": "Vitória do Mearim",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1344",
        "Nome": "Vitorino Freire",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1345",
        "Nome": "Zé Doca",
        "fk_estado": "10"
      },
      {
        "id_cidade": "1346",
        "Nome": "Acorizal",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1347",
        "Nome": "Água Boa",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1348",
        "Nome": "Alta Floresta",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1349",
        "Nome": "Alto Araguaia",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1350",
        "Nome": "Alto Boa Vista",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1351",
        "Nome": "Alto Garças",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1352",
        "Nome": "Alto Paraguai",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1353",
        "Nome": "Alto Taquari",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1354",
        "Nome": "Apiacás",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1355",
        "Nome": "Araguaiana",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1356",
        "Nome": "Araguainha",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1357",
        "Nome": "Araputanga",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1358",
        "Nome": "Arenápolis",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1359",
        "Nome": "Aripuanã",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1360",
        "Nome": "Barão de Melgaço",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1361",
        "Nome": "Barra do Bugres",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1362",
        "Nome": "Barra do Garças",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1363",
        "Nome": "Bom Jesus do Araguaia",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1364",
        "Nome": "Brasnorte",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1365",
        "Nome": "Cáceres",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1366",
        "Nome": "Campinápolis",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1367",
        "Nome": "Campo Novo do Parecis",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1368",
        "Nome": "Campo Verde",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1369",
        "Nome": "Campos de Júlio",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1370",
        "Nome": "Canabrava do Norte",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1371",
        "Nome": "Canarana",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1372",
        "Nome": "Carlinda",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1373",
        "Nome": "Castanheira",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1374",
        "Nome": "Chapada dos Guimarães",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1375",
        "Nome": "Cláudia",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1376",
        "Nome": "Cocalinho",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1377",
        "Nome": "Colíder",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1378",
        "Nome": "Colniza",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1379",
        "Nome": "Comodoro",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1380",
        "Nome": "Confresa",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1381",
        "Nome": "Conquista d`Oeste",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1382",
        "Nome": "Cotriguaçu",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1383",
        "Nome": "Cuiabá",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1384",
        "Nome": "Curvelândia",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1386",
        "Nome": "Denise",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1387",
        "Nome": "Diamantino",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1388",
        "Nome": "Dom Aquino",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1389",
        "Nome": "Feliz Natal",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1390",
        "Nome": "Figueirópolis d`Oeste",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1391",
        "Nome": "Gaúcha do Norte",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1392",
        "Nome": "General Carneiro",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1393",
        "Nome": "Glória d`Oeste",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1394",
        "Nome": "Guarantã do Norte",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1395",
        "Nome": "Guiratinga",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1396",
        "Nome": "Indiavaí",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1397",
        "Nome": "Ipiranga do Norte",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1398",
        "Nome": "Itanhangá",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1399",
        "Nome": "Itaúba",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1400",
        "Nome": "Itiquira",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1401",
        "Nome": "Jaciara",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1402",
        "Nome": "Jangada",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1403",
        "Nome": "Jauru",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1404",
        "Nome": "Juara",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1405",
        "Nome": "Juína",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1406",
        "Nome": "Juruena",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1407",
        "Nome": "Juscimeira",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1408",
        "Nome": "Lambari d`Oeste",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1409",
        "Nome": "Lucas do Rio Verde",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1410",
        "Nome": "Luciára",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1411",
        "Nome": "Marcelândia",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1412",
        "Nome": "Matupá",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1413",
        "Nome": "Mirassol d`Oeste",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1414",
        "Nome": "Nobres",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1415",
        "Nome": "Nortelândia",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1416",
        "Nome": "Nossa Senhora do Livramento",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1417",
        "Nome": "Nova Bandeirantes",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1418",
        "Nome": "Nova Brasilândia",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1419",
        "Nome": "Nova Canaã do Norte",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1420",
        "Nome": "Nova Guarita",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1421",
        "Nome": "Nova Lacerda",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1422",
        "Nome": "Nova Marilândia",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1423",
        "Nome": "Nova Maringá",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1424",
        "Nome": "Nova Monte verde",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1425",
        "Nome": "Nova Mutum",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1426",
        "Nome": "Nova Olímpia",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1427",
        "Nome": "Nova Santa Helena",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1428",
        "Nome": "Nova Ubiratã",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1429",
        "Nome": "Nova Xavantina",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1430",
        "Nome": "Novo Horizonte do Norte",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1431",
        "Nome": "Novo Mundo",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1432",
        "Nome": "Novo Santo Antônio",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1433",
        "Nome": "Novo São Joaquim",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1434",
        "Nome": "Paranaíta",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1435",
        "Nome": "Paranatinga",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1436",
        "Nome": "Pedra Preta",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1437",
        "Nome": "Peixoto de Azevedo",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1438",
        "Nome": "Planalto da Serra",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1439",
        "Nome": "Poconé",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1440",
        "Nome": "Pontal do Araguaia",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1441",
        "Nome": "Ponte Branca",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1442",
        "Nome": "Pontes e Lacerda",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1443",
        "Nome": "Porto Alegre do Norte",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1444",
        "Nome": "Porto dos Gaúchos",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1445",
        "Nome": "Porto Esperid_cidadeião",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1446",
        "Nome": "Porto Estrela",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1447",
        "Nome": "Poxoréo",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1448",
        "Nome": "Primavera do Leste",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1449",
        "Nome": "Querência",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1450",
        "Nome": "Reserva do Cabaçal",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1451",
        "Nome": "Ribeirão Cascalheira",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1452",
        "Nome": "Ribeirãozinho",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1453",
        "Nome": "Rio Branco",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1454",
        "Nome": "Rondolândia",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1455",
        "Nome": "Rondonópolis",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1456",
        "Nome": "Rosário Oeste",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1457",
        "Nome": "Salto do Céu",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1458",
        "Nome": "Santa Carmem",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1459",
        "Nome": "Santa Cruz do Xingu",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1460",
        "Nome": "Santa Rita do Trivelato",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1461",
        "Nome": "Santa Terezinha",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1462",
        "Nome": "Santo Afonso",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1463",
        "Nome": "Santo Antônio do Leste",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1464",
        "Nome": "Santo Antônio do Leverger",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1465",
        "Nome": "São Félix do Araguaia",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1466",
        "Nome": "São José do Povo",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1467",
        "Nome": "São José do Rio Claro",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1468",
        "Nome": "São José do Xingu",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1469",
        "Nome": "São José dos Quatro Marcos",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1470",
        "Nome": "São Pedro da Cipa",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1471",
        "Nome": "Sapezal",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1472",
        "Nome": "Serra Nova Dourada",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1473",
        "Nome": "Sinop",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1474",
        "Nome": "Sorriso",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1475",
        "Nome": "Tabaporã",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1476",
        "Nome": "Tangará da Serra",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1477",
        "Nome": "Tapurah",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1478",
        "Nome": "Terra Nova do Norte",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1479",
        "Nome": "Tesouro",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1480",
        "Nome": "Torixoréu",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1481",
        "Nome": "União do Sul",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1482",
        "Nome": "Vale de São Domingos",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1483",
        "Nome": "Várzea Grande",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1484",
        "Nome": "Vera",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1485",
        "Nome": "Vila Bela da Santíssima Trindade",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1486",
        "Nome": "Vila Rica",
        "fk_estado": "13"
      },
      {
        "id_cidade": "1487",
        "Nome": "Água Clara",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1488",
        "Nome": "Alcinópolis",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1489",
        "Nome": "Amambaí",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1490",
        "Nome": "Anastácio",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1491",
        "Nome": "Anaurilândia",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1492",
        "Nome": "Angélica",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1493",
        "Nome": "Antônio João",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1494",
        "Nome": "Aparecid_cidadea do Taboado",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1495",
        "Nome": "Aquid_cidadeauana",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1496",
        "Nome": "Aral Moreira",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1497",
        "Nome": "Bandeirantes",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1498",
        "Nome": "Bataguassu",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1499",
        "Nome": "Bataiporã",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1500",
        "Nome": "Bela Vista",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1501",
        "Nome": "Bodoquena",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1502",
        "Nome": "Bonito",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1503",
        "Nome": "Brasilândia",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1504",
        "Nome": "Caarapó",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1505",
        "Nome": "Camapuã",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1506",
        "Nome": "Campo Grande",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1507",
        "Nome": "Caracol",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1508",
        "Nome": "Cassilândia",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1509",
        "Nome": "Chapadão do Sul",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1510",
        "Nome": "Corguinho",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1511",
        "Nome": "Coronel Sapucaia",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1512",
        "Nome": "Corumbá",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1513",
        "Nome": "Costa Rica",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1514",
        "Nome": "Coxim",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1515",
        "Nome": "Deodápolis",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1516",
        "Nome": "Dois Irmãos do Buriti",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1517",
        "Nome": "Douradina",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1518",
        "Nome": "Dourados",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1519",
        "Nome": "Eldorado",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1520",
        "Nome": "Fátima do Sul",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1521",
        "Nome": "Figueirão",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1522",
        "Nome": "Glória de Dourados",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1523",
        "Nome": "Guia Lopes da Laguna",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1524",
        "Nome": "Iguatemi",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1525",
        "Nome": "Inocência",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1526",
        "Nome": "Itaporã",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1527",
        "Nome": "Itaquiraí",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1528",
        "Nome": "Ivinhema",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1529",
        "Nome": "Japorã",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1530",
        "Nome": "Jaraguari",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1531",
        "Nome": "Jardim",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1532",
        "Nome": "Jateí",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1533",
        "Nome": "Juti",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1534",
        "Nome": "Ladário",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1535",
        "Nome": "Laguna Carapã",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1536",
        "Nome": "Maracaju",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1537",
        "Nome": "Miranda",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1538",
        "Nome": "Mundo Novo",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1539",
        "Nome": "Naviraí",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1540",
        "Nome": "Nioaque",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1541",
        "Nome": "Nova Alvorada do Sul",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1542",
        "Nome": "Nova Andradina",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1543",
        "Nome": "Novo Horizonte do Sul",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1544",
        "Nome": "Paranaíba",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1545",
        "Nome": "Paranhos",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1546",
        "Nome": "Pedro Gomes",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1547",
        "Nome": "Ponta Porã",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1548",
        "Nome": "Porto Murtinho",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1549",
        "Nome": "Ribas do Rio Pardo",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1550",
        "Nome": "Rio Brilhante",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1551",
        "Nome": "Rio Negro",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1552",
        "Nome": "Rio Verde de Mato Grosso",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1553",
        "Nome": "Rochedo",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1554",
        "Nome": "Santa Rita do Pardo",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1555",
        "Nome": "São Gabriel do Oeste",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1556",
        "Nome": "Selvíria",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1557",
        "Nome": "Sete Quedas",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1558",
        "Nome": "Sid_cidaderolândia",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1559",
        "Nome": "Sonora",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1560",
        "Nome": "Tacuru",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1561",
        "Nome": "Taquarussu",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1562",
        "Nome": "Terenos",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1563",
        "Nome": "Três Lagoas",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1564",
        "Nome": "Vicentina",
        "fk_estado": "12"
      },
      {
        "id_cidade": "1565",
        "Nome": "Abadia dos Dourados",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1566",
        "Nome": "Abaeté",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1567",
        "Nome": "Abre Campo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1568",
        "Nome": "Acaiaca",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1569",
        "Nome": "Açucena",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1570",
        "Nome": "Água Boa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1571",
        "Nome": "Água Comprid_cidadea",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1572",
        "Nome": "Aguanil",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1573",
        "Nome": "Águas Formosas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1574",
        "Nome": "Águas Vermelhas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1575",
        "Nome": "Aimorés",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1576",
        "Nome": "Aiuruoca",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1577",
        "Nome": "Alagoa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1578",
        "Nome": "Albertina",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1579",
        "Nome": "Além Paraíba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1580",
        "Nome": "Alfenas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1581",
        "Nome": "Alfredo Vasconcelos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1582",
        "Nome": "Almenara",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1583",
        "Nome": "Alpercata",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1584",
        "Nome": "Alpinópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1585",
        "Nome": "Alterosa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1586",
        "Nome": "Alto Caparaó",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1587",
        "Nome": "Alto Jequitibá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1588",
        "Nome": "Alto Rio Doce",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1589",
        "Nome": "Alvarenga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1590",
        "Nome": "Alvinópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1591",
        "Nome": "Alvorada de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1592",
        "Nome": "Amparo do Serra",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1593",
        "Nome": "Andradas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1594",
        "Nome": "Andrelândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1595",
        "Nome": "Angelândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1596",
        "Nome": "Antônio Carlos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1597",
        "Nome": "Antônio Dias",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1598",
        "Nome": "Antônio Prado de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1599",
        "Nome": "Araçaí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1600",
        "Nome": "Aracitaba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1601",
        "Nome": "Araçuaí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1602",
        "Nome": "Araguari",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1603",
        "Nome": "Arantina",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1604",
        "Nome": "Araponga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1605",
        "Nome": "Araporã",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1606",
        "Nome": "Arapuá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1607",
        "Nome": "Araújos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1608",
        "Nome": "Araxá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1609",
        "Nome": "Arceburgo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1610",
        "Nome": "Arcos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1611",
        "Nome": "Areado",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1612",
        "Nome": "Argirita",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1613",
        "Nome": "Aricanduva",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1614",
        "Nome": "Arinos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1615",
        "Nome": "Astolfo Dutra",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1616",
        "Nome": "Ataléia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1617",
        "Nome": "Augusto de Lima",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1618",
        "Nome": "Baependi",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1619",
        "Nome": "Baldim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1620",
        "Nome": "Bambuí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1621",
        "Nome": "Bandeira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1622",
        "Nome": "Bandeira do Sul",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1623",
        "Nome": "Barão de Cocais",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1624",
        "Nome": "Barão de Monte Alto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1625",
        "Nome": "Barbacena",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1626",
        "Nome": "Barra Longa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1627",
        "Nome": "Barroso",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1628",
        "Nome": "Bela Vista de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1629",
        "Nome": "Belmiro Braga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1630",
        "Nome": "Belo Horizonte",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1631",
        "Nome": "Belo Oriente",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1632",
        "Nome": "Belo Vale",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1633",
        "Nome": "Berilo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1634",
        "Nome": "Berizal",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1635",
        "Nome": "Bertópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1636",
        "Nome": "Betim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1637",
        "Nome": "Bias Fortes",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1638",
        "Nome": "Bicas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1639",
        "Nome": "Biquinhas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1640",
        "Nome": "Boa Esperança",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1641",
        "Nome": "Bocaina de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1642",
        "Nome": "Bocaiúva",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1643",
        "Nome": "Bom Despacho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1644",
        "Nome": "Bom Jardim de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1645",
        "Nome": "Bom Jesus da Penha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1646",
        "Nome": "Bom Jesus do Amparo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1647",
        "Nome": "Bom Jesus do Galho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1648",
        "Nome": "Bom Repouso",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1649",
        "Nome": "Bom Sucesso",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1650",
        "Nome": "Bonfim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1651",
        "Nome": "Bonfinópolis de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1652",
        "Nome": "Bonito de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1653",
        "Nome": "Borda da Mata",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1654",
        "Nome": "Botelhos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1655",
        "Nome": "Botumirim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1656",
        "Nome": "Brás Pires",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1657",
        "Nome": "Brasilândia de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1658",
        "Nome": "Brasília de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1659",
        "Nome": "Brasópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1660",
        "Nome": "Braúnas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1661",
        "Nome": "Brumadinho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1662",
        "Nome": "Bueno Brandão",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1663",
        "Nome": "Buenópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1664",
        "Nome": "Bugre",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1665",
        "Nome": "Buritis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1666",
        "Nome": "Buritizeiro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1667",
        "Nome": "Cabeceira Grande",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1668",
        "Nome": "Cabo Verde",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1669",
        "Nome": "Cachoeira da Prata",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1670",
        "Nome": "Cachoeira de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1671",
        "Nome": "Cachoeira de Pajeú",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1672",
        "Nome": "Cachoeira Dourada",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1673",
        "Nome": "Caetanópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1674",
        "Nome": "Caeté",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1675",
        "Nome": "Caiana",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1676",
        "Nome": "Cajuri",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1677",
        "Nome": "Caldas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1678",
        "Nome": "Camacho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1679",
        "Nome": "Camanducaia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1680",
        "Nome": "Cambuí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1681",
        "Nome": "Cambuquira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1682",
        "Nome": "Campanário",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1683",
        "Nome": "Campanha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1684",
        "Nome": "Campestre",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1685",
        "Nome": "Campina Verde",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1686",
        "Nome": "Campo Azul",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1687",
        "Nome": "Campo Belo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1688",
        "Nome": "Campo do Meio",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1689",
        "Nome": "Campo Florid_cidadeo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1690",
        "Nome": "Campos Altos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1691",
        "Nome": "Campos Gerais",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1692",
        "Nome": "Cana Verde",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1693",
        "Nome": "Canaã",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1694",
        "Nome": "Canápolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1695",
        "Nome": "Candeias",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1696",
        "Nome": "Cantagalo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1697",
        "Nome": "Caparaó",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1698",
        "Nome": "Capela Nova",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1699",
        "Nome": "Capelinha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1700",
        "Nome": "Capetinga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1701",
        "Nome": "Capim Branco",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1702",
        "Nome": "Capinópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1703",
        "Nome": "Capitão Andrade",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1704",
        "Nome": "Capitão Enéas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1705",
        "Nome": "Capitólio",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1706",
        "Nome": "Caputira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1707",
        "Nome": "Caraí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1708",
        "Nome": "Caranaíba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1709",
        "Nome": "Carandaí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1710",
        "Nome": "Carangola",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1711",
        "Nome": "Caratinga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1712",
        "Nome": "Carbonita",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1713",
        "Nome": "Careaçu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1714",
        "Nome": "Carlos Chagas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1715",
        "Nome": "Carmésia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1716",
        "Nome": "Carmo da Cachoeira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1717",
        "Nome": "Carmo da Mata",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1718",
        "Nome": "Carmo de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1719",
        "Nome": "Carmo do Cajuru",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1720",
        "Nome": "Carmo do Paranaíba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1721",
        "Nome": "Carmo do Rio Claro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1722",
        "Nome": "Carmópolis de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1723",
        "Nome": "Carneirinho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1724",
        "Nome": "Carrancas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1725",
        "Nome": "Carvalhópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1726",
        "Nome": "Carvalhos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1727",
        "Nome": "Casa Grande",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1728",
        "Nome": "Cascalho Rico",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1729",
        "Nome": "Cássia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1730",
        "Nome": "Cataguases",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1731",
        "Nome": "Catas Altas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1732",
        "Nome": "Catas Altas da Noruega",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1733",
        "Nome": "Catuji",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1734",
        "Nome": "Catuti",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1735",
        "Nome": "Caxambu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1736",
        "Nome": "Cedro do Abaeté",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1737",
        "Nome": "Central de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1738",
        "Nome": "Centralina",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1739",
        "Nome": "Chácara",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1740",
        "Nome": "Chalé",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1741",
        "Nome": "Chapada do Norte",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1742",
        "Nome": "Chapada Gaúcha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1743",
        "Nome": "Chiador",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1744",
        "Nome": "Cipotânea",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1745",
        "Nome": "Claraval",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1746",
        "Nome": "Claro dos Poções",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1747",
        "Nome": "Cláudio",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1748",
        "Nome": "Coimbra",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1749",
        "Nome": "Coluna",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1750",
        "Nome": "Comendador Gomes",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1751",
        "Nome": "Comercinho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1752",
        "Nome": "Conceição da Aparecid_cidadea",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1753",
        "Nome": "Conceição da Barra de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1754",
        "Nome": "Conceição das Alagoas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1755",
        "Nome": "Conceição das Pedras",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1756",
        "Nome": "Conceição de Ipanema",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1757",
        "Nome": "Conceição do Mato Dentro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1758",
        "Nome": "Conceição do Pará",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1759",
        "Nome": "Conceição do Rio Verde",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1760",
        "Nome": "Conceição dos Ouros",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1761",
        "Nome": "Cônego Marinho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1762",
        "Nome": "Confins",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1763",
        "Nome": "Congonhal",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1764",
        "Nome": "Congonhas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1765",
        "Nome": "Congonhas do Norte",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1766",
        "Nome": "Conquista",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1767",
        "Nome": "Conselheiro Lafaiete",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1768",
        "Nome": "Conselheiro Pena",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1769",
        "Nome": "Consolação",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1770",
        "Nome": "Contagem",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1771",
        "Nome": "Coqueiral",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1772",
        "Nome": "Coração de Jesus",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1773",
        "Nome": "Cordisburgo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1774",
        "Nome": "Cordislândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1775",
        "Nome": "Corinto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1776",
        "Nome": "Coroaci",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1777",
        "Nome": "Coromandel",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1778",
        "Nome": "Coronel Fabriciano",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1779",
        "Nome": "Coronel Murta",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1780",
        "Nome": "Coronel Pacheco",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1781",
        "Nome": "Coronel Xavier Chaves",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1782",
        "Nome": "Córrego Danta",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1783",
        "Nome": "Córrego do Bom Jesus",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1784",
        "Nome": "Córrego Fundo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1785",
        "Nome": "Córrego Novo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1786",
        "Nome": "Couto de Magalhães de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1787",
        "Nome": "Crisólita",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1788",
        "Nome": "Cristais",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1789",
        "Nome": "Cristália",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1790",
        "Nome": "Cristiano Otoni",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1791",
        "Nome": "Cristina",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1792",
        "Nome": "Crucilândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1793",
        "Nome": "Cruzeiro da Fortaleza",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1794",
        "Nome": "Cruzília",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1795",
        "Nome": "Cuparaque",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1796",
        "Nome": "Curral de Dentro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1797",
        "Nome": "Curvelo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1798",
        "Nome": "Datas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1799",
        "Nome": "Delfim Moreira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1800",
        "Nome": "Delfinópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1801",
        "Nome": "Delta",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1802",
        "Nome": "Descoberto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1803",
        "Nome": "Desterro de Entre Rios",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1804",
        "Nome": "Desterro do Melo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1805",
        "Nome": "Diamantina",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1806",
        "Nome": "Diogo de Vasconcelos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1807",
        "Nome": "Dionísio",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1808",
        "Nome": "Divinésia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1809",
        "Nome": "Divino",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1810",
        "Nome": "Divino das Laranjeiras",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1811",
        "Nome": "Divinolândia de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1812",
        "Nome": "Divinópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1813",
        "Nome": "Divisa Alegre",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1814",
        "Nome": "Divisa Nova",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1815",
        "Nome": "Divisópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1816",
        "Nome": "Dom Bosco",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1817",
        "Nome": "Dom Cavati",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1818",
        "Nome": "Dom Joaquim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1819",
        "Nome": "Dom Silvério",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1820",
        "Nome": "Dom Viçoso",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1821",
        "Nome": "Dona Eusébia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1822",
        "Nome": "Dores de Campos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1823",
        "Nome": "Dores de Guanhães",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1824",
        "Nome": "Dores do Indaiá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1825",
        "Nome": "Dores do Turvo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1826",
        "Nome": "Doresópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1827",
        "Nome": "Douradoquara",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1828",
        "Nome": "Durandé",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1829",
        "Nome": "Elói Mendes",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1830",
        "Nome": "Engenheiro Caldas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1831",
        "Nome": "Engenheiro Navarro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1832",
        "Nome": "Entre Folhas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1833",
        "Nome": "Entre Rios de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1834",
        "Nome": "Ervália",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1835",
        "Nome": "Esmeraldas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1836",
        "Nome": "Espera Feliz",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1837",
        "Nome": "Espinosa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1838",
        "Nome": "Espírito Santo do Dourado",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1839",
        "Nome": "Estiva",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1840",
        "Nome": "Estrela Dalva",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1841",
        "Nome": "Estrela do Indaiá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1842",
        "Nome": "Estrela do Sul",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1843",
        "Nome": "Eugenópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1844",
        "Nome": "Ewbank da Câmara",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1845",
        "Nome": "Extrema",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1846",
        "Nome": "Fama",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1847",
        "Nome": "Faria Lemos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1848",
        "Nome": "Felício dos Santos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1849",
        "Nome": "Felisburgo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1850",
        "Nome": "Felixlândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1851",
        "Nome": "Fernandes Tourinho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1852",
        "Nome": "Ferros",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1853",
        "Nome": "Fervedouro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1854",
        "Nome": "Florestal",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1855",
        "Nome": "Formiga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1856",
        "Nome": "Formoso",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1857",
        "Nome": "Fortaleza de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1858",
        "Nome": "Fortuna de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1859",
        "Nome": "Francisco Badaró",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1860",
        "Nome": "Francisco Dumont",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1861",
        "Nome": "Francisco Sá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1862",
        "Nome": "Franciscópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1863",
        "Nome": "Frei Gaspar",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1864",
        "Nome": "Frei Inocêncio",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1865",
        "Nome": "Frei Lagonegro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1866",
        "Nome": "Fronteira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1867",
        "Nome": "Fronteira dos Vales",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1868",
        "Nome": "Fruta de Leite",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1869",
        "Nome": "Frutal",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1870",
        "Nome": "Funilândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1871",
        "Nome": "Galiléia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1872",
        "Nome": "Gameleiras",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1873",
        "Nome": "Glaucilândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1874",
        "Nome": "Goiabeira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1875",
        "Nome": "Goianá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1876",
        "Nome": "Gonçalves",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1877",
        "Nome": "Gonzaga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1878",
        "Nome": "Gouveia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1879",
        "Nome": "Governador Valadares",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1880",
        "Nome": "Grão Mogol",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1881",
        "Nome": "Grupiara",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1882",
        "Nome": "Guanhães",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1883",
        "Nome": "Guapé",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1884",
        "Nome": "Guaraciaba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1885",
        "Nome": "Guaraciama",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1886",
        "Nome": "Guaranésia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1887",
        "Nome": "Guarani",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1888",
        "Nome": "Guarará",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1889",
        "Nome": "Guarda-Mor",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1890",
        "Nome": "Guaxupé",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1891",
        "Nome": "Guid_cidadeoval",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1892",
        "Nome": "Guimarânia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1893",
        "Nome": "Guiricema",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1894",
        "Nome": "Gurinhatã",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1895",
        "Nome": "Heliodora",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1896",
        "Nome": "Iapu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1897",
        "Nome": "Ibertioga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1898",
        "Nome": "Ibiá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1899",
        "Nome": "Ibiaí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1900",
        "Nome": "Ibiracatu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1901",
        "Nome": "Ibiraci",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1902",
        "Nome": "Ibirité",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1903",
        "Nome": "Ibitiúra de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1904",
        "Nome": "Ibituruna",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1905",
        "Nome": "Icaraí de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1906",
        "Nome": "Igarapé",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1907",
        "Nome": "Igaratinga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1908",
        "Nome": "Iguatama",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1909",
        "Nome": "Ijaci",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1910",
        "Nome": "Ilicínea",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1911",
        "Nome": "Imbé de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1912",
        "Nome": "Inconfid_cidadeentes",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1913",
        "Nome": "Indaiabira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1914",
        "Nome": "Indianópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1915",
        "Nome": "Ingaí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1916",
        "Nome": "Inhapim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1917",
        "Nome": "Inhaúma",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1918",
        "Nome": "Inimutaba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1919",
        "Nome": "Ipaba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1920",
        "Nome": "Ipanema",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1921",
        "Nome": "Ipatinga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1922",
        "Nome": "Ipiaçu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1923",
        "Nome": "Ipuiúna",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1924",
        "Nome": "Iraí de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1925",
        "Nome": "Itabira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1926",
        "Nome": "Itabirinha de Mantena",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1927",
        "Nome": "Itabirito",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1928",
        "Nome": "Itacambira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1929",
        "Nome": "Itacarambi",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1930",
        "Nome": "Itaguara",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1931",
        "Nome": "Itaipé",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1932",
        "Nome": "Itajubá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1933",
        "Nome": "Itamarandiba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1934",
        "Nome": "Itamarati de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1935",
        "Nome": "Itambacuri",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1936",
        "Nome": "Itambé do Mato Dentro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1937",
        "Nome": "Itamogi",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1938",
        "Nome": "Itamonte",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1939",
        "Nome": "Itanhandu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1940",
        "Nome": "Itanhomi",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1941",
        "Nome": "Itaobim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1942",
        "Nome": "Itapagipe",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1943",
        "Nome": "Itapecerica",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1944",
        "Nome": "Itapeva",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1945",
        "Nome": "Itatiaiuçu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1946",
        "Nome": "Itaú de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1947",
        "Nome": "Itaúna",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1948",
        "Nome": "Itaverava",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1949",
        "Nome": "Itinga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1950",
        "Nome": "Itueta",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1951",
        "Nome": "Ituiutaba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1952",
        "Nome": "Itumirim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1953",
        "Nome": "Iturama",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1954",
        "Nome": "Itutinga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1955",
        "Nome": "Jaboticatubas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1956",
        "Nome": "Jacinto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1957",
        "Nome": "Jacuí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1958",
        "Nome": "Jacutinga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1959",
        "Nome": "Jaguaraçu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1960",
        "Nome": "Jaíba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1961",
        "Nome": "Jampruca",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1962",
        "Nome": "Janaúba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1963",
        "Nome": "Januária",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1964",
        "Nome": "Japaraíba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1965",
        "Nome": "Japonvar",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1966",
        "Nome": "Jeceaba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1967",
        "Nome": "Jenipapo de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1968",
        "Nome": "Jequeri",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1969",
        "Nome": "Jequitaí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1970",
        "Nome": "Jequitibá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1971",
        "Nome": "Jequitinhonha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1972",
        "Nome": "Jesuânia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1973",
        "Nome": "Joaíma",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1974",
        "Nome": "Joanésia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1975",
        "Nome": "João Monlevade",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1976",
        "Nome": "João Pinheiro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1977",
        "Nome": "Joaquim Felício",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1978",
        "Nome": "Jordânia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1979",
        "Nome": "José Gonçalves de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1980",
        "Nome": "José Raydan",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1981",
        "Nome": "Josenópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1982",
        "Nome": "Juatuba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1983",
        "Nome": "Juiz de Fora",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1984",
        "Nome": "Juramento",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1985",
        "Nome": "Juruaia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1986",
        "Nome": "Juvenília",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1987",
        "Nome": "Ladainha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1988",
        "Nome": "Lagamar",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1989",
        "Nome": "Lagoa da Prata",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1990",
        "Nome": "Lagoa dos Patos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1991",
        "Nome": "Lagoa Dourada",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1992",
        "Nome": "Lagoa Formosa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1993",
        "Nome": "Lagoa Grande",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1994",
        "Nome": "Lagoa Santa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1995",
        "Nome": "Lajinha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1996",
        "Nome": "Lambari",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1997",
        "Nome": "Lamim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1998",
        "Nome": "Laranjal",
        "fk_estado": "11"
      },
      {
        "id_cidade": "1999",
        "Nome": "Lassance",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2000",
        "Nome": "Lavras",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2001",
        "Nome": "Leandro Ferreira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2002",
        "Nome": "Leme do Prado",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2003",
        "Nome": "Leopoldina",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2004",
        "Nome": "Liberdade",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2005",
        "Nome": "Lima Duarte",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2006",
        "Nome": "Limeira do Oeste",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2007",
        "Nome": "Lontra",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2008",
        "Nome": "Luisburgo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2009",
        "Nome": "Luislândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2010",
        "Nome": "Luminárias",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2011",
        "Nome": "Luz",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2012",
        "Nome": "Machacalis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2013",
        "Nome": "Machado",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2014",
        "Nome": "Madre de Deus de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2015",
        "Nome": "Malacacheta",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2016",
        "Nome": "Mamonas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2017",
        "Nome": "Manga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2018",
        "Nome": "Manhuaçu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2019",
        "Nome": "Manhumirim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2020",
        "Nome": "Mantena",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2021",
        "Nome": "Mar de Espanha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2022",
        "Nome": "Maravilhas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2023",
        "Nome": "Maria da Fé",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2024",
        "Nome": "Mariana",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2025",
        "Nome": "Marilac",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2026",
        "Nome": "Mário Campos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2027",
        "Nome": "Maripá de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2028",
        "Nome": "Marliéria",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2029",
        "Nome": "Marmelópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2030",
        "Nome": "Martinho Campos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2031",
        "Nome": "Martins Soares",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2032",
        "Nome": "Mata Verde",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2033",
        "Nome": "Materlândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2034",
        "Nome": "Mateus Leme",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2035",
        "Nome": "Mathias Lobato",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2036",
        "Nome": "Matias Barbosa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2037",
        "Nome": "Matias Cardoso",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2038",
        "Nome": "Matipó",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2039",
        "Nome": "Mato Verde",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2040",
        "Nome": "Matozinhos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2041",
        "Nome": "Matutina",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2042",
        "Nome": "Medeiros",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2043",
        "Nome": "Medina",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2044",
        "Nome": "Mendes Pimentel",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2045",
        "Nome": "Mercês",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2046",
        "Nome": "Mesquita",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2047",
        "Nome": "Minas Novas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2048",
        "Nome": "Minduri",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2049",
        "Nome": "Mirabela",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2050",
        "Nome": "Miradouro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2051",
        "Nome": "Miraí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2052",
        "Nome": "Miravânia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2053",
        "Nome": "Moeda",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2054",
        "Nome": "Moema",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2055",
        "Nome": "Monjolos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2056",
        "Nome": "Monsenhor Paulo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2057",
        "Nome": "Montalvânia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2058",
        "Nome": "Monte Alegre de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2059",
        "Nome": "Monte Azul",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2060",
        "Nome": "Monte Belo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2061",
        "Nome": "Monte Carmelo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2062",
        "Nome": "Monte Formoso",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2063",
        "Nome": "Monte Santo de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2064",
        "Nome": "Monte Sião",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2065",
        "Nome": "Montes Claros",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2066",
        "Nome": "Montezuma",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2067",
        "Nome": "Morada Nova de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2068",
        "Nome": "Morro da Garça",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2069",
        "Nome": "Morro do Pilar",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2070",
        "Nome": "Munhoz",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2071",
        "Nome": "Muriaé",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2072",
        "Nome": "Mutum",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2073",
        "Nome": "Muzambinho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2074",
        "Nome": "Nacip Raydan",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2075",
        "Nome": "Nanuque",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2076",
        "Nome": "Naque",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2077",
        "Nome": "Natalândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2078",
        "Nome": "Natércia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2079",
        "Nome": "Nazareno",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2080",
        "Nome": "Nepomuceno",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2081",
        "Nome": "Ninheira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2082",
        "Nome": "Nova Belém",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2083",
        "Nome": "Nova Era",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2084",
        "Nome": "Nova Lima",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2085",
        "Nome": "Nova Módica",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2086",
        "Nome": "Nova Ponte",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2087",
        "Nome": "Nova Porteirinha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2088",
        "Nome": "Nova Resende",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2089",
        "Nome": "Nova Serrana",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2090",
        "Nome": "Nova União",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2091",
        "Nome": "Novo Cruzeiro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2092",
        "Nome": "Novo Oriente de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2093",
        "Nome": "Novorizonte",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2094",
        "Nome": "Olaria",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2095",
        "Nome": "Olhos-d`Água",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2096",
        "Nome": "Olímpio Noronha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2097",
        "Nome": "Oliveira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2098",
        "Nome": "Oliveira Fortes",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2099",
        "Nome": "Onça de Pitangui",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2100",
        "Nome": "Oratórios",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2101",
        "Nome": "Orizânia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2102",
        "Nome": "Ouro Branco",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2103",
        "Nome": "Ouro Fino",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2104",
        "Nome": "Ouro Preto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2105",
        "Nome": "Ouro Verde de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2106",
        "Nome": "Padre Carvalho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2107",
        "Nome": "Padre Paraíso",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2108",
        "Nome": "Pai Pedro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2109",
        "Nome": "Paineiras",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2110",
        "Nome": "Pains",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2111",
        "Nome": "Paiva",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2112",
        "Nome": "Palma",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2113",
        "Nome": "Palmópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2114",
        "Nome": "Papagaios",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2115",
        "Nome": "Pará de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2116",
        "Nome": "Paracatu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2117",
        "Nome": "Paraguaçu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2118",
        "Nome": "Paraisópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2119",
        "Nome": "Paraopeba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2120",
        "Nome": "Passa Quatro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2121",
        "Nome": "Passa Tempo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2122",
        "Nome": "Passabém",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2123",
        "Nome": "Passa-Vinte",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2124",
        "Nome": "Passos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2125",
        "Nome": "Patis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2126",
        "Nome": "Patos de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2127",
        "Nome": "Patrocínio",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2128",
        "Nome": "Patrocínio do Muriaé",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2129",
        "Nome": "Paula Cândid_cidadeo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2130",
        "Nome": "Paulistas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2131",
        "Nome": "Pavão",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2132",
        "Nome": "Peçanha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2133",
        "Nome": "Pedra Azul",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2134",
        "Nome": "Pedra Bonita",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2135",
        "Nome": "Pedra do Anta",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2136",
        "Nome": "Pedra do Indaiá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2137",
        "Nome": "Pedra Dourada",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2138",
        "Nome": "Pedralva",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2139",
        "Nome": "Pedras de Maria da Cruz",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2140",
        "Nome": "Pedrinópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2141",
        "Nome": "Pedro Leopoldo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2142",
        "Nome": "Pedro Teixeira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2143",
        "Nome": "Pequeri",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2144",
        "Nome": "Pequi",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2145",
        "Nome": "Perdigão",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2146",
        "Nome": "Perdizes",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2147",
        "Nome": "Perdões",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2148",
        "Nome": "Periquito",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2149",
        "Nome": "Pescador",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2150",
        "Nome": "Piau",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2151",
        "Nome": "Piedade de Caratinga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2152",
        "Nome": "Piedade de Ponte Nova",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2153",
        "Nome": "Piedade do Rio Grande",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2154",
        "Nome": "Piedade dos Gerais",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2155",
        "Nome": "Pimenta",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2156",
        "Nome": "Pingo-d`Água",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2157",
        "Nome": "Pintópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2158",
        "Nome": "Piracema",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2159",
        "Nome": "Pirajuba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2160",
        "Nome": "Piranga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2161",
        "Nome": "Piranguçu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2162",
        "Nome": "Piranguinho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2163",
        "Nome": "Pirapetinga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2164",
        "Nome": "Pirapora",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2165",
        "Nome": "Piraúba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2166",
        "Nome": "Pitangui",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2167",
        "Nome": "Piumhi",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2168",
        "Nome": "Planura",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2169",
        "Nome": "Poço Fundo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2170",
        "Nome": "Poços de Caldas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2171",
        "Nome": "Pocrane",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2172",
        "Nome": "Pompéu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2173",
        "Nome": "Ponte Nova",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2174",
        "Nome": "Ponto Chique",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2175",
        "Nome": "Ponto dos Volantes",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2176",
        "Nome": "Porteirinha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2177",
        "Nome": "Porto Firme",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2178",
        "Nome": "Poté",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2179",
        "Nome": "Pouso Alegre",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2180",
        "Nome": "Pouso Alto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2181",
        "Nome": "Prados",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2182",
        "Nome": "Prata",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2183",
        "Nome": "Pratápolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2184",
        "Nome": "Pratinha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2185",
        "Nome": "Presid_cidadeente Bernardes",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2186",
        "Nome": "Presid_cidadeente Juscelino",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2187",
        "Nome": "Presid_cidadeente Kubitschek",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2188",
        "Nome": "Presid_cidadeente Olegário",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2189",
        "Nome": "Prudente de Morais",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2190",
        "Nome": "Quartel Geral",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2191",
        "Nome": "Queluzito",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2192",
        "Nome": "Raposos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2193",
        "Nome": "Raul Soares",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2194",
        "Nome": "Recreio",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2195",
        "Nome": "Reduto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2196",
        "Nome": "Resende Costa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2197",
        "Nome": "Resplendor",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2198",
        "Nome": "Ressaquinha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2199",
        "Nome": "Riachinho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2200",
        "Nome": "Riacho dos Machados",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2201",
        "Nome": "Ribeirão das Neves",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2202",
        "Nome": "Ribeirão Vermelho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2203",
        "Nome": "Rio Acima",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2204",
        "Nome": "Rio Casca",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2205",
        "Nome": "Rio do Prado",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2206",
        "Nome": "Rio Doce",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2207",
        "Nome": "Rio Espera",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2208",
        "Nome": "Rio Manso",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2209",
        "Nome": "Rio Novo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2210",
        "Nome": "Rio Paranaíba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2211",
        "Nome": "Rio Pardo de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2212",
        "Nome": "Rio Piracicaba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2213",
        "Nome": "Rio Pomba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2214",
        "Nome": "Rio Preto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2215",
        "Nome": "Rio Vermelho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2216",
        "Nome": "Ritápolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2217",
        "Nome": "Rochedo de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2218",
        "Nome": "Rodeiro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2219",
        "Nome": "Romaria",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2220",
        "Nome": "Rosário da Limeira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2221",
        "Nome": "Rubelita",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2222",
        "Nome": "Rubim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2223",
        "Nome": "Sabará",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2224",
        "Nome": "Sabinópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2225",
        "Nome": "Sacramento",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2226",
        "Nome": "Salinas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2227",
        "Nome": "Salto da Divisa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2228",
        "Nome": "Santa Bárbara",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2229",
        "Nome": "Santa Bárbara do Leste",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2230",
        "Nome": "Santa Bárbara do Monte Verde",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2231",
        "Nome": "Santa Bárbara do Tugúrio",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2232",
        "Nome": "Santa Cruz de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2233",
        "Nome": "Santa Cruz de Salinas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2234",
        "Nome": "Santa Cruz do Escalvado",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2235",
        "Nome": "Santa Efigênia de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2236",
        "Nome": "Santa Fé de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2237",
        "Nome": "Santa Helena de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2238",
        "Nome": "Santa Juliana",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2239",
        "Nome": "Santa Luzia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2240",
        "Nome": "Santa Margarid_cidadea",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2241",
        "Nome": "Santa Maria de Itabira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2242",
        "Nome": "Santa Maria do Salto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2243",
        "Nome": "Santa Maria do Suaçuí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2244",
        "Nome": "Santa Rita de Caldas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2245",
        "Nome": "Santa Rita de Ibitipoca",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2246",
        "Nome": "Santa Rita de Jacutinga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2247",
        "Nome": "Santa Rita de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2248",
        "Nome": "Santa Rita do Itueto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2249",
        "Nome": "Santa Rita do Sapucaí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2250",
        "Nome": "Santa Rosa da Serra",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2251",
        "Nome": "Santa Vitória",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2252",
        "Nome": "Santana da Vargem",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2253",
        "Nome": "Santana de Cataguases",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2254",
        "Nome": "Santana de Pirapama",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2255",
        "Nome": "Santana do Deserto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2256",
        "Nome": "Santana do Garambéu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2257",
        "Nome": "Santana do Jacaré",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2258",
        "Nome": "Santana do Manhuaçu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2259",
        "Nome": "Santana do Paraíso",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2260",
        "Nome": "Santana do Riacho",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2261",
        "Nome": "Santana dos Montes",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2262",
        "Nome": "Santo Antônio do Amparo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2263",
        "Nome": "Santo Antônio do Aventureiro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2264",
        "Nome": "Santo Antônio do Grama",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2265",
        "Nome": "Santo Antônio do Itambé",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2266",
        "Nome": "Santo Antônio do Jacinto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2267",
        "Nome": "Santo Antônio do Monte",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2268",
        "Nome": "Santo Antônio do Retiro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2269",
        "Nome": "Santo Antônio do Rio Abaixo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2270",
        "Nome": "Santo Hipólito",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2271",
        "Nome": "Santos Dumont",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2272",
        "Nome": "São Bento Abade",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2273",
        "Nome": "São Brás do Suaçuí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2274",
        "Nome": "São Domingos das Dores",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2275",
        "Nome": "São Domingos do Prata",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2276",
        "Nome": "São Félix de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2277",
        "Nome": "São Francisco",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2278",
        "Nome": "São Francisco de Paula",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2279",
        "Nome": "São Francisco de Sales",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2280",
        "Nome": "São Francisco do Glória",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2281",
        "Nome": "São Geraldo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2282",
        "Nome": "São Geraldo da Piedade",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2283",
        "Nome": "São Geraldo do Baixio",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2284",
        "Nome": "São Gonçalo do Abaeté",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2285",
        "Nome": "São Gonçalo do Pará",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2286",
        "Nome": "São Gonçalo do Rio Abaixo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2287",
        "Nome": "São Gonçalo do Rio Preto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2288",
        "Nome": "São Gonçalo do Sapucaí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2289",
        "Nome": "São Gotardo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2290",
        "Nome": "São João Batista do Glória",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2291",
        "Nome": "São João da Lagoa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2292",
        "Nome": "São João da Mata",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2293",
        "Nome": "São João da Ponte",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2294",
        "Nome": "São João das Missões",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2295",
        "Nome": "São João del Rei",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2296",
        "Nome": "São João do Manhuaçu",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2297",
        "Nome": "São João do Manteninha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2298",
        "Nome": "São João do Oriente",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2299",
        "Nome": "São João do Pacuí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2300",
        "Nome": "São João do Paraíso",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2301",
        "Nome": "São João Evangelista",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2302",
        "Nome": "São João Nepomuceno",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2303",
        "Nome": "São Joaquim de Bicas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2304",
        "Nome": "São José da Barra",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2305",
        "Nome": "São José da Lapa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2306",
        "Nome": "São José da Safira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2307",
        "Nome": "São José da Varginha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2308",
        "Nome": "São José do Alegre",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2309",
        "Nome": "São José do Divino",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2310",
        "Nome": "São José do Goiabal",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2311",
        "Nome": "São José do Jacuri",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2312",
        "Nome": "São José do Mantimento",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2313",
        "Nome": "São Lourenço",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2314",
        "Nome": "São Miguel do Anta",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2315",
        "Nome": "São Pedro da União",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2316",
        "Nome": "São Pedro do Suaçuí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2317",
        "Nome": "São Pedro dos Ferros",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2318",
        "Nome": "São Romão",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2319",
        "Nome": "São Roque de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2320",
        "Nome": "São Sebastião da Bela Vista",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2321",
        "Nome": "São Sebastião da Vargem Alegre",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2322",
        "Nome": "São Sebastião do Anta",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2323",
        "Nome": "São Sebastião do Maranhão",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2324",
        "Nome": "São Sebastião do Oeste",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2325",
        "Nome": "São Sebastião do Paraíso",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2326",
        "Nome": "São Sebastião do Rio Preto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2327",
        "Nome": "São Sebastião do Rio Verde",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2328",
        "Nome": "São Thomé das Letras",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2329",
        "Nome": "São Tiago",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2330",
        "Nome": "São Tomás de Aquino",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2331",
        "Nome": "São Vicente de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2332",
        "Nome": "Sapucaí-Mirim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2333",
        "Nome": "Sardoá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2334",
        "Nome": "Sarzedo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2335",
        "Nome": "Sem-Peixe",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2336",
        "Nome": "Senador Amaral",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2337",
        "Nome": "Senador Cortes",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2338",
        "Nome": "Senador Firmino",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2339",
        "Nome": "Senador José Bento",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2340",
        "Nome": "Senador Modestino Gonçalves",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2341",
        "Nome": "Senhora de Oliveira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2342",
        "Nome": "Senhora do Porto",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2343",
        "Nome": "Senhora dos Remédios",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2344",
        "Nome": "Sericita",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2345",
        "Nome": "Seritinga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2346",
        "Nome": "Serra Azul de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2347",
        "Nome": "Serra da Saudade",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2348",
        "Nome": "Serra do Salitre",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2349",
        "Nome": "Serra dos Aimorés",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2350",
        "Nome": "Serrania",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2351",
        "Nome": "Serranópolis de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2352",
        "Nome": "Serranos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2353",
        "Nome": "Serro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2354",
        "Nome": "Sete Lagoas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2355",
        "Nome": "Setubinha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2356",
        "Nome": "Silveirânia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2357",
        "Nome": "Silvianópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2358",
        "Nome": "Simão Pereira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2359",
        "Nome": "Simonésia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2360",
        "Nome": "Sobrália",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2361",
        "Nome": "Soledade de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2362",
        "Nome": "Tabuleiro",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2363",
        "Nome": "Taiobeiras",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2364",
        "Nome": "Taparuba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2365",
        "Nome": "Tapira",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2366",
        "Nome": "Tapiraí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2367",
        "Nome": "Taquaraçu de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2368",
        "Nome": "Tarumirim",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2369",
        "Nome": "Teixeiras",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2370",
        "Nome": "Teófilo Otoni",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2371",
        "Nome": "Timóteo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2372",
        "Nome": "Tiradentes",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2373",
        "Nome": "Tiros",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2374",
        "Nome": "Tocantins",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2375",
        "Nome": "Tocos do Moji",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2376",
        "Nome": "Toledo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2377",
        "Nome": "Tombos",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2378",
        "Nome": "Três Corações",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2379",
        "Nome": "Três Marias",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2380",
        "Nome": "Três Pontas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2381",
        "Nome": "Tumiritinga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2382",
        "Nome": "Tupaciguara",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2383",
        "Nome": "Turmalina",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2384",
        "Nome": "Turvolândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2385",
        "Nome": "Ubá",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2386",
        "Nome": "Ubaí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2387",
        "Nome": "Ubaporanga",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2388",
        "Nome": "Uberaba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2389",
        "Nome": "Uberlândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2390",
        "Nome": "Umburatiba",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2391",
        "Nome": "Unaí",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2392",
        "Nome": "União de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2393",
        "Nome": "Uruana de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2394",
        "Nome": "Urucânia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2395",
        "Nome": "Urucuia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2396",
        "Nome": "Vargem Alegre",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2397",
        "Nome": "Vargem Bonita",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2398",
        "Nome": "Vargem Grande do Rio Pardo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2399",
        "Nome": "Varginha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2400",
        "Nome": "Varjão de Minas",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2401",
        "Nome": "Várzea da Palma",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2402",
        "Nome": "Varzelândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2403",
        "Nome": "Vazante",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2404",
        "Nome": "Verdelândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2405",
        "Nome": "Veredinha",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2406",
        "Nome": "Veríssimo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2407",
        "Nome": "Vermelho Novo",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2408",
        "Nome": "Vespasiano",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2409",
        "Nome": "Viçosa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2410",
        "Nome": "Vieiras",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2411",
        "Nome": "Virgem da Lapa",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2412",
        "Nome": "Virgínia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2413",
        "Nome": "Virginópolis",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2414",
        "Nome": "Virgolândia",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2415",
        "Nome": "Visconde do Rio Branco",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2416",
        "Nome": "Volta Grande",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2417",
        "Nome": "Wenceslau Braz",
        "fk_estado": "11"
      },
      {
        "id_cidade": "2418",
        "Nome": "Abaetetuba",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2419",
        "Nome": "Abel Figueiredo",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2420",
        "Nome": "Acará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2421",
        "Nome": "Afuá",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2422",
        "Nome": "Água Azul do Norte",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2423",
        "Nome": "Alenquer",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2424",
        "Nome": "Almeirim",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2425",
        "Nome": "Altamira",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2426",
        "Nome": "Anajás",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2427",
        "Nome": "Ananindeua",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2428",
        "Nome": "Anapu",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2429",
        "Nome": "Augusto Corrêa",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2430",
        "Nome": "Aurora do Pará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2431",
        "Nome": "Aveiro",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2432",
        "Nome": "Bagre",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2433",
        "Nome": "Baião",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2434",
        "Nome": "Bannach",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2435",
        "Nome": "Barcarena",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2436",
        "Nome": "Belém",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2437",
        "Nome": "Belterra",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2438",
        "Nome": "Benevid_cidadees",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2439",
        "Nome": "Bom Jesus do Tocantins",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2440",
        "Nome": "Bonito",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2441",
        "Nome": "Bragança",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2442",
        "Nome": "Brasil Novo",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2443",
        "Nome": "Brejo Grande do Araguaia",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2444",
        "Nome": "Breu Branco",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2445",
        "Nome": "Breves",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2446",
        "Nome": "Bujaru",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2447",
        "Nome": "Cachoeira do Arari",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2448",
        "Nome": "Cachoeira do Piriá",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2449",
        "Nome": "Cametá",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2450",
        "Nome": "Canaã dos Carajás",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2451",
        "Nome": "Capanema",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2452",
        "Nome": "Capitão Poço",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2453",
        "Nome": "Castanhal",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2454",
        "Nome": "Chaves",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2455",
        "Nome": "Colares",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2456",
        "Nome": "Conceição do Araguaia",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2457",
        "Nome": "Concórdia do Pará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2458",
        "Nome": "Cumaru do Norte",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2459",
        "Nome": "Curionópolis",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2460",
        "Nome": "Curralinho",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2461",
        "Nome": "Curuá",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2462",
        "Nome": "Curuçá",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2463",
        "Nome": "Dom Eliseu",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2464",
        "Nome": "Eldorado dos Carajás",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2465",
        "Nome": "Faro",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2466",
        "Nome": "Floresta do Araguaia",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2467",
        "Nome": "Garrafão do Norte",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2468",
        "Nome": "Goianésia do Pará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2469",
        "Nome": "Gurupá",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2470",
        "Nome": "Igarapé-Açu",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2471",
        "Nome": "Igarapé-Miri",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2472",
        "Nome": "Inhangapi",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2473",
        "Nome": "Ipixuna do Pará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2474",
        "Nome": "Irituia",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2475",
        "Nome": "Itaituba",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2476",
        "Nome": "Itupiranga",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2477",
        "Nome": "Jacareacanga",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2478",
        "Nome": "Jacundá",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2479",
        "Nome": "Juruti",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2480",
        "Nome": "Limoeiro do Ajuru",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2481",
        "Nome": "Mãe do Rio",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2482",
        "Nome": "Magalhães Barata",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2483",
        "Nome": "Marabá",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2484",
        "Nome": "Maracanã",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2485",
        "Nome": "Marapanim",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2486",
        "Nome": "Marituba",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2487",
        "Nome": "Medicilândia",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2488",
        "Nome": "Melgaço",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2489",
        "Nome": "Mocajuba",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2490",
        "Nome": "Moju",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2491",
        "Nome": "Monte Alegre",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2492",
        "Nome": "Muaná",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2493",
        "Nome": "Nova Esperança do Piriá",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2494",
        "Nome": "Nova Ipixuna",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2495",
        "Nome": "Nova Timboteua",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2496",
        "Nome": "Novo Progresso",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2497",
        "Nome": "Novo Repartimento",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2498",
        "Nome": "Óbid_cidadeos",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2499",
        "Nome": "Oeiras do Pará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2500",
        "Nome": "Oriximiná",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2501",
        "Nome": "Ourém",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2502",
        "Nome": "Ourilândia do Norte",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2503",
        "Nome": "Pacajá",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2504",
        "Nome": "Palestina do Pará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2505",
        "Nome": "Paragominas",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2506",
        "Nome": "Parauapebas",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2507",
        "Nome": "Pau d`Arco",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2508",
        "Nome": "Peixe-Boi",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2509",
        "Nome": "Piçarra",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2510",
        "Nome": "Placas",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2511",
        "Nome": "Ponta de Pedras",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2512",
        "Nome": "Portel",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2513",
        "Nome": "Porto de Moz",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2514",
        "Nome": "Prainha",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2515",
        "Nome": "Primavera",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2516",
        "Nome": "Quatipuru",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2517",
        "Nome": "Redenção",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2518",
        "Nome": "Rio Maria",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2519",
        "Nome": "Rondon do Pará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2520",
        "Nome": "Rurópolis",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2521",
        "Nome": "Salinópolis",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2522",
        "Nome": "Salvaterra",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2523",
        "Nome": "Santa Bárbara do Pará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2524",
        "Nome": "Santa Cruz do Arari",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2525",
        "Nome": "Santa Isabel do Pará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2526",
        "Nome": "Santa Luzia do Pará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2527",
        "Nome": "Santa Maria das Barreiras",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2528",
        "Nome": "Santa Maria do Pará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2529",
        "Nome": "Santana do Araguaia",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2530",
        "Nome": "Santarém",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2531",
        "Nome": "Santarém Novo",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2532",
        "Nome": "Santo Antônio do Tauá",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2533",
        "Nome": "São Caetano de Odivelas",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2534",
        "Nome": "São Domingos do Araguaia",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2535",
        "Nome": "São Domingos do Capim",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2536",
        "Nome": "São Félix do Xingu",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2537",
        "Nome": "São Francisco do Pará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2538",
        "Nome": "São Geraldo do Araguaia",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2539",
        "Nome": "São João da Ponta",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2540",
        "Nome": "São João de Pirabas",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2541",
        "Nome": "São João do Araguaia",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2542",
        "Nome": "São Miguel do Guamá",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2543",
        "Nome": "São Sebastião da Boa Vista",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2544",
        "Nome": "Sapucaia",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2545",
        "Nome": "Senador José Porfírio",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2546",
        "Nome": "Soure",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2547",
        "Nome": "Tailândia",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2548",
        "Nome": "Terra Alta",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2549",
        "Nome": "Terra Santa",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2550",
        "Nome": "Tomé-Açu",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2551",
        "Nome": "Tracuateua",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2552",
        "Nome": "Trairão",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2553",
        "Nome": "Tucumã",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2554",
        "Nome": "Tucuruí",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2555",
        "Nome": "Ulianópolis",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2556",
        "Nome": "Uruará",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2557",
        "Nome": "Vigia",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2558",
        "Nome": "Viseu",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2559",
        "Nome": "Vitória do Xingu",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2560",
        "Nome": "Xinguara",
        "fk_estado": "14"
      },
      {
        "id_cidade": "2561",
        "Nome": "Água Branca",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2562",
        "Nome": "Aguiar",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2563",
        "Nome": "Alagoa Grande",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2564",
        "Nome": "Alagoa Nova",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2565",
        "Nome": "Alagoinha",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2566",
        "Nome": "Alcantil",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2567",
        "Nome": "Algodão de Jandaíra",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2568",
        "Nome": "Alhandra",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2569",
        "Nome": "Amparo",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2570",
        "Nome": "Aparecid_cidadea",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2571",
        "Nome": "Araçagi",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2572",
        "Nome": "Arara",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2573",
        "Nome": "Araruna",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2574",
        "Nome": "Areia",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2575",
        "Nome": "Areia de Baraúnas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2576",
        "Nome": "Areial",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2577",
        "Nome": "Aroeiras",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2578",
        "Nome": "Assunção",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2579",
        "Nome": "Baía da Traição",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2580",
        "Nome": "Bananeiras",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2581",
        "Nome": "Baraúna",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2582",
        "Nome": "Barra de Santa Rosa",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2583",
        "Nome": "Barra de Santana",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2584",
        "Nome": "Barra de São Miguel",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2585",
        "Nome": "Bayeux",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2586",
        "Nome": "Belém",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2587",
        "Nome": "Belém do Brejo do Cruz",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2588",
        "Nome": "Bernardino Batista",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2589",
        "Nome": "Boa Ventura",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2590",
        "Nome": "Boa Vista",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2591",
        "Nome": "Bom Jesus",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2592",
        "Nome": "Bom Sucesso",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2593",
        "Nome": "Bonito de Santa Fé",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2594",
        "Nome": "Boqueirão",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2595",
        "Nome": "Borborema",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2596",
        "Nome": "Brejo do Cruz",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2597",
        "Nome": "Brejo dos Santos",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2598",
        "Nome": "Caaporã",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2599",
        "Nome": "Cabaceiras",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2600",
        "Nome": "Cabedelo",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2601",
        "Nome": "Cachoeira dos Índios",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2602",
        "Nome": "Cacimba de Areia",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2603",
        "Nome": "Cacimba de Dentro",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2604",
        "Nome": "Cacimbas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2605",
        "Nome": "Caiçara",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2606",
        "Nome": "Cajazeiras",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2607",
        "Nome": "Cajazeirinhas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2608",
        "Nome": "Caldas Brandão",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2609",
        "Nome": "Camalaú",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2610",
        "Nome": "Campina Grande",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2611",
        "Nome": "Campo de Santana",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2612",
        "Nome": "Capim",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2613",
        "Nome": "Caraúbas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2614",
        "Nome": "Carrapateira",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2615",
        "Nome": "Casserengue",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2616",
        "Nome": "Catingueira",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2617",
        "Nome": "Catolé do Rocha",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2618",
        "Nome": "Caturité",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2619",
        "Nome": "Conceição",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2620",
        "Nome": "Condado",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2621",
        "Nome": "Conde",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2622",
        "Nome": "Congo",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2623",
        "Nome": "Coremas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2624",
        "Nome": "Coxixola",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2625",
        "Nome": "Cruz do Espírito Santo",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2626",
        "Nome": "Cubati",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2627",
        "Nome": "Cuité",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2628",
        "Nome": "Cuité de Mamanguape",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2629",
        "Nome": "Cuitegi",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2630",
        "Nome": "Curral de Cima",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2631",
        "Nome": "Curral Velho",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2632",
        "Nome": "Damião",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2633",
        "Nome": "Desterro",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2634",
        "Nome": "Diamante",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2635",
        "Nome": "Dona Inês",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2636",
        "Nome": "Duas Estradas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2637",
        "Nome": "Emas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2638",
        "Nome": "Esperança",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2639",
        "Nome": "Fagundes",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2640",
        "Nome": "Frei Martinho",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2641",
        "Nome": "Gado Bravo",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2642",
        "Nome": "Guarabira",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2643",
        "Nome": "Gurinhém",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2644",
        "Nome": "Gurjão",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2645",
        "Nome": "Ibiara",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2646",
        "Nome": "Igaracy",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2647",
        "Nome": "Imaculada",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2648",
        "Nome": "Ingá",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2649",
        "Nome": "Itabaiana",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2650",
        "Nome": "Itaporanga",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2651",
        "Nome": "Itapororoca",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2652",
        "Nome": "Itatuba",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2653",
        "Nome": "Jacaraú",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2654",
        "Nome": "Jericó",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2655",
        "Nome": "João Pessoa",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2656",
        "Nome": "Juarez Távora",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2657",
        "Nome": "Juazeirinho",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2658",
        "Nome": "Junco do Serid_cidadeó",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2659",
        "Nome": "Juripiranga",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2660",
        "Nome": "Juru",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2661",
        "Nome": "Lagoa",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2662",
        "Nome": "Lagoa de Dentro",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2663",
        "Nome": "Lagoa Seca",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2664",
        "Nome": "Lastro",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2665",
        "Nome": "Livramento",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2666",
        "Nome": "Logradouro",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2667",
        "Nome": "Lucena",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2668",
        "Nome": "Mãe d`Água",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2669",
        "Nome": "Malta",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2670",
        "Nome": "Mamanguape",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2671",
        "Nome": "Manaíra",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2672",
        "Nome": "Marcação",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2673",
        "Nome": "Mari",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2674",
        "Nome": "Marizópolis",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2675",
        "Nome": "Massaranduba",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2676",
        "Nome": "Mataraca",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2677",
        "Nome": "Matinhas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2678",
        "Nome": "Mato Grosso",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2679",
        "Nome": "Maturéia",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2680",
        "Nome": "Mogeiro",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2681",
        "Nome": "Montadas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2682",
        "Nome": "Monte Horebe",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2683",
        "Nome": "Monteiro",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2684",
        "Nome": "Mulungu",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2685",
        "Nome": "Natuba",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2686",
        "Nome": "Nazarezinho",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2687",
        "Nome": "Nova Floresta",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2688",
        "Nome": "Nova Olinda",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2689",
        "Nome": "Nova Palmeira",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2690",
        "Nome": "Olho d`Água",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2691",
        "Nome": "Olivedos",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2692",
        "Nome": "Ouro Velho",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2693",
        "Nome": "Parari",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2694",
        "Nome": "Passagem",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2695",
        "Nome": "Patos",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2696",
        "Nome": "Paulista",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2697",
        "Nome": "Pedra Branca",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2698",
        "Nome": "Pedra Lavrada",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2699",
        "Nome": "Pedras de Fogo",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2700",
        "Nome": "Pedro Régis",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2701",
        "Nome": "Piancó",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2702",
        "Nome": "Picuí",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2703",
        "Nome": "Pilar",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2704",
        "Nome": "Pilões",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2705",
        "Nome": "Pilõezinhos",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2706",
        "Nome": "Pirpirituba",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2707",
        "Nome": "Pitimbu",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2708",
        "Nome": "Pocinhos",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2709",
        "Nome": "Poço Dantas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2710",
        "Nome": "Poço de José de Moura",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2711",
        "Nome": "Pombal",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2712",
        "Nome": "Prata",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2713",
        "Nome": "Princesa Isabel",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2714",
        "Nome": "Puxinanã",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2715",
        "Nome": "Queimadas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2716",
        "Nome": "Quixabá",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2717",
        "Nome": "Remígio",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2718",
        "Nome": "Riachão",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2719",
        "Nome": "Riachão do Bacamarte",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2720",
        "Nome": "Riachão do Poço",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2721",
        "Nome": "Riacho de Santo Antônio",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2722",
        "Nome": "Riacho dos Cavalos",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2723",
        "Nome": "Rio Tinto",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2724",
        "Nome": "Salgadinho",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2725",
        "Nome": "Salgado de São Félix",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2726",
        "Nome": "Santa Cecília",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2727",
        "Nome": "Santa Cruz",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2728",
        "Nome": "Santa Helena",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2729",
        "Nome": "Santa Inês",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2730",
        "Nome": "Santa Luzia",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2731",
        "Nome": "Santa Rita",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2732",
        "Nome": "Santa Teresinha",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2733",
        "Nome": "Santana de Mangueira",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2734",
        "Nome": "Santana dos Garrotes",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2735",
        "Nome": "Santarém",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2736",
        "Nome": "Santo André",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2737",
        "Nome": "São Bentinho",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2738",
        "Nome": "São Bento",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2739",
        "Nome": "São Domingos de Pombal",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2740",
        "Nome": "São Domingos do Cariri",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2741",
        "Nome": "São Francisco",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2742",
        "Nome": "São João do Cariri",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2743",
        "Nome": "São João do Rio do Peixe",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2744",
        "Nome": "São João do Tigre",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2745",
        "Nome": "São José da Lagoa Tapada",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2746",
        "Nome": "São José de Caiana",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2747",
        "Nome": "São José de Espinharas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2748",
        "Nome": "São José de Piranhas",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2749",
        "Nome": "São José de Princesa",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2750",
        "Nome": "São José do Bonfim",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2751",
        "Nome": "São José do Brejo do Cruz",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2752",
        "Nome": "São José do Sabugi",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2753",
        "Nome": "São José dos Cordeiros",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2754",
        "Nome": "São José dos Ramos",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2755",
        "Nome": "São Mamede",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2756",
        "Nome": "São Miguel de Taipu",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2757",
        "Nome": "São Sebastião de Lagoa de Roça",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2758",
        "Nome": "São Sebastião do Umbuzeiro",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2759",
        "Nome": "Sapé",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2760",
        "Nome": "Serid_cidadeó",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2761",
        "Nome": "Serra Branca",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2762",
        "Nome": "Serra da Raiz",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2763",
        "Nome": "Serra Grande",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2764",
        "Nome": "Serra Redonda",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2765",
        "Nome": "Serraria",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2766",
        "Nome": "Sertãozinho",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2767",
        "Nome": "Sobrado",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2768",
        "Nome": "Solânea",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2769",
        "Nome": "Soledade",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2770",
        "Nome": "Sossêgo",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2771",
        "Nome": "Sousa",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2772",
        "Nome": "Sumé",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2773",
        "Nome": "Taperoá",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2774",
        "Nome": "Tavares",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2775",
        "Nome": "Teixeira",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2776",
        "Nome": "Tenório",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2777",
        "Nome": "Triunfo",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2778",
        "Nome": "Uiraúna",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2779",
        "Nome": "Umbuzeiro",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2780",
        "Nome": "Várzea",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2781",
        "Nome": "Vieirópolis",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2782",
        "Nome": "Vista Serrana",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2783",
        "Nome": "Zabelê",
        "fk_estado": "15"
      },
      {
        "id_cidade": "2784",
        "Nome": "Abatiá",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2785",
        "Nome": "Adrianópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2786",
        "Nome": "Agudos do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2787",
        "Nome": "Almirante Tamandaré",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2788",
        "Nome": "Altamira do Paraná",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2789",
        "Nome": "Alto Paraíso",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2790",
        "Nome": "Alto Paraná",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2791",
        "Nome": "Alto Piquiri",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2792",
        "Nome": "Altônia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2793",
        "Nome": "Alvorada do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2794",
        "Nome": "Amaporã",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2795",
        "Nome": "Ampére",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2796",
        "Nome": "Anahy",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2797",
        "Nome": "Andirá",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2798",
        "Nome": "Ângulo",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2799",
        "Nome": "Antonina",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2800",
        "Nome": "Antônio Olinto",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2801",
        "Nome": "Apucarana",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2802",
        "Nome": "Arapongas",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2803",
        "Nome": "Arapoti",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2804",
        "Nome": "Arapuã",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2805",
        "Nome": "Araruna",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2806",
        "Nome": "Araucária",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2807",
        "Nome": "Ariranha do Ivaí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2808",
        "Nome": "Assaí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2809",
        "Nome": "Assis Chateaubriand",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2810",
        "Nome": "Astorga",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2811",
        "Nome": "Atalaia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2812",
        "Nome": "Balsa Nova",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2813",
        "Nome": "Bandeirantes",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2814",
        "Nome": "Barbosa Ferraz",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2815",
        "Nome": "Barra do Jacaré",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2816",
        "Nome": "Barracão",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2817",
        "Nome": "Bela Vista da Caroba",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2818",
        "Nome": "Bela Vista do Paraíso",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2819",
        "Nome": "Bituruna",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2820",
        "Nome": "Boa Esperança",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2821",
        "Nome": "Boa Esperança do Iguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2822",
        "Nome": "Boa Ventura de São Roque",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2823",
        "Nome": "Boa Vista da Aparecid_cidadea",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2824",
        "Nome": "Bocaiúva do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2825",
        "Nome": "Bom Jesus do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2826",
        "Nome": "Bom Sucesso",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2827",
        "Nome": "Bom Sucesso do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2828",
        "Nome": "Borrazópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2829",
        "Nome": "Braganey",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2830",
        "Nome": "Brasilândia do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2831",
        "Nome": "Cafeara",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2832",
        "Nome": "Cafelândia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2833",
        "Nome": "Cafezal do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2834",
        "Nome": "Califórnia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2835",
        "Nome": "Cambará",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2836",
        "Nome": "Cambé",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2837",
        "Nome": "Cambira",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2838",
        "Nome": "Campina da Lagoa",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2839",
        "Nome": "Campina do Simão",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2840",
        "Nome": "Campina Grande do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2841",
        "Nome": "Campo Bonito",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2842",
        "Nome": "Campo do Tenente",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2843",
        "Nome": "Campo Largo",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2844",
        "Nome": "Campo Magro",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2845",
        "Nome": "Campo Mourão",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2846",
        "Nome": "Cândid_cidadeo de Abreu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2847",
        "Nome": "Candói",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2848",
        "Nome": "Cantagalo",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2849",
        "Nome": "Capanema",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2850",
        "Nome": "Capitão Leônid_cidadeas Marques",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2851",
        "Nome": "Carambeí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2852",
        "Nome": "Carlópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2853",
        "Nome": "Cascavel",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2854",
        "Nome": "Castro",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2855",
        "Nome": "Catanduvas",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2856",
        "Nome": "Centenário do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2857",
        "Nome": "Cerro Azul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2858",
        "Nome": "Céu Azul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2859",
        "Nome": "Chopinzinho",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2860",
        "Nome": "Cianorte",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2861",
        "Nome": "Cid_cidadeade Gaúcha",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2862",
        "Nome": "Clevelândia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2863",
        "Nome": "Colombo",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2864",
        "Nome": "Colorado",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2865",
        "Nome": "Congonhinhas",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2866",
        "Nome": "Conselheiro Mairinck",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2867",
        "Nome": "Contenda",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2868",
        "Nome": "Corbélia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2869",
        "Nome": "Cornélio Procópio",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2870",
        "Nome": "Coronel Domingos Soares",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2871",
        "Nome": "Coronel Vivid_cidadea",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2872",
        "Nome": "Corumbataí do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2873",
        "Nome": "Cruz Machado",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2874",
        "Nome": "Cruzeiro do Iguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2875",
        "Nome": "Cruzeiro do Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2876",
        "Nome": "Cruzeiro do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2877",
        "Nome": "Cruzmaltina",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2878",
        "Nome": "Curitiba",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2879",
        "Nome": "Curiúva",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2880",
        "Nome": "Diamante d`Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2881",
        "Nome": "Diamante do Norte",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2882",
        "Nome": "Diamante do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2883",
        "Nome": "Dois Vizinhos",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2884",
        "Nome": "Douradina",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2885",
        "Nome": "Doutor Camargo",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2886",
        "Nome": "Doutor Ulysses",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2887",
        "Nome": "Enéas Marques",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2888",
        "Nome": "Engenheiro Beltrão",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2889",
        "Nome": "Entre Rios do Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2890",
        "Nome": "Esperança Nova",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2891",
        "Nome": "Espigão Alto do Iguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2892",
        "Nome": "Farol",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2893",
        "Nome": "Faxinal",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2894",
        "Nome": "Fazenda Rio Grande",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2895",
        "Nome": "Fênix",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2896",
        "Nome": "Fernandes Pinheiro",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2897",
        "Nome": "Figueira",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2898",
        "Nome": "Flor da Serra do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2899",
        "Nome": "Floraí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2900",
        "Nome": "Floresta",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2901",
        "Nome": "Florestópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2902",
        "Nome": "Flórid_cidadea",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2903",
        "Nome": "Formosa do Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2904",
        "Nome": "Foz do Iguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2905",
        "Nome": "Foz do Jordão",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2906",
        "Nome": "Francisco Alves",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2907",
        "Nome": "Francisco Beltrão",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2908",
        "Nome": "General Carneiro",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2909",
        "Nome": "Godoy Moreira",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2910",
        "Nome": "Goioerê",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2911",
        "Nome": "Goioxim",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2912",
        "Nome": "Grandes Rios",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2913",
        "Nome": "Guaíra",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2914",
        "Nome": "Guairaçá",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2915",
        "Nome": "Guamiranga",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2916",
        "Nome": "Guapirama",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2917",
        "Nome": "Guaporema",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2918",
        "Nome": "Guaraci",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2919",
        "Nome": "Guaraniaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2920",
        "Nome": "Guarapuava",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2921",
        "Nome": "Guaraqueçaba",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2922",
        "Nome": "Guaratuba",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2923",
        "Nome": "Honório Serpa",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2924",
        "Nome": "Ibaiti",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2925",
        "Nome": "Ibema",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2926",
        "Nome": "Ibiporã",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2927",
        "Nome": "Icaraíma",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2928",
        "Nome": "Iguaraçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2929",
        "Nome": "Iguatu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2930",
        "Nome": "Imbaú",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2931",
        "Nome": "Imbituva",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2932",
        "Nome": "Inácio Martins",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2933",
        "Nome": "Inajá",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2934",
        "Nome": "Indianópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2935",
        "Nome": "Ipiranga",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2936",
        "Nome": "Iporã",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2937",
        "Nome": "Iracema do Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2938",
        "Nome": "Irati",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2939",
        "Nome": "Iretama",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2940",
        "Nome": "Itaguajé",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2941",
        "Nome": "Itaipulândia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2942",
        "Nome": "Itambaracá",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2943",
        "Nome": "Itambé",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2944",
        "Nome": "Itapejara d`Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2945",
        "Nome": "Itaperuçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2946",
        "Nome": "Itaúna do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2947",
        "Nome": "Ivaí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2948",
        "Nome": "Ivaiporã",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2949",
        "Nome": "Ivaté",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2950",
        "Nome": "Ivatuba",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2951",
        "Nome": "Jaboti",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2952",
        "Nome": "Jacarezinho",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2953",
        "Nome": "Jaguapitã",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2954",
        "Nome": "Jaguariaíva",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2955",
        "Nome": "Jandaia do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2956",
        "Nome": "Janiópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2957",
        "Nome": "Japira",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2958",
        "Nome": "Japurá",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2959",
        "Nome": "Jardim Alegre",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2960",
        "Nome": "Jardim Olinda",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2961",
        "Nome": "Jataizinho",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2962",
        "Nome": "Jesuítas",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2963",
        "Nome": "Joaquim Távora",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2964",
        "Nome": "Jundiaí do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2965",
        "Nome": "Juranda",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2966",
        "Nome": "Jussara",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2967",
        "Nome": "Kaloré",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2968",
        "Nome": "Lapa",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2969",
        "Nome": "Laranjal",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2970",
        "Nome": "Laranjeiras do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2971",
        "Nome": "Leópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2972",
        "Nome": "Lid_cidadeianópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2973",
        "Nome": "Lindoeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2974",
        "Nome": "Loanda",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2975",
        "Nome": "Lobato",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2976",
        "Nome": "Londrina",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2977",
        "Nome": "Luiziana",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2978",
        "Nome": "Lunardelli",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2979",
        "Nome": "Lupionópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2980",
        "Nome": "Mallet",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2981",
        "Nome": "Mamborê",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2982",
        "Nome": "Mandaguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2983",
        "Nome": "Mandaguari",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2984",
        "Nome": "Mandirituba",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2985",
        "Nome": "Manfrinópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2986",
        "Nome": "Mangueirinha",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2987",
        "Nome": "Manoel Ribas",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2988",
        "Nome": "Marechal Cândid_cidadeo Rondon",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2989",
        "Nome": "Maria Helena",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2990",
        "Nome": "Marialva",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2991",
        "Nome": "Marilândia do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2992",
        "Nome": "Marilena",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2993",
        "Nome": "Mariluz",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2994",
        "Nome": "Maringá",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2995",
        "Nome": "Mariópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2996",
        "Nome": "Maripá",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2997",
        "Nome": "Marmeleiro",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2998",
        "Nome": "Marquinho",
        "fk_estado": "18"
      },
      {
        "id_cidade": "2999",
        "Nome": "Marumbi",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3000",
        "Nome": "Matelândia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3001",
        "Nome": "Matinhos",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3002",
        "Nome": "Mato Rico",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3003",
        "Nome": "Mauá da Serra",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3004",
        "Nome": "Medianeira",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3005",
        "Nome": "Mercedes",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3006",
        "Nome": "Mirador",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3007",
        "Nome": "Miraselva",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3008",
        "Nome": "Missal",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3009",
        "Nome": "Moreira Sales",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3010",
        "Nome": "Morretes",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3011",
        "Nome": "Munhoz de Melo",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3012",
        "Nome": "Nossa Senhora das Graças",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3013",
        "Nome": "Nova Aliança do Ivaí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3014",
        "Nome": "Nova América da Colina",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3015",
        "Nome": "Nova Aurora",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3016",
        "Nome": "Nova Cantu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3017",
        "Nome": "Nova Esperança",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3018",
        "Nome": "Nova Esperança do Sudoeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3019",
        "Nome": "Nova Fátima",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3020",
        "Nome": "Nova Laranjeiras",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3021",
        "Nome": "Nova Londrina",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3022",
        "Nome": "Nova Olímpia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3023",
        "Nome": "Nova Prata do Iguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3024",
        "Nome": "Nova Santa Bárbara",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3025",
        "Nome": "Nova Santa Rosa",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3026",
        "Nome": "Nova Tebas",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3027",
        "Nome": "Novo Itacolomi",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3028",
        "Nome": "Ortigueira",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3029",
        "Nome": "Ourizona",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3030",
        "Nome": "Ouro Verde do Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3031",
        "Nome": "Paiçandu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3032",
        "Nome": "Palmas",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3033",
        "Nome": "Palmeira",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3034",
        "Nome": "Palmital",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3035",
        "Nome": "Palotina",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3036",
        "Nome": "Paraíso do Norte",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3037",
        "Nome": "Paranacity",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3038",
        "Nome": "Paranaguá",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3039",
        "Nome": "Paranapoema",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3040",
        "Nome": "Paranavaí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3041",
        "Nome": "Pato Bragado",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3042",
        "Nome": "Pato Branco",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3043",
        "Nome": "Paula Freitas",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3044",
        "Nome": "Paulo Frontin",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3045",
        "Nome": "Peabiru",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3046",
        "Nome": "Perobal",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3047",
        "Nome": "Pérola",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3048",
        "Nome": "Pérola d`Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3049",
        "Nome": "Piên",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3050",
        "Nome": "Pinhais",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3051",
        "Nome": "Pinhal de São Bento",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3052",
        "Nome": "Pinhalão",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3053",
        "Nome": "Pinhão",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3054",
        "Nome": "Piraí do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3055",
        "Nome": "Piraquara",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3056",
        "Nome": "Pitanga",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3057",
        "Nome": "Pitangueiras",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3058",
        "Nome": "Planaltina do Paraná",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3059",
        "Nome": "Planalto",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3060",
        "Nome": "Ponta Grossa",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3061",
        "Nome": "Pontal do Paraná",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3062",
        "Nome": "Porecatu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3063",
        "Nome": "Porto Amazonas",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3064",
        "Nome": "Porto Barreiro",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3065",
        "Nome": "Porto Rico",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3066",
        "Nome": "Porto Vitória",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3067",
        "Nome": "Prado Ferreira",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3068",
        "Nome": "Pranchita",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3069",
        "Nome": "Presid_cidadeente Castelo Branco",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3070",
        "Nome": "Primeiro de Maio",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3071",
        "Nome": "Prudentópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3072",
        "Nome": "Quarto Centenário",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3073",
        "Nome": "Quatiguá",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3074",
        "Nome": "Quatro Barras",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3075",
        "Nome": "Quatro Pontes",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3076",
        "Nome": "Quedas do Iguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3077",
        "Nome": "Querência do Norte",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3078",
        "Nome": "Quinta do Sol",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3079",
        "Nome": "Quitandinha",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3080",
        "Nome": "Ramilândia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3081",
        "Nome": "Rancho Alegre",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3082",
        "Nome": "Rancho Alegre d`Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3083",
        "Nome": "Realeza",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3084",
        "Nome": "Rebouças",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3085",
        "Nome": "Renascença",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3086",
        "Nome": "Reserva",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3087",
        "Nome": "Reserva do Iguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3088",
        "Nome": "Ribeirão Claro",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3089",
        "Nome": "Ribeirão do Pinhal",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3090",
        "Nome": "Rio Azul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3091",
        "Nome": "Rio Bom",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3092",
        "Nome": "Rio Bonito do Iguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3093",
        "Nome": "Rio Branco do Ivaí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3094",
        "Nome": "Rio Branco do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3095",
        "Nome": "Rio Negro",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3096",
        "Nome": "Rolândia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3097",
        "Nome": "Roncador",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3098",
        "Nome": "Rondon",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3099",
        "Nome": "Rosário do Ivaí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3100",
        "Nome": "Sabáudia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3101",
        "Nome": "Salgado Filho",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3102",
        "Nome": "Salto do Itararé",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3103",
        "Nome": "Salto do Lontra",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3104",
        "Nome": "Santa Amélia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3105",
        "Nome": "Santa Cecília do Pavão",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3106",
        "Nome": "Santa Cruz de Monte Castelo",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3107",
        "Nome": "Santa Fé",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3108",
        "Nome": "Santa Helena",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3109",
        "Nome": "Santa Inês",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3110",
        "Nome": "Santa Isabel do Ivaí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3111",
        "Nome": "Santa Izabel do Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3112",
        "Nome": "Santa Lúcia",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3113",
        "Nome": "Santa Maria do Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3114",
        "Nome": "Santa Mariana",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3115",
        "Nome": "Santa Mônica",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3116",
        "Nome": "Santa Tereza do Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3117",
        "Nome": "Santa Terezinha de Itaipu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3118",
        "Nome": "Santana do Itararé",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3119",
        "Nome": "Santo Antônio da Platina",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3120",
        "Nome": "Santo Antônio do Caiuá",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3121",
        "Nome": "Santo Antônio do Paraíso",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3122",
        "Nome": "Santo Antônio do Sudoeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3123",
        "Nome": "Santo Inácio",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3124",
        "Nome": "São Carlos do Ivaí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3125",
        "Nome": "São Jerônimo da Serra",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3126",
        "Nome": "São João",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3127",
        "Nome": "São João do Caiuá",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3128",
        "Nome": "São João do Ivaí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3129",
        "Nome": "São João do Triunfo",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3130",
        "Nome": "São Jorge d`Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3131",
        "Nome": "São Jorge do Ivaí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3132",
        "Nome": "São Jorge do Patrocínio",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3133",
        "Nome": "São José da Boa Vista",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3134",
        "Nome": "São José das Palmeiras",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3135",
        "Nome": "São José dos Pinhais",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3136",
        "Nome": "São Manoel do Paraná",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3137",
        "Nome": "São Mateus do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3138",
        "Nome": "São Miguel do Iguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3139",
        "Nome": "São Pedro do Iguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3140",
        "Nome": "São Pedro do Ivaí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3141",
        "Nome": "São Pedro do Paraná",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3142",
        "Nome": "São Sebastião da Amoreira",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3143",
        "Nome": "São Tomé",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3144",
        "Nome": "Sapopema",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3145",
        "Nome": "Sarandi",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3146",
        "Nome": "Saudade do Iguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3147",
        "Nome": "Sengés",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3148",
        "Nome": "Serranópolis do Iguaçu",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3149",
        "Nome": "Sertaneja",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3150",
        "Nome": "Sertanópolis",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3151",
        "Nome": "Siqueira Campos",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3152",
        "Nome": "Sulina",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3153",
        "Nome": "Tamarana",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3154",
        "Nome": "Tamboara",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3155",
        "Nome": "Tapejara",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3156",
        "Nome": "Tapira",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3157",
        "Nome": "Teixeira Soares",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3158",
        "Nome": "Telêmaco Borba",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3159",
        "Nome": "Terra Boa",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3160",
        "Nome": "Terra Rica",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3161",
        "Nome": "Terra Roxa",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3162",
        "Nome": "Tibagi",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3163",
        "Nome": "Tijucas do Sul",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3164",
        "Nome": "Toledo",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3165",
        "Nome": "Tomazina",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3166",
        "Nome": "Três Barras do Paraná",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3167",
        "Nome": "Tunas do Paraná",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3168",
        "Nome": "Tuneiras do Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3169",
        "Nome": "Tupãssi",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3170",
        "Nome": "Turvo",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3171",
        "Nome": "Ubiratã",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3172",
        "Nome": "Umuarama",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3173",
        "Nome": "União da Vitória",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3174",
        "Nome": "Uniflor",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3175",
        "Nome": "Uraí",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3176",
        "Nome": "Ventania",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3177",
        "Nome": "Vera Cruz do Oeste",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3178",
        "Nome": "Verê",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3179",
        "Nome": "Virmond",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3180",
        "Nome": "Vitorino",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3181",
        "Nome": "Wenceslau Braz",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3182",
        "Nome": "Xambrê",
        "fk_estado": "18"
      },
      {
        "id_cidade": "3183",
        "Nome": "Abreu e Lima",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3184",
        "Nome": "Afogados da Ingazeira",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3185",
        "Nome": "Afrânio",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3186",
        "Nome": "Agrestina",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3187",
        "Nome": "Água Preta",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3188",
        "Nome": "Águas Belas",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3189",
        "Nome": "Alagoinha",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3190",
        "Nome": "Aliança",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3191",
        "Nome": "Altinho",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3192",
        "Nome": "Amaraji",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3193",
        "Nome": "Angelim",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3194",
        "Nome": "Araçoiaba",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3195",
        "Nome": "Araripina",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3196",
        "Nome": "Arcoverde",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3197",
        "Nome": "Barra de Guabiraba",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3198",
        "Nome": "Barreiros",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3199",
        "Nome": "Belém de Maria",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3200",
        "Nome": "Belém de São Francisco",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3201",
        "Nome": "Belo Jardim",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3202",
        "Nome": "Betânia",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3203",
        "Nome": "Bezerros",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3204",
        "Nome": "Bodocó",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3205",
        "Nome": "Bom Conselho",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3206",
        "Nome": "Bom Jardim",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3207",
        "Nome": "Bonito",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3208",
        "Nome": "Brejão",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3209",
        "Nome": "Brejinho",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3210",
        "Nome": "Brejo da Madre de Deus",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3211",
        "Nome": "Buenos Aires",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3212",
        "Nome": "Buíque",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3213",
        "Nome": "Cabo de Santo Agostinho",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3214",
        "Nome": "Cabrobó",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3215",
        "Nome": "Cachoeirinha",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3216",
        "Nome": "Caetés",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3217",
        "Nome": "Calçado",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3218",
        "Nome": "Calumbi",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3219",
        "Nome": "Camaragibe",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3220",
        "Nome": "Camocim de São Félix",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3221",
        "Nome": "Camutanga",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3222",
        "Nome": "Canhotinho",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3223",
        "Nome": "Capoeiras",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3224",
        "Nome": "Carnaíba",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3225",
        "Nome": "Carnaubeira da Penha",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3226",
        "Nome": "Carpina",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3227",
        "Nome": "Caruaru",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3228",
        "Nome": "Casinhas",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3229",
        "Nome": "Catende",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3230",
        "Nome": "Cedro",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3231",
        "Nome": "Chã de Alegria",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3232",
        "Nome": "Chã Grande",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3233",
        "Nome": "Condado",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3234",
        "Nome": "Correntes",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3235",
        "Nome": "Cortês",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3236",
        "Nome": "Cumaru",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3237",
        "Nome": "Cupira",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3238",
        "Nome": "Custódia",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3239",
        "Nome": "Dormentes",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3240",
        "Nome": "Escada",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3241",
        "Nome": "Exu",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3242",
        "Nome": "Feira Nova",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3243",
        "Nome": "Fernando de Noronha",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3244",
        "Nome": "Ferreiros",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3245",
        "Nome": "Flores",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3246",
        "Nome": "Floresta",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3247",
        "Nome": "Frei Miguelinho",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3248",
        "Nome": "Gameleira",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3249",
        "Nome": "Garanhuns",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3250",
        "Nome": "Glória do Goitá",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3251",
        "Nome": "Goiana",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3252",
        "Nome": "Granito",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3253",
        "Nome": "Gravatá",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3254",
        "Nome": "Iati",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3255",
        "Nome": "Ibimirim",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3256",
        "Nome": "Ibirajuba",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3257",
        "Nome": "Igarassu",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3258",
        "Nome": "Iguaraci",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3259",
        "Nome": "Ilha de Itamaracá",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3260",
        "Nome": "Inajá",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3261",
        "Nome": "Ingazeira",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3262",
        "Nome": "Ipojuca",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3263",
        "Nome": "Ipubi",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3264",
        "Nome": "Itacuruba",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3265",
        "Nome": "Itaíba",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3266",
        "Nome": "Itambé",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3267",
        "Nome": "Itapetim",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3268",
        "Nome": "Itapissuma",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3269",
        "Nome": "Itaquitinga",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3270",
        "Nome": "Jaboatão dos Guararapes",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3271",
        "Nome": "Jaqueira",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3272",
        "Nome": "Jataúba",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3273",
        "Nome": "Jatobá",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3274",
        "Nome": "João Alfredo",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3275",
        "Nome": "Joaquim Nabuco",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3276",
        "Nome": "Jucati",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3277",
        "Nome": "Jupi",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3278",
        "Nome": "Jurema",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3279",
        "Nome": "Lagoa do Carro",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3280",
        "Nome": "Lagoa do Itaenga",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3281",
        "Nome": "Lagoa do Ouro",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3282",
        "Nome": "Lagoa dos Gatos",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3283",
        "Nome": "Lagoa Grande",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3284",
        "Nome": "Lajedo",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3285",
        "Nome": "Limoeiro",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3286",
        "Nome": "Macaparana",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3287",
        "Nome": "Machados",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3288",
        "Nome": "Manari",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3289",
        "Nome": "Maraial",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3290",
        "Nome": "Mirandiba",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3291",
        "Nome": "Moreilândia",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3292",
        "Nome": "Moreno",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3293",
        "Nome": "Nazaré da Mata",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3294",
        "Nome": "Olinda",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3295",
        "Nome": "Orobó",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3296",
        "Nome": "Orocó",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3297",
        "Nome": "Ouricuri",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3298",
        "Nome": "Palmares",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3299",
        "Nome": "Palmeirina",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3300",
        "Nome": "Panelas",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3301",
        "Nome": "Paranatama",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3302",
        "Nome": "Parnamirim",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3303",
        "Nome": "Passira",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3304",
        "Nome": "Paudalho",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3305",
        "Nome": "Paulista",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3306",
        "Nome": "Pedra",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3307",
        "Nome": "Pesqueira",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3308",
        "Nome": "Petrolândia",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3309",
        "Nome": "Petrolina",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3310",
        "Nome": "Poção",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3311",
        "Nome": "Pombos",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3312",
        "Nome": "Primavera",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3313",
        "Nome": "Quipapá",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3314",
        "Nome": "Quixaba",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3315",
        "Nome": "Recife",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3316",
        "Nome": "Riacho das Almas",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3317",
        "Nome": "Ribeirão",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3318",
        "Nome": "Rio Formoso",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3319",
        "Nome": "Sairé",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3320",
        "Nome": "Salgadinho",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3321",
        "Nome": "Salgueiro",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3322",
        "Nome": "Saloá",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3323",
        "Nome": "Sanharó",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3324",
        "Nome": "Santa Cruz",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3325",
        "Nome": "Santa Cruz da Baixa Verde",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3326",
        "Nome": "Santa Cruz do Capibaribe",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3327",
        "Nome": "Santa Filomena",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3328",
        "Nome": "Santa Maria da Boa Vista",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3329",
        "Nome": "Santa Maria do Cambucá",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3330",
        "Nome": "Santa Terezinha",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3331",
        "Nome": "São Benedito do Sul",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3332",
        "Nome": "São Bento do Una",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3333",
        "Nome": "São Caitano",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3334",
        "Nome": "São João",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3335",
        "Nome": "São Joaquim do Monte",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3336",
        "Nome": "São José da Coroa Grande",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3337",
        "Nome": "São José do Belmonte",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3338",
        "Nome": "São José do Egito",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3339",
        "Nome": "São Lourenço da Mata",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3340",
        "Nome": "São Vicente Ferrer",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3341",
        "Nome": "Serra Talhada",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3342",
        "Nome": "Serrita",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3343",
        "Nome": "Sertânia",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3344",
        "Nome": "Sirinhaém",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3345",
        "Nome": "Solid_cidadeão",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3346",
        "Nome": "Surubim",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3347",
        "Nome": "Tabira",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3348",
        "Nome": "Tacaimbó",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3349",
        "Nome": "Tacaratu",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3350",
        "Nome": "Tamandaré",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3351",
        "Nome": "Taquaritinga do Norte",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3352",
        "Nome": "Terezinha",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3353",
        "Nome": "Terra Nova",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3354",
        "Nome": "Timbaúba",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3355",
        "Nome": "Toritama",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3356",
        "Nome": "Tracunhaém",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3357",
        "Nome": "Trindade",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3358",
        "Nome": "Triunfo",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3359",
        "Nome": "Tupanatinga",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3360",
        "Nome": "Tuparetama",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3361",
        "Nome": "Venturosa",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3362",
        "Nome": "Verdejante",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3363",
        "Nome": "Vertente do Lério",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3364",
        "Nome": "Vertentes",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3365",
        "Nome": "Vicência",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3366",
        "Nome": "Vitória de Santo Antão",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3367",
        "Nome": "Xexéu",
        "fk_estado": "16"
      },
      {
        "id_cidade": "3368",
        "Nome": "Acauã",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3369",
        "Nome": "Agricolândia",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3370",
        "Nome": "Água Branca",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3371",
        "Nome": "Alagoinha do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3372",
        "Nome": "Alegrete do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3373",
        "Nome": "Alto Longá",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3374",
        "Nome": "Altos",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3375",
        "Nome": "Alvorada do Gurguéia",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3376",
        "Nome": "Amarante",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3377",
        "Nome": "Angical do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3378",
        "Nome": "Anísio de Abreu",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3379",
        "Nome": "Antônio Almeid_cidadea",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3380",
        "Nome": "Aroazes",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3381",
        "Nome": "Aroeiras do Itaim",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3382",
        "Nome": "Arraial",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3383",
        "Nome": "Assunção do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3384",
        "Nome": "Avelino Lopes",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3385",
        "Nome": "Baixa Grande do Ribeiro",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3386",
        "Nome": "Barra d`Alcântara",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3387",
        "Nome": "Barras",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3388",
        "Nome": "Barreiras do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3389",
        "Nome": "Barro Duro",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3390",
        "Nome": "Batalha",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3391",
        "Nome": "Bela Vista do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3392",
        "Nome": "Belém do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3393",
        "Nome": "Beneditinos",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3394",
        "Nome": "Bertolínia",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3395",
        "Nome": "Betânia do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3396",
        "Nome": "Boa Hora",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3397",
        "Nome": "Bocaina",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3398",
        "Nome": "Bom Jesus",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3399",
        "Nome": "Bom Princípio do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3400",
        "Nome": "Bonfim do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3401",
        "Nome": "Boqueirão do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3402",
        "Nome": "Brasileira",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3403",
        "Nome": "Brejo do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3404",
        "Nome": "Buriti dos Lopes",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3405",
        "Nome": "Buriti dos Montes",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3406",
        "Nome": "Cabeceiras do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3407",
        "Nome": "Cajazeiras do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3408",
        "Nome": "Cajueiro da Praia",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3409",
        "Nome": "Caldeirão Grande do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3410",
        "Nome": "Campinas do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3411",
        "Nome": "Campo Alegre do Fid_cidadealgo",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3412",
        "Nome": "Campo Grande do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3413",
        "Nome": "Campo Largo do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3414",
        "Nome": "Campo Maior",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3415",
        "Nome": "Canavieira",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3416",
        "Nome": "Canto do Buriti",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3417",
        "Nome": "Capitão de Campos",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3418",
        "Nome": "Capitão Gervásio Oliveira",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3419",
        "Nome": "Caracol",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3420",
        "Nome": "Caraúbas do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3421",
        "Nome": "Carid_cidadeade do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3422",
        "Nome": "Castelo do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3423",
        "Nome": "Caxingó",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3424",
        "Nome": "Cocal",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3425",
        "Nome": "Cocal de Telha",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3426",
        "Nome": "Cocal dos Alves",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3427",
        "Nome": "Coivaras",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3428",
        "Nome": "Colônia do Gurguéia",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3429",
        "Nome": "Colônia do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3430",
        "Nome": "Conceição do Canindé",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3431",
        "Nome": "Coronel José Dias",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3432",
        "Nome": "Corrente",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3433",
        "Nome": "Cristalândia do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3434",
        "Nome": "Cristino Castro",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3435",
        "Nome": "Curimatá",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3436",
        "Nome": "Currais",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3437",
        "Nome": "Curral Novo do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3438",
        "Nome": "Curralinhos",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3439",
        "Nome": "Demerval Lobão",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3440",
        "Nome": "Dirceu Arcoverde",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3441",
        "Nome": "Dom Expedito Lopes",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3442",
        "Nome": "Dom Inocêncio",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3443",
        "Nome": "Domingos Mourão",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3444",
        "Nome": "Elesbão Veloso",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3445",
        "Nome": "Eliseu Martins",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3446",
        "Nome": "Esperantina",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3447",
        "Nome": "Fartura do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3448",
        "Nome": "Flores do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3449",
        "Nome": "Floresta do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3450",
        "Nome": "Floriano",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3451",
        "Nome": "Francinópolis",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3452",
        "Nome": "Francisco Ayres",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3453",
        "Nome": "Francisco Macedo",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3454",
        "Nome": "Francisco Santos",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3455",
        "Nome": "Fronteiras",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3456",
        "Nome": "Geminiano",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3457",
        "Nome": "Gilbués",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3458",
        "Nome": "Guadalupe",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3459",
        "Nome": "Guaribas",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3460",
        "Nome": "Hugo Napoleão",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3461",
        "Nome": "Ilha Grande",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3462",
        "Nome": "Inhuma",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3463",
        "Nome": "Ipiranga do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3464",
        "Nome": "Isaías Coelho",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3465",
        "Nome": "Itainópolis",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3466",
        "Nome": "Itaueira",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3467",
        "Nome": "Jacobina do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3468",
        "Nome": "Jaicós",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3469",
        "Nome": "Jardim do Mulato",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3470",
        "Nome": "Jatobá do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3471",
        "Nome": "Jerumenha",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3472",
        "Nome": "João Costa",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3473",
        "Nome": "Joaquim Pires",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3474",
        "Nome": "Joca Marques",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3475",
        "Nome": "José de Freitas",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3476",
        "Nome": "Juazeiro do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3477",
        "Nome": "Júlio Borges",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3478",
        "Nome": "Jurema",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3479",
        "Nome": "Lagoa Alegre",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3480",
        "Nome": "Lagoa de São Francisco",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3481",
        "Nome": "Lagoa do Barro do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3482",
        "Nome": "Lagoa do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3483",
        "Nome": "Lagoa do Sítio",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3484",
        "Nome": "Lagoinha do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3485",
        "Nome": "Landri Sales",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3486",
        "Nome": "Luís Correia",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3487",
        "Nome": "Luzilândia",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3488",
        "Nome": "Madeiro",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3489",
        "Nome": "Manoel Emídio",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3490",
        "Nome": "Marcolândia",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3491",
        "Nome": "Marcos Parente",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3492",
        "Nome": "Massapê do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3493",
        "Nome": "Matias Olímpio",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3494",
        "Nome": "Miguel Alves",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3495",
        "Nome": "Miguel Leão",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3496",
        "Nome": "Milton Brandão",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3497",
        "Nome": "Monsenhor Gil",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3498",
        "Nome": "Monsenhor Hipólito",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3499",
        "Nome": "Monte Alegre do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3500",
        "Nome": "Morro Cabeça no Tempo",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3501",
        "Nome": "Morro do Chapéu do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3502",
        "Nome": "Murici dos Portelas",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3503",
        "Nome": "Nazaré do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3504",
        "Nome": "Nossa Senhora de Nazaré",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3505",
        "Nome": "Nossa Senhora dos Remédios",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3506",
        "Nome": "Nova Santa Rita",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3507",
        "Nome": "Novo Oriente do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3508",
        "Nome": "Novo Santo Antônio",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3509",
        "Nome": "Oeiras",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3510",
        "Nome": "Olho d`Água do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3511",
        "Nome": "Padre Marcos",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3512",
        "Nome": "Paes Landim",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3513",
        "Nome": "Pajeú do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3514",
        "Nome": "Palmeira do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3515",
        "Nome": "Palmeirais",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3516",
        "Nome": "Paquetá",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3517",
        "Nome": "Parnaguá",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3518",
        "Nome": "Parnaíba",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3519",
        "Nome": "Passagem Franca do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3520",
        "Nome": "Patos do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3521",
        "Nome": "Pau d`Arco do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3522",
        "Nome": "Paulistana",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3523",
        "Nome": "Pavussu",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3524",
        "Nome": "Pedro II",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3525",
        "Nome": "Pedro Laurentino",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3526",
        "Nome": "Picos",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3527",
        "Nome": "Pimenteiras",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3528",
        "Nome": "Pio IX",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3529",
        "Nome": "Piracuruca",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3530",
        "Nome": "Piripiri",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3531",
        "Nome": "Porto",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3532",
        "Nome": "Porto Alegre do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3533",
        "Nome": "Prata do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3534",
        "Nome": "Queimada Nova",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3535",
        "Nome": "Redenção do Gurguéia",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3536",
        "Nome": "Regeneração",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3537",
        "Nome": "Riacho Frio",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3538",
        "Nome": "Ribeira do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3539",
        "Nome": "Ribeiro Gonçalves",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3540",
        "Nome": "Rio Grande do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3541",
        "Nome": "Santa Cruz do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3542",
        "Nome": "Santa Cruz dos Milagres",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3543",
        "Nome": "Santa Filomena",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3544",
        "Nome": "Santa Luz",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3545",
        "Nome": "Santa Rosa do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3546",
        "Nome": "Santana do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3547",
        "Nome": "Santo Antônio de Lisboa",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3548",
        "Nome": "Santo Antônio dos Milagres",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3549",
        "Nome": "Santo Inácio do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3550",
        "Nome": "São Braz do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3551",
        "Nome": "São Félix do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3552",
        "Nome": "São Francisco de Assis do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3553",
        "Nome": "São Francisco do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3554",
        "Nome": "São Gonçalo do Gurguéia",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3555",
        "Nome": "São Gonçalo do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3556",
        "Nome": "São João da Canabrava",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3557",
        "Nome": "São João da Fronteira",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3558",
        "Nome": "São João da Serra",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3559",
        "Nome": "São João da Varjota",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3560",
        "Nome": "São João do Arraial",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3561",
        "Nome": "São João do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3562",
        "Nome": "São José do Divino",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3563",
        "Nome": "São José do Peixe",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3564",
        "Nome": "São José do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3565",
        "Nome": "São Julião",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3566",
        "Nome": "São Lourenço do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3567",
        "Nome": "São Luis do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3568",
        "Nome": "São Miguel da Baixa Grande",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3569",
        "Nome": "São Miguel do Fid_cidadealgo",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3570",
        "Nome": "São Miguel do Tapuio",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3571",
        "Nome": "São Pedro do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3572",
        "Nome": "São Raimundo Nonato",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3573",
        "Nome": "Sebastião Barros",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3574",
        "Nome": "Sebastião Leal",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3575",
        "Nome": "Sigefredo Pacheco",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3576",
        "Nome": "Simões",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3577",
        "Nome": "Simplício Mendes",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3578",
        "Nome": "Socorro do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3579",
        "Nome": "Sussuapara",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3580",
        "Nome": "Tamboril do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3581",
        "Nome": "Tanque do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3582",
        "Nome": "Teresina",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3583",
        "Nome": "União",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3584",
        "Nome": "Uruçuí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3585",
        "Nome": "Valença do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3586",
        "Nome": "Várzea Branca",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3587",
        "Nome": "Várzea Grande",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3588",
        "Nome": "Vera Mendes",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3589",
        "Nome": "Vila Nova do Piauí",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3590",
        "Nome": "Wall Ferraz",
        "fk_estado": "17"
      },
      {
        "id_cidade": "3591",
        "Nome": "Angra dos Reis",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3592",
        "Nome": "Aperibé",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3593",
        "Nome": "Araruama",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3594",
        "Nome": "Areal",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3595",
        "Nome": "Armação dos Búzios",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3596",
        "Nome": "Arraial do Cabo",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3597",
        "Nome": "Barra do Piraí",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3598",
        "Nome": "Barra Mansa",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3599",
        "Nome": "Belford Roxo",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3600",
        "Nome": "Bom Jardim",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3601",
        "Nome": "Bom Jesus do Itabapoana",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3602",
        "Nome": "Cabo Frio",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3603",
        "Nome": "Cachoeiras de Macacu",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3604",
        "Nome": "Cambuci",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3605",
        "Nome": "Campos dos Goytacazes",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3606",
        "Nome": "Cantagalo",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3607",
        "Nome": "Carapebus",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3608",
        "Nome": "Cardoso Moreira",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3609",
        "Nome": "Carmo",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3610",
        "Nome": "Casimiro de Abreu",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3611",
        "Nome": "Comendador Levy Gasparian",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3612",
        "Nome": "Conceição de Macabu",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3613",
        "Nome": "Cordeiro",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3614",
        "Nome": "Duas Barras",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3615",
        "Nome": "Duque de Caxias",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3616",
        "Nome": "Engenheiro Paulo de Frontin",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3617",
        "Nome": "Guapimirim",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3618",
        "Nome": "Iguaba Grande",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3619",
        "Nome": "Itaboraí",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3620",
        "Nome": "Itaguaí",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3621",
        "Nome": "Italva",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3622",
        "Nome": "Itaocara",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3623",
        "Nome": "Itaperuna",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3624",
        "Nome": "Itatiaia",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3625",
        "Nome": "Japeri",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3626",
        "Nome": "Laje do Muriaé",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3627",
        "Nome": "Macaé",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3628",
        "Nome": "Macuco",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3629",
        "Nome": "Magé",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3630",
        "Nome": "Mangaratiba",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3631",
        "Nome": "Maricá",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3632",
        "Nome": "Mendes",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3633",
        "Nome": "Mesquita",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3634",
        "Nome": "Miguel Pereira",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3635",
        "Nome": "Miracema",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3636",
        "Nome": "Nativid_cidadeade",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3637",
        "Nome": "Nilópolis",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3638",
        "Nome": "Niterói",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3639",
        "Nome": "Nova Friburgo",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3640",
        "Nome": "Nova Iguaçu",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3641",
        "Nome": "Paracambi",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3642",
        "Nome": "Paraíba do Sul",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3643",
        "Nome": "Parati",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3644",
        "Nome": "Paty do Alferes",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3645",
        "Nome": "Petrópolis",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3646",
        "Nome": "Pinheiral",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3647",
        "Nome": "Piraí",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3648",
        "Nome": "Porciúncula",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3649",
        "Nome": "Porto Real",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3650",
        "Nome": "Quatis",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3651",
        "Nome": "Queimados",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3652",
        "Nome": "Quissamã",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3653",
        "Nome": "Resende",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3654",
        "Nome": "Rio Bonito",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3655",
        "Nome": "Rio Claro",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3656",
        "Nome": "Rio das Flores",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3657",
        "Nome": "Rio das Ostras",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3658",
        "Nome": "Rio de Janeiro",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3659",
        "Nome": "Santa Maria Madalena",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3660",
        "Nome": "Santo Antônio de Pádua",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3661",
        "Nome": "São Fid_cidadeélis",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3662",
        "Nome": "São Francisco de Itabapoana",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3663",
        "Nome": "São Gonçalo",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3664",
        "Nome": "São João da Barra",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3665",
        "Nome": "São João de Meriti",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3666",
        "Nome": "São José de Ubá",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3667",
        "Nome": "São José do Vale do Rio Preto",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3668",
        "Nome": "São Pedro da Aldeia",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3669",
        "Nome": "São Sebastião do Alto",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3670",
        "Nome": "Sapucaia",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3671",
        "Nome": "Saquarema",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3672",
        "Nome": "Seropédica",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3673",
        "Nome": "Silva Jardim",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3674",
        "Nome": "Sumid_cidadeouro",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3675",
        "Nome": "Tanguá",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3676",
        "Nome": "Teresópolis",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3677",
        "Nome": "Trajano de Morais",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3678",
        "Nome": "Três Rios",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3679",
        "Nome": "Valença",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3680",
        "Nome": "Varre-Sai",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3681",
        "Nome": "Vassouras",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3682",
        "Nome": "Volta Redonda",
        "fk_estado": "19"
      },
      {
        "id_cidade": "3683",
        "Nome": "Acari",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3684",
        "Nome": "Açu",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3685",
        "Nome": "Afonso Bezerra",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3686",
        "Nome": "Água Nova",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3687",
        "Nome": "Alexandria",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3688",
        "Nome": "Almino Afonso",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3689",
        "Nome": "Alto do Rodrigues",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3690",
        "Nome": "Angicos",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3691",
        "Nome": "Antônio Martins",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3692",
        "Nome": "Apodi",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3693",
        "Nome": "Areia Branca",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3694",
        "Nome": "Arês",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3695",
        "Nome": "Augusto Severo",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3696",
        "Nome": "Baía Formosa",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3697",
        "Nome": "Baraúna",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3698",
        "Nome": "Barcelona",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3699",
        "Nome": "Bento Fernandes",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3700",
        "Nome": "Bodó",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3701",
        "Nome": "Bom Jesus",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3702",
        "Nome": "Brejinho",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3703",
        "Nome": "Caiçara do Norte",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3704",
        "Nome": "Caiçara do Rio do Vento",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3705",
        "Nome": "Caicó",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3706",
        "Nome": "Campo Redondo",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3707",
        "Nome": "Canguaretama",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3708",
        "Nome": "Caraúbas",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3709",
        "Nome": "Carnaúba dos Dantas",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3710",
        "Nome": "Carnaubais",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3711",
        "Nome": "Ceará-Mirim",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3712",
        "Nome": "Cerro Corá",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3713",
        "Nome": "Coronel Ezequiel",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3714",
        "Nome": "Coronel João Pessoa",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3715",
        "Nome": "Cruzeta",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3716",
        "Nome": "Currais Novos",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3717",
        "Nome": "Doutor Severiano",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3718",
        "Nome": "Encanto",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3719",
        "Nome": "Equador",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3720",
        "Nome": "Espírito Santo",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3721",
        "Nome": "Extremoz",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3722",
        "Nome": "Felipe Guerra",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3723",
        "Nome": "Fernando Pedroza",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3724",
        "Nome": "Florânia",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3725",
        "Nome": "Francisco Dantas",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3726",
        "Nome": "Frutuoso Gomes",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3727",
        "Nome": "Galinhos",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3728",
        "Nome": "Goianinha",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3729",
        "Nome": "Governador Dix-Sept Rosado",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3730",
        "Nome": "Grossos",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3731",
        "Nome": "Guamaré",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3732",
        "Nome": "Ielmo Marinho",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3733",
        "Nome": "Ipanguaçu",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3734",
        "Nome": "Ipueira",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3735",
        "Nome": "Itajá",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3736",
        "Nome": "Itaú",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3737",
        "Nome": "Jaçanã",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3738",
        "Nome": "Jandaíra",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3739",
        "Nome": "Janduís",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3740",
        "Nome": "Januário Cicco",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3741",
        "Nome": "Japi",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3742",
        "Nome": "Jardim de Angicos",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3743",
        "Nome": "Jardim de Piranhas",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3744",
        "Nome": "Jardim do Serid_cidadeó",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3745",
        "Nome": "João Câmara",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3746",
        "Nome": "João Dias",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3747",
        "Nome": "José da Penha",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3748",
        "Nome": "Jucurutu",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3749",
        "Nome": "Jundiá",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3750",
        "Nome": "Lagoa d`Anta",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3751",
        "Nome": "Lagoa de Pedras",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3752",
        "Nome": "Lagoa de Velhos",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3753",
        "Nome": "Lagoa Nova",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3754",
        "Nome": "Lagoa Salgada",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3755",
        "Nome": "Lajes",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3756",
        "Nome": "Lajes Pintadas",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3757",
        "Nome": "Lucrécia",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3758",
        "Nome": "Luís Gomes",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3759",
        "Nome": "Macaíba",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3760",
        "Nome": "Macau",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3761",
        "Nome": "Major Sales",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3762",
        "Nome": "Marcelino Vieira",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3763",
        "Nome": "Martins",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3764",
        "Nome": "Maxaranguape",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3765",
        "Nome": "Messias Targino",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3766",
        "Nome": "Montanhas",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3767",
        "Nome": "Monte Alegre",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3768",
        "Nome": "Monte das Gameleiras",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3769",
        "Nome": "Mossoró",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3770",
        "Nome": "Natal",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3771",
        "Nome": "Nísia Floresta",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3772",
        "Nome": "Nova Cruz",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3773",
        "Nome": "Olho-d`Água do Borges",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3774",
        "Nome": "Ouro Branco",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3775",
        "Nome": "Paraná",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3776",
        "Nome": "Paraú",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3777",
        "Nome": "Parazinho",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3778",
        "Nome": "Parelhas",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3779",
        "Nome": "Parnamirim",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3780",
        "Nome": "Passa e Fica",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3781",
        "Nome": "Passagem",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3782",
        "Nome": "Patu",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3783",
        "Nome": "Pau dos Ferros",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3784",
        "Nome": "Pedra Grande",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3785",
        "Nome": "Pedra Preta",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3786",
        "Nome": "Pedro Avelino",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3787",
        "Nome": "Pedro Velho",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3788",
        "Nome": "Pendências",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3789",
        "Nome": "Pilões",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3790",
        "Nome": "Poço Branco",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3791",
        "Nome": "Portalegre",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3792",
        "Nome": "Porto do Mangue",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3793",
        "Nome": "Presid_cidadeente Juscelino",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3794",
        "Nome": "Pureza",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3795",
        "Nome": "Rafael Fernandes",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3796",
        "Nome": "Rafael Godeiro",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3797",
        "Nome": "Riacho da Cruz",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3798",
        "Nome": "Riacho de Santana",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3799",
        "Nome": "Riachuelo",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3800",
        "Nome": "Rio do Fogo",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3801",
        "Nome": "Rodolfo Fernandes",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3802",
        "Nome": "Ruy Barbosa",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3803",
        "Nome": "Santa Cruz",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3804",
        "Nome": "Santa Maria",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3805",
        "Nome": "Santana do Matos",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3806",
        "Nome": "Santana do Serid_cidadeó",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3807",
        "Nome": "Santo Antônio",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3808",
        "Nome": "São Bento do Norte",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3809",
        "Nome": "São Bento do Trairí",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3810",
        "Nome": "São Fernando",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3811",
        "Nome": "São Francisco do Oeste",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3812",
        "Nome": "São Gonçalo do Amarante",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3813",
        "Nome": "São João do Sabugi",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3814",
        "Nome": "São José de Mipibu",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3815",
        "Nome": "São José do Campestre",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3816",
        "Nome": "São José do Serid_cidadeó",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3817",
        "Nome": "São Miguel",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3818",
        "Nome": "São Miguel do Gostoso",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3819",
        "Nome": "São Paulo do Potengi",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3820",
        "Nome": "São Pedro",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3821",
        "Nome": "São Rafael",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3822",
        "Nome": "São Tomé",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3823",
        "Nome": "São Vicente",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3824",
        "Nome": "Senador Elói de Souza",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3825",
        "Nome": "Senador Georgino Avelino",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3826",
        "Nome": "Serra de São Bento",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3827",
        "Nome": "Serra do Mel",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3828",
        "Nome": "Serra Negra do Norte",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3829",
        "Nome": "Serrinha",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3830",
        "Nome": "Serrinha dos Pintos",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3831",
        "Nome": "Severiano Melo",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3832",
        "Nome": "Sítio Novo",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3833",
        "Nome": "Taboleiro Grande",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3834",
        "Nome": "Taipu",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3835",
        "Nome": "Tangará",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3836",
        "Nome": "Tenente Ananias",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3837",
        "Nome": "Tenente Laurentino Cruz",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3838",
        "Nome": "Tibau",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3839",
        "Nome": "Tibau do Sul",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3840",
        "Nome": "Timbaúba dos Batistas",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3841",
        "Nome": "Touros",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3842",
        "Nome": "Triunfo Potiguar",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3843",
        "Nome": "Umarizal",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3844",
        "Nome": "Upanema",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3845",
        "Nome": "Várzea",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3846",
        "Nome": "Venha-Ver",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3847",
        "Nome": "Vera Cruz",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3848",
        "Nome": "Viçosa",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3849",
        "Nome": "Vila Flor",
        "fk_estado": "20"
      },
      {
        "id_cidade": "3850",
        "Nome": "Aceguá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3851",
        "Nome": "Água Santa",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3852",
        "Nome": "Agudo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3853",
        "Nome": "Ajuricaba",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3854",
        "Nome": "Alecrim",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3855",
        "Nome": "Alegrete",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3856",
        "Nome": "Alegria",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3857",
        "Nome": "Almirante Tamandaré do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3858",
        "Nome": "Alpestre",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3859",
        "Nome": "Alto Alegre",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3860",
        "Nome": "Alto Feliz",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3861",
        "Nome": "Alvorada",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3862",
        "Nome": "Amaral Ferrador",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3863",
        "Nome": "Ametista do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3864",
        "Nome": "André da Rocha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3865",
        "Nome": "Anta Gorda",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3866",
        "Nome": "Antônio Prado",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3867",
        "Nome": "Arambaré",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3868",
        "Nome": "Araricá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3869",
        "Nome": "Aratiba",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3870",
        "Nome": "Arroio do Meio",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3871",
        "Nome": "Arroio do Padre",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3872",
        "Nome": "Arroio do Sal",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3873",
        "Nome": "Arroio do Tigre",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3874",
        "Nome": "Arroio dos Ratos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3875",
        "Nome": "Arroio Grande",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3876",
        "Nome": "Arvorezinha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3877",
        "Nome": "Augusto Pestana",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3878",
        "Nome": "Áurea",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3879",
        "Nome": "Bagé",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3880",
        "Nome": "Balneário Pinhal",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3881",
        "Nome": "Barão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3882",
        "Nome": "Barão de Cotegipe",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3883",
        "Nome": "Barão do Triunfo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3884",
        "Nome": "Barra do Guarita",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3885",
        "Nome": "Barra do Quaraí",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3886",
        "Nome": "Barra do Ribeiro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3887",
        "Nome": "Barra do Rio Azul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3888",
        "Nome": "Barra Funda",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3889",
        "Nome": "Barracão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3890",
        "Nome": "Barros Cassal",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3891",
        "Nome": "Benjamin Constant do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3892",
        "Nome": "Bento Gonçalves",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3893",
        "Nome": "Boa Vista das Missões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3894",
        "Nome": "Boa Vista do Buricá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3895",
        "Nome": "Boa Vista do Cadeado",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3896",
        "Nome": "Boa Vista do Incra",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3897",
        "Nome": "Boa Vista do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3898",
        "Nome": "Bom Jesus",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3899",
        "Nome": "Bom Princípio",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3900",
        "Nome": "Bom Progresso",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3901",
        "Nome": "Bom Retiro do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3902",
        "Nome": "Boqueirão do Leão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3903",
        "Nome": "Bossoroca",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3904",
        "Nome": "Bozano",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3905",
        "Nome": "Braga",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3906",
        "Nome": "Brochier",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3907",
        "Nome": "Butiá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3908",
        "Nome": "Caçapava do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3909",
        "Nome": "Cacequi",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3910",
        "Nome": "Cachoeira do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3911",
        "Nome": "Cachoeirinha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3912",
        "Nome": "Cacique Doble",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3913",
        "Nome": "Caibaté",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3914",
        "Nome": "Caiçara",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3915",
        "Nome": "Camaquã",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3916",
        "Nome": "Camargo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3917",
        "Nome": "Cambará do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3918",
        "Nome": "Campestre da Serra",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3919",
        "Nome": "Campina das Missões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3920",
        "Nome": "Campinas do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3921",
        "Nome": "Campo Bom",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3922",
        "Nome": "Campo Novo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3923",
        "Nome": "Campos Borges",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3924",
        "Nome": "Candelária",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3925",
        "Nome": "Cândid_cidadeo Godói",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3926",
        "Nome": "Candiota",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3927",
        "Nome": "Canela",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3928",
        "Nome": "Canguçu",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3929",
        "Nome": "Canoas",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3930",
        "Nome": "Canudos do Vale",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3931",
        "Nome": "Capão Bonito do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3932",
        "Nome": "Capão da Canoa",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3933",
        "Nome": "Capão do Cipó",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3934",
        "Nome": "Capão do Leão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3935",
        "Nome": "Capela de Santana",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3936",
        "Nome": "Capitão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3937",
        "Nome": "Capivari do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3938",
        "Nome": "Caraá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3939",
        "Nome": "Carazinho",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3940",
        "Nome": "Carlos Barbosa",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3941",
        "Nome": "Carlos Gomes",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3942",
        "Nome": "Casca",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3943",
        "Nome": "Caseiros",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3944",
        "Nome": "Catuípe",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3945",
        "Nome": "Caxias do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3946",
        "Nome": "Centenário",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3947",
        "Nome": "Cerrito",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3948",
        "Nome": "Cerro Branco",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3949",
        "Nome": "Cerro Grande",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3950",
        "Nome": "Cerro Grande do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3951",
        "Nome": "Cerro Largo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3952",
        "Nome": "Chapada",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3953",
        "Nome": "Charqueadas",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3954",
        "Nome": "Charrua",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3955",
        "Nome": "Chiapeta",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3956",
        "Nome": "Chuí",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3957",
        "Nome": "Chuvisca",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3958",
        "Nome": "Cid_cidadereira",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3959",
        "Nome": "Ciríaco",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3960",
        "Nome": "Colinas",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3961",
        "Nome": "Colorado",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3962",
        "Nome": "Condor",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3963",
        "Nome": "Constantina",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3964",
        "Nome": "Coqueiro Baixo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3965",
        "Nome": "Coqueiros do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3966",
        "Nome": "Coronel Barros",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3967",
        "Nome": "Coronel Bicaco",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3968",
        "Nome": "Coronel Pilar",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3969",
        "Nome": "Cotiporã",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3970",
        "Nome": "Coxilha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3971",
        "Nome": "Crissiumal",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3972",
        "Nome": "Cristal",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3973",
        "Nome": "Cristal do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3974",
        "Nome": "Cruz Alta",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3975",
        "Nome": "Cruzaltense",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3976",
        "Nome": "Cruzeiro do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3977",
        "Nome": "David_cidade Canabarro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3978",
        "Nome": "Derrubadas",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3979",
        "Nome": "Dezesseis de Novembro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3980",
        "Nome": "Dilermando de Aguiar",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3981",
        "Nome": "Dois Irmãos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3982",
        "Nome": "Dois Irmãos das Missões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3983",
        "Nome": "Dois Lajeados",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3984",
        "Nome": "Dom Feliciano",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3985",
        "Nome": "Dom Pedrito",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3986",
        "Nome": "Dom Pedro de Alcântara",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3987",
        "Nome": "Dona Francisca",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3988",
        "Nome": "Doutor Maurício Cardoso",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3989",
        "Nome": "Doutor Ricardo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3990",
        "Nome": "Eldorado do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3991",
        "Nome": "Encantado",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3992",
        "Nome": "Encruzilhada do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3993",
        "Nome": "Engenho Velho",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3994",
        "Nome": "Entre Rios do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3995",
        "Nome": "Entre-Ijuís",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3996",
        "Nome": "Erebango",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3997",
        "Nome": "Erechim",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3998",
        "Nome": "Ernestina",
        "fk_estado": "23"
      },
      {
        "id_cidade": "3999",
        "Nome": "Erval Grande",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4000",
        "Nome": "Erval Seco",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4001",
        "Nome": "Esmeralda",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4002",
        "Nome": "Esperança do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4003",
        "Nome": "Espumoso",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4004",
        "Nome": "Estação",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4005",
        "Nome": "Estância Velha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4006",
        "Nome": "Esteio",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4007",
        "Nome": "Estrela",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4008",
        "Nome": "Estrela Velha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4009",
        "Nome": "Eugênio de Castro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4010",
        "Nome": "Fagundes Varela",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4011",
        "Nome": "Farroupilha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4012",
        "Nome": "Faxinal do Soturno",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4013",
        "Nome": "Faxinalzinho",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4014",
        "Nome": "Fazenda Vilanova",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4015",
        "Nome": "Feliz",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4016",
        "Nome": "Flores da Cunha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4017",
        "Nome": "Floriano Peixoto",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4018",
        "Nome": "Fontoura Xavier",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4019",
        "Nome": "Formigueiro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4020",
        "Nome": "Forquetinha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4021",
        "Nome": "Fortaleza dos Valos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4022",
        "Nome": "Frederico Westphalen",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4023",
        "Nome": "Garibaldi",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4024",
        "Nome": "Garruchos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4025",
        "Nome": "Gaurama",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4026",
        "Nome": "General Câmara",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4027",
        "Nome": "Gentil",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4028",
        "Nome": "Getúlio Vargas",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4029",
        "Nome": "Giruá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4030",
        "Nome": "Glorinha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4031",
        "Nome": "Gramado",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4032",
        "Nome": "Gramado dos Loureiros",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4033",
        "Nome": "Gramado Xavier",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4034",
        "Nome": "Gravataí",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4035",
        "Nome": "Guabiju",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4036",
        "Nome": "Guaíba",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4037",
        "Nome": "Guaporé",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4038",
        "Nome": "Guarani das Missões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4039",
        "Nome": "Harmonia",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4040",
        "Nome": "Herval",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4041",
        "Nome": "Herveiras",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4042",
        "Nome": "Horizontina",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4043",
        "Nome": "Hulha Negra",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4044",
        "Nome": "Humaitá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4045",
        "Nome": "Ibarama",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4046",
        "Nome": "Ibiaçá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4047",
        "Nome": "Ibiraiaras",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4048",
        "Nome": "Ibirapuitã",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4049",
        "Nome": "Ibirubá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4050",
        "Nome": "Igrejinha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4051",
        "Nome": "Ijuí",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4052",
        "Nome": "Ilópolis",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4053",
        "Nome": "Imbé",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4054",
        "Nome": "Imigrante",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4055",
        "Nome": "Independência",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4056",
        "Nome": "Inhacorá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4057",
        "Nome": "Ipê",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4058",
        "Nome": "Ipiranga do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4059",
        "Nome": "Iraí",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4060",
        "Nome": "Itaara",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4061",
        "Nome": "Itacurubi",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4062",
        "Nome": "Itapuca",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4063",
        "Nome": "Itaqui",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4064",
        "Nome": "Itati",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4065",
        "Nome": "Itatiba do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4066",
        "Nome": "Ivorá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4067",
        "Nome": "Ivoti",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4068",
        "Nome": "Jaboticaba",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4069",
        "Nome": "Jacuizinho",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4070",
        "Nome": "Jacutinga",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4071",
        "Nome": "Jaguarão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4072",
        "Nome": "Jaguari",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4073",
        "Nome": "Jaquirana",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4074",
        "Nome": "Jari",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4075",
        "Nome": "Jóia",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4076",
        "Nome": "Júlio de Castilhos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4077",
        "Nome": "Lagoa Bonita do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4078",
        "Nome": "Lagoa dos Três Cantos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4079",
        "Nome": "Lagoa Vermelha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4080",
        "Nome": "Lagoão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4081",
        "Nome": "Lajeado",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4082",
        "Nome": "Lajeado do Bugre",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4083",
        "Nome": "Lavras do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4084",
        "Nome": "Liberato Salzano",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4085",
        "Nome": "Lindolfo Collor",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4086",
        "Nome": "Linha Nova",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4087",
        "Nome": "Maçambara",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4088",
        "Nome": "Machadinho",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4089",
        "Nome": "Mampituba",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4090",
        "Nome": "Manoel Viana",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4091",
        "Nome": "Maquiné",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4092",
        "Nome": "Maratá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4093",
        "Nome": "Marau",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4094",
        "Nome": "Marcelino Ramos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4095",
        "Nome": "Mariana Pimentel",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4096",
        "Nome": "Mariano Moro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4097",
        "Nome": "Marques de Souza",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4098",
        "Nome": "Mata",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4099",
        "Nome": "Mato Castelhano",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4100",
        "Nome": "Mato Leitão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4101",
        "Nome": "Mato Queimado",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4102",
        "Nome": "Maximiliano de Almeid_cidadea",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4103",
        "Nome": "Minas do Leão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4104",
        "Nome": "Miraguaí",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4105",
        "Nome": "Montauri",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4106",
        "Nome": "Monte Alegre dos Campos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4107",
        "Nome": "Monte Belo do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4108",
        "Nome": "Montenegro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4109",
        "Nome": "Mormaço",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4110",
        "Nome": "Morrinhos do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4111",
        "Nome": "Morro Redondo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4112",
        "Nome": "Morro Reuter",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4113",
        "Nome": "Mostardas",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4114",
        "Nome": "Muçum",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4115",
        "Nome": "Muitos Capões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4116",
        "Nome": "Muliterno",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4117",
        "Nome": "Não-Me-Toque",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4118",
        "Nome": "Nicolau Vergueiro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4119",
        "Nome": "Nonoai",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4120",
        "Nome": "Nova Alvorada",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4121",
        "Nome": "Nova Araçá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4122",
        "Nome": "Nova Bassano",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4123",
        "Nome": "Nova Boa Vista",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4124",
        "Nome": "Nova Bréscia",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4125",
        "Nome": "Nova Candelária",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4126",
        "Nome": "Nova Esperança do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4127",
        "Nome": "Nova Hartz",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4128",
        "Nome": "Nova Pádua",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4129",
        "Nome": "Nova Palma",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4130",
        "Nome": "Nova Petrópolis",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4131",
        "Nome": "Nova Prata",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4132",
        "Nome": "Nova Ramada",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4133",
        "Nome": "Nova Roma do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4134",
        "Nome": "Nova Santa Rita",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4135",
        "Nome": "Novo Barreiro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4136",
        "Nome": "Novo Cabrais",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4137",
        "Nome": "Novo Hamburgo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4138",
        "Nome": "Novo Machado",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4139",
        "Nome": "Novo Tiradentes",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4140",
        "Nome": "Novo Xingu",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4141",
        "Nome": "Osório",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4142",
        "Nome": "Paim Filho",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4143",
        "Nome": "Palmares do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4144",
        "Nome": "Palmeira das Missões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4145",
        "Nome": "Palmitinho",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4146",
        "Nome": "Panambi",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4147",
        "Nome": "Pantano Grande",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4148",
        "Nome": "Paraí",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4149",
        "Nome": "Paraíso do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4150",
        "Nome": "Pareci Novo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4151",
        "Nome": "Parobé",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4152",
        "Nome": "Passa Sete",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4153",
        "Nome": "Passo do Sobrado",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4154",
        "Nome": "Passo Fundo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4155",
        "Nome": "Paulo Bento",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4156",
        "Nome": "Paverama",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4157",
        "Nome": "Pedras Altas",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4158",
        "Nome": "Pedro Osório",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4159",
        "Nome": "Pejuçara",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4160",
        "Nome": "Pelotas",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4161",
        "Nome": "Picada Café",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4162",
        "Nome": "Pinhal",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4163",
        "Nome": "Pinhal da Serra",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4164",
        "Nome": "Pinhal Grande",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4165",
        "Nome": "Pinheirinho do Vale",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4166",
        "Nome": "Pinheiro Machado",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4167",
        "Nome": "Pirapó",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4168",
        "Nome": "Piratini",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4169",
        "Nome": "Planalto",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4170",
        "Nome": "Poço das Antas",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4171",
        "Nome": "Pontão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4172",
        "Nome": "Ponte Preta",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4173",
        "Nome": "Portão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4174",
        "Nome": "Porto Alegre",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4175",
        "Nome": "Porto Lucena",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4176",
        "Nome": "Porto Mauá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4177",
        "Nome": "Porto Vera Cruz",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4178",
        "Nome": "Porto Xavier",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4179",
        "Nome": "Pouso Novo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4180",
        "Nome": "Presid_cidadeente Lucena",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4181",
        "Nome": "Progresso",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4182",
        "Nome": "Protásio Alves",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4183",
        "Nome": "Putinga",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4184",
        "Nome": "Quaraí",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4185",
        "Nome": "Quatro Irmãos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4186",
        "Nome": "Quevedos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4187",
        "Nome": "Quinze de Novembro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4188",
        "Nome": "Redentora",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4189",
        "Nome": "Relvado",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4190",
        "Nome": "Restinga Seca",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4191",
        "Nome": "Rio dos Índios",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4192",
        "Nome": "Rio Grande",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4193",
        "Nome": "Rio Pardo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4194",
        "Nome": "Riozinho",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4195",
        "Nome": "Roca Sales",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4196",
        "Nome": "Rodeio Bonito",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4197",
        "Nome": "Rolador",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4198",
        "Nome": "Rolante",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4199",
        "Nome": "Ronda Alta",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4200",
        "Nome": "Rondinha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4201",
        "Nome": "Roque Gonzales",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4202",
        "Nome": "Rosário do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4203",
        "Nome": "Sagrada Família",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4204",
        "Nome": "Saldanha Marinho",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4205",
        "Nome": "Salto do Jacuí",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4206",
        "Nome": "Salvador das Missões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4207",
        "Nome": "Salvador do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4208",
        "Nome": "Sananduva",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4209",
        "Nome": "Santa Bárbara do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4210",
        "Nome": "Santa Cecília do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4211",
        "Nome": "Santa Clara do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4212",
        "Nome": "Santa Cruz do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4213",
        "Nome": "Santa Margarid_cidadea do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4214",
        "Nome": "Santa Maria",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4215",
        "Nome": "Santa Maria do Herval",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4216",
        "Nome": "Santa Rosa",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4217",
        "Nome": "Santa Tereza",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4218",
        "Nome": "Santa Vitória do Palmar",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4219",
        "Nome": "Santana da Boa Vista",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4220",
        "Nome": "Santana do Livramento",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4221",
        "Nome": "Santiago",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4222",
        "Nome": "Santo Ângelo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4223",
        "Nome": "Santo Antônio da Patrulha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4224",
        "Nome": "Santo Antônio das Missões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4225",
        "Nome": "Santo Antônio do Palma",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4226",
        "Nome": "Santo Antônio do Planalto",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4227",
        "Nome": "Santo Augusto",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4228",
        "Nome": "Santo Cristo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4229",
        "Nome": "Santo Expedito do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4230",
        "Nome": "São Borja",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4231",
        "Nome": "São Domingos do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4232",
        "Nome": "São Francisco de Assis",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4233",
        "Nome": "São Francisco de Paula",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4234",
        "Nome": "São Gabriel",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4235",
        "Nome": "São Jerônimo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4236",
        "Nome": "São João da Urtiga",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4237",
        "Nome": "São João do Polêsine",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4238",
        "Nome": "São Jorge",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4239",
        "Nome": "São José das Missões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4240",
        "Nome": "São José do Herval",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4241",
        "Nome": "São José do Hortêncio",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4242",
        "Nome": "São José do Inhacorá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4243",
        "Nome": "São José do Norte",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4244",
        "Nome": "São José do Ouro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4245",
        "Nome": "São José do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4246",
        "Nome": "São José dos Ausentes",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4247",
        "Nome": "São Leopoldo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4248",
        "Nome": "São Lourenço do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4249",
        "Nome": "São Luiz Gonzaga",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4250",
        "Nome": "São Marcos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4251",
        "Nome": "São Martinho",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4252",
        "Nome": "São Martinho da Serra",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4253",
        "Nome": "São Miguel das Missões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4254",
        "Nome": "São Nicolau",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4255",
        "Nome": "São Paulo das Missões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4256",
        "Nome": "São Pedro da Serra",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4257",
        "Nome": "São Pedro das Missões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4258",
        "Nome": "São Pedro do Butiá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4259",
        "Nome": "São Pedro do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4260",
        "Nome": "São Sebastião do Caí",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4261",
        "Nome": "São Sepé",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4262",
        "Nome": "São Valentim",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4263",
        "Nome": "São Valentim do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4264",
        "Nome": "São Valério do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4265",
        "Nome": "São Vendelino",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4266",
        "Nome": "São Vicente do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4267",
        "Nome": "Sapiranga",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4268",
        "Nome": "Sapucaia do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4269",
        "Nome": "Sarandi",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4270",
        "Nome": "Seberi",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4271",
        "Nome": "Sede Nova",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4272",
        "Nome": "Segredo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4273",
        "Nome": "Selbach",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4274",
        "Nome": "Senador Salgado Filho",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4275",
        "Nome": "Sentinela do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4276",
        "Nome": "Serafina Corrêa",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4277",
        "Nome": "Sério",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4278",
        "Nome": "Sertão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4279",
        "Nome": "Sertão Santana",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4280",
        "Nome": "Sete de Setembro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4281",
        "Nome": "Severiano de Almeid_cidadea",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4282",
        "Nome": "Silveira Martins",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4283",
        "Nome": "Sinimbu",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4284",
        "Nome": "Sobradinho",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4285",
        "Nome": "Soledade",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4286",
        "Nome": "Tabaí",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4287",
        "Nome": "Tapejara",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4288",
        "Nome": "Tapera",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4289",
        "Nome": "Tapes",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4290",
        "Nome": "Taquara",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4291",
        "Nome": "Taquari",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4292",
        "Nome": "Taquaruçu do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4293",
        "Nome": "Tavares",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4294",
        "Nome": "Tenente Portela",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4295",
        "Nome": "Terra de Areia",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4296",
        "Nome": "Teutônia",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4297",
        "Nome": "Tio Hugo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4298",
        "Nome": "Tiradentes do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4299",
        "Nome": "Toropi",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4300",
        "Nome": "Torres",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4301",
        "Nome": "Tramandaí",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4302",
        "Nome": "Travesseiro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4303",
        "Nome": "Três Arroios",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4304",
        "Nome": "Três Cachoeiras",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4305",
        "Nome": "Três Coroas",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4306",
        "Nome": "Três de Maio",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4307",
        "Nome": "Três Forquilhas",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4308",
        "Nome": "Três Palmeiras",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4309",
        "Nome": "Três Passos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4310",
        "Nome": "Trindade do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4311",
        "Nome": "Triunfo",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4312",
        "Nome": "Tucunduva",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4313",
        "Nome": "Tunas",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4314",
        "Nome": "Tupanci do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4315",
        "Nome": "Tupanciretã",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4316",
        "Nome": "Tupandi",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4317",
        "Nome": "Tuparendi",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4318",
        "Nome": "Turuçu",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4319",
        "Nome": "Ubiretama",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4320",
        "Nome": "União da Serra",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4321",
        "Nome": "Unistalda",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4322",
        "Nome": "Uruguaiana",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4323",
        "Nome": "Vacaria",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4324",
        "Nome": "Vale do Sol",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4325",
        "Nome": "Vale Real",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4326",
        "Nome": "Vale Verde",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4327",
        "Nome": "Vanini",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4328",
        "Nome": "Venâncio Aires",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4329",
        "Nome": "Vera Cruz",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4330",
        "Nome": "Veranópolis",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4331",
        "Nome": "Vespasiano Correa",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4332",
        "Nome": "Viadutos",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4333",
        "Nome": "Viamão",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4334",
        "Nome": "Vicente Dutra",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4335",
        "Nome": "Victor Graeff",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4336",
        "Nome": "Vila Flores",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4337",
        "Nome": "Vila Lângaro",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4338",
        "Nome": "Vila Maria",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4339",
        "Nome": "Vila Nova do Sul",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4340",
        "Nome": "Vista Alegre",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4341",
        "Nome": "Vista Alegre do Prata",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4342",
        "Nome": "Vista Gaúcha",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4343",
        "Nome": "Vitória das Missões",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4344",
        "Nome": "Westfália",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4345",
        "Nome": "Xangri-lá",
        "fk_estado": "23"
      },
      {
        "id_cidade": "4346",
        "Nome": "Alta Floresta d`Oeste",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4347",
        "Nome": "Alto Alegre dos Parecis",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4348",
        "Nome": "Alto Paraíso",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4349",
        "Nome": "Alvorada d`Oeste",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4350",
        "Nome": "Ariquemes",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4351",
        "Nome": "Buritis",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4352",
        "Nome": "Cabixi",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4353",
        "Nome": "Cacaulândia",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4354",
        "Nome": "Cacoal",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4355",
        "Nome": "Campo Novo de Rondônia",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4356",
        "Nome": "Candeias do Jamari",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4357",
        "Nome": "Castanheiras",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4358",
        "Nome": "Cerejeiras",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4359",
        "Nome": "Chupinguaia",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4360",
        "Nome": "Colorado do Oeste",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4361",
        "Nome": "Corumbiara",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4362",
        "Nome": "Costa Marques",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4363",
        "Nome": "Cujubim",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4364",
        "Nome": "Espigão d`Oeste",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4365",
        "Nome": "Governador Jorge Teixeira",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4366",
        "Nome": "Guajará-Mirim",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4367",
        "Nome": "Itapuã do Oeste",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4368",
        "Nome": "Jaru",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4369",
        "Nome": "Ji-Paraná",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4370",
        "Nome": "Machadinho d`Oeste",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4371",
        "Nome": "Ministro Andreazza",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4372",
        "Nome": "Mirante da Serra",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4373",
        "Nome": "Monte Negro",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4374",
        "Nome": "Nova Brasilândia d`Oeste",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4375",
        "Nome": "Nova Mamoré",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4376",
        "Nome": "Nova União",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4377",
        "Nome": "Novo Horizonte do Oeste",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4378",
        "Nome": "Ouro Preto do Oeste",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4379",
        "Nome": "Parecis",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4380",
        "Nome": "Pimenta Bueno",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4381",
        "Nome": "Pimenteiras do Oeste",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4382",
        "Nome": "Porto Velho",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4383",
        "Nome": "Presid_cidadeente Médici",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4384",
        "Nome": "Primavera de Rondônia",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4385",
        "Nome": "Rio Crespo",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4386",
        "Nome": "Rolim de Moura",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4387",
        "Nome": "Santa Luzia d`Oeste",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4388",
        "Nome": "São Felipe d`Oeste",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4389",
        "Nome": "São Francisco do Guaporé",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4390",
        "Nome": "São Miguel do Guaporé",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4391",
        "Nome": "Seringueiras",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4392",
        "Nome": "Teixeirópolis",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4393",
        "Nome": "Theobroma",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4394",
        "Nome": "Urupá",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4395",
        "Nome": "Vale do Anari",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4396",
        "Nome": "Vale do Paraíso",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4397",
        "Nome": "Vilhena",
        "fk_estado": "21"
      },
      {
        "id_cidade": "4398",
        "Nome": "Alto Alegre",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4399",
        "Nome": "Amajari",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4400",
        "Nome": "Boa Vista",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4401",
        "Nome": "Bonfim",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4402",
        "Nome": "Cantá",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4403",
        "Nome": "Caracaraí",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4404",
        "Nome": "Caroebe",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4405",
        "Nome": "Iracema",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4406",
        "Nome": "Mucajaí",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4407",
        "Nome": "Normandia",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4408",
        "Nome": "Pacaraima",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4409",
        "Nome": "Rorainópolis",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4410",
        "Nome": "São João da Baliza",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4411",
        "Nome": "São Luiz",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4412",
        "Nome": "Uiramutã",
        "fk_estado": "22"
      },
      {
        "id_cidade": "4413",
        "Nome": "Abdon Batista",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4414",
        "Nome": "Abelardo Luz",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4415",
        "Nome": "Agrolândia",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4416",
        "Nome": "Agronômica",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4417",
        "Nome": "Água Doce",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4418",
        "Nome": "Águas de Chapecó",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4419",
        "Nome": "Águas Frias",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4420",
        "Nome": "Águas Mornas",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4421",
        "Nome": "Alfredo Wagner",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4422",
        "Nome": "Alto Bela Vista",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4423",
        "Nome": "Anchieta",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4424",
        "Nome": "Angelina",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4425",
        "Nome": "Anita Garibaldi",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4426",
        "Nome": "Anitápolis",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4427",
        "Nome": "Antônio Carlos",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4428",
        "Nome": "Apiúna",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4429",
        "Nome": "Arabutã",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4430",
        "Nome": "Araquari",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4431",
        "Nome": "Araranguá",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4432",
        "Nome": "Armazém",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4433",
        "Nome": "Arroio Trinta",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4434",
        "Nome": "Arvoredo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4435",
        "Nome": "Ascurra",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4436",
        "Nome": "Atalanta",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4437",
        "Nome": "Aurora",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4438",
        "Nome": "Balneário Arroio do Silva",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4439",
        "Nome": "Balneário Barra do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4440",
        "Nome": "Balneário Camboriú",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4441",
        "Nome": "Balneário Gaivota",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4442",
        "Nome": "Bandeirante",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4443",
        "Nome": "Barra Bonita",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4444",
        "Nome": "Barra Velha",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4445",
        "Nome": "Bela Vista do Toldo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4446",
        "Nome": "Belmonte",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4447",
        "Nome": "Benedito Novo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4448",
        "Nome": "Biguaçu",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4449",
        "Nome": "Blumenau",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4450",
        "Nome": "Bocaina do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4451",
        "Nome": "Bom Jardim da Serra",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4452",
        "Nome": "Bom Jesus",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4453",
        "Nome": "Bom Jesus do Oeste",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4454",
        "Nome": "Bom Retiro",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4455",
        "Nome": "Bombinhas",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4456",
        "Nome": "Botuverá",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4457",
        "Nome": "Braço do Norte",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4458",
        "Nome": "Braço do Trombudo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4459",
        "Nome": "Brunópolis",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4460",
        "Nome": "Brusque",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4461",
        "Nome": "Caçador",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4462",
        "Nome": "Caibi",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4463",
        "Nome": "Calmon",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4464",
        "Nome": "Camboriú",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4465",
        "Nome": "Campo Alegre",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4466",
        "Nome": "Campo Belo do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4467",
        "Nome": "Campo Erê",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4468",
        "Nome": "Campos Novos",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4469",
        "Nome": "Canelinha",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4470",
        "Nome": "Canoinhas",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4471",
        "Nome": "Capão Alto",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4472",
        "Nome": "Capinzal",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4473",
        "Nome": "Capivari de Baixo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4474",
        "Nome": "Catanduvas",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4475",
        "Nome": "Caxambu do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4476",
        "Nome": "Celso Ramos",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4477",
        "Nome": "Cerro Negro",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4478",
        "Nome": "Chapadão do Lageado",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4479",
        "Nome": "Chapecó",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4480",
        "Nome": "Cocal do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4481",
        "Nome": "Concórdia",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4482",
        "Nome": "Cordilheira Alta",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4483",
        "Nome": "Coronel Freitas",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4484",
        "Nome": "Coronel Martins",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4485",
        "Nome": "Correia Pinto",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4486",
        "Nome": "Corupá",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4487",
        "Nome": "Criciúma",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4488",
        "Nome": "Cunha Porã",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4489",
        "Nome": "Cunhataí",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4490",
        "Nome": "Curitibanos",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4491",
        "Nome": "Descanso",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4492",
        "Nome": "Dionísio Cerqueira",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4493",
        "Nome": "Dona Emma",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4494",
        "Nome": "Doutor Pedrinho",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4495",
        "Nome": "Entre Rios",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4496",
        "Nome": "Ermo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4497",
        "Nome": "Erval Velho",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4498",
        "Nome": "Faxinal dos Guedes",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4499",
        "Nome": "Flor do Sertão",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4500",
        "Nome": "Florianópolis",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4501",
        "Nome": "Formosa do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4502",
        "Nome": "Forquilhinha",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4503",
        "Nome": "Fraiburgo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4504",
        "Nome": "Frei Rogério",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4505",
        "Nome": "Galvão",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4506",
        "Nome": "Garopaba",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4507",
        "Nome": "Garuva",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4508",
        "Nome": "Gaspar",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4509",
        "Nome": "Governador Celso Ramos",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4510",
        "Nome": "Grão Pará",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4511",
        "Nome": "Gravatal",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4512",
        "Nome": "Guabiruba",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4513",
        "Nome": "Guaraciaba",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4514",
        "Nome": "Guaramirim",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4515",
        "Nome": "Guarujá do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4516",
        "Nome": "Guatambú",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4517",
        "Nome": "Herval d`Oeste",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4518",
        "Nome": "Ibiam",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4519",
        "Nome": "Ibicaré",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4520",
        "Nome": "Ibirama",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4521",
        "Nome": "Içara",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4522",
        "Nome": "Ilhota",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4523",
        "Nome": "Imaruí",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4524",
        "Nome": "Imbituba",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4525",
        "Nome": "Imbuia",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4526",
        "Nome": "Indaial",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4527",
        "Nome": "Iomerê",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4528",
        "Nome": "Ipira",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4529",
        "Nome": "Iporã do Oeste",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4530",
        "Nome": "Ipuaçu",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4531",
        "Nome": "Ipumirim",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4532",
        "Nome": "Iraceminha",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4533",
        "Nome": "Irani",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4534",
        "Nome": "Irati",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4535",
        "Nome": "Irineópolis",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4536",
        "Nome": "Itá",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4537",
        "Nome": "Itaiópolis",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4538",
        "Nome": "Itajaí",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4539",
        "Nome": "Itapema",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4540",
        "Nome": "Itapiranga",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4541",
        "Nome": "Itapoá",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4542",
        "Nome": "Ituporanga",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4543",
        "Nome": "Jaborá",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4544",
        "Nome": "Jacinto Machado",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4545",
        "Nome": "Jaguaruna",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4546",
        "Nome": "Jaraguá do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4547",
        "Nome": "Jardinópolis",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4548",
        "Nome": "Joaçaba",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4549",
        "Nome": "Joinville",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4550",
        "Nome": "José Boiteux",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4551",
        "Nome": "Jupiá",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4552",
        "Nome": "Lacerdópolis",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4553",
        "Nome": "Lages",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4554",
        "Nome": "Laguna",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4555",
        "Nome": "Lajeado Grande",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4556",
        "Nome": "Laurentino",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4557",
        "Nome": "Lauro Muller",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4558",
        "Nome": "Lebon Régis",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4559",
        "Nome": "Leoberto Leal",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4560",
        "Nome": "Lindóia do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4561",
        "Nome": "Lontras",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4562",
        "Nome": "Luiz Alves",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4563",
        "Nome": "Luzerna",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4564",
        "Nome": "Macieira",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4565",
        "Nome": "Mafra",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4566",
        "Nome": "Major Gercino",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4567",
        "Nome": "Major Vieira",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4568",
        "Nome": "Maracajá",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4569",
        "Nome": "Maravilha",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4570",
        "Nome": "Marema",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4571",
        "Nome": "Massaranduba",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4572",
        "Nome": "Matos Costa",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4573",
        "Nome": "Meleiro",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4574",
        "Nome": "Mirim Doce",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4575",
        "Nome": "Modelo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4576",
        "Nome": "Mondaí",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4577",
        "Nome": "Monte Carlo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4578",
        "Nome": "Monte Castelo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4579",
        "Nome": "Morro da Fumaça",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4580",
        "Nome": "Morro Grande",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4581",
        "Nome": "Navegantes",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4582",
        "Nome": "Nova Erechim",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4583",
        "Nome": "Nova Itaberaba",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4584",
        "Nome": "Nova Trento",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4585",
        "Nome": "Nova Veneza",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4586",
        "Nome": "Novo Horizonte",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4587",
        "Nome": "Orleans",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4588",
        "Nome": "Otacílio Costa",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4589",
        "Nome": "Ouro",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4590",
        "Nome": "Ouro Verde",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4591",
        "Nome": "Paial",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4592",
        "Nome": "Painel",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4593",
        "Nome": "Palhoça",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4594",
        "Nome": "Palma Sola",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4595",
        "Nome": "Palmeira",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4596",
        "Nome": "Palmitos",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4597",
        "Nome": "Papanduva",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4598",
        "Nome": "Paraíso",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4599",
        "Nome": "Passo de Torres",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4600",
        "Nome": "Passos Maia",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4601",
        "Nome": "Paulo Lopes",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4602",
        "Nome": "Pedras Grandes",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4603",
        "Nome": "Penha",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4604",
        "Nome": "Peritiba",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4605",
        "Nome": "Petrolândia",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4606",
        "Nome": "Piçarras",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4607",
        "Nome": "Pinhalzinho",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4608",
        "Nome": "Pinheiro Preto",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4609",
        "Nome": "Piratuba",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4610",
        "Nome": "Planalto Alegre",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4611",
        "Nome": "Pomerode",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4612",
        "Nome": "Ponte Alta",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4613",
        "Nome": "Ponte Alta do Norte",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4614",
        "Nome": "Ponte Serrada",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4615",
        "Nome": "Porto Belo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4616",
        "Nome": "Porto União",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4617",
        "Nome": "Pouso Redondo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4618",
        "Nome": "Praia Grande",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4619",
        "Nome": "Presid_cidadeente Castelo Branco",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4620",
        "Nome": "Presid_cidadeente Getúlio",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4621",
        "Nome": "Presid_cidadeente Nereu",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4622",
        "Nome": "Princesa",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4623",
        "Nome": "Quilombo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4624",
        "Nome": "Rancho Queimado",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4625",
        "Nome": "Rio das Antas",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4626",
        "Nome": "Rio do Campo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4627",
        "Nome": "Rio do Oeste",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4628",
        "Nome": "Rio do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4629",
        "Nome": "Rio dos Cedros",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4630",
        "Nome": "Rio Fortuna",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4631",
        "Nome": "Rio Negrinho",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4632",
        "Nome": "Rio Rufino",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4633",
        "Nome": "Riqueza",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4634",
        "Nome": "Rodeio",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4635",
        "Nome": "Romelândia",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4636",
        "Nome": "Salete",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4637",
        "Nome": "Saltinho",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4638",
        "Nome": "Salto Veloso",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4639",
        "Nome": "Sangão",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4640",
        "Nome": "Santa Cecília",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4641",
        "Nome": "Santa Helena",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4642",
        "Nome": "Santa Rosa de Lima",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4643",
        "Nome": "Santa Rosa do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4644",
        "Nome": "Santa Terezinha",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4645",
        "Nome": "Santa Terezinha do Progresso",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4646",
        "Nome": "Santiago do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4647",
        "Nome": "Santo Amaro da Imperatriz",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4648",
        "Nome": "São Bento do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4649",
        "Nome": "São Bernardino",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4650",
        "Nome": "São Bonifácio",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4651",
        "Nome": "São Carlos",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4652",
        "Nome": "São Cristovão do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4653",
        "Nome": "São Domingos",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4654",
        "Nome": "São Francisco do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4655",
        "Nome": "São João Batista",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4656",
        "Nome": "São João do Itaperiú",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4657",
        "Nome": "São João do Oeste",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4658",
        "Nome": "São João do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4659",
        "Nome": "São Joaquim",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4660",
        "Nome": "São José",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4661",
        "Nome": "São José do Cedro",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4662",
        "Nome": "São José do Cerrito",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4663",
        "Nome": "São Lourenço do Oeste",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4664",
        "Nome": "São Ludgero",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4665",
        "Nome": "São Martinho",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4666",
        "Nome": "São Miguel da Boa Vista",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4667",
        "Nome": "São Miguel do Oeste",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4668",
        "Nome": "São Pedro de Alcântara",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4669",
        "Nome": "Saudades",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4670",
        "Nome": "Schroeder",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4671",
        "Nome": "Seara",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4672",
        "Nome": "Serra Alta",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4673",
        "Nome": "Sid_cidadeerópolis",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4674",
        "Nome": "Sombrio",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4675",
        "Nome": "Sul Brasil",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4676",
        "Nome": "Taió",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4677",
        "Nome": "Tangará",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4678",
        "Nome": "Tigrinhos",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4679",
        "Nome": "Tijucas",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4680",
        "Nome": "Timbé do Sul",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4681",
        "Nome": "Timbó",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4682",
        "Nome": "Timbó Grande",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4683",
        "Nome": "Três Barras",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4684",
        "Nome": "Treviso",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4685",
        "Nome": "Treze de Maio",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4686",
        "Nome": "Treze Tílias",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4687",
        "Nome": "Trombudo Central",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4688",
        "Nome": "Tubarão",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4689",
        "Nome": "Tunápolis",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4690",
        "Nome": "Turvo",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4691",
        "Nome": "União do Oeste",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4692",
        "Nome": "Urubici",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4693",
        "Nome": "Urupema",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4694",
        "Nome": "Urussanga",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4695",
        "Nome": "Vargeão",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4696",
        "Nome": "Vargem",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4697",
        "Nome": "Vargem Bonita",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4698",
        "Nome": "Vid_cidadeal Ramos",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4699",
        "Nome": "Vid_cidadeeira",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4700",
        "Nome": "Vitor Meireles",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4701",
        "Nome": "Witmarsum",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4702",
        "Nome": "Xanxerê",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4703",
        "Nome": "Xavantina",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4704",
        "Nome": "Xaxim",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4705",
        "Nome": "Zortéa",
        "fk_estado": "24"
      },
      {
        "id_cidade": "4706",
        "Nome": "Adamantina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4707",
        "Nome": "Adolfo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4708",
        "Nome": "Aguaí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4709",
        "Nome": "Águas da Prata",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4710",
        "Nome": "Águas de Lindóia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4711",
        "Nome": "Águas de Santa Bárbara",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4712",
        "Nome": "Águas de São Pedro",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4713",
        "Nome": "Agudos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4714",
        "Nome": "Alambari",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4715",
        "Nome": "Alfredo Marcondes",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4716",
        "Nome": "Altair",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4717",
        "Nome": "Altinópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4718",
        "Nome": "Alto Alegre",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4719",
        "Nome": "Alumínio",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4720",
        "Nome": "Álvares Florence",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4721",
        "Nome": "Álvares Machado",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4722",
        "Nome": "Álvaro de Carvalho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4723",
        "Nome": "Alvinlândia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4724",
        "Nome": "Americana",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4725",
        "Nome": "Américo Brasiliense",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4726",
        "Nome": "Américo de Campos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4727",
        "Nome": "Amparo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4728",
        "Nome": "Analândia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4729",
        "Nome": "Andradina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4730",
        "Nome": "Angatuba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4731",
        "Nome": "Anhembi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4732",
        "Nome": "Anhumas",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4733",
        "Nome": "Aparecid_cidadea",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4734",
        "Nome": "Aparecid_cidadea d`Oeste",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4735",
        "Nome": "Apiaí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4736",
        "Nome": "Araçariguama",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4737",
        "Nome": "Araçatuba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4738",
        "Nome": "Araçoiaba da Serra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4739",
        "Nome": "Aramina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4740",
        "Nome": "Arandu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4741",
        "Nome": "Arapeí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4742",
        "Nome": "Araraquara",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4743",
        "Nome": "Araras",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4744",
        "Nome": "Arco-Íris",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4745",
        "Nome": "Arealva",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4746",
        "Nome": "Areias",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4747",
        "Nome": "Areiópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4748",
        "Nome": "Ariranha",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4749",
        "Nome": "Artur Nogueira",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4750",
        "Nome": "Arujá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4751",
        "Nome": "Aspásia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4752",
        "Nome": "Assis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4753",
        "Nome": "Atibaia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4754",
        "Nome": "Auriflama",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4755",
        "Nome": "Avaí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4756",
        "Nome": "Avanhandava",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4757",
        "Nome": "Avaré",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4758",
        "Nome": "Bady Bassitt",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4759",
        "Nome": "Balbinos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4760",
        "Nome": "Bálsamo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4761",
        "Nome": "Bananal",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4762",
        "Nome": "Barão de Antonina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4763",
        "Nome": "Barbosa",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4764",
        "Nome": "Bariri",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4765",
        "Nome": "Barra Bonita",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4766",
        "Nome": "Barra do Chapéu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4767",
        "Nome": "Barra do Turvo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4768",
        "Nome": "Barretos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4769",
        "Nome": "Barrinha",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4770",
        "Nome": "Barueri",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4771",
        "Nome": "Bastos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4772",
        "Nome": "Batatais",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4773",
        "Nome": "Bauru",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4774",
        "Nome": "Bebedouro",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4775",
        "Nome": "Bento de Abreu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4776",
        "Nome": "Bernardino de Campos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4777",
        "Nome": "Bertioga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4778",
        "Nome": "Bilac",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4779",
        "Nome": "Birigui",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4780",
        "Nome": "Biritiba-Mirim",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4781",
        "Nome": "Boa Esperança do Sul",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4782",
        "Nome": "Bocaina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4783",
        "Nome": "Bofete",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4784",
        "Nome": "Boituva",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4785",
        "Nome": "Bom Jesus dos Perdões",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4786",
        "Nome": "Bom Sucesso de Itararé",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4787",
        "Nome": "Borá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4788",
        "Nome": "Boracéia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4789",
        "Nome": "Borborema",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4790",
        "Nome": "Borebi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4791",
        "Nome": "Botucatu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4792",
        "Nome": "Bragança Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4793",
        "Nome": "Braúna",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4794",
        "Nome": "Brejo Alegre",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4795",
        "Nome": "Brodowski",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4796",
        "Nome": "Brotas",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4797",
        "Nome": "Buri",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4798",
        "Nome": "Buritama",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4799",
        "Nome": "Buritizal",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4800",
        "Nome": "Cabrália Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4801",
        "Nome": "Cabreúva",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4802",
        "Nome": "Caçapava",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4803",
        "Nome": "Cachoeira Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4804",
        "Nome": "Caconde",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4805",
        "Nome": "Cafelândia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4806",
        "Nome": "Caiabu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4807",
        "Nome": "Caieiras",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4808",
        "Nome": "Caiuá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4809",
        "Nome": "Cajamar",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4810",
        "Nome": "Cajati",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4811",
        "Nome": "Cajobi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4812",
        "Nome": "Cajuru",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4813",
        "Nome": "Campina do Monte Alegre",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4814",
        "Nome": "Campinas",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4815",
        "Nome": "Campo Limpo Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4816",
        "Nome": "Campos do Jordão",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4817",
        "Nome": "Campos Novos Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4818",
        "Nome": "Cananéia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4819",
        "Nome": "Canas",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4820",
        "Nome": "Cândid_cidadeo Mota",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4821",
        "Nome": "Cândid_cidadeo Rodrigues",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4822",
        "Nome": "Canitar",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4823",
        "Nome": "Capão Bonito",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4824",
        "Nome": "Capela do Alto",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4825",
        "Nome": "Capivari",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4826",
        "Nome": "Caraguatatuba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4827",
        "Nome": "Carapicuíba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4828",
        "Nome": "Cardoso",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4829",
        "Nome": "Casa Branca",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4830",
        "Nome": "Cássia dos Coqueiros",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4831",
        "Nome": "Castilho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4832",
        "Nome": "Catanduva",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4833",
        "Nome": "Catiguá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4834",
        "Nome": "Cedral",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4835",
        "Nome": "Cerqueira César",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4836",
        "Nome": "Cerquilho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4837",
        "Nome": "Cesário Lange",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4838",
        "Nome": "Charqueada",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4839",
        "Nome": "Chavantes",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4840",
        "Nome": "Clementina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4841",
        "Nome": "Colina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4842",
        "Nome": "Colômbia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4843",
        "Nome": "Conchal",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4844",
        "Nome": "Conchas",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4845",
        "Nome": "Cordeirópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4846",
        "Nome": "Coroados",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4847",
        "Nome": "Coronel Macedo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4848",
        "Nome": "Corumbataí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4849",
        "Nome": "Cosmópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4850",
        "Nome": "Cosmorama",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4851",
        "Nome": "Cotia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4852",
        "Nome": "Cravinhos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4853",
        "Nome": "Cristais Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4854",
        "Nome": "Cruzália",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4855",
        "Nome": "Cruzeiro",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4856",
        "Nome": "Cubatão",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4857",
        "Nome": "Cunha",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4858",
        "Nome": "Descalvado",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4859",
        "Nome": "Diadema",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4860",
        "Nome": "Dirce Reis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4861",
        "Nome": "Divinolândia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4862",
        "Nome": "Dobrada",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4863",
        "Nome": "Dois Córregos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4864",
        "Nome": "Dolcinópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4865",
        "Nome": "Dourado",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4866",
        "Nome": "Dracena",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4867",
        "Nome": "Duartina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4868",
        "Nome": "Dumont",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4869",
        "Nome": "Echaporã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4870",
        "Nome": "Eldorado",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4871",
        "Nome": "Elias Fausto",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4872",
        "Nome": "Elisiário",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4873",
        "Nome": "Embaúba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4874",
        "Nome": "Embu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4875",
        "Nome": "Embu-Guaçu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4876",
        "Nome": "Emilianópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4877",
        "Nome": "Engenheiro Coelho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4878",
        "Nome": "Espírito Santo do Pinhal",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4879",
        "Nome": "Espírito Santo do Turvo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4880",
        "Nome": "Estiva Gerbi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4881",
        "Nome": "Estrela d`Oeste",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4882",
        "Nome": "Estrela do Norte",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4883",
        "Nome": "Euclid_cidadees da Cunha Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4884",
        "Nome": "Fartura",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4885",
        "Nome": "Fernando Prestes",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4886",
        "Nome": "Fernandópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4887",
        "Nome": "Fernão",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4888",
        "Nome": "Ferraz de Vasconcelos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4889",
        "Nome": "Flora Rica",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4890",
        "Nome": "Floreal",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4891",
        "Nome": "Flórid_cidadea Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4892",
        "Nome": "Florínia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4893",
        "Nome": "Franca",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4894",
        "Nome": "Francisco Morato",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4895",
        "Nome": "Franco da Rocha",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4896",
        "Nome": "Gabriel Monteiro",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4897",
        "Nome": "Gália",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4898",
        "Nome": "Garça",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4899",
        "Nome": "Gastão Vid_cidadeigal",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4900",
        "Nome": "Gavião Peixoto",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4901",
        "Nome": "General Salgado",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4902",
        "Nome": "Getulina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4903",
        "Nome": "Glicério",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4904",
        "Nome": "Guaiçara",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4905",
        "Nome": "Guaimbê",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4906",
        "Nome": "Guaíra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4907",
        "Nome": "Guapiaçu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4908",
        "Nome": "Guapiara",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4909",
        "Nome": "Guará",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4910",
        "Nome": "Guaraçaí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4911",
        "Nome": "Guaraci",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4912",
        "Nome": "Guarani d`Oeste",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4913",
        "Nome": "Guarantã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4914",
        "Nome": "Guararapes",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4915",
        "Nome": "Guararema",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4916",
        "Nome": "Guaratinguetá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4917",
        "Nome": "Guareí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4918",
        "Nome": "Guariba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4919",
        "Nome": "Guarujá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4920",
        "Nome": "Guarulhos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4921",
        "Nome": "Guatapará",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4922",
        "Nome": "Guzolândia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4923",
        "Nome": "Herculândia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4924",
        "Nome": "Holambra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4925",
        "Nome": "Hortolândia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4926",
        "Nome": "Iacanga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4927",
        "Nome": "Iacri",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4928",
        "Nome": "Iaras",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4929",
        "Nome": "Ibaté",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4930",
        "Nome": "Ibirá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4931",
        "Nome": "Ibirarema",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4932",
        "Nome": "Ibitinga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4933",
        "Nome": "Ibiúna",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4934",
        "Nome": "Icém",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4935",
        "Nome": "Iepê",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4936",
        "Nome": "Igaraçu do Tietê",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4937",
        "Nome": "Igarapava",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4938",
        "Nome": "Igaratá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4939",
        "Nome": "Iguape",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4940",
        "Nome": "Ilha Comprid_cidadea",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4941",
        "Nome": "Ilha Solteira",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4942",
        "Nome": "Ilhabela",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4943",
        "Nome": "Indaiatuba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4944",
        "Nome": "Indiana",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4945",
        "Nome": "Indiaporã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4946",
        "Nome": "Inúbia Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4947",
        "Nome": "Ipaussu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4948",
        "Nome": "Iperó",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4949",
        "Nome": "Ipeúna",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4950",
        "Nome": "Ipiguá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4951",
        "Nome": "Iporanga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4952",
        "Nome": "Ipuã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4953",
        "Nome": "Iracemápolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4954",
        "Nome": "Irapuã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4955",
        "Nome": "Irapuru",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4956",
        "Nome": "Itaberá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4957",
        "Nome": "Itaí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4958",
        "Nome": "Itajobi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4959",
        "Nome": "Itaju",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4960",
        "Nome": "Itanhaém",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4961",
        "Nome": "Itaóca",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4962",
        "Nome": "Itapecerica da Serra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4963",
        "Nome": "Itapetininga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4964",
        "Nome": "Itapeva",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4965",
        "Nome": "Itapevi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4966",
        "Nome": "Itapira",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4967",
        "Nome": "Itapirapuã Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4968",
        "Nome": "Itápolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4969",
        "Nome": "Itaporanga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4970",
        "Nome": "Itapuí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4971",
        "Nome": "Itapura",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4972",
        "Nome": "Itaquaquecetuba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4973",
        "Nome": "Itararé",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4974",
        "Nome": "Itariri",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4975",
        "Nome": "Itatiba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4976",
        "Nome": "Itatinga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4977",
        "Nome": "Itirapina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4978",
        "Nome": "Itirapuã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4979",
        "Nome": "Itobi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4980",
        "Nome": "Itu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4981",
        "Nome": "Itupeva",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4982",
        "Nome": "Ituverava",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4983",
        "Nome": "Jaborandi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4984",
        "Nome": "Jaboticabal",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4985",
        "Nome": "Jacareí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4986",
        "Nome": "Jaci",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4987",
        "Nome": "Jacupiranga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4988",
        "Nome": "Jaguariúna",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4989",
        "Nome": "Jales",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4990",
        "Nome": "Jambeiro",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4991",
        "Nome": "Jandira",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4992",
        "Nome": "Jardinópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4993",
        "Nome": "Jarinu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4994",
        "Nome": "Jaú",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4995",
        "Nome": "Jeriquara",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4996",
        "Nome": "Joanópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4997",
        "Nome": "João Ramalho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4998",
        "Nome": "José Bonifácio",
        "fk_estado": "26"
      },
      {
        "id_cidade": "4999",
        "Nome": "Júlio Mesquita",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5000",
        "Nome": "Jumirim",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5001",
        "Nome": "Jundiaí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5002",
        "Nome": "Junqueirópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5003",
        "Nome": "Juquiá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5004",
        "Nome": "Juquitiba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5005",
        "Nome": "Lagoinha",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5006",
        "Nome": "Laranjal Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5007",
        "Nome": "Lavínia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5008",
        "Nome": "Lavrinhas",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5009",
        "Nome": "Leme",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5010",
        "Nome": "Lençóis Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5011",
        "Nome": "Limeira",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5012",
        "Nome": "Lindóia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5013",
        "Nome": "Lins",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5014",
        "Nome": "Lorena",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5015",
        "Nome": "Lourdes",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5016",
        "Nome": "Louveira",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5017",
        "Nome": "Lucélia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5018",
        "Nome": "Lucianópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5019",
        "Nome": "Luís Antônio",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5020",
        "Nome": "Luiziânia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5021",
        "Nome": "Lupércio",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5022",
        "Nome": "Lutécia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5023",
        "Nome": "Macatuba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5024",
        "Nome": "Macaubal",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5025",
        "Nome": "Macedônia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5026",
        "Nome": "Magda",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5027",
        "Nome": "Mairinque",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5028",
        "Nome": "Mairiporã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5029",
        "Nome": "Manduri",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5030",
        "Nome": "Marabá Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5031",
        "Nome": "Maracaí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5032",
        "Nome": "Marapoama",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5033",
        "Nome": "Mariápolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5034",
        "Nome": "Marília",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5035",
        "Nome": "Marinópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5036",
        "Nome": "Martinópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5037",
        "Nome": "Matão",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5038",
        "Nome": "Mauá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5039",
        "Nome": "Mendonça",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5040",
        "Nome": "Merid_cidadeiano",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5041",
        "Nome": "Mesópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5042",
        "Nome": "Miguelópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5043",
        "Nome": "Mineiros do Tietê",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5044",
        "Nome": "Mira Estrela",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5045",
        "Nome": "Miracatu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5046",
        "Nome": "Mirandópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5047",
        "Nome": "Mirante do Paranapanema",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5048",
        "Nome": "Mirassol",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5049",
        "Nome": "Mirassolândia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5050",
        "Nome": "Mococa",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5051",
        "Nome": "Mogi das Cruzes",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5052",
        "Nome": "Mogi Guaçu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5053",
        "Nome": "Moji Mirim",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5054",
        "Nome": "Mombuca",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5055",
        "Nome": "Monções",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5056",
        "Nome": "Mongaguá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5057",
        "Nome": "Monte Alegre do Sul",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5058",
        "Nome": "Monte Alto",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5059",
        "Nome": "Monte Aprazível",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5060",
        "Nome": "Monte Azul Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5061",
        "Nome": "Monte Castelo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5062",
        "Nome": "Monte Mor",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5063",
        "Nome": "Monteiro Lobato",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5064",
        "Nome": "Morro Agudo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5065",
        "Nome": "Morungaba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5066",
        "Nome": "Motuca",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5067",
        "Nome": "Murutinga do Sul",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5068",
        "Nome": "Nantes",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5069",
        "Nome": "Narandiba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5070",
        "Nome": "Nativid_cidadeade da Serra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5071",
        "Nome": "Nazaré Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5072",
        "Nome": "Neves Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5073",
        "Nome": "Nhandeara",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5074",
        "Nome": "Nipoã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5075",
        "Nome": "Nova Aliança",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5076",
        "Nome": "Nova Campina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5077",
        "Nome": "Nova Canaã Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5078",
        "Nome": "Nova Castilho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5079",
        "Nome": "Nova Europa",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5080",
        "Nome": "Nova Granada",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5081",
        "Nome": "Nova Guataporanga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5082",
        "Nome": "Nova Independência",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5083",
        "Nome": "Nova Luzitânia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5084",
        "Nome": "Nova Odessa",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5085",
        "Nome": "Novais",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5086",
        "Nome": "Novo Horizonte",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5087",
        "Nome": "Nuporanga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5088",
        "Nome": "Ocauçu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5089",
        "Nome": "Óleo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5090",
        "Nome": "Olímpia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5091",
        "Nome": "Onda Verde",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5092",
        "Nome": "Oriente",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5093",
        "Nome": "Orindiúva",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5094",
        "Nome": "Orlândia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5095",
        "Nome": "Osasco",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5096",
        "Nome": "Oscar Bressane",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5097",
        "Nome": "Osvaldo Cruz",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5098",
        "Nome": "Ourinhos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5099",
        "Nome": "Ouro Verde",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5100",
        "Nome": "Ouroeste",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5101",
        "Nome": "Pacaembu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5102",
        "Nome": "Palestina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5103",
        "Nome": "Palmares Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5104",
        "Nome": "Palmeira d`Oeste",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5105",
        "Nome": "Palmital",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5106",
        "Nome": "Panorama",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5107",
        "Nome": "Paraguaçu Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5108",
        "Nome": "Paraibuna",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5109",
        "Nome": "Paraíso",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5110",
        "Nome": "Paranapanema",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5111",
        "Nome": "Paranapuã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5112",
        "Nome": "Parapuã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5113",
        "Nome": "Pardinho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5114",
        "Nome": "Pariquera-Açu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5115",
        "Nome": "Parisi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5116",
        "Nome": "Patrocínio Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5117",
        "Nome": "Paulicéia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5118",
        "Nome": "Paulínia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5119",
        "Nome": "Paulistânia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5120",
        "Nome": "Paulo de Faria",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5121",
        "Nome": "Pederneiras",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5122",
        "Nome": "Pedra Bela",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5123",
        "Nome": "Pedranópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5124",
        "Nome": "Pedregulho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5125",
        "Nome": "Pedreira",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5126",
        "Nome": "Pedrinhas Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5127",
        "Nome": "Pedro de Toledo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5128",
        "Nome": "Penápolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5129",
        "Nome": "Pereira Barreto",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5130",
        "Nome": "Pereiras",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5131",
        "Nome": "Peruíbe",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5132",
        "Nome": "Piacatu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5133",
        "Nome": "Piedade",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5134",
        "Nome": "Pilar do Sul",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5135",
        "Nome": "Pindamonhangaba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5136",
        "Nome": "Pindorama",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5137",
        "Nome": "Pinhalzinho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5138",
        "Nome": "Piquerobi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5139",
        "Nome": "Piquete",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5140",
        "Nome": "Piracaia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5141",
        "Nome": "Piracicaba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5142",
        "Nome": "Piraju",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5143",
        "Nome": "Pirajuí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5144",
        "Nome": "Pirangi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5145",
        "Nome": "Pirapora do Bom Jesus",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5146",
        "Nome": "Pirapozinho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5147",
        "Nome": "Pirassununga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5148",
        "Nome": "Piratininga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5149",
        "Nome": "Pitangueiras",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5150",
        "Nome": "Planalto",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5151",
        "Nome": "Platina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5152",
        "Nome": "Poá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5153",
        "Nome": "Poloni",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5154",
        "Nome": "Pompéia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5155",
        "Nome": "Pongaí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5156",
        "Nome": "Pontal",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5157",
        "Nome": "Pontalinda",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5158",
        "Nome": "Pontes Gestal",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5159",
        "Nome": "Populina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5160",
        "Nome": "Porangaba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5161",
        "Nome": "Porto Feliz",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5162",
        "Nome": "Porto Ferreira",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5163",
        "Nome": "Potim",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5164",
        "Nome": "Potirendaba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5165",
        "Nome": "Pracinha",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5166",
        "Nome": "Pradópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5167",
        "Nome": "Praia Grande",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5168",
        "Nome": "Pratânia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5169",
        "Nome": "Presid_cidadeente Alves",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5170",
        "Nome": "Presid_cidadeente Bernardes",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5171",
        "Nome": "Presid_cidadeente Epitácio",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5172",
        "Nome": "Presid_cidadeente Prudente",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5173",
        "Nome": "Presid_cidadeente Venceslau",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5174",
        "Nome": "Promissão",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5175",
        "Nome": "Quadra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5176",
        "Nome": "Quatá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5177",
        "Nome": "Queiroz",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5178",
        "Nome": "Queluz",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5179",
        "Nome": "Quintana",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5180",
        "Nome": "Rafard",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5181",
        "Nome": "Rancharia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5182",
        "Nome": "Redenção da Serra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5183",
        "Nome": "Regente Feijó",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5184",
        "Nome": "Reginópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5185",
        "Nome": "Registro",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5186",
        "Nome": "Restinga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5187",
        "Nome": "Ribeira",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5188",
        "Nome": "Ribeirão Bonito",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5189",
        "Nome": "Ribeirão Branco",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5190",
        "Nome": "Ribeirão Corrente",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5191",
        "Nome": "Ribeirão do Sul",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5192",
        "Nome": "Ribeirão dos Índios",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5193",
        "Nome": "Ribeirão Grande",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5194",
        "Nome": "Ribeirão Pires",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5195",
        "Nome": "Ribeirão Preto",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5196",
        "Nome": "Rifaina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5197",
        "Nome": "Rincão",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5198",
        "Nome": "Rinópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5199",
        "Nome": "Rio Claro",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5200",
        "Nome": "Rio das Pedras",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5201",
        "Nome": "Rio Grande da Serra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5202",
        "Nome": "Riolândia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5203",
        "Nome": "Riversul",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5204",
        "Nome": "Rosana",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5205",
        "Nome": "Roseira",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5206",
        "Nome": "Rubiácea",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5207",
        "Nome": "Rubinéia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5208",
        "Nome": "Sabino",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5209",
        "Nome": "Sagres",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5210",
        "Nome": "Sales",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5211",
        "Nome": "Sales Oliveira",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5212",
        "Nome": "Salesópolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5213",
        "Nome": "Salmourão",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5214",
        "Nome": "Saltinho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5215",
        "Nome": "Salto",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5216",
        "Nome": "Salto de Pirapora",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5217",
        "Nome": "Salto Grande",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5218",
        "Nome": "Sandovalina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5219",
        "Nome": "Santa Adélia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5220",
        "Nome": "Santa Albertina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5221",
        "Nome": "Santa Bárbara d`Oeste",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5222",
        "Nome": "Santa Branca",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5223",
        "Nome": "Santa Clara d`Oeste",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5224",
        "Nome": "Santa Cruz da Conceição",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5225",
        "Nome": "Santa Cruz da Esperança",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5226",
        "Nome": "Santa Cruz das Palmeiras",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5227",
        "Nome": "Santa Cruz do Rio Pardo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5228",
        "Nome": "Santa Ernestina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5229",
        "Nome": "Santa Fé do Sul",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5230",
        "Nome": "Santa Gertrudes",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5231",
        "Nome": "Santa Isabel",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5232",
        "Nome": "Santa Lúcia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5233",
        "Nome": "Santa Maria da Serra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5234",
        "Nome": "Santa Mercedes",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5235",
        "Nome": "Santa Rita d`Oeste",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5236",
        "Nome": "Santa Rita do Passa Quatro",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5237",
        "Nome": "Santa Rosa de Viterbo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5238",
        "Nome": "Santa Salete",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5239",
        "Nome": "Santana da Ponte Pensa",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5240",
        "Nome": "Santana de Parnaíba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5241",
        "Nome": "Santo Anastácio",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5242",
        "Nome": "Santo André",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5243",
        "Nome": "Santo Antônio da Alegria",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5244",
        "Nome": "Santo Antônio de Posse",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5245",
        "Nome": "Santo Antônio do Aracanguá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5246",
        "Nome": "Santo Antônio do Jardim",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5247",
        "Nome": "Santo Antônio do Pinhal",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5248",
        "Nome": "Santo Expedito",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5249",
        "Nome": "Santópolis do Aguapeí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5250",
        "Nome": "Santos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5251",
        "Nome": "São Bento do Sapucaí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5252",
        "Nome": "São Bernardo do Campo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5253",
        "Nome": "São Caetano do Sul",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5254",
        "Nome": "São Carlos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5255",
        "Nome": "São Francisco",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5256",
        "Nome": "São João da Boa Vista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5257",
        "Nome": "São João das Duas Pontes",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5258",
        "Nome": "São João de Iracema",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5259",
        "Nome": "São João do Pau d`Alho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5260",
        "Nome": "São Joaquim da Barra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5261",
        "Nome": "São José da Bela Vista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5262",
        "Nome": "São José do Barreiro",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5263",
        "Nome": "São José do Rio Pardo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5264",
        "Nome": "São José do Rio Preto",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5265",
        "Nome": "São José dos Campos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5266",
        "Nome": "São Lourenço da Serra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5267",
        "Nome": "São Luís do Paraitinga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5268",
        "Nome": "São Manuel",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5269",
        "Nome": "São Miguel Arcanjo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5270",
        "Nome": "São Paulo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5271",
        "Nome": "São Pedro",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5272",
        "Nome": "São Pedro do Turvo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5273",
        "Nome": "São Roque",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5274",
        "Nome": "São Sebastião",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5275",
        "Nome": "São Sebastião da Grama",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5276",
        "Nome": "São Simão",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5277",
        "Nome": "São Vicente",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5278",
        "Nome": "Sarapuí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5279",
        "Nome": "Sarutaiá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5280",
        "Nome": "Sebastianópolis do Sul",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5281",
        "Nome": "Serra Azul",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5282",
        "Nome": "Serra Negra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5283",
        "Nome": "Serrana",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5284",
        "Nome": "Sertãozinho",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5285",
        "Nome": "Sete Barras",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5286",
        "Nome": "Severínia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5287",
        "Nome": "Silveiras",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5288",
        "Nome": "Socorro",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5289",
        "Nome": "Sorocaba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5290",
        "Nome": "Sud Mennucci",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5291",
        "Nome": "Sumaré",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5292",
        "Nome": "Suzanápolis",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5293",
        "Nome": "Suzano",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5294",
        "Nome": "Tabapuã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5295",
        "Nome": "Tabatinga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5296",
        "Nome": "Taboão da Serra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5297",
        "Nome": "Taciba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5298",
        "Nome": "Taguaí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5299",
        "Nome": "Taiaçu",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5300",
        "Nome": "Taiúva",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5301",
        "Nome": "Tambaú",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5302",
        "Nome": "Tanabi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5303",
        "Nome": "Tapiraí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5304",
        "Nome": "Tapiratiba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5305",
        "Nome": "Taquaral",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5306",
        "Nome": "Taquaritinga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5307",
        "Nome": "Taquarituba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5308",
        "Nome": "Taquarivaí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5309",
        "Nome": "Tarabai",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5310",
        "Nome": "Tarumã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5311",
        "Nome": "Tatuí",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5312",
        "Nome": "Taubaté",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5313",
        "Nome": "Tejupá",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5314",
        "Nome": "Teodoro Sampaio",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5315",
        "Nome": "Terra Roxa",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5316",
        "Nome": "Tietê",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5317",
        "Nome": "Timburi",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5318",
        "Nome": "Torre de Pedra",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5319",
        "Nome": "Torrinha",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5320",
        "Nome": "Trabiju",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5321",
        "Nome": "Tremembé",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5322",
        "Nome": "Três Fronteiras",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5323",
        "Nome": "Tuiuti",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5324",
        "Nome": "Tupã",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5325",
        "Nome": "Tupi Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5326",
        "Nome": "Turiúba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5327",
        "Nome": "Turmalina",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5328",
        "Nome": "Ubarana",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5329",
        "Nome": "Ubatuba",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5330",
        "Nome": "Ubirajara",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5331",
        "Nome": "Uchoa",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5332",
        "Nome": "União Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5333",
        "Nome": "Urânia",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5334",
        "Nome": "Uru",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5335",
        "Nome": "Urupês",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5336",
        "Nome": "Valentim Gentil",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5337",
        "Nome": "Valinhos",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5338",
        "Nome": "Valparaíso",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5339",
        "Nome": "Vargem",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5340",
        "Nome": "Vargem Grande do Sul",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5341",
        "Nome": "Vargem Grande Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5342",
        "Nome": "Várzea Paulista",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5343",
        "Nome": "Vera Cruz",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5344",
        "Nome": "Vinhedo",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5345",
        "Nome": "Viradouro",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5346",
        "Nome": "Vista Alegre do Alto",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5347",
        "Nome": "Vitória Brasil",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5348",
        "Nome": "Votorantim",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5349",
        "Nome": "Votuporanga",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5350",
        "Nome": "Zacarias",
        "fk_estado": "26"
      },
      {
        "id_cidade": "5351",
        "Nome": "Amparo de São Francisco",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5352",
        "Nome": "Aquid_cidadeabã",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5353",
        "Nome": "Aracaju",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5354",
        "Nome": "Arauá",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5355",
        "Nome": "Areia Branca",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5356",
        "Nome": "Barra dos Coqueiros",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5357",
        "Nome": "Boquim",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5358",
        "Nome": "Brejo Grande",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5359",
        "Nome": "Campo do Brito",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5360",
        "Nome": "Canhoba",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5361",
        "Nome": "Canindé de São Francisco",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5362",
        "Nome": "Capela",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5363",
        "Nome": "Carira",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5364",
        "Nome": "Carmópolis",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5365",
        "Nome": "Cedro de São João",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5366",
        "Nome": "Cristinápolis",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5367",
        "Nome": "Cumbe",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5368",
        "Nome": "Divina Pastora",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5369",
        "Nome": "Estância",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5370",
        "Nome": "Feira Nova",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5371",
        "Nome": "Frei Paulo",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5372",
        "Nome": "Gararu",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5373",
        "Nome": "General Maynard",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5374",
        "Nome": "Gracho Cardoso",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5375",
        "Nome": "Ilha das Flores",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5376",
        "Nome": "Indiaroba",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5377",
        "Nome": "Itabaiana",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5378",
        "Nome": "Itabaianinha",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5379",
        "Nome": "Itabi",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5380",
        "Nome": "Itaporanga d`Ajuda",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5381",
        "Nome": "Japaratuba",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5382",
        "Nome": "Japoatã",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5383",
        "Nome": "Lagarto",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5384",
        "Nome": "Laranjeiras",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5385",
        "Nome": "Macambira",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5386",
        "Nome": "Malhada dos Bois",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5387",
        "Nome": "Malhador",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5388",
        "Nome": "Maruim",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5389",
        "Nome": "Moita Bonita",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5390",
        "Nome": "Monte Alegre de Sergipe",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5391",
        "Nome": "Muribeca",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5392",
        "Nome": "Neópolis",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5393",
        "Nome": "Nossa Senhora Aparecid_cidadea",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5394",
        "Nome": "Nossa Senhora da Glória",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5395",
        "Nome": "Nossa Senhora das Dores",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5396",
        "Nome": "Nossa Senhora de Lourdes",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5397",
        "Nome": "Nossa Senhora do Socorro",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5398",
        "Nome": "Pacatuba",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5399",
        "Nome": "Pedra Mole",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5400",
        "Nome": "Pedrinhas",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5401",
        "Nome": "Pinhão",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5402",
        "Nome": "Pirambu",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5403",
        "Nome": "Poço Redondo",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5404",
        "Nome": "Poço Verde",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5405",
        "Nome": "Porto da Folha",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5406",
        "Nome": "Propriá",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5407",
        "Nome": "Riachão do Dantas",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5408",
        "Nome": "Riachuelo",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5409",
        "Nome": "Ribeirópolis",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5410",
        "Nome": "Rosário do Catete",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5411",
        "Nome": "Salgado",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5412",
        "Nome": "Santa Luzia do Itanhy",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5413",
        "Nome": "Santa Rosa de Lima",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5414",
        "Nome": "Santana do São Francisco",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5415",
        "Nome": "Santo Amaro das Brotas",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5416",
        "Nome": "São Cristóvão",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5417",
        "Nome": "São Domingos",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5418",
        "Nome": "São Francisco",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5419",
        "Nome": "São Miguel do Aleixo",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5420",
        "Nome": "Simão Dias",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5421",
        "Nome": "Siriri",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5422",
        "Nome": "Telha",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5423",
        "Nome": "Tobias Barreto",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5424",
        "Nome": "Tomar do Geru",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5425",
        "Nome": "Umbaúba",
        "fk_estado": "25"
      },
      {
        "id_cidade": "5426",
        "Nome": "Abreulândia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5427",
        "Nome": "Aguiarnópolis",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5428",
        "Nome": "Aliança do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5429",
        "Nome": "Almas",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5430",
        "Nome": "Alvorada",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5431",
        "Nome": "Ananás",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5432",
        "Nome": "Angico",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5433",
        "Nome": "Aparecid_cidadea do Rio Negro",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5434",
        "Nome": "Aragominas",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5435",
        "Nome": "Araguacema",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5436",
        "Nome": "Araguaçu",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5437",
        "Nome": "Araguaína",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5438",
        "Nome": "Araguanã",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5439",
        "Nome": "Araguatins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5440",
        "Nome": "Arapoema",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5441",
        "Nome": "Arraias",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5442",
        "Nome": "Augustinópolis",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5443",
        "Nome": "Aurora do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5444",
        "Nome": "Axixá do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5445",
        "Nome": "Babaçulândia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5446",
        "Nome": "Bandeirantes do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5447",
        "Nome": "Barra do Ouro",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5448",
        "Nome": "Barrolândia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5449",
        "Nome": "Bernardo Sayão",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5450",
        "Nome": "Bom Jesus do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5451",
        "Nome": "Brasilândia do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5452",
        "Nome": "Brejinho de Nazaré",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5453",
        "Nome": "Buriti do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5454",
        "Nome": "Cachoeirinha",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5455",
        "Nome": "Campos Lindos",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5456",
        "Nome": "Cariri do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5457",
        "Nome": "Carmolândia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5458",
        "Nome": "Carrasco Bonito",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5459",
        "Nome": "Caseara",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5460",
        "Nome": "Centenário",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5461",
        "Nome": "Chapada da Nativid_cidadeade",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5462",
        "Nome": "Chapada de Areia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5463",
        "Nome": "Colinas do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5464",
        "Nome": "Colméia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5465",
        "Nome": "Combinado",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5466",
        "Nome": "Conceição do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5467",
        "Nome": "Couto de Magalhães",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5468",
        "Nome": "Cristalândia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5469",
        "Nome": "Crixás do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5470",
        "Nome": "Darcinópolis",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5471",
        "Nome": "Dianópolis",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5472",
        "Nome": "Divinópolis do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5473",
        "Nome": "Dois Irmãos do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5474",
        "Nome": "Dueré",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5475",
        "Nome": "Esperantina",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5476",
        "Nome": "Fátima",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5477",
        "Nome": "Figueirópolis",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5478",
        "Nome": "Filadélfia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5479",
        "Nome": "Formoso do Araguaia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5480",
        "Nome": "Fortaleza do Tabocão",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5481",
        "Nome": "Goianorte",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5482",
        "Nome": "Goiatins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5483",
        "Nome": "Guaraí",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5484",
        "Nome": "Gurupi",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5485",
        "Nome": "Ipueiras",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5486",
        "Nome": "Itacajá",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5487",
        "Nome": "Itaguatins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5488",
        "Nome": "Itapiratins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5489",
        "Nome": "Itaporã do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5490",
        "Nome": "Jaú do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5491",
        "Nome": "Juarina",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5492",
        "Nome": "Lagoa da Confusão",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5493",
        "Nome": "Lagoa do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5494",
        "Nome": "Lajeado",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5495",
        "Nome": "Lavandeira",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5496",
        "Nome": "Lizarda",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5497",
        "Nome": "Luzinópolis",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5498",
        "Nome": "Marianópolis do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5499",
        "Nome": "Mateiros",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5500",
        "Nome": "Maurilândia do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5501",
        "Nome": "Miracema do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5502",
        "Nome": "Miranorte",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5503",
        "Nome": "Monte do Carmo",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5504",
        "Nome": "Monte Santo do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5505",
        "Nome": "Muricilândia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5506",
        "Nome": "Nativid_cidadeade",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5507",
        "Nome": "Nazaré",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5508",
        "Nome": "Nova Olinda",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5509",
        "Nome": "Nova Rosalândia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5510",
        "Nome": "Novo Acordo",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5511",
        "Nome": "Novo Alegre",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5512",
        "Nome": "Novo Jardim",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5513",
        "Nome": "Oliveira de Fátima",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5514",
        "Nome": "Palmas",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5515",
        "Nome": "Palmeirante",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5516",
        "Nome": "Palmeiras do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5517",
        "Nome": "Palmeirópolis",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5518",
        "Nome": "Paraíso do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5519",
        "Nome": "Paranã",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5520",
        "Nome": "Pau d`Arco",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5521",
        "Nome": "Pedro Afonso",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5522",
        "Nome": "Peixe",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5523",
        "Nome": "Pequizeiro",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5524",
        "Nome": "Pindorama do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5525",
        "Nome": "Piraquê",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5526",
        "Nome": "Pium",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5527",
        "Nome": "Ponte Alta do Bom Jesus",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5528",
        "Nome": "Ponte Alta do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5529",
        "Nome": "Porto Alegre do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5530",
        "Nome": "Porto Nacional",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5531",
        "Nome": "Praia Norte",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5532",
        "Nome": "Presid_cidadeente Kennedy",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5533",
        "Nome": "Pugmil",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5534",
        "Nome": "Recursolândia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5535",
        "Nome": "Riachinho",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5536",
        "Nome": "Rio da Conceição",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5537",
        "Nome": "Rio dos Bois",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5538",
        "Nome": "Rio Sono",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5539",
        "Nome": "Sampaio",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5540",
        "Nome": "Sandolândia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5541",
        "Nome": "Santa Fé do Araguaia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5542",
        "Nome": "Santa Maria do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5543",
        "Nome": "Santa Rita do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5544",
        "Nome": "Santa Rosa do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5545",
        "Nome": "Santa Tereza do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5546",
        "Nome": "Santa Terezinha do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5547",
        "Nome": "São Bento do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5548",
        "Nome": "São Félix do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5549",
        "Nome": "São Miguel do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5550",
        "Nome": "São Salvador do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5551",
        "Nome": "São Sebastião do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5552",
        "Nome": "São Valério da Nativid_cidadeade",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5553",
        "Nome": "Silvanópolis",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5554",
        "Nome": "Sítio Novo do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5555",
        "Nome": "Sucupira",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5556",
        "Nome": "Taguatinga",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5557",
        "Nome": "Taipas do Tocantins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5558",
        "Nome": "Talismã",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5559",
        "Nome": "Tocantínia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5560",
        "Nome": "Tocantinópolis",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5561",
        "Nome": "Tupirama",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5562",
        "Nome": "Tupiratins",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5563",
        "Nome": "Wanderlândia",
        "fk_estado": "27"
      },
      {
        "id_cidade": "5564",
        "Nome": "Xambioá",
        "fk_estado": "27"
      }]
      , {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cidades', null, {});

  }
};
