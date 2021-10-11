<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Products</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Product List</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-list>
          <ion-item-sliding>

            <ion-item v-for="item in coleccion" :key="item.id">
              <ion-avatar>
                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsantiagocaruso.com.ar%2Fwp-content%2Fuploads%2F2017%2F11%2F20900845_10156379092008475_4739202457655480608_o.jpg&f=1&nofb=1">
              </ion-avatar>
              <ion-label >{{item.ProductName}}</ion-label>
              <ion-label >{{item.Price}}</ion-label>
              <ion-button shape="round" fill="outline" size="small" @click="Editar(item.id)">v
              </ion-button>
              <ion-button shape="round" fill="outline" size="small" @click="Eliminar(item.id)">x
              </ion-button>
            </ion-item>

          </ion-item-sliding>


        </ion-list>
        <ion-button shape="round" fill="outline" size="small" @click="Añadir">Add</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,alertController,
  IonItemSliding,IonItem,
  IonList } from '@ionic/vue';
import {defineComponent} from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'ProductList',
  components: {
    IonItem,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItemSliding,
    IonList,

  },
  data:()=>({
    coleccion:[]
  }),
  methods:{
    Obtener:function(){
      const vue = this.$data;

      axios.get("https://api24723.herokuapp.com/api/product",{

      }).then(response=>{
        const {data} = response.data;
        // console.log(data);
        vue.coleccion=data;
      });
    },
    Añadir:function(){
      this.$router.push('/productadd');
    },
    Editar:function(id: any){
      localStorage.setItem('ProductId',id);
      this.$router.push('/productedit');
    },
    Eliminar:async function(id: any){
      const id_= id;
      const alert = await alertController
          .create({
            cssClass: 'my-custom-class',
            header: 'Alert',
            message: 'Delete item?',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                  console.log('Confirm Cancel')
                },
              },
              {
                text: 'Delete',
                handler: (id_) => {
                  axios.post("https://api24723.herokuapp.com/api/product/delete/"+id).then(response=>{
                    console.log(response);
                   this.Obtener();
                  });
                },
              },
            ],
          });

      return alert.present();
    }
  },
  created(){
    this.Obtener();
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