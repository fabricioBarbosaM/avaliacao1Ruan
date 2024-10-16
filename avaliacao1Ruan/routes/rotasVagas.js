import express from "express";
import { cadastrarVaga, tituloVaga, detalharVaga, atualizarVaga, apagarVaga, vagaPorCargo, vagaPorLocal} from "../controller/vagas.js";
const router = express.Router()


router.post('/vagas', cadastrarVaga )//funcionando
router.get('/vagas', tituloVaga)//funcionando
router.get('/vagas/:id', detalharVaga)//funcionando
router.put('/vagas/:id', atualizarVaga )//funcionando
router.delete('/vagas/:id', apagarVaga)//funcionando
router.get('/cargo/:cargo', vagaPorCargo)//funcionando
router.get('/localizacao/:cidade', vagaPorLocal)//funcionando

export default router