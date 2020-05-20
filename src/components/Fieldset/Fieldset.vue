<template>
    <div class="container-fluid p-0">
        <fieldset class="lg-aa-fieldset lg-aa-fieldset--primario">
            <legend>
                {{legenda}}
                <div class="pull-right">
                    <span v-if="informacaoTexto">{{informacaoTexto}}</span>
                    <a v-if="informacaoNumero" class="lg-aa-fieldset__info">
                        <i>{{informacaoNumero}}</i>
                    </a>
                </div>
            </legend>
        </fieldset>
        <div class="lg-container-fluid lg-aa-container lg-aa-fieldset__container">
           <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Fieldset extends Vue {
    @Prop({ required: true }) legenda: string;

    @Prop() informacaoTexto: string;

    @Prop() informacaoNumero: Numer;
}
</script>

<style lang="scss">
.lg-aa-fieldset {
    border-bottom: 1px solid #CFCFCF;
    padding-left: 15px;
}
.lg-aa-fieldset__info{
   padding: 5px;
   border-radius: 5px;
   background: #CFE5F8;
   color: #0E538F;
   font-weight: bold;
   margin: 0px 5px;
   text-align: center;
}

.lg-aa-fieldset__container{
    overflow-y: scroll;
    height: 100%;
}
</style>
