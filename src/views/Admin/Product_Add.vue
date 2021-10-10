<template>
  <ion-page>


    <ion-content :fullscreen="true">


      <div id="container">
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>
            </ion-card-subtitle>
            <ion-card-title>Añadir Producto</ion-card-title>

          </ion-card-header>

          <ion-card-content>
            <ion-item>
              <ion-label position="floating">ProductName</ion-label>
              <ion-input :value="ProductName" @change="change('ProductName',$event.target.value)"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating" >Detail</ion-label>
              <ion-input :value="Detail" @change="change('Detail',$event.target.value)"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Code</ion-label>
              <ion-input :value="Code" @change="change('Code',$event.target.value)"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Price</ion-label>
              <ion-input :value="Price" @change="change('Price',$event.target.value)"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Type</ion-label>
              <ion-input :value="Type" @change="change('Type',$event.target.value)"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Model</ion-label>
              <ion-input :value="Model" @change="change('Model',$event.target.value)"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Color</ion-label>
              <ion-input :value="Color" @change="change('Color',$event.target.value)"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Stock</ion-label>
              <ion-input :value="Stock" @change="change('Stock',$event.target.value)"></ion-input>
            </ion-item>
            <br>
            <ion-button expand="block" color="light"  @click="Añadir" >Añadir</ion-button>
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
    ProductName:"",
    Detail:"",
    Code:"",
    Price:"",
    Type:"",
    Model:"",
    Color:"",
    Stock:""
  }),
  methods:{
    change:function(name: any,val: any){
      switch (name) {
        case "ProductName": this.ProductName = val;
          break;
        case "Detail": this.Detail = val;
          break;
        case "Code": this.Code = val;
          break;
        case "Price": this.Price = val;
          break;
        case "Type": this.Type = val;
          break;
        case "Model": this.Model = val;
          break;
        case "Color": this.Color = val;
          break;
        case "Stock": this.Stock = val;
          break;
      }
    },
    Añadir:function(){
      // console.log();
      axios.post("http://localhost/api/product/add",{
        ProductName:this.ProductName,
        Detail:this.Detail,
        Code:this.Code,
        Price:this.Price,
        Type:this.Type,
        Model:this.Model,
        Color:this.Color,
        Stock:this.Stock
      }).then(response=>{
        console.log(response);

      });
    }
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