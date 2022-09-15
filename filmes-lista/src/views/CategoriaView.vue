<script>
  import CategoriasApi from "@/api/categoria.js";
  const categoriasApi = new CategoriasApi();
  export default {
    data() {
      return {
        categoria: {},
        categorias: [],
      };
    },
    async created() {
      this.Categoria = await categoriasApi.buscarTodosOsCategorias();
    },
    methods: {
      async salvar() {
        if (this.categoria.id) {
          await categoriasApi.atualizarCategorias(this.categoria);
        } else {
          await categoriasApi.adicionarCategorias(this.categoria);
        }
        this.categorias = await categoriasApi.buscarTodosOsCategorias();
        this.categoria = {};
      },
      async excluir(categoria) {
        await categoriasApi.excluirCategoria(categoria.id);
        this.categorias = await categoriasApi.buscarTodosOsCategorias();
      },
      editar(categoria) {
        Object.assign(this.categoria, categoria);
      },
    },
  };
  </script>
  <template>
    <div class="container">
      <div class="title">
        <input type="text" v-model="categoria.nome" @keyup.enter="salvar" />
        <button @click="salvar">Adicionar</button>
      </div>
      <div class="list-items">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="categoria in categorias" :key="categoria.id">
              <td>{{ categoria.id }}</td>
              <td>{{ categoria.nome }}</td>
              <td>
                <button @click="editar(categoria)">Editar</button>
                <button @click="excluir(categoria)">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <style></style>