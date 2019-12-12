module.exports = { 

    async getStocks(req,res){

        var o = {};
        var key = "UA";
        o[key] = [];

        var stock = {
            idUA:1,
            dsUA:"Consultoria",
            UAStatus:0,
            epc:"450132674000",
            ativos:[
                {
                    idAtivo:1,
                    ativoStatus:0,
                    dsAtivo:"Monitor",
                    epc:"440132674000",
                },
                {
                    idAtivo:2,
                    dsAtivo:"Mesa",
                    AtivoStatus:0,
                    epc:"440132674001",
                },
                {
                    idAtivo:3,
                    dsAtivo:"Cadeira",
                    AtivoStatus:0,
                    epc:"440132674002",
                },
            ]
        };
        o[key].push(stock);

        stock = {
            idUA:2,
            dsUA:"Diretoria",
            UAStatus:1,
            epc:"450132674001",
            ativos:[
                {
                    idAtivo:4,
                    dsAtivo:"Controle",
                    AtivoStatus:0,
                    epc:"440132674003",
                },
                {
                    idAtivo:5,
                    dsAtivo:"Ar Condicionado",
                    AtivoStatus:0,
                    epc:"440132674004",
                },
                {
                    idAtivo:6,
                    dsAtivo:"Computador",
                    AtivoStatus:0,
                    epc:"440132674005",
                },
            ]
        };
        o[key].push(stock);

        stock = {
            idUA:3,
            dsUA:"Suporte",
            UAStatus:2,
            epc:"450132674002",
            ativos:[
                {
                    idAtivo:7,
                    dsAtivo:"Gabinete",
                    AtivoStatus:0,
                    epc:"440132674006",
                },
                {
                    idAtivo:8,
                    dsAtivo:"Alien",
                    AtivoStatus:0,
                    epc:"440132674007",
                },
                {
                    idAtivo:9,
                    dsAtivo:"Carregador MAC",
                    AtivoStatus:0,
                    epc:"440132674008",
                },
            ]
        };
        o[key].push(stock);

        stock = {
            idUA:4,
            dsUA:"Treinamento",
            UAStatus:3,
            epc:"450132674003",
            ativos:[
                {
                    idAtivo:10,
                    dsAtivo:"Teclado",
                    AtivoStatus:0,
                    epc:"440132674009",
                },
                {
                    idAtivo:11,
                    dsAtivo:"Mouse",
                    AtivoStatus:0,
                    epc:"440132674010",
                },
                {
                    idAtivo:12,
                    dsAtivo:"CPU",
                    AtivoStatus:0,
                    epc:"440132674011",
                },
            ]
        };
        o[key].push(stock);



        res.json(o);

    }
}