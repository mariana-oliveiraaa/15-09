import axios from 'axios';
 export default class CategoriasApi {
    async buscarTodosAsCategorias(){
        const response = await axios.get (`https://livrariamariale.herokuapp.com/categorias`);
        return response.data;
    }
    async buscarCategorias(id){
        const response = await axios.get(`https://livrariamariale.herokuapp.com/categorias/${id}`);
        return response.data;
    }
    async adicionarCategorias(categoria){
        const response = await axios.post(`https://livrariamariale.herokuapp.com/categorias`, categoria);
        return response.data;
    }
    async excluirCategorias(id){
        const response = await axios.delet(`https://livrariamariale.herokuapp.com/categorias/${id}`);
        return response.data;
    }
    async atualizarCategorias(id){
        const response = await axios.patch(`https://livrariamariale.herokuapp.com/categorias/${categorias.id}` ,categoria,);
        return response.data;
    }

}