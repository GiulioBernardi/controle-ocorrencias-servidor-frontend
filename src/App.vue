<template>
  <nav class="navbar">
    <header class="navbar-header">
      <div id="navbar-header-logo">
        <div id="navbar-header-logo-img">
          <img id="navbar-header-logo-img" src="../public/logo-exemplo.png" alt="" srcset="">
        </div>
      </div>
      <div class="navbar-header-infos">
        <h2 id="navbar-header-infos-nome-comunidade">NOME DA COMUNIDADE</h2>
        <p id="navbar-header-infos-data">21 de maio de 2024 - 15h 40m</p>
      </div>
      <div>
        <hr class="divisor">
      </div>

      <router-link to="/banimentos"><button>Banimentos</button></router-link>

    </header>
  </nav>
  <router-view/>
</template>

<script>

</script>

<style scoped>
.navbar{
  background-color: #2F3136;
  width: 245px;
  height: 100%;
  position: fixed;
}

.navbar-header{
  height: 34%;
}

#navbar-header-logo{
  position: relative;
  height: 190px;
}

#navbar-header-logo-img{
  background-color: #202225;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  margin: 3px auto;
}

#navbar-header-infos-nome-comunidade{
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: white;
  margin-top: 8px;
}

#navbar-header-infos-data{
  text-align: center;
  font-size: 11px;
  color: white;

  margin-top: 10px;
}
</style>
<!--<template>-->
<!--  <nav class="navbar">-->
<!--    <header class="navbar-header">-->
<!--      <div id="navbar-header-logo">-->
<!--        <div id="navbar-header-logo-img">-->
<!--          <img id="navbar-header-logo-img" src="../public/logo-exemplo.png" alt="" srcset="">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="navbar-header-infos">-->
<!--        <h2 id="navbar-header-infos-nome-comunidade">NOME DA COMUNIDADE</h2>-->
<!--        <p id="navbar-header-infos-data">21 de maio de 2024 - 15h 40m</p>-->
<!--      </div>-->
<!--      <div>-->
<!--        <hr class="divisor">-->
<!--      </div>-->
<!--    </header>-->
<!--  </nav>-->

<!--  <main class="tela-principal">-->
<!--    <div class="titulo-da-pagina">-->
<!--      <h1>Histórico de Banimentos</h1>-->
<!--      <hr class="divisor divisor-titulo-da-pagina">-->

<!--      <section class="filtros-linha-1">-->
<!--        <div class="filtro" id="filtro-steam-id">-->
<!--          <label for="label-steam-id" class="filtro-label">STEAMID64</label>-->
<!--          <input id="input-steam-id" class="filtro-input input-steam-id">-->
<!--        </div>-->
<!--        <div class="filtro" id="filtro-steam-nick">-->
<!--          <label for="label-nickname" class="filtro-label">Nickname</label>-->
<!--          <input id="input-nickname" class="filtro-input input-nickname">-->
<!--        </div>-->
<!--        <div class="filtro" id="filtro-steam-data">-->
<!--          <label for="label-data-ocorrencia" class="filtro-label">Data da ocorrência</label>-->
<!--          <input id="input-data-ocorrencia" class="filtro-input input-data-ocorrencia">-->
<!--        </div>-->
<!--        <div class="filtro" id="filtro-steam-infracao">-->
<!--          <label for="label-tipo-infracao" class="filtro-label">Tipo de infração</label>-->
<!--          <input id="input-tipo-infracao" class="filtro-input input-tipo-infracao">-->
<!--        </div>-->
<!--        <div class="filtro" id="filtro-steam-moderador">-->
<!--          <label for="label-moderador" class="filtro-label">Moderador</label>-->
<!--          <input id="input-moderador" class="filtro-input label-moderador">-->
<!--        </div>-->
<!--      </section>-->
<!--      <div class="acoes">-->
<!--        <router-link to="/adicionar-banimento"><button id="botao-adicionar">Adicionar Banimento</button></router-link>-->

<!--        <button id="botao-buscar">Buscar</button>-->
<!--      </div>-->

<!--      <section class="resultado-grid">-->
<!--        <table class="tabela">-->
<!--          <thead>-->
<!--            <th class="thead thead-nome">Nome</th>-->
<!--            <th class="thead thead-infracao">Infração</th>-->
<!--            <th class="thead thead-banimento">Banimento</th>-->
<!--            <th class="thead thead-inicio">Início</th>-->
<!--            <th class="thead thead-final">Final</th>-->
<!--            <th class="thead thead-moderador">Moderador</th>-->
<!--            <th class="thead thead-descricao">Descrição</th>-->
<!--            <th class="thead thead-acoes">Ações</th>-->

<!--          </thead>-->
<!--          <tr v-for="banimento in banimentos">-->
<!--            <td hidden>{{banimento.banimentoId}}</td>-->
<!--            <td id="td-nome">{{banimento.nome}}</td>-->
<!--            <td id="td-infracao">{{banimento.infracao}}</td>-->
<!--            <td id="td-banimento">{{banimento.banimento}}</td>-->
<!--            <td id="td-inicio">{{banimento.inicio}}</td>-->
<!--            <td id="td-fim">{{banimento.fim}}</td>-->
<!--            <td id="td-moderador">{{banimento.moderador}}</td>-->
<!--            <td id="td-descricao">{{banimento.descricao}}</td>-->
<!--            <td id="td-acao1">aaa</td>-->
<!--          </tr>-->
<!--        </table>-->
<!--      </section>-->
<!--    </div>-->
<!--  </main>-->

<!--  <router-view/>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      colunas: [-->
<!--        {nome: "Nome"},-->
<!--        {nome: "Infração"},-->
<!--        {nome: "Banimento"},-->
<!--        {nome: "Início"},-->
<!--        {nome: "Final"},-->
<!--        {nome: "Moderador"},-->
<!--        {nome: "Descrição"},-->
<!--        {nome: "Ações"}-->
<!--      ],-->
<!--      banimentos: [-->
<!--        {-->
<!--          banimentoId: 1,-->
<!--          nome: "Markus1980",-->
<!--          infracao: "Trapaça",-->
<!--          banimento: "Permanente",-->
<!--          inicio: "27/05/2024",-->
<!--          fim: "-",-->
<!--          moderador: "Android",-->
<!--          descricao: "O mesmo foi banido por ser muito malandro"-->
<!--        },-->
<!--        {-->
<!--          banimentoId: 1,-->
<!--          nome: "Bernardi",-->
<!--          infracao: "Ofensa",-->
<!--          banimento: "Temporário",-->
<!--          inicio: "26/05/2024",-->
<!--          fim: "26/06/2024",-->
<!--          moderador: "Android",-->
<!--          descricao: "O mesmo foi banido por ser muito daora"-->
<!--        },-->
<!--        {-->
<!--          banimentoId: 1,-->
<!--          nome: "Android",-->
<!--          infracao: "Trapaça",-->
<!--          banimento: "Temporário",-->
<!--          inicio: "27/05/2024",-->
<!--          fim: "27/06/2024",-->
<!--          moderador: "Ele mesmo",-->
<!--          descricao: "O mesmo foi banido por recursividade"-->
<!--        }-->
<!--      ]-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--.navbar{-->
<!--  background-color: #2F3136;-->
<!--  width: 245px;-->
<!--  height: 100%;-->
<!--  position: fixed;-->
<!--}-->

<!--.navbar-header{-->
<!--  height: 34%;-->
<!--}-->

<!--#navbar-header-logo{-->
<!--  position: relative;-->
<!--  height: 190px;-->
<!--}-->

<!--#navbar-header-logo-img{-->
<!--  background-color: #202225;-->
<!--  height: 180px;-->
<!--  width: 180px;-->
<!--  border-radius: 50%;-->
<!--  margin: 3px auto;-->
<!--}-->

<!--#navbar-header-infos-nome-comunidade{-->
<!--  font-size: 15px;-->
<!--  text-align: center;-->
<!--  font-weight: bold;-->
<!--  color: white;-->
<!--  margin-top: 8px;-->
<!--}-->

<!--#navbar-header-infos-data{-->
<!--  text-align: center;-->
<!--  font-size: 11px;-->
<!--  color: white;-->

<!--  margin-top: 10px;-->
<!--}-->

<!--.divisor{-->
<!--  border: 1px solid #3F4349;-->
<!--  width: 95%;-->
<!--}-->

<!--.divisor-titulo-da-pagina{-->
<!--  width: 80%;-->
<!--  position: absolute;-->
<!--}-->

<!--.tela-principal{-->
<!--  background-color: #35393E;-->
<!--  height: 100vh;-->
<!--  margin-left: 245px;-->
<!--}-->



<!--.titulo-da-pagina{-->
<!--  position: fixed;-->
<!--  margin: 30px 0 0 40px;-->
<!--  color: white;-->
<!--  font-size: 35px;-->
<!--  width: 100%;-->
<!--}-->

<!--.filtros-linha-1{-->
<!--  margin-top: 40px;-->
<!--  display: flex;-->
<!--  width: 80%;-->
<!--}-->

<!--.filtro-label{-->
<!--  font-size: 20px;-->
<!--  display: inline-block;-->
<!--  position: relative;-->
<!--}-->

<!--.filtro{-->
<!--  margin-right: 8%;-->
<!--}-->

<!--.filtro-input{-->
<!--  width: 200px;-->
<!--  display: flex;-->
<!--}-->

<!--.input-steam-id{-->
<!--  width: 200px;-->
<!--  display: flex;-->
<!--}-->

<!--.acoes{-->
<!--  margin-top: 25px;-->
<!--  margin-left: 65%;-->
<!--}-->

<!--#botao-adicionar{-->
<!--  margin-right: 35px;-->
<!--}-->

<!--.tabela{-->
<!--  margin-top: 20px;-->
<!--  width: 84%;-->
<!--  border-bottom: 1px solid #3F4349;-->
<!--}-->

<!--.thead{-->
<!--  font-size: 22px;-->
<!--  border-bottom: 1px solid #3F4349;-->
<!--  text-align: left;-->
<!--}-->

<!--.thead-nome{-->
<!--  width: 12%;-->
<!--}-->

<!--.thead-infracao, .thead-acoes{-->
<!--  width: 8%;-->
<!--}-->

<!--td{-->
<!--  height: 34px;-->
<!--  font-size: 16px;-->
<!--  border-bottom: 1px solid;-->
<!--  align-content: center;-->

<!--}-->

<!--#td-nome{-->
<!--  //width: 18%;-->
<!--  text-align: left;-->
<!--}-->

<!--#td-infracao{-->
<!--  text-align: left;-->
<!--}-->

<!--#td-banimento{-->
<!--  text-align: left;-->
<!--}-->

<!--#td-inicio, #td-fim{-->
<!--  //width: 10%;-->
<!--  text-align: left;-->
<!--}-->

<!--#td-moderador{-->
<!--  text-align: left;-->
<!--}-->

<!--#td-acao1, #td-acao2{-->
<!--  width: 1%;-->
<!--}-->
<!--</style>-->
