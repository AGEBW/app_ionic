<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Details</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-card>
          <ion-card-header>
            <ion-card-subtitle>
              <div align="center">

                <img class="product-img" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsantiagocaruso.com.ar%2Fwp-content%2Fuploads%2F2017%2F11%2F20900845_10156379092008475_4739202457655480608_o.jpg&f=1&nofb=1">

              </div>
            </ion-card-subtitle>


          </ion-card-header>
          <div align="start" class="labels">
            <ion-label>Nombre: {{ProductName}}</ion-label>

          </div>
          <div align="end" class="labels">

            <ion-label style="padding-left: 40px">
              Precio: {{Price}}
            </ion-label>
          </div>
          <br>
          <div align="start" class="labels">
            <ion-label>Marca:{{Model}} </ion-label>
            <br>
          </div>
          <div align="start"  class="labels">
            <div >
              <ion-label>
                Detalles: {{Detail}}
              </ion-label>
              <br>
            </div >
            <div >
              <ion-label>Color: {{Color}}</ion-label>
              <br>
            </div>
            <div >
              <ion-label>Tipo: {{Type}}</ion-label>
            </div>
            <br>
            <div >
              <ion-label>Disponibilidad: {{Stock}}</ion-label>
            </div>
            <br>
          </div>
          <ion-button color="tertiary" @click="AddCar">Agregar al Carrito</ion-button>
          <ion-button shape="round" fill="outline" size="small" @click="Salir">Return</ion-button>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
  name: 'Details',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data:()=>({
    objetoItem:{},
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
        vue.objetoItem=data;
      });
    },
    Salir:function(){
      this.$router.push("/home");
    },
    AddCar:function(){
      const carrito = localStorage.getItem('carrito');
      const dataF = JSON.stringify(this.objetoItem);
      console.log(carrito)

      if(carrito==null){
        localStorage.setItem('carrito',`[${dataF}]`)
      }else{
        const ct = JSON.parse(carrito);
        const prod = JSON.parse(dataF);
        let add = true;
        ct.forEach((item: any) =>{
          if(item.id == prod.id){
            if(item.cant == undefined || item.cant == null){
              item.cant = 2;
            }else{
              item.cant = item.cant + 1;
            }
            add = false;
          }
        })

        if(add){
            ct.push(prod);
        }
        localStorage.setItem('carrito',JSON.stringify(ct))
      }

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

.product-img{
  max-width: 250px;
  max-height: 250px;
}
.labels{
  padding-left:20px ;
  padding-right: 20px;
}
</style>