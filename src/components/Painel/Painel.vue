<template>
   <div class="navbar navbar-default lg-aa-painel m-0">
       <div class="container-fluid">
           <div class="navbar-header">
               <a class="navbar-brand lg-aa-painel__texto">
                  {{titulo}}
               </a>
           </div>

            <div class="collapse navbar-collapse">
                <form class="navbar-form navbar-right">
                    <slot></slot>
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
</style>
