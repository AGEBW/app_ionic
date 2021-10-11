<template>
  <ion-page>


    <ion-content :fullscreen="true">


      <div id="container">
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>
            </ion-card-subtitle>
            <ion-card-title>
              <div class="ion-justify-content-between row">
              <ion-label style="font-size: 20px" align="start">{{!disabled ? "Editar" : ""}} Producto</ion-label>
               <ion-button @click="editable" shape="round" fill="outline" size="small" align="end">{{disabled ? "Editar" : "Cancelar"}}</ion-button>
              </div>
            </ion-card-title>

          </ion-card-header>

          <ion-card-content>
            <ion-item>
              <ion-label position="floating">ProductName</ion-label>
              <ion-input :value="ProductName" @change="change('ProductName',$event.target.value)" :disabled="disabled"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating" >Detail</ion-label>
              <ion-input :value="Detail" @change="change('Detail',$event.target.value)" :disabled="disabled"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Code</ion-label>
              <ion-input :value="Code" @change="change('Code',$event.target.value)" :disabled="disabled"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Price</ion-label>
              <ion-input :value="Price" @change="change('Price',$event.target.value)" :disabled="disabled"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Type</ion-label>
              <ion-input :value="Type" @change="change('Type',$event.target.value)" :disabled="disabled"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Model</ion-label>
              <ion-input :value="Model" @change="change('Model',$event.target.value)" :disabled="disabled"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Color</ion-label>
              <ion-input :value="Color" @change="change('Color',$event.target.value)" :disabled="disabled"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Stock</ion-label>
              <ion-input :value="Stock" @change="change('Stock',$event.target.value)" :disabled="disabled"></ion-input>
            </ion-item>
            <br>
            <ion-button expand="block" color="light"  @click="Añadir" v-if="!disabled">Añadir</ion-button>
            <ion-button expand="block" color="light"  @click="Salir" v-else>Aceptar</ion-button>

          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'ProductAdd',
  components: {
    IonContent,

    IonPage,
  },
  data:()=>({
    disabled:true,
    ProductName:"",
    Detail:"",
    Code:"",
    Price:"",
    Type:"",
    Model:"",
    Color:"",
    Stock:"",
    Id:""
  }),
  created(){
    this.Obtener();
  },
  methods:{
    editable:function(){
      this.disabled = !this.disabled;
    },
    Obtener:function(){
      const vue = this.$data;


      axios.get("https://api24723.herokuapp.com/api/product/edit/"+localStorage.getItem('ProductId')).then(response=>{
        const {data} = response.data;
        vue.ProductName = data["ProductName"];
        vue.Detail = data["Detail"];
        vue.Code = data["Code"];
        vue.Price = data["Price"];
        vue.Type = data["Type"];
        vue.Model = data["Model"];
        vue.Color = data["Color"];
        vue.Stock = data["Stock"];
        vue.Id = data["id"];
      });
    },
    change:function(name: any,val: any){
      const vue = this.$data;
      switch (name) {
        case "ProductName": vue.ProductName = val;
          break;
        case "Detail": vue.Detail = val;
          break;
        case "Code": vue.Code = val;
          break;
        case "Price": vue.Price = val;
          break;
        case "Type": vue.Type = val;
          break;
        case "Model": vue.Model = val;
          break;
        case "Color": vue.Color = val;
          break;
        case "Stock": vue.Stock = val;
          break;
      }
    },
    Añadir:function(){
      const vue = this.$data;
      axios.post("https://api24723.herokuapp.com/api/product/update/"+vue.Id,{
        ProductName:vue.ProductName,
        Detail:vue.Detail,
        Code:vue.Code,
        Price:vue.Price,
        Type:vue.Type,
        Model:vue.Model,
        Color:vue.Color,
        Stock:vue.Stock
      }).then(response=>{
        console.log(response);

      });
    },
    Salir:function(){
      this.$router.push("/productlist");
    },

  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}


</style>