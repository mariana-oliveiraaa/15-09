<script>
  import AutoresApi from "@/api/autor.js";
  const autoresApi = new AutoresApi();
  export default {
    data() {
      return {
        autore: {},
        autores: [],
      };
    },
    async created() {
      this.Autore = await autoresApi.buscarTodosOsAutores();
    },
    methods: {
      async salvar() {
        if (this.autor.id) {
          await autoresApi.atualizarAutores(this.autor);
        } else {
          await autoresApi.adicionarAutores(this.autor);
        }
        this.autores = await autores.buscarTodosOsAutores();
        this.autore = {};
      },
      async excluir(autor) {
        await autoresApi.excluirAutores(autor.id);
        this.autores = await autoresApi.buscarTodosOsAutores();
      },
      editar(autor) {
        Object.assign(this.autor, autor);
      },
    },
  };
  </script>
<template>
  <div class="container">
    <div class="title">
      <h2>Autor</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        placeholder="Nome"
        v-model="novo_Autor"
        @keypress.enter="salvar"
      />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-items">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="Autor in Autor" :key="Autor.id">
            <td>{{ Autor.id }}</td>
            <td>{{ Autor.name }}</td>
            <td>
              <button @click="excluir(Autor)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style></style>
