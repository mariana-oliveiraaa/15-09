<script>
  import EditorasApi from "@/api/editoras.js";
  const editorasApi = new EditorasApi();
  export default {
    data() {
      return {
        editora: {},
        editoras: [],
      };
    },
    async created() {
      this.editora = await editorasApi.buscarTodosOsEditoras();
    },
    methods: {
      async salvar() {
        if (this.editora.id) {
          await editorasApi.atualizarEditoras(this.editora);
        } else {
          await editorasApi.adicionarEditoras(this.editora);
        }
        this.editoras = await editorasApi.buscarTodosOsEditoras();
        this.editora = {};
      },
      async excluir(editora) {
        await editorasApi.excluirEditoras(editora.id);
        this.editoras = await editorasApi.buscarTodosOsEditoras();
      },
      editar(editora) {
        Object.assign(this.editora, editora);
      },
    },
  };
  </script>

<template>
  <div class="container">
    <div class="title">
      <h2>Editora</h2>
    </div>
    <div class="form-input">
      <input
        type="text"
        placeholder="Nome"
        v-model="novo_editora"
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
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="editora in editoras" :key="editora.id">
            <td>{{ editora.id }}</td>
            <td>{{ editora.name }}</td>
            <td>
              <button @click="excluir(editora)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style></style>
