import axios from 'axios';
 export default class LivrosApi {
    async buscarTodosAsLivros (){
        const response =await axios.get (`https://livrariamariale.herokuapp.com/livros`);
        return response.data;
    }
    async buscarLivros(id){
        const response = await axios.get(`https://livrariamariale.herokuapp.com/livros/${id}`);
        return response.data;
    }
    async adicionarLivros(livro){
        const response = await axios.post(`https://livrariamariale.herokuapp.com/livros`, livro);
        return response.data;
    }
    async excluirLivros(id){
        const response = await axios.delet(`https://livrariamariale.herokuapp.com/livros/${id}`);
        return response.data;
    }
    async atualizarLivros(id){
        const response = await axios.patch(`https://livrariamariale.herokuapp.com/livros/${livro.id}` ,livro,);
        return response.data;
    }

}