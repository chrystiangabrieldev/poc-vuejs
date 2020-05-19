<template name="component-name">
   <div class="navbar navbar-default lg-aa-painel">
       <div class="container-fluid">
           <div class="navbar-header">
               <a class="navbar-brand lg-aa-painel__texto">
                  {{titulo}}
               </a>
           </div>

            <div class="collapse navbar-collapse">
                <form class="navbar-form navbar-right">
                    <div class="input-group lg-aa-control lg-aa-control--com-icone">
                         <span class="input-group-addon lg-aa-control-icone">
                            <i class="glyphicon glyphicon-search"></i>
                         </span>

                         <input class="form-control lg-aa-control lg-aa-control-input"
                                placeholder="Pesquisar no Portal" />
                    </div>
                    <button class="btn lg-aa-btn-icon"><i class="fa fa-cogs"></i></button>
                    <button class="btn lg-aa-btn-icon"><i class="fa fa-puzzle-piece"></i></button>
                    <button class="btn lg-aa-btn-icon"><i class="fa fa-sliders"></i></button>
                    <button class="btn lg-aa-btn-icon"><i class="fa fa-filter"></i></button>
                    <lg-aa-botao-toggle iconePrimario="glyphicon glyphicon-th-large"
                                        iconeSecundario="glyphicon glyphicon-th-list"
                                        textoPrimario="Visualizar em Grade"
                                        textoSecundario="Visualizar em Lista">
                    </lg-aa-botao-toggle>
                </form>
            </div>
       </div>
   </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Painel extends Vue {
    @Prop({ required: true }) titulo: string;
}
</script>

<style lang="scss">
.lg-aa-painel {
    background: white;
    border-bottom: 1px solid #CFCFCF;
    padding: 5px;
}

.lg-aa-painel__texto {
  font-weight: normal;
  font-size: 150%;
}

.lg-aa-control-icone{
    background: transparent;
    border: 0px;
}
.lg-aa-control-input {
    border: 0px;
}

.lg-aa-btn-icon {
    border-radius: 50%;
    margin: 0px 3px;
    background: transparent;
    border: 1px solid #CFCFCF;
}
</style>
