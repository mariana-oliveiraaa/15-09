import axios from 'axios';
 export default class EditorasApi {
    async buscarTodosAsEditoras (){
        const response =await axios.get (`https://livrariamariale.herokuapp.com/editoras`);
        return response.data;
    }
    async buscarEditoras(id){
        const response = await axios.get(`https://livrariamariale.herokuapp.com/editoras/${id}`);
        return response.data;
    }
    async adicionarEditoras(editora){
        const response = await axios.post(`https://livrariamariale.herokuapp.com/editoras`, editora);
        return response.data;
    }
    async excluirEditoras(id){
        const response = await axios.delet(`https://livrariamariale.herokuapp.com/editoras/${id}`);
        return response.data;
    }
    async atualizarEditoras(id){
        const response = await axios.patch(`https://livrariamariale.herokuapp.com/editoras/${editora.id}` ,editora,);
        return response.data;
    }

}



