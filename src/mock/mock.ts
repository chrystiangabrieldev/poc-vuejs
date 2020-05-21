import axios from 'axios';

export default class AtividadesMock {
  static obtenhaAtividades() {
    return new Promise((sucesso, erro) => {
      console.log(axios);
      axios.get('https://localhost:44305/Atividades')
        .then((data) => {
          sucesso(data.data);
        });
    });
  }
}
