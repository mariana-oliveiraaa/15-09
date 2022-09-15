<script>
  import LivrosApi from "@/api/livros.js";
  const livrosApi = new LivrosApi();
  export default {
    data() {
      return {
        livro: {},
        autor:{},
        editoraid:{},
        categoria:{},
        livros: [],
      };
    },
    async created() {
      this.livro = await livrosApi.buscarTodosOslivros();
    },
    methods: {
      async salvar() {
        if (this.livro.id) {
          await livrosApi.atualizarLivros(this.livro);
        } else {
          await livrosApi.adicionarLivros(this.livro);
        }
        this.livros = await livrosApi.buscarTodosOsLivros();
        this.livro = {};
      },
      async excluir(livro) {
        await livrosApi.excluirLivro(livro.id);
        this.livros = await livrosApi.buscarTodosOsLivros();
      },
      editar(livro) {
        Object.assign(this.livro, livro);
      },
    },
  };
  </script>
<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Livros</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        placeholder="Nome"
        v-model="novo_livro"
        @keypress.enter="salvar"
      />
      <input
        type="text"
        placeholder="Autor"
        v-model="novo_autor"
        @keypress.enter="salvar"
      />
      <input
        type="text"
        placeholder="Editora"
        v-model="novo_Editora"
        @keypress.enter="salvar"
      />
      <input
        type="text"
        placeholder="livro"
        v-model="novo_livro"
        @keypress.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>livro</th>
            <th>Nome</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.autor }}</td>
            <td>{{ livro.editoraid }}</td>
            <td>{{ livro.livro }}</td>
            <td>{{ livro.name }}</td>
            <td>
              <button @click="excluir(livro)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
